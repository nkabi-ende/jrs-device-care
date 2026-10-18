import chrome from "./siteChrome.json";
export default function Header() {
  return <div className="jrs-home"><style>{chrome.css + `main header {position:static;background:transparent;border:0} .jrs-home .nav{max-width:1320px} .jrs-home > header{position:relative} .jrs-home:has(>header){position:sticky;top:0;z-index:40} .jrs-home h1,.jrs-home h2,.jrs-home h3{font-weight:700}`}</style><div dangerouslySetInnerHTML={{__html:chrome.header.replace(/<button class="btn" data-enquire="Repair enquiry">Book a repair ↗<\/button>/,'<a class="btn" href="https://wa.me/27716865256">Book a repair ↗</a>')}} /></div>;
}
