import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { ArrowLeft, Loader2, PackageSearch } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import { ProductCard } from "@/components/ProductCard";
import { CartDrawer } from "@/components/CartDrawer";
import { storefrontApiRequest, PRODUCTS_QUERY, type ShopifyProduct } from "@/lib/shopify";

const CATEGORIES = ["All", "Phones", "Laptops", "Electronics"];

const Shop = () => {
  const [products, setProducts] = useState<ShopifyProduct[]>([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState("All");

  useEffect(() => {
    (async () => {
      try {
        const q = filter === "All" ? undefined : `tag:${filter.toLowerCase()} OR product_type:${filter}`;
        const data = await storefrontApiRequest(PRODUCTS_QUERY, { first: 50, query: q });
        setProducts(data?.data?.products?.edges || []);
      } catch (e) { console.error(e); }
      finally { setLoading(false); }
    })();
  }, [filter]);

  return (
    <>
      <Helmet>
        <title>Refurbished Shop | JR's Device Care Durban</title>
        <meta name="description" content="Shop certified refurbished phones, laptops and electronics from JR's Device Care Durban. Tested, warranty-backed second-hand devices." />
        <link rel="canonical" href="https://jrs-device-care.lovable.app/shop" />
      </Helmet>

      <Header />
      <main className="min-h-screen bg-background pt-24 pb-20">
        <div className="container px-4 max-w-7xl">
          <div className="flex items-center justify-between mb-6">
            <Link to="/" className="inline-flex items-center text-sm text-muted-foreground hover:text-primary">
              <ArrowLeft className="w-4 h-4 mr-1" /> Back home
            </Link>
            <CartDrawer />
          </div>

          <header className="mb-10 max-w-2xl">
            <h1 className="font-display text-4xl md:text-5xl font-bold mb-3">Refurbished Shop</h1>
            <p className="text-muted-foreground text-lg">
              Certified second-hand phones, laptops and electronics — tested, cleaned and backed by our 30-day warranty.
            </p>
          </header>

          <div className="flex flex-wrap gap-2 mb-8">
            {CATEGORIES.map((c) => (
              <button
                key={c}
                onClick={() => setFilter(c)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition ${
                  filter === c ? "bg-primary text-primary-foreground" : "bg-secondary/40 text-foreground hover:bg-secondary"
                }`}
              >
                {c}
              </button>
            ))}
          </div>

          {loading ? (
            <div className="flex items-center justify-center py-32">
              <Loader2 className="w-8 h-8 animate-spin text-primary" />
            </div>
          ) : products.length === 0 ? (
            <div className="text-center py-24 border border-dashed border-border rounded-3xl">
              <PackageSearch className="w-12 h-12 mx-auto text-muted-foreground mb-4" />
              <h2 className="font-display text-2xl font-semibold mb-2">No products found</h2>
              <p className="text-muted-foreground max-w-md mx-auto">
                We're still loading stock. Check back soon or message us on WhatsApp for current availability.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
              {products.map((p) => <ProductCard key={p.node.id} product={p} />)}
            </div>
          )}
        </div>
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  );
};

export default Shop;
