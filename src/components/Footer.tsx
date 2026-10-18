import chrome from "./siteChrome.json";
export default function Footer() {
  return <div className="jrs-home" dangerouslySetInnerHTML={{__html:chrome.footer}} />;
}
