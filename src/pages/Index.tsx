import { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import landing from "./landing.html?raw";
import { initializeLanding } from "./landing.js";

export default function Index() {
  useEffect(() => { initializeLanding(); }, []);
  return <>
    <Helmet>
      <title>JRs Device Care | Durban Repairs &amp; R7,999 Repair Academy</title>
      <meta name="description" content="Cellphone, tablet, laptop and electronics repairs in Newlands West, Durban. R7,999 repair academy, corporate device support and pre-owned devices." />
      <link rel="canonical" href="https://jrsdevicecare.co.za/" />
      <meta property="og:title" content="JRs Device Care — Repair. Learn. Reconnect." />
      <meta property="og:description" content="Device repairs, a R7,999 repair academy, commercial support and pre-owned technology. Newlands West HQ, Durban." />
    </Helmet>
    <div className="jrs-home" dangerouslySetInnerHTML={{ __html: landing }} />
  </>;
}
