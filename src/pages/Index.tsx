import { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import pages from "./landingPages.json";
import { initializeLanding } from "./landing.js";

type PageName = keyof typeof pages;
export default function Index({ page = "home" }: { page?: PageName }) {
  const content = pages[page];
  const path = page === "home" ? "/" : `/${page}`;
  useEffect(() => initializeLanding(), [page]);
  return <>
    <Helmet>
      <title>{content.title}</title>
      <meta name="description" content={content.description} />
      <link rel="canonical" href={`https://jrsdevicecare.co.za${path}`} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={content.title} />
      <meta property="og:description" content={content.description} />
      <meta property="og:url" content={`https://jrsdevicecare.co.za${path}`} />
      <meta property="og:image" content="https://jrsdevicecare.co.za/social-preview.png" />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content="JRs Device Care — Repairs, R7,999 repair academy, business support and pre-owned devices. Newlands West, Durban." />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={content.title} />
      <meta name="twitter:description" content={content.description} />
      <meta name="twitter:image" content="https://jrsdevicecare.co.za/social-preview.png" />
      {page === "academy" && <script type="application/ld+json">{JSON.stringify({"@context":"https://schema.org","@type":"Course",name:"JRs Device Care Practical Device Repair Course",description:content.description,provider:{"@type":"Organization",name:"JRs Device Care",url:"https://jrsdevicecare.co.za"},offers:{"@type":"Offer",category:"Paid",price:"7999",priceCurrency:"ZAR",url:"https://jrsdevicecare.co.za/academy"}})}</script>}
    </Helmet>
    <div className="jrs-home" dangerouslySetInnerHTML={{ __html: content.html }} />
  </>;
}
