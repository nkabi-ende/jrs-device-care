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
  <section id="why-us" className="py-20 md:py-28 bg-muted/50">
    <div className="container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-14"
      >
        <span className="text-primary font-display font-semibold text-sm uppercase tracking-widest">Why Us</span>
        <h2 className="font-display text-3xl md:text-5xl font-bold mt-2 mb-4">Why Choose JR's Device Care</h2>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
        {points.map((p, i) => (
          <motion.div
            key={p.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="text-center"
          >
            <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
              <p.icon className="w-7 h-7 text-primary" />
            </div>
            <h3 className="font-display font-bold text-lg mb-2">{p.title}</h3>
            <p className="text-muted-foreground text-sm">{p.desc}</p>
          </motion.div>
        ))}
      </div>

      {/* Testimonials */}
      <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
        {testimonials.map((t, i) => (
          <motion.div
            key={t.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="bg-card border border-border rounded-xl p-6"
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
