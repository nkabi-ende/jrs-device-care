import { Link } from "react-router-dom";
import { Loader2, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useCartStore } from "@/stores/cartStore";
import type { ShopifyProduct } from "@/lib/shopify";

export function ProductCard({ product }: { product: ShopifyProduct }) {
  const addItem = useCartStore((s) => s.addItem);
  const isLoading = useCartStore((s) => s.isLoading);
  const p = product.node;
  const variant = p.variants.edges[0]?.node;
  const image = p.images.edges[0]?.node;
  const price = p.priceRange.minVariantPrice;

  const handleAdd = async (e: React.MouseEvent) => {
    e.preventDefault();
    if (!variant) return;
    await addItem({
      product,
      variantId: variant.id,
      variantTitle: variant.title,
      price: variant.price,
      quantity: 1,
      selectedOptions: variant.selectedOptions || [],
    });
  };

  return (
    <Link to={`/shop/${p.handle}`} className="group block rounded-2xl overflow-hidden bg-card border border-border hover:border-primary/40 transition-all hover:shadow-elegant">
      <div className="aspect-square bg-secondary/20 overflow-hidden relative">
        {image ? (
          <img src={image.url} alt={image.altText || p.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-muted-foreground text-sm">No image</div>
        )}
        {variant && !variant.availableForSale && (
          <Badge className="absolute top-3 left-3 bg-destructive">Sold</Badge>
        )}
      </div>
      <div className="p-4 space-y-2">
        <h3 className="font-display font-semibold text-base line-clamp-1">{p.title}</h3>
        <div className="flex items-center justify-between gap-2">
          <span className="font-bold text-lg">{price.currencyCode} {parseFloat(price.amount).toFixed(0)}</span>
          <Button size="sm" onClick={handleAdd} disabled={isLoading || !variant?.availableForSale} className="rounded-full">
            {isLoading ? <Loader2 className="w-4 h-4 animate-spin" /> : (<><ShoppingCart className="w-4 h-4 mr-1" />Add</>)}
          </Button>
        </div>
      </div>
    </Link>
  );
}
