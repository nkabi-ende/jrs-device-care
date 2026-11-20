export function renderFranchisePage(chrome, css, html) {
  const header = chrome.header
    .replace('href="/franchise"', 'href="/franchise" aria-current="page"')
    .replace(
      '<button class="btn" data-enquire="Repair enquiry">Book a repair ↗</button>',
      '<a class="btn" href="/contact">Book a repair ↗</a>',
    );
  return `<style>${chrome.css}\n${css}</style>${header}${html}${chrome.footer}`;
}
