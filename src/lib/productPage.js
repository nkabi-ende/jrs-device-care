import shop from "../pages/shopMeta.json" with { type: "json" };

export function getProductPage(product) {
  if (!product) return shop;
  const photo = product.images?.edges?.[0]?.node;
  const text = product.description?.trim().replace(/\s+/g, " ");
  const description = text?.length > 160
    ? text.slice(0, 157).replace(/\s+\S*$/, "").trimEnd() + "…"
    : text;
  return {
    title: `${product.title} | JRs Device Care`,
    description: description || `Explore ${product.title} at JRs Device Care in Newlands West, Durban. Enquire about condition, specifications and availability.`,
    image: photo?.url || shop.image,
    imageAlt: photo?.url ? photo.altText || product.title : shop.imageAlt,
  };
}
