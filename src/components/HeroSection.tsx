import { motion } from "framer-motion";
import { MessageCircle, MapPin, Wrench, Settings, Activity } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center bg-hero-bg stripe-pattern overflow-hidden">
      {/* Gradient orb */}
      <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] rounded-full bg-primary/5 blur-[120px] pointer-events-none" />

      <div className="container relative z-10 pt-24 pb-16 md:pt-32 md:pb-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-1.5 mb-6"
          >
            <MapPin className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Newlands West & Surrounds, Durban</span>
          </motion.div>

          <h1 className="font-display text-4xl sm:text-5xl md:text-7xl font-bold text-hero-foreground leading-[1.1] mb-4">
            JR's{" "}
            <span className="text-primary">Device</span>{" "}
            Care
          </h1>

          <div className="flex items-center gap-3 mb-6">
            {[
              { icon: Wrench, label: "repairs" },
              { icon: Settings, label: "maintenance" },
              { icon: Activity, label: "diagnostics" },
            ].map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + i * 0.1 }}
                className="flex items-center gap-1.5"
              >
                <item.icon className="w-4 h-4 text-primary" />
                <span className="text-hero-foreground/70 text-sm md:text-base font-medium uppercase tracking-wider">
                  {item.label}
                </span>
                {i < 2 && <span className="text-hero-foreground/30 ml-2">|</span>}
              </motion.div>
            ))}
          </div>

          <p className="text-hero-foreground/60 text-lg md:text-xl max-w-xl mb-8 font-body">
            Expert repairs for phones, tablets, laptops & all electronics.
            Fast turnaround. Quality parts. Affordable pricing.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              asChild
              size="lg"
              className="font-display font-bold text-base animate-pulse-glow"
            >
              <a
                href="https://wa.me/27716865256?text=Hi%20JR's%20Device%20Care!%20I'd%20like%20a%20quote%20for%20a%20repair."
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Get a Quote on WhatsApp
              </a>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="font-display font-semibold text-base border-hero-foreground/20 text-hero-foreground hover:bg-hero-foreground/10 hover:text-hero-foreground"
            >
              <a href="#book">Book a Repair</a>
            </Button>
          </div>
        </motion.div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default HeroSection;
