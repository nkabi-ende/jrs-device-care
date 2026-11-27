import { useEffect, useRef } from "react";
import { Helmet } from "react-helmet-async";
import { getPageHead } from "../lib/pageHead.js";
import landingPages from "./landingPages.json";
import homeHero from "./homeHero.html?raw";
import { renderAcademyCourses, academyCourseSchema } from "./academyCourses.js";
import academyWorkshop from "./academyWorkshop.html?raw";
import businessIndustries from "./businessIndustries.html?raw";
import siteChrome from "../components/siteChrome.json";
import franchiseMeta from "./franchiseMeta.json";
import franchiseHtml from "./franchise.html?raw";
import franchiseCss from "./franchise.css?raw";
import { renderFranchisePage } from "./franchisePage.js";
import { initializeProspectus } from "./prospectus.js";
import { initializeLanding } from "./landing.js";
import { initializeIndustrySlideshow } from "./businessIndustries.js";
import { initializeSiteMenu, renderLandingHeader } from "../components/siteHeader.js";

import cctvMeta from "./cctvMeta.json";
import cctvHtml from "./cctv.html?raw";
import cctvCss from "./cctv.css?raw";
import { renderCctvPage, initializeCctv, cctvSchema } from "./cctvPage.js";

const pages = {
  cctv: { ...cctvMeta, html: renderCctvPage(siteChrome, cctvCss, cctvHtml) },
  ...landingPages,
  home: { ...landingPages.home, html: landingPages.home.html.replace("<!-- home-hero -->", homeHero) },
  academy: { ...landingPages.academy, html: landingPages.academy.html.replace("<!-- academy-courses -->", renderAcademyCourses()).replace("<!-- academy-workshop -->", academyWorkshop) },
  corporate: { ...landingPages.corporate, html: landingPages.corporate.html.replace("<!-- business-industries -->", businessIndustries) },
  franchise: {
    ...franchiseMeta,
    html: renderFranchisePage(siteChrome, franchiseCss, franchiseHtml),
  },
};
type PageName = keyof typeof pages;
export default function Index({ page = "home" }: { page?: PageName }) {
  const content = pages[page];
  const path = page === "home" ? "/" : `/${page}/`;
  const root = useRef<HTMLDivElement>(null);
  const html = renderLandingHeader(content.html, path);
  useEffect(() => {
    if (page !== "franchise" && page !== "cctv") initializeLanding();
    const disposeCctv = page === "cctv" ? initializeCctv(root.current) : undefined;
    const disposeProspectus = page === "academy" ? initializeProspectus() : undefined;
    const disposeMenu = initializeSiteMenu(root.current);
    const disposeSlideshow = page === "corporate" ? initializeIndustrySlideshow(root.current) : undefined;
    return () => {
      disposeCctv?.();
      disposeProspectus?.();
      disposeMenu?.();
      disposeSlideshow?.();
    };
  }, [page]);
  return <>
    <Helmet {...getPageHead(content, path)}>
      {page === "cctv" && <script type="application/ld+json">{JSON.stringify(cctvSchema("https://jrsdevicecare.co.za"))}</script>}
      {page === "academy" && <script type="application/ld+json">{JSON.stringify(academyCourseSchema())}</script>}
    </Helmet>
    <div ref={root} className="jrs-home" dangerouslySetInnerHTML={{ __html: html }} />
  </>;
}
