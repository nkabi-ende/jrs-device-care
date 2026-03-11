import { motion } from "framer-motion";
import { Zap, ShieldCheck, BadgeDollarSign, Smartphone, Quote } from "lucide-react";

const points = [
  { icon: Zap, title: "Fast Turnaround", desc: "Most repairs completed same-day or within 24 hours." },
  { icon: ShieldCheck, title: "Quality Parts", desc: "We use only tested, high-quality replacement parts." },
  { icon: BadgeDollarSign, title: "Affordable Pricing", desc: "Competitive rates with no hidden charges." },
  { icon: Smartphone, title: "All Devices Welcome", desc: "Phones, tablets, laptops — we fix them all." },
];

const testimonials = [
  { name: "Thando M.", text: "JR fixed my Samsung screen in under 2 hours. Amazing service and great price!", rating: 5 },
  { name: "Priya N.", text: "My laptop was overheating badly. They diagnosed and fixed it the same day. Highly recommend!", rating: 5 },
  { name: "David K.", text: "Affordable iPhone battery replacement. Phone feels brand new again. Thanks JR!", rating: 5 },
];

const WhyChooseUs = () => (
  <section id="why-us" className="py-16 sm:py-20 md:py-28 bg-muted/50">
    <div className="container px-4 sm:px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-10 sm:mb-14"
      >
        <span className="text-primary font-display font-semibold text-sm uppercase tracking-widest">Why Us</span>
        <h2 className="font-display text-2xl sm:text-3xl md:text-5xl font-bold mt-2 mb-4">Why Choose JR's Device Care</h2>
      </motion.div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-12 sm:mb-16">
        {points.map((p, i) => (
          <motion.div
            key={p.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="text-center"
          >
            <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-3 sm:mb-4">
              <p.icon className="w-6 h-6 sm:w-7 sm:h-7 text-primary" />
            </div>
            <h3 className="font-display font-bold text-sm sm:text-lg mb-1 sm:mb-2">{p.title}</h3>
            <p className="text-muted-foreground text-xs sm:text-sm">{p.desc}</p>
          </motion.div>
        ))}
      </div>

      {/* Testimonials */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 max-w-4xl mx-auto">
        {testimonials.map((t, i) => (
          <motion.div
            key={t.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="bg-card border border-border rounded-xl p-5 sm:p-6"
          >
            <Quote className="w-5 h-5 text-primary/40 mb-3" />
            <p className="text-sm text-foreground/80 mb-4">{t.text}</p>
            <div className="flex items-center gap-2">
              <div className="flex">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <span key={j} className="text-primary text-sm">★</span>
                ))}
              </div>
              <span className="text-sm font-semibold">{t.name}</span>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default WhyChooseUs;
