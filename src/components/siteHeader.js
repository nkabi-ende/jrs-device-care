const destinations = [
  ["/repairs", "Repairs"],
  ["/pricing", "Pricing"],
  ["/shop", "Shop devices"],
  ["/academy", "Academy"],
  ["/corporate", "For business"],
  ["/franchise", "For entrepreneurs"],
  ["/contact", "Contact"],
];

export function renderSiteHeader(path, { bookingHref = "/contact/", opensEnquiry = false } = {}) {
  const currentPath = path.replace(/\/$/, "") || "/";
  const link = ([href, label]) => {
    const active = currentPath === href || (href === "/shop" && currentPath.startsWith("/shop/"));
    return `<a href="${href}/"${active ? ' aria-current="page"' : ""}>${label}</a>`;
  };
  const links = destinations.map(link).join("");
  const booking = `href="${bookingHref}"${opensEnquiry ? ' data-enquire="Repair enquiry"' : ""}`;

  return `<header class="site-header">
    <div class="site-header__bar">
      <a class="brand" href="/" aria-label="JRs Device Care home"${currentPath === "/" ? ' aria-current="page"' : ""}>
        <img src="/jrs-logo.jpeg" alt="" width="42" height="42">
        <span>JRs <small>DEVICE CARE</small></span>
      </a>
      <nav class="site-header__desktop" aria-label="Main navigation">${links}</nav>
      <a class="site-header__booking site-header__top-booking" ${booking}>Book a repair</a>
      <details class="site-header__mobile">
        <summary class="site-header__toggle">
          <svg class="site-header__menu-icon" aria-hidden="true" viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M4 6h16M4 12h16M4 18h16"/></svg>
          <svg class="site-header__close-icon" aria-hidden="true" viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="m6 6 12 12M6 18 18 6"/></svg>
          <span class="site-header__menu-label">Menu</span>
          <span class="site-header__close-label">Close</span>
        </summary>
        <nav class="site-header__panel" aria-label="Main navigation">
          ${links}
          <a class="site-header__booking site-header__panel-booking" ${booking}>Book a repair</a>
        </nav>
      </details>
    </div>
  </header>`;
}

export function renderLandingHeader(html, path) {
  return html.replace("<!-- site-header -->", renderSiteHeader(path, { opensEnquiry: true }));
}

export function initializeSiteMenu(root) {
  const menu = root?.querySelector(".site-header__mobile");
  if (!menu) return;
  const summary = menu.querySelector("summary");
  const close = () => { menu.open = false; };

  function onEscape(event) {
    if (event.key !== "Escape" || !menu.open) return;
    close();
    summary.focus();
  }

  function onOutsidePointer(event) {
    if (menu.open && !menu.contains(event.target)) close();
  }

  function onMenuSelection(event) {
    const link = event.target.closest("nav a");
    if (!link) return;
    close();
    if (link.hasAttribute("data-enquire")) summary.focus();
  }

  document.addEventListener("keydown", onEscape);
  document.addEventListener("pointerdown", onOutsidePointer);
  menu.addEventListener("click", onMenuSelection, true);
  window.addEventListener("pagehide", close);
  return () => {
    document.removeEventListener("keydown", onEscape);
    document.removeEventListener("pointerdown", onOutsidePointer);
    menu.removeEventListener("click", onMenuSelection, true);
    window.removeEventListener("pagehide", close);
  };
}
