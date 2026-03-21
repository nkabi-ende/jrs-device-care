import { motion } from "framer-motion";
import { MessageCircle, MapPin, Wrench, Settings, Activity, GraduationCap } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="relative min-h-[100svh] flex items-center bg-hero-bg stripe-pattern overflow-hidden">
      {/* Gradient orb */}
      <div className="absolute top-1/4 right-1/4 w-[300px] md:w-[500px] h-[300px] md:h-[500px] rounded-full bg-primary/5 blur-[80px] md:blur-[120px] pointer-events-none" />

      <div className="container relative z-10 pt-20 pb-12 sm:pt-24 sm:pb-16 md:pt-32 md:pb-24 px-5 sm:px-6">
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
            className="inline-flex items-center gap-1.5 sm:gap-2 bg-primary/10 border border-primary/20 rounded-full px-3 sm:px-4 py-1 sm:py-1.5 mb-4 sm:mb-6"
          >
            <MapPin className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-primary shrink-0" />
            <span className="text-xs sm:text-sm font-medium text-primary">Newlands West & Surrounds, Durban</span>
          </motion.div>

          <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold text-hero-foreground leading-[1.1] mb-3 sm:mb-4">
            JR's{" "}
            <span className="text-primary">Device</span>{" "}
            Care
          </h1>

          <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
            {[
              { icon: Wrench, label: "repairs" },
              { icon: Settings, label: "maintenance" },
              { icon: Activity, label: "diagnostics" },
              { icon: GraduationCap, label: "academy" },
            ].map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + i * 0.1 }}
                className="flex items-center gap-1 sm:gap-1.5"
              >
                <item.icon className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-primary" />
                <span className="text-hero-foreground/70 text-xs sm:text-sm md:text-base font-medium uppercase tracking-wider">
                  {item.label}
                </span>
                {i < 3 && <span className="text-hero-foreground/30 ml-1 sm:ml-2 hidden xs:inline">|</span>}
              </motion.div>
            ))}
          </div>

          <p className="text-hero-foreground/60 text-base sm:text-lg md:text-xl max-w-xl mb-6 sm:mb-8 font-body leading-relaxed">
            Expert repairs for phones, tablets, laptops & all electronics.
            Plus: train to become a certified technician at our Academy.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
            <Button
              asChild
              size="lg"
              className="font-display font-bold text-sm sm:text-base animate-pulse-glow w-full sm:w-auto"
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
              className="font-display font-semibold text-sm sm:text-base border-primary/40 text-primary bg-primary/10 hover:bg-primary/20 hover:text-primary w-full sm:w-auto"
            >
              <a href="#academy">
                <GraduationCap className="w-5 h-5 mr-2" />
                Join the Academy
              </a>
            </Button>
          </div>
        </motion.div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-20 sm:h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default HeroSection;
