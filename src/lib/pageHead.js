export const siteOrigin = "https://jrsdevicecare.co.za";

export function getPageHead(page, path, type = "website") {
  const url = siteOrigin + path;
  const image = new URL(page.image, siteOrigin).href;
  const brandedCard = page.image.startsWith("/share/");
  const properties = {
    "og:type": type,
    "og:site_name": "JRs Device Care",
    "og:locale": "en_ZA",
    "og:url": url,
    "og:title": page.title,
    "og:description": page.description,
    "og:image": image,
    ...(brandedCard && {
      "og:image:type": "image/jpeg",
      "og:image:width": "1200",
      "og:image:height": "630",
    }),
    "og:image:alt": page.imageAlt,
  };
  const names = {
    description: page.description,
    "twitter:card": "summary_large_image",
    "twitter:title": page.title,
    "twitter:description": page.description,
    "twitter:image": image,
    "twitter:image:alt": page.imageAlt,
  };
  return {
    title: page.title,
    link: [{ rel: "canonical", href: url }],
    meta: [
      ...Object.entries(properties).map(([property, content]) => ({ property, content })),
      ...Object.entries(names).map(([name, content]) => ({ name, content })),
    ],
  };
}
