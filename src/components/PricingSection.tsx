import { motion } from "framer-motion";
import { MessageCircle, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

const tiers = [
  {
    title: "Essential Repairs",
    subtitle: "Entry-Level Devices",
    items: [
      { service: "Screen Repairs", price: "R400 – R650" },
      { service: "Battery Replacement", price: "R350 – R550" },
      { service: "Charging Faults", price: "From R300" },
    ],
    highlight: false,
  },
  {
    title: "Core Repairs",
    subtitle: "Mid-Level Devices",
    items: [
      { service: "Screen Repairs", price: "R850 – R1,400" },
      { service: "Battery Replacement", price: "R550 – R900" },
      { service: "Diagnostics & Repairs", price: "R450 – R850" },
    ],
    highlight: true,
  },
  {
    title: "Premium & iPhone",
    subtitle: "Flagship Devices",
    items: [
      { service: "Standard Models", price: "From R1,200" },
      { service: "Pro / Max Series", price: "From R1,800" },
      { service: "Full Diagnostics", price: "From R650" },
    ],
    highlight: false,
  },
];

const PricingSection = () => (
  <section id="pricing" className="py-16 sm:py-20 md:py-28 bg-dark-section">
    <div className="container px-4 sm:px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-10 sm:mb-14"
      >
        <span className="text-primary font-display font-semibold text-sm uppercase tracking-widest">Transparent Pricing</span>
        <h2 className="font-display text-2xl sm:text-3xl md:text-5xl font-bold mt-2 mb-3 sm:mb-4 text-dark-section-foreground">
          Device Repair Prices in Durban
        </h2>
        <p className="text-dark-section-foreground/60 max-w-xl mx-auto text-sm sm:text-base">
          Affordable, upfront repair pricing in Newlands West. No hidden fees — get an exact quote on WhatsApp.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 max-w-5xl mx-auto mb-8">
        {tiers.map((tier, i) => (
          <motion.div
            key={tier.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15 }}
            className={`rounded-2xl p-5 sm:p-6 md:p-8 border transition-all ${
              tier.highlight
                ? "bg-primary/10 border-primary/40 shadow-xl shadow-primary/10 md:scale-[1.02] order-first sm:order-none"
                : "bg-hero-bg/50 border-dark-section-foreground/10"
            }`}
          >
            {tier.highlight && (
              <div className="flex items-center gap-1 text-primary text-xs font-bold uppercase tracking-wider mb-3">
                <Star className="w-3 h-3 fill-primary" /> Most Popular
              </div>
            )}
            <h3 className="font-display font-bold text-lg sm:text-xl text-dark-section-foreground mb-1">{tier.title}</h3>
            <p className="text-dark-section-foreground/50 text-sm mb-5 sm:mb-6">{tier.subtitle}</p>

            <div className="space-y-3 sm:space-y-4">
              {tier.items.map((item) => (
                <div key={item.service} className="flex justify-between items-center gap-2">
                  <span className="text-dark-section-foreground/80 text-sm">{item.service}</span>
                  <span className="font-display font-bold text-primary text-sm whitespace-nowrap">{item.price}</span>
                </div>
              ))}
            </div>

            <Button
              asChild
              className={`w-full mt-6 sm:mt-8 font-display font-semibold ${
                tier.highlight ? "" : "bg-primary/20 text-primary hover:bg-primary/30"
              }`}
              variant={tier.highlight ? "default" : "ghost"}
            >
              <a
                href={`https://wa.me/27716865256?text=Hi!%20I'd%20like%20pricing%20for%20${encodeURIComponent(tier.title)}%20repairs.`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle className="w-4 h-4 mr-2" />
                Get Quote
              </a>
            </Button>
          </motion.div>
        ))}
      </div>

      <p className="text-center text-dark-section-foreground/40 text-xs sm:text-sm italic px-4">
        * Pricing varies by specific model and generation. Contact us for an exact quote.
      </p>
    </div>
  </section>
);

export default PricingSection;
