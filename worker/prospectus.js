import pdf from "./prospectus.pdf";

export async function downloadProspectus(request, env) {
  const fail = (message, status) => new Response(message, {status, headers: {"Cache-Control":"no-store"}});
  if (request.method !== "POST") return fail("Submit the Academy form to download.", 405);
  if (request.headers.get("Origin") !== new URL(request.url).origin) return fail("Invalid origin.", 403);
  if (!request.headers.get("Content-Type")?.startsWith("application/json")) return fail("Expected JSON.", 415);
  const body = await request.json().catch(() => null);
  const clean = (key) => typeof body?.[key] === "string" ? body[key].trim() : "";
  const id = clean("id"), full_name = clean("name"), email = clean("email"), phone = clean("phone");
  if (!/^[0-9a-f]{8}-(?:[0-9a-f]{4}-){3}[0-9a-f]{12}$/i.test(id) || full_name.length < 2 || full_name.length > 150 ||
      !/^\S+@[^\s@]+\.\S+$/.test(email) || email.length > 254 || !/^\+?[\d\s()-]+$/.test(phone) || phone.length > 32 || !/^\d{7,15}$/.test(phone.replace(/\D/g,"")))
    return fail("Please check your name, email and phone number.", 400);
  if (!env.JRS_SUPABASE_SERVICE_KEY) return fail("Downloads are temporarily unavailable.", 503);
  const saved = await fetch("https://ysvpgilqqaedtcbybiik.supabase.co/rest/v1/academy_prospectus_requests?on_conflict=id", {
    method:"POST", headers:{apikey:env.JRS_SUPABASE_SERVICE_KEY, Authorization:"Bearer "+env.JRS_SUPABASE_SERVICE_KEY,
      "Content-Type":"application/json", Prefer:"resolution=ignore-duplicates,return=minimal"},
    body: JSON.stringify({id,full_name,email,phone})
  }).catch(() => null);
  if (!saved?.ok) return fail("Unable to save your request. Please try again.", 503);
  return new Response(pdf,{headers:{"Content-Type":"application/pdf","Content-Disposition":'attachment; filename="JRs-Academy-Prospectus.pdf"',"Cache-Control":"private, no-store"}});
}
