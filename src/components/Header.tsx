import { useState, useEffect } from "react";
import { Menu, X, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence, useScroll, useSpring } from "framer-motion";
import jrLogo from "@/assets/jr-logo.png";
import { CartDrawer } from "@/components/CartDrawer";

const NAV_LINKS = [
  { label: "Shop", href: "/shop" },
  { label: "Services", href: "#services" },
  { label: "Pricing", href: "#pricing" },
  { label: "Academy", href: "#academy" },
  { label: "Gallery", href: "#gallery" },
  { label: "Book", href: "#book" },
  { label: "FAQ", href: "#faq" },
  { label: "Corporate", href: "/corporate" },
];

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "py-2" : "py-3"
      }`}
    >
      <div className={`container px-3 sm:px-4 transition-all duration-500 ${scrolled ? "max-w-5xl" : ""}`}>
        <div className={`flex items-center justify-between rounded-full transition-all duration-500 ${
          scrolled
            ? "glass shadow-elegant px-4 sm:px-5 h-12 sm:h-14"
            : "px-4 sm:px-6 h-14 sm:h-16"
        }`}>
          <a href="#" className="flex items-center gap-2 group">
            <img src={jrLogo} alt="JR's Device Care logo" className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl shadow-elegant" />
            <span className="font-display font-bold text-sm sm:text-base text-hero-foreground">
              JR's <span className="text-primary">Device Care</span>
            </span>
          </a>

          <nav className="hidden lg:flex items-center gap-0.5">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-3 py-1.5 text-sm font-medium text-hero-foreground/70 hover:text-primary transition-colors rounded-full hover:bg-hero-foreground/5"
              >
                {link.label}
              </a>
            ))}
            <Button asChild size="sm" className="ml-2 font-display font-semibold rounded-full h-9 px-4 shadow-glow">
              <a
                href="https://wa.me/27716865256?text=Hi%20JR's%20Device%20Care!%20I'd%20like%20a%20quote."
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle className="w-4 h-4" />
                Chat
              </a>
            </Button>
            <div className="ml-1"><CartDrawer /></div>
          </nav>

          <div className="lg:hidden flex items-center gap-1">
            <CartDrawer />
            <button
              className="text-hero-foreground p-2 -mr-1.5 rounded-full hover:bg-hero-foreground/5 transition-colors"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Scroll progress */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-primary via-primary-glow to-primary origin-left"
        style={{ scaleX }}
      />

      <AnimatePresence>
        {mobileOpen && (
          <motion.nav
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden fixed inset-0 top-16 bg-hero-bg/98 backdrop-blur-xl z-40 flex flex-col noise"
          >
            <div className="absolute inset-0 bg-mesh pointer-events-none" />
            <div className="relative flex-1 flex flex-col justify-center px-8 -mt-16">
              {NAV_LINKS.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  className="block py-4 text-3xl font-display font-bold text-hero-foreground/80 hover:text-primary transition-colors border-b border-hero-foreground/5"
                >
                  <span className="text-primary/40 text-sm font-mono mr-3">0{i + 1}</span>
                  {link.label}
                </motion.a>
              ))}
            </div>
            <div className="relative px-8 pb-10">
              <Button asChild className="w-full font-display font-semibold h-14 text-base rounded-full shadow-glow">
                <a
                  href="https://wa.me/27716865256?text=Hi%20JR's%20Device%20Care!%20I'd%20like%20a%20quote."
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  WhatsApp Us
                </a>
              </Button>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
