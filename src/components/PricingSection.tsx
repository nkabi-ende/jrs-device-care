import { motion } from "framer-motion";
import { MessageCircle, Star, Check } from "lucide-react";
import { Button } from "@/components/ui/button";

const tiers = [
  {
    title: "Essential",
    subtitle: "Entry-level devices",
    items: [
      { service: "Screen Repairs", price: "R400 – R650" },
      { service: "Battery Replacement", price: "R350 – R550" },
      { service: "Charging Faults", price: "From R300" },
    ],
    highlight: false,
  },
  {
    title: "Core",
    subtitle: "Mid-range devices",
    items: [
      { service: "Screen Repairs", price: "R850 – R1,400" },
      { service: "Battery Replacement", price: "R550 – R900" },
      { service: "Diagnostics & Repairs", price: "R450 – R850" },
    ],
    highlight: true,
  },
  {
    title: "Premium",
    subtitle: "Flagship & iPhone",
    items: [
      { service: "Standard Models", price: "From R1,200" },
      { service: "Pro / Max Series", price: "From R1,800" },
      { service: "Full Diagnostics", price: "From R650" },
    ],
    highlight: false,
  },
];

const PricingSection = () => (
  <section id="pricing" className="relative py-20 sm:py-28 md:py-32 bg-dark-section overflow-hidden noise">
    <div className="absolute inset-0 bg-mesh opacity-50 pointer-events-none" />
    <div className="container px-4 sm:px-6 relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center max-w-2xl mx-auto mb-12 sm:mb-16"
      >
        <span className="text-primary font-display font-semibold text-xs uppercase tracking-widest">Transparent pricing</span>
        <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mt-2 mb-4 text-dark-section-foreground leading-[1.05]">
          No surprises.
          <br />
          <span className="font-serif-display italic text-gradient font-normal">Just honest quotes.</span>
        </h2>
        <p className="text-dark-section-foreground/60 text-sm sm:text-base">
          Affordable, upfront repair pricing in Newlands West. Free diagnostics, exact quote on WhatsApp.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5 max-w-5xl mx-auto mb-8">
        {tiers.map((tier, i) => (
          <motion.div
            key={tier.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className={`relative rounded-3xl p-6 sm:p-8 transition-all duration-300 hover:-translate-y-1 ${
              tier.highlight
                ? "bg-gradient-to-br from-primary/15 to-primary-glow/5 border-2 border-primary/40 shadow-glow md:scale-105 order-first md:order-none"
                : "glass hover:border-primary/30"
            }`}
          >
            {tier.highlight && (
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 inline-flex items-center gap-1 bg-primary text-primary-foreground text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full shadow-glow">
                <Star className="w-3 h-3 fill-primary-foreground" /> Most chosen
              </div>
            )}
            <h3 className="font-display font-bold text-2xl sm:text-3xl text-dark-section-foreground mb-1">{tier.title}</h3>
            <p className="text-dark-section-foreground/50 text-sm mb-6">{tier.subtitle}</p>

            <div className="space-y-3 mb-7">
              {tier.items.map((item) => (
                <div key={item.service} className="flex justify-between items-center gap-2 pb-3 border-b border-dark-section-foreground/10 last:border-b-0">
                  <span className="text-dark-section-foreground/70 text-sm flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-primary shrink-0" />
                    {item.service}
                  </span>
                  <span className="font-display font-bold text-primary text-sm whitespace-nowrap">{item.price}</span>
                </div>
              ))}
            </div>

            <Button
              asChild
              className={`w-full font-display font-semibold rounded-full h-11 ${
                tier.highlight ? "shadow-glow" : "bg-dark-section-foreground/10 text-dark-section-foreground hover:bg-primary hover:text-primary-foreground"
              }`}
              variant={tier.highlight ? "default" : "ghost"}
            >
              <a
                href={`https://wa.me/27716865256?text=Hi!%20I'd%20like%20pricing%20for%20${encodeURIComponent(tier.title)}%20repairs.`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle className="w-4 h-4" />
                Get exact quote
              </a>
            </Button>
          </motion.div>
        ))}
      </div>

      <p className="text-center text-dark-section-foreground/40 text-xs sm:text-sm italic px-4">
        * Pricing varies by specific model. Contact us for an exact quote — diagnostics are always free.
      </p>
    </div>
  </section>
);

export default PricingSection;
