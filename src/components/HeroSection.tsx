import { motion } from "framer-motion";
import { MessageCircle, MapPin, Wrench, GraduationCap, ArrowDown, Sparkles, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

const TRUST = [
  "Same-day repairs", "30-day warranty", "Free diagnostics",
  "OEM-grade parts", "Newlands West, Durban", "Academy enrolling",
  "iPhone · Samsung · Huawei", "20+ device brands",
];

const HeroSection = () => {
  return (
    <section className="relative min-h-[100svh] flex flex-col bg-hero-bg overflow-hidden noise">
      {/* Layered backgrounds */}
      <div className="absolute inset-0 bg-mesh pointer-events-none" />
      <div className="absolute inset-0 bg-grid pointer-events-none" />
      <div className="absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full bg-primary/20 blur-[120px] pointer-events-none animate-float-slow" />
      <div className="absolute bottom-0 -left-32 w-[400px] h-[400px] rounded-full bg-primary-glow/15 blur-[100px] pointer-events-none" />

      <div className="container relative z-10 flex-1 flex items-center pt-24 pb-16 sm:pt-28 md:pt-32 px-5 sm:px-6">
        <div className="w-full grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left: copy */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-7 max-w-3xl"
          >
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 glass rounded-full pl-1.5 pr-3.5 py-1 mb-5 sm:mb-7"
            >
              <span className="flex items-center gap-1 bg-primary text-primary-foreground rounded-full px-2 py-0.5 text-[10px] sm:text-xs font-bold uppercase tracking-wider">
                <Sparkles className="w-3 h-3" /> Live
              </span>
              <span className="text-xs sm:text-sm font-medium text-hero-foreground/80 flex items-center gap-1.5">
                <MapPin className="w-3 h-3 text-primary" /> Newlands West, Durban
              </span>
            </motion.div>

            <h1 className="font-display text-[2.5rem] leading-[0.95] sm:text-5xl md:text-6xl lg:text-7xl xl:text-[5.5rem] font-bold text-hero-foreground mb-5 sm:mb-6">
              Devices,{" "}
              <span className="font-serif-display italic text-gradient font-normal">repaired</span>
              <br />
              with care.
              <br />
              <span className="text-hero-foreground/40 font-serif-display italic font-normal">Technicians, trained.</span>
            </h1>

            <p className="text-hero-foreground/60 text-base sm:text-lg md:text-xl max-w-xl mb-7 sm:mb-9 font-body leading-relaxed">
              Durban's premier workshop for phone, tablet & laptop repairs — and home of the
              <span className="text-primary font-medium"> JR's Device Care Academy</span>, training the next generation of electronics technicians.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-8">
              <Button
                asChild
                size="lg"
                className="font-display font-bold text-sm sm:text-base h-12 sm:h-14 px-6 sm:px-8 rounded-full shadow-glow group"
              >
                <a
                  href="https://wa.me/27716865256?text=Hi%20JR's%20Device%20Care!%20I'd%20like%20a%20quote%20for%20a%20repair."
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle className="w-5 h-5 mr-1 transition-transform group-hover:rotate-12" />
                  Get a Free Quote
                  <span className="ml-1 transition-transform group-hover:translate-x-1">→</span>
                </a>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="font-display font-semibold text-sm sm:text-base h-12 sm:h-14 px-6 sm:px-8 rounded-full bg-transparent border-hero-foreground/20 text-hero-foreground hover:bg-hero-foreground/5 hover:text-primary hover:border-primary/40"
              >
                <a href="#academy">
                  <GraduationCap className="w-5 h-5 mr-1" />
                  Explore the Academy
                </a>
              </Button>
            </div>

            {/* Stats row */}
            <div className="flex flex-wrap items-center gap-x-6 gap-y-3 sm:gap-x-10">
              {[
                { num: "1,200+", label: "Devices repaired" },
                { num: "24h", label: "Avg. turnaround" },
                { num: "30-day", label: "Warranty" },
              ].map((s, i) => (
                <motion.div
                  key={s.label}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 + i * 0.1 }}
                  className="flex flex-col"
                >
                  <span className="font-display font-bold text-xl sm:text-2xl text-hero-foreground">{s.num}</span>
                  <span className="text-xs text-hero-foreground/50 uppercase tracking-wider">{s.label}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right: visual card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="lg:col-span-5 hidden lg:block"
          >
            <div className="relative">
              {/* Floating orbs */}
              <motion.div
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-6 -left-6 glass rounded-2xl p-4 z-20 shadow-elegant"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center">
                    <Zap className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-hero-foreground font-display font-bold text-sm">Same-day fix</p>
                    <p className="text-hero-foreground/50 text-xs">Most repairs &lt; 4 hours</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute -bottom-4 -right-2 glass rounded-2xl p-4 z-20 shadow-elegant"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center">
                    <GraduationCap className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-hero-foreground font-display font-bold text-sm">Academy</p>
                    <p className="text-hero-foreground/50 text-xs">April 2026 · 20 seats</p>
                  </div>
                </div>
              </motion.div>

              {/* Main card */}
              <div className="relative aurora rounded-[2rem] p-1 shadow-glow">
                <div className="bg-hero-bg rounded-[1.85rem] p-8 aspect-[4/5] flex flex-col justify-between relative overflow-hidden">
                  <div className="absolute inset-0 bg-mesh opacity-60" />
                  <div className="relative z-10">
                    <div className="inline-flex items-center gap-1.5 bg-primary/10 border border-primary/20 rounded-full px-3 py-1 mb-6">
                      <Wrench className="w-3 h-3 text-primary" />
                      <span className="text-xs font-medium text-primary uppercase tracking-wider">Repair Workshop</span>
                    </div>
                    <h3 className="font-display text-3xl font-bold text-hero-foreground mb-2 leading-tight">
                      Phones.<br />Tablets.<br />Laptops.
                    </h3>
                    <p className="text-hero-foreground/50 text-sm">All brands. All issues. One trusted workshop in Durban.</p>
                  </div>
                  <div className="relative z-10 grid grid-cols-3 gap-2">
                    {["iPhone", "Samsung", "Huawei", "Xiaomi", "Lenovo", "HP"].map((b) => (
                      <div key={b} className="bg-hero-foreground/5 border border-hero-foreground/10 rounded-lg py-2 text-center text-[11px] text-hero-foreground/70 font-medium">
                        {b}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Trust marquee */}
      <div className="relative z-10 border-t border-hero-foreground/10 py-4 overflow-hidden bg-hero-bg/40 backdrop-blur-sm">
        <div className="flex animate-marquee whitespace-nowrap">
          {[...TRUST, ...TRUST].map((t, i) => (
            <span key={i} className="mx-6 text-xs sm:text-sm text-hero-foreground/40 font-medium uppercase tracking-widest flex items-center gap-6">
              {t}
              <span className="w-1 h-1 rounded-full bg-primary/40" />
            </span>
          ))}
        </div>
      </div>

      {/* Scroll cue */}
      <motion.a
        href="#services"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-20 left-1/2 -translate-x-1/2 z-10 hidden md:flex flex-col items-center gap-1 text-hero-foreground/40 hover:text-primary transition-colors"
        aria-label="Scroll down"
      >
        <span className="text-[10px] uppercase tracking-widest">Scroll</span>
        <ArrowDown className="w-4 h-4" />
      </motion.a>
    </section>
  );
};

export default HeroSection;
