const escape = text => text.replaceAll("&", "&amp;").replaceAll('"', "&quot;")
  .replaceAll("<", "&lt;").replaceAll(">", "&gt;");

export function renderPageHead({ title, link, meta }, schema) {
  const tags = [
    `<title>${escape(title)}</title>`,
    `<link data-rh="true" rel="canonical" href="${escape(link[0].href)}">`,
    ...meta.map(tag => {
      const attr = tag.property ? "property" : "name";
      return `<meta data-rh="true" ${attr}="${escape(tag[attr])}" content="${escape(tag.content)}">`;
    }),
  ];
  if (schema) {
    tags.push(`<script type="application/ld+json">${JSON.stringify(schema).replaceAll("<", "\\u003c")}</script>`);
  }
  return "<!-- jrs-page-head -->" + tags.join("\n") + "<!-- /jrs-page-head -->";
}
