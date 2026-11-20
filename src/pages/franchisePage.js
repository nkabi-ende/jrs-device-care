import { renderSiteHeader } from "../components/siteHeader.js";

export function renderFranchisePage(chrome, css, html) {
  return `<style>${chrome.css}\n${css}</style>${renderSiteHeader("/franchise")}${html}${chrome.footer}`;
}
