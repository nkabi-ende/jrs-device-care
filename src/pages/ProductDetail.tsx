import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link, useParams } from "react-router-dom";
import { ArrowLeft, Loader2, ShoppingCart, ShieldCheck, Truck } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CartDrawer } from "@/components/CartDrawer";
import { useCartStore } from "@/stores/cartStore";
import { storefrontApiRequest, PRODUCT_BY_HANDLE_QUERY, type ShopifyProduct } from "@/lib/shopify";

const ProductDetail = () => {
  const { handle } = useParams<{ handle: string }>();
  const [product, setProduct] = useState<ShopifyProduct["node"] | null>(null);
  const [loading, setLoading] = useState(true);
  const [variantId, setVariantId] = useState<string | null>(null);
  const [activeImage, setActiveImage] = useState(0);
  const addItem = useCartStore((s) => s.addItem);
  const isLoading = useCartStore((s) => s.isLoading);

  useEffect(() => {
    (async () => {
      try {
        const data = await storefrontApiRequest(PRODUCT_BY_HANDLE_QUERY, { handle });
        const p = data?.data?.product;
        setProduct(p);
        setVariantId(p?.variants?.edges?.[0]?.node?.id ?? null);
      } finally { setLoading(false); }
    })();
  }, [handle]);

  const variant = product?.variants.edges.find((v) => v.node.id === variantId)?.node;

  const handleAdd = async () => {
    if (!product || !variant) return;
    await addItem({
      product: { node: product },
      variantId: variant.id,
      variantTitle: variant.title,
      price: variant.price,
      quantity: 1,
      selectedOptions: variant.selectedOptions || [],
    });
  };

  return (
    <>
      <Helmet>
        <title>{product ? `${product.title} | JR's Device Care` : "Product"}</title>
        <meta name="description" content={product?.description?.slice(0, 155) || "Refurbished device from JR's Device Care."} />
      </Helmet>
      <Header />
      <main className="min-h-screen bg-background pt-24 pb-20">
        <div className="container px-4 max-w-6xl">
          <div className="flex items-center justify-between mb-6">
            <Link to="/shop" className="inline-flex items-center text-sm text-muted-foreground hover:text-primary">
              <ArrowLeft className="w-4 h-4 mr-1" /> Back to shop
            </Link>
            <CartDrawer />
          </div>

          {loading ? (
            <div className="flex items-center justify-center py-32"><Loader2 className="w-8 h-8 animate-spin text-primary" /></div>
          ) : !product ? (
            <div className="text-center py-24">
              <h1 className="font-display text-2xl font-semibold">Product not found</h1>
              <Link to="/shop" className="text-primary underline mt-4 inline-block">Browse the shop</Link>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 gap-10">
              <div className="space-y-3">
                <div className="aspect-square bg-secondary/20 rounded-2xl overflow-hidden">
                  {product.images.edges[activeImage] ? (
                    <img src={product.images.edges[activeImage].node.url} alt={product.title} className="w-full h-full object-cover" />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-muted-foreground">No image</div>
                  )}
                </div>
                {product.images.edges.length > 1 && (
                  <div className="flex gap-2 overflow-x-auto">
                    {product.images.edges.map((img, i) => (
                      <button key={i} onClick={() => setActiveImage(i)} className={`w-20 h-20 rounded-lg overflow-hidden flex-shrink-0 border-2 ${i === activeImage ? "border-primary" : "border-transparent"}`}>
                        <img src={img.node.url} alt="" className="w-full h-full object-cover" />
                      </button>
                    ))}
                  </div>
                )}
              </div>

              <div className="space-y-5">
                <Badge variant="secondary">Refurbished</Badge>
                <h1 className="font-display text-3xl md:text-4xl font-bold">{product.title}</h1>
                <p className="text-3xl font-bold">
                  {variant?.price.currencyCode} {parseFloat(variant?.price.amount || "0").toFixed(2)}
                </p>
                <p className="text-muted-foreground leading-relaxed whitespace-pre-line">{product.description}</p>

                {product.options.map((opt) => opt.values.length > 1 && (
                  <div key={opt.name}>
                    <p className="text-sm font-medium mb-2">{opt.name}</p>
                    <div className="flex flex-wrap gap-2">
                      {product.variants.edges.map((v) => {
                        const val = v.node.selectedOptions.find((o) => o.name === opt.name)?.value;
                        const active = v.node.id === variantId;
                        return (
                          <button key={v.node.id} onClick={() => setVariantId(v.node.id)} className={`px-4 py-2 rounded-full text-sm border ${active ? "bg-primary text-primary-foreground border-primary" : "border-border hover:border-primary"}`}>
                            {val}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                ))}

                <Button size="lg" onClick={handleAdd} disabled={isLoading || !variant?.availableForSale} className="w-full rounded-full">
                  {isLoading ? <Loader2 className="w-4 h-4 animate-spin" /> : (<><ShoppingCart className="w-5 h-5 mr-2" />{variant?.availableForSale ? "Add to Cart" : "Sold out"}</>)}
                </Button>

                <div className="grid grid-cols-2 gap-3 pt-4">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground"><ShieldCheck className="w-4 h-4 text-primary" />30-day warranty</div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground"><Truck className="w-4 h-4 text-primary" />Durban collection / delivery</div>
                </div>
              </div>
            </div>
          )}
        </div>
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  );
};

export default ProductDetail;
