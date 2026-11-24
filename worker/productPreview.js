import { downloadProspectus, retryProspectusDeliveries } from "./prospectus.js";
import { getPageHead } from "../src/lib/pageHead.js";
import { getProductPage } from "../src/lib/productPage.js";
import { renderPageHead } from "../src/lib/renderPageHead.js";
import { SHOPIFY_STOREFRONT_TOKEN, SHOPIFY_STOREFRONT_URL } from "../src/lib/storefront.js";

const query = `query ProductPreview($handle: String!) {
  product(handle: $handle) {
    title description images(first: 1) { edges { node { url altText } } }
  }
}`;

async function loadProduct(handle) {
  const response = await fetch(SHOPIFY_STOREFRONT_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-Shopify-Storefront-Access-Token": SHOPIFY_STOREFRONT_TOKEN,
    },
    body: JSON.stringify({ query, variables: { handle } }),
    signal: AbortSignal.timeout(3000),
  });
  if (!response.ok) throw new Error("Catalogue unavailable");
  const body = await response.json();
  if (body.errors || !body.data) throw new Error("Catalogue unavailable");
  return body.data.product;
}

export default {
  async scheduled(controller, env, ctx) {
    ctx.waitUntil(retryProspectusDeliveries(env));
  },
  async fetch(request, env, ctx) {
    const url = new URL(request.url);
    if (url.pathname === "/api/academy/prospectus") return downloadProspectus(request, env, ctx);
    const item = /^\/shop\/([^/]+)\/?$/.exec(url.pathname);
    if (!item || !["GET", "HEAD"].includes(request.method)) return env.ASSETS.fetch(request);

    let handle;
    try { handle = decodeURIComponent(item[1]); }
    catch { return new Response("Invalid product URL", { status: 400 }); }
    const [shell, result] = await Promise.all([
      env.ASSETS.fetch(new URL("/shop/", url).href),
      loadProduct(handle).then(product => ({ product, available: true }))
        .catch(() => ({ product: null, available: false })),
    ]);
    if (!shell.ok) return shell;

    const product = result.product;
    const path = "/shop/" + encodeURIComponent(handle);
    const head = getPageHead(getProductPage(product), path, product ? "product" : "website");
    const content = renderPageHead(head);
    const headers = new Headers(shell.headers);
    for (const header of ["Content-Length", "Content-Encoding", "ETag", "Last-Modified"]) headers.delete(header);
    headers.set("Cache-Control", result.available ? "public, max-age=60" : "no-store");
    const missing = result.available && !product;
    if (missing) headers.set("X-Robots-Tag", "noindex");
    const html = (await shell.text()).replace(/<!-- jrs-page-head -->[\s\S]*?<!-- \/jrs-page-head -->/, () => content);
    return new Response(request.method === "HEAD" ? null : html, { status: missing ? 404 : 200, headers });
  },
};
