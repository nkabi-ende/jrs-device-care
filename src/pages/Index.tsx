import { useEffect, useRef } from "react";
import { Helmet } from "react-helmet-async";
import landingPages from "./landingPages.json";
import siteChrome from "../components/siteChrome.json";
import franchiseMeta from "./franchiseMeta.json";
import franchiseHtml from "./franchise.html?raw";
import franchiseCss from "./franchise.css?raw";
import { renderFranchisePage } from "./franchisePage.js";
import { initializeLanding } from "./landing.js";
import { initializeSiteMenu, renderLandingHeader } from "../components/siteHeader.js";

const pages = {
  ...landingPages,
  franchise: {
    ...franchiseMeta,
    html: renderFranchisePage(siteChrome, franchiseCss, franchiseHtml),
  },
};
const siteOrigin = "https://jrsdevicecare.co.za";
type PageName = keyof typeof pages;
export default function Index({ page = "home" }: { page?: PageName }) {
  const content = pages[page];
  const path = page === "home" ? "/" : `/${page}`;
  const image = siteOrigin + ("image" in content ? content.image : "/social-preview.png");
  const imageAlt = "imageAlt" in content
    ? content.imageAlt
    : "JRs Device Care — Repairs, R7,999 repair academy, business support and pre-owned devices. Newlands West, Durban.";

  const root = useRef<HTMLDivElement>(null);
  const html = renderLandingHeader(content.html, path);
  useEffect(() => {
    if (page !== "franchise") initializeLanding();
    return initializeSiteMenu(root.current);
  }, [page]);
  return <>
    <Helmet>
      <title>{content.title}</title>
      <meta name="description" content={content.description} />
      <link rel="canonical" href={siteOrigin + path} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={content.title} />
      <meta property="og:description" content={content.description} />
      <meta property="og:url" content={siteOrigin + path} />
      <meta property="og:image" content={image} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content={imageAlt} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={content.title} />
      <meta name="twitter:description" content={content.description} />
      <meta name="twitter:image" content={image} />
      {page === "academy" && <script type="application/ld+json">{JSON.stringify({"@context":"https://schema.org","@type":"Course",name:"JRs Device Care Practical Device Repair Course",description:content.description,provider:{"@type":"Organization",name:"JRs Device Care",url:"https://jrsdevicecare.co.za"},offers:{"@type":"Offer",category:"Paid",price:"7999",priceCurrency:"ZAR",url:"https://jrsdevicecare.co.za/academy"}})}</script>}
    </Helmet>
    <div ref={root} className="jrs-home" dangerouslySetInnerHTML={{ __html: html }} />
  </>;
}
