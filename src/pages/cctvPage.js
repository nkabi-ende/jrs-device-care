
export function renderCctvPage(chrome, css, html) {
  return `<style>${chrome.css}\n${css}</style><!-- site-header -->${html}${chrome.footer}`;
}

export function initializeCctv(root) {
  const form = root?.querySelector("#cctvQuoteForm");
  if (!form) return;
  const status = root.querySelector("#cctvStatus");
  const email = root.querySelector("#cctvEmail");
  const property = root.querySelector("#cctvProperty");
  const count = root.querySelector("#cctvCount");
  const service = root.querySelector("#cctvService");
  const listeners = [];
  for (const link of root.querySelectorAll("[data-cctv-topic], [data-cctv-count]")) {
    const select = () => {
      if (link.dataset.cctvCount) count.value = link.dataset.cctvCount;
      if (link.dataset.cctvTopic === "Residential CCTV installation") property.value = "Residential";
      if (link.dataset.cctvTopic === "Commercial CCTV installation") property.value = "Business / commercial";
      if (link.dataset.cctvTopic === "Install my existing CCTV kit") service.value = "Install my existing CCTV kit";
    };
    link.addEventListener("click", select);
    listeners.push(() => link.removeEventListener("click", select));
  }
  const message = () => "CCTV installation enquiry — JRs Device Care\n\n" + Array.from(new FormData(form), ([key, value]) => [key, String(value).trim()]).filter(([, value]) => value).map(([key, value]) => key + ": " + value).join("\n");
  const openWhatsApp = event => {
    event.preventDefault();
    if (!form.reportValidity()) return;
    window.open("https://wa.me/27716865256?text=" + encodeURIComponent(message()), "_blank", "noopener,noreferrer");
    status.textContent = "Continue in WhatsApp to review and send your enquiry.";
  };
  const openEmail = () => {
    if (!form.reportValidity()) return;
    window.location.href = "mailto:enquiries@jrsdevicecare.co.za?subject=" + encodeURIComponent("CCTV installation enquiry") + "&body=" + encodeURIComponent(message());
    status.textContent = "Continue in your email app to review and send your enquiry.";
  };
  form.addEventListener("submit", openWhatsApp);
  email.addEventListener("click", openEmail);
  return () => {
    form.removeEventListener("submit", openWhatsApp);
    email.removeEventListener("click", openEmail);
    listeners.forEach(dispose => dispose());
  };
}

export function cctvSchema(origin) {
  return {"@context":"https://schema.org","@type":"Service","@id":origin+"/cctv/#service",name:"CCTV camera installation",serviceType:"Residential and commercial CCTV installation",url:origin+"/cctv/",provider:{"@type":"LocalBusiness","@id":origin+"/#business",name:"JRs Device Care"},areaServed:{"@type":"City",name:"Durban"},description:"CCTV camera installation, existing kit installation, system configuration and upgrade enquiries for homes and businesses in Durban."};
}
