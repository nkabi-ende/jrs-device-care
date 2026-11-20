import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import chrome from "./siteChrome.json";
import { initializeSiteMenu, renderSiteHeader } from "./siteHeader.js";

export default function Header() {
  const { pathname } = useLocation();
  const root = useRef<HTMLDivElement>(null);
  const html = renderSiteHeader(pathname, { bookingHref: "https://wa.me/27716865256" });

  useEffect(() => initializeSiteMenu(root.current), [pathname]);

  return (
    <div className="jrs-home storefront-header" ref={root}>
      <style>{chrome.css + "main header {position:static;background:transparent;border:0}"}</style>
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </div>
  );
}
