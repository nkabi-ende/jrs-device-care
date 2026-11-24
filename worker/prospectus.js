import pdf from "./prospectus.pdf";

const enquiries = "enquiries@jrsdevicecare.co.za";
const restUrl = "https://ysvpgilqqaedtcbybiik.supabase.co/rest/v1/academy_prospectus_requests?on_conflict=id";
const table = "academy_prospectus_requests";
const now = "unixepoch()";
const createTable = `CREATE TABLE IF NOT EXISTS ${table} (
  id TEXT PRIMARY KEY, full_name TEXT NOT NULL, email TEXT NOT NULL, phone TEXT NOT NULL,
  requested_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP,
  notify_after INTEGER DEFAULT 0, sync_after INTEGER DEFAULT 0
)`;

function leadFrom(body) {
  const field = key => typeof body?.[key] === "string" ? body[key].trim() : "";
  const id = field("id"), full_name = field("name"), email = field("email"), phone = field("phone");
  if (!/^[0-9a-f]{8}(?:-[0-9a-f]{4}){3}-[0-9a-f]{12}$/i.test(id) ||
      full_name.length < 2 || full_name.length > 150 || /[\r\n]/.test(full_name) ||
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || email.length > 254 ||
      !/^\+?[\d ()-]{7,32}$/.test(phone) || !/^\d{7,15}$/.test(phone.replace(/\D/g, ""))) return null;
  return { id, full_name, email, phone };
}

async function notify(env, lead) {
  if (env.JRS_ZOHO_FLOW_URL) {
    const result = await fetch(env.JRS_ZOHO_FLOW_URL, {
      method: "POST", headers: { "Content-Type": "application/json" }, redirect: "error",
      body: JSON.stringify({ event: "academy.prospectus_requested", recipient: enquiries, ...lead }),
      signal: AbortSignal.timeout(8000),
    });
    if (!result.ok) throw new Error("Zoho Flow did not accept the notification");
    return;
  }
  await env.ACADEMY_EMAIL.send({
    from: { email: "academy@jrsdevicecare.co.za", name: "JRs Device Care Academy" }, to: enquiries,
    subject: "Academy prospectus request",
    text: ["A learner requested the 16-page Academy prospectus.", "", lead.full_name, lead.email, lead.phone,
      "", "Request ID: " + lead.id].join("\n"),
  });
}

async function syncToSupabase(env, lead) {
  const key = env.JRS_SUPABASE_SERVICE_KEY;
  const response = await fetch(restUrl, {
    method: "POST", headers: { apikey: key, Authorization: "Bearer " + key,
      "Content-Type": "application/json", Prefer: "resolution=ignore-duplicates,return=minimal" },
    body: JSON.stringify(lead), signal: AbortSignal.timeout(8000),
  });
  if (!response.ok) throw new Error("JRs Supabase did not accept the request");
}

// Claim each persisted job before delivery so that cron, duplicate submissions and retries can overlap.
async function deliver(env, channel, id) {
  const db = env.ACADEMY_LEADS;
  const column = channel === "email" ? "notify_after" : "sync_after";
  if (channel === "supabase" && !env.JRS_SUPABASE_SERVICE_KEY) return;
  if (channel === "email" && !env.JRS_ZOHO_FLOW_URL && !env.ACADEMY_EMAIL) return;
  const lease = Math.floor(Date.now() / 1000) + 900;
  const lead = await db.prepare(`UPDATE ${table} SET ${column} = ? WHERE id = ? AND ${column} <= ${now}
    RETURNING id, full_name, email, phone, requested_at`).bind(lease, id).first();
  if (!lead) return;
  try {
    if (channel === "email") await notify(env, lead);
    else await syncToSupabase(env, lead);
    await db.prepare(`UPDATE ${table} SET ${column} = NULL WHERE id = ? AND ${column} = ?`).bind(id, lease).run();
  } catch {
    // Keep the row pending after the lease expires. Never log a learner's contact details.
    console.warn("Academy prospectus delivery pending", channel);
  }
}

export async function retryProspectusDeliveries(env) {
  const db = env.ACADEMY_LEADS;
  await db.prepare(createTable).run();
  for (const [channel, column, enabled] of [
    ["email", "notify_after", env.JRS_ZOHO_FLOW_URL || env.ACADEMY_EMAIL],
    ["supabase", "sync_after", env.JRS_SUPABASE_SERVICE_KEY],
  ]) {
    if (!enabled) continue;
    const { results } = await db.prepare(`SELECT id FROM ${table} WHERE ${column} <= ${now} ORDER BY ${column},requested_at LIMIT 10`).all();
    for (const { id } of results) await deliver(env, channel, id);
  }
}

export async function downloadProspectus(request, env, ctx) {
  const fail = (message, status) => new Response(message, { status, headers: { "Cache-Control": "no-store" } });
  if (request.method !== "POST") return fail("Submit the Academy form to download.", 405);
  if (request.headers.get("Origin") !== new URL(request.url).origin) return fail("Invalid origin.", 403);
  if (request.headers.get("Content-Type")?.split(";")[0] !== "application/json") return fail("Expected JSON.", 415);
  if (Number(request.headers.get("Content-Length")) > 4096) return fail("Request too large.", 413);
  const lead = leadFrom(await request.json().catch(() => null));
  if (!lead) return fail("Please check your name, email and phone number.", 400);
  const db = env.ACADEMY_LEADS;
  try {
    const [, , stored] = await db.batch([
      db.prepare(createTable),
      db.prepare(`INSERT INTO ${table} (id, full_name, email, phone) VALUES (?, ?, ?, ?) ON CONFLICT(id) DO NOTHING`)
        .bind(lead.id, lead.full_name, lead.email, lead.phone),
      db.prepare(`SELECT full_name,email,phone FROM ${table} WHERE id=?`).bind(lead.id),
    ]);
    const row = stored.results[0];
    if (!row || row.full_name !== lead.full_name || row.email !== lead.email || row.phone !== lead.phone)
      return fail("Submit a fresh request for these details.", 409);
  } catch {
    return fail("Unable to save your request. Please try again.", 503);
  }
  ctx.waitUntil(Promise.all([deliver(env, "email", lead.id), deliver(env, "supabase", lead.id)]));
  return new Response(pdf, { headers: {
    "Content-Type": "application/pdf", "Content-Disposition": 'attachment; filename="JRs-Academy-Prospectus.pdf"',
    "Cache-Control": "private, no-store", "X-Content-Type-Options": "nosniff",
  } });
}
