import { afterEach, describe, expect, it, vi } from "vitest";
import { initializeCctv, renderCctvPage, cctvSchema } from "../pages/cctvPage.js";
import { renderLandingHeader } from "../components/siteHeader.js";
import { getPageHead } from "../lib/pageHead.js";
import meta from "../pages/cctvMeta.json";
import html from "../pages/cctv.html?raw";

afterEach(() => { vi.restoreAllMocks(); document.body.innerHTML = ""; });

describe("CCTV service page", () => {
  it("renders the shared site header and CCTV-specific quote CTA", () => {
    const page = renderLandingHeader(renderCctvPage({ css: "", footer: "<footer>JRs</footer>" }, "", html), "/cctv/");
    expect(page).toContain('href="/cctv/" aria-current="page"');
    expect(page).toContain('href="#cctv-quote">Get a CCTV quote');
    expect(page).toContain('aria-label="CCTV page navigation"');
  });
  it("prefills quote selections and prepares a WhatsApp message only after valid input", () => {
    document.body.innerHTML = html;
    const form = document.querySelector<HTMLFormElement>("#cctvQuoteForm")!;
    expect(form.hidden).toBe(true);
    const dispose = initializeCctv(document.body);
    expect(form.hidden).toBe(false);
    const open = vi.spyOn(window, "open").mockImplementation(() => null);
    form.dispatchEvent(new Event("submit", { bubbles: true, cancelable: true }));
    expect(open).not.toHaveBeenCalled();
    document.querySelector<HTMLAnchorElement>('[data-cctv-topic="Residential CCTV installation"]')!.click();
    document.querySelector<HTMLAnchorElement>('[data-cctv-count="8 cameras"][data-cctv-channels="4 channels"]')!.click();
    const set = (id: string, value: string) => { document.querySelector<HTMLInputElement | HTMLSelectElement>("#" + id)!.value = value; };
    set("cctvName", "Test Customer");
    set("cctvPhone", "0710000000");
    set("cctvSuburb", "Newlands West");
    form.dispatchEvent(new Event("submit", { bubbles: true, cancelable: true }));
    expect(open).toHaveBeenCalledTimes(1);
    const url = new URL(String(open.mock.calls[0][0]));
    expect(url.hostname).toBe("wa.me");
    expect(url.searchParams.get("text")).toContain("Property: Residential");
    expect(url.searchParams.get("text")).toContain("Camera count: 8 cameras");
    expect(url.searchParams.get("text")).toContain("Recorder channels: 4 channels");
    expect(url.searchParams.get("text")).toContain("Service: Install my existing CCTV kit");
    dispose?.();
    expect(form.hidden).toBe(true);
  });
  it("sets canonical, social card dimensions and service schema", () => {
    const head = getPageHead(meta, "/cctv/");
    expect(head.link[0].href).toBe("https://jrsdevicecare.co.za/cctv/");
    expect(head.meta).toContainEqual({ property: "og:image:type", content: "image/png" });
    expect(head.meta).toContainEqual({ property: "og:image:width", content: "1200" });
    expect(cctvSchema("https://jrsdevicecare.co.za").areaServed.name).toBe("Durban");
  });
});
