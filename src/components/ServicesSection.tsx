import { motion } from "framer-motion";
import { Smartphone, Tablet, Laptop, Monitor, Battery, Zap, Search, Wrench, ArrowUpRight, Building2 } from "lucide-react";

const services = [
  { icon: Monitor, title: "Screen Repairs", desc: "Cracked or damaged phone, tablet & laptop screens — restored with quality parts.", tag: "Most popular" },
  { icon: Battery, title: "Battery Replacement", desc: "Restore device life with same-day battery swaps in Newlands West.", tag: "Same day" },
  { icon: Zap, title: "Charging Faults", desc: "Charging port and power delivery repairs for all device brands.", tag: "From R300" },
  { icon: Search, title: "Diagnostics", desc: "Full device diagnostics to identify and resolve any issue — free quote.", tag: "Free quote" },
];

const devices = [
  { icon: Smartphone, label: "Phones" },
  { icon: Tablet, label: "Tablets" },
  { icon: Laptop, label: "Laptops" },
  { icon: Wrench, label: "Other Electronics" },
];

const ServicesSection = () => (
  <section id="services" className="relative py-20 sm:py-28 md:py-32 bg-background overflow-hidden">
    <div className="container px-4 sm:px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16"
      >
        <div className="max-w-2xl">
          <span className="text-primary font-display font-semibold text-xs uppercase tracking-widest">What we fix</span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mt-2 leading-[1.05]">
            Repairs that actually
            <br />
            <span className="font-serif-display italic text-gradient font-normal">last</span>.
          </h2>
        </div>
        <p className="text-muted-foreground max-w-md text-sm sm:text-base">
          From cracked screens to charging faults — expert phone, tablet & laptop repairs in Newlands West, Durban.
          30-day warranty on every job.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-12 sm:mb-16">
        {services.map((s, i) => (
          <motion.a
            key={s.title}
            href="#book"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            className="group relative bg-card border border-border rounded-2xl p-5 sm:p-6 hover:border-primary/40 hover:shadow-soft transition-all duration-300 hover:-translate-y-1 overflow-hidden"
          >
            <div className="absolute -top-12 -right-12 w-32 h-32 rounded-full bg-primary/0 group-hover:bg-primary/5 blur-2xl transition-colors duration-500" />
            <div className="relative flex items-start justify-between mb-4">
              <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                <s.icon className="w-5 h-5 sm:w-6 sm:h-6 text-primary group-hover:text-primary-foreground transition-colors" />
              </div>
              <span className="text-[10px] uppercase tracking-wider font-semibold text-muted-foreground bg-muted/60 rounded-full px-2.5 py-1">
                {s.tag}
              </span>
            </div>
            <h3 className="font-display font-bold text-base sm:text-lg mb-1.5 flex items-center gap-1">
              {s.title}
              <ArrowUpRight className="w-4 h-4 text-primary opacity-0 group-hover:opacity-100 -translate-x-1 group-hover:translate-x-0 transition-all" />
            </h3>
            <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed">{s.desc}</p>
          </motion.a>
        ))}
      </div>

      {/* Corporate mention */}
      <motion.a
        href="/corporate"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="group block bg-hero-bg border border-hero-foreground/10 rounded-2xl p-5 sm:p-6 mb-12 sm:mb-16 hover:border-primary/40 transition-all duration-300"
      >
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-start sm:items-center gap-4">
            <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
              <Building2 className="w-5 h-5 sm:w-6 sm:h-6 text-primary group-hover:text-primary-foreground transition-colors" />
            </div>
            <div>
              <h3 className="font-display font-bold text-base sm:text-lg text-hero-foreground flex items-center gap-1">
                Corporate Repairs
                <ArrowUpRight className="w-4 h-4 text-primary opacity-0 group-hover:opacity-100 -translate-x-1 group-hover:translate-x-0 transition-all" />
              </h3>
              <p className="text-hero-foreground/60 text-xs sm:text-sm leading-relaxed">
                Volume pricing, scheduled collections & dedicated support for businesses, schools & organisations.
              </p>
            </div>
          </div>
          <span className="shrink-0 text-primary text-xs sm:text-sm font-display font-semibold group-hover:underline">
            Get a corporate quote
          </span>
        </div>
      </motion.a>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="flex flex-wrap justify-center items-center gap-x-8 gap-y-3 py-5 border-y border-border"
      >
        <span className="text-xs uppercase tracking-widest text-muted-foreground font-semibold">We service</span>
        {devices.map((d) => (
          <div key={d.label} className="flex items-center gap-2 text-foreground/70">
            <d.icon className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
            <span className="font-medium text-xs sm:text-sm">{d.label}</span>
          </div>
        ))}
      </motion.div>
    </div>
  </section>
);

export default ServicesSection;
