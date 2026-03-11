import { motion } from "framer-motion";
import { Smartphone, Tablet, Laptop, Monitor, Battery, Zap, Search, Wrench } from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  { icon: Monitor, title: "Screen Repairs", desc: "Cracked or damaged screens fixed with quality replacement parts." },
  { icon: Battery, title: "Battery Replacement", desc: "Restore your device's battery life with genuine replacements." },
  { icon: Zap, title: "Charging Faults", desc: "Diagnose and fix charging port and power delivery issues." },
  { icon: Search, title: "Diagnostics & Repairs", desc: "Full device diagnostics to identify and resolve any issue." },
];

const devices = [
  { icon: Smartphone, label: "Phones" },
  { icon: Tablet, label: "Tablets" },
  { icon: Laptop, label: "Laptops" },
  { icon: Wrench, label: "Other Electronics" },
];

const ServicesSection = () => (
  <section id="services" className="py-16 sm:py-20 md:py-28 bg-background">
    <div className="container px-4 sm:px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-10 sm:mb-14"
      >
        <span className="text-primary font-display font-semibold text-sm uppercase tracking-widest">What We Fix</span>
        <h2 className="font-display text-2xl sm:text-3xl md:text-5xl font-bold mt-2 mb-3 sm:mb-4">Our Services</h2>
        <p className="text-muted-foreground max-w-xl mx-auto text-sm sm:text-base">
          From cracked screens to software issues — we handle it all with speed and precision.
        </p>
      </motion.div>

      {/* Service cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6 mb-10 sm:mb-14">
        {services.map((s, i) => (
          <motion.div
            key={s.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="group bg-card border border-border rounded-xl p-4 sm:p-6 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300"
          >
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-3 sm:mb-4 group-hover:bg-primary/20 transition-colors">
              <s.icon className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
            </div>
            <h3 className="font-display font-bold text-sm sm:text-lg mb-1 sm:mb-2">{s.title}</h3>
            <p className="text-muted-foreground text-xs sm:text-sm mb-3 sm:mb-4 line-clamp-3">{s.desc}</p>
            <Button asChild variant="ghost" size="sm" className="text-primary hover:text-primary font-semibold p-0 h-auto text-xs sm:text-sm">
              <a href="#book">Book Now →</a>
            </Button>
          </motion.div>
        ))}
      </div>

      {/* Device types */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="flex flex-wrap justify-center gap-4 sm:gap-6"
      >
        {devices.map((d) => (
          <div key={d.label} className="flex items-center gap-1.5 sm:gap-2 text-muted-foreground">
            <d.icon className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
            <span className="font-medium text-xs sm:text-sm">{d.label}</span>
          </div>
        ))}
      </motion.div>
    </div>
  </section>
);

export default ServicesSection;
