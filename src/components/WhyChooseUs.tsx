import { motion } from "framer-motion";
import { Zap, ShieldCheck, BadgeDollarSign, Smartphone, Quote, Star } from "lucide-react";

const points = [
  { icon: Zap, title: "Same-day", desc: "Most repairs completed in under 4 hours." },
  { icon: ShieldCheck, title: "30-day warranty", desc: "Tested OEM-grade parts on every repair." },
  { icon: BadgeDollarSign, title: "Honest pricing", desc: "Free diagnostics. No hidden fees." },
  { icon: Smartphone, title: "Every device", desc: "Phones, tablets, laptops & electronics." },
];

const testimonials = [
  { name: "Thando M.", role: "Newlands West", text: "JR fixed my Samsung screen in under 2 hours. Amazing service and great price!", rating: 5 },
  { name: "Priya N.", role: "Phoenix", text: "My laptop was overheating badly. They diagnosed and fixed it the same day. Highly recommend!", rating: 5 },
  { name: "David K.", role: "Durban North", text: "Affordable iPhone battery replacement. Phone feels brand new again. Thanks JR!", rating: 5 },
];

const WhyChooseUs = () => (
  <section id="why-us" className="relative py-20 sm:py-28 md:py-32 bg-background overflow-hidden">
    <div className="container px-4 sm:px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center max-w-2xl mx-auto mb-12 sm:mb-16"
      >
        <span className="text-primary font-display font-semibold text-xs uppercase tracking-widest">Why us</span>
        <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mt-2 leading-[1.05]">
          Built on{" "}
          <span className="font-serif-display italic text-gradient font-normal">trust</span>,
          backed by results.
        </h2>
      </motion.div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-5 mb-16 sm:mb-20">
        {points.map((p, i) => (
          <motion.div
            key={p.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            className="group bg-card border border-border rounded-2xl p-5 sm:p-7 hover:border-primary/30 transition-all hover:-translate-y-1"
          >
            <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center mb-4 group-hover:from-primary group-hover:to-primary-glow transition-all">
              <p.icon className="w-6 h-6 sm:w-7 sm:h-7 text-primary group-hover:text-primary-foreground transition-colors" />
            </div>
            <h3 className="font-display font-bold text-base sm:text-xl mb-1.5">{p.title}</h3>
            <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed">{p.desc}</p>
          </motion.div>
        ))}
      </div>

      <div className="text-center mb-8">
        <div className="inline-flex items-center gap-2">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star key={i} className="w-5 h-5 text-primary fill-primary" />
          ))}
          <span className="ml-2 text-sm text-muted-foreground">5.0 from real Durban customers</span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5 max-w-5xl mx-auto">
        {testimonials.map((t, i) => (
          <motion.div
            key={t.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="bg-card border border-border rounded-2xl p-6 hover:shadow-soft transition-shadow"
          >
            <Quote className="w-6 h-6 text-primary/30 mb-3" />
            <p className="text-sm text-foreground/80 mb-5 leading-relaxed">"{t.text}"</p>
            <div className="flex items-center justify-between pt-4 border-t border-border">
              <div>
                <p className="font-display font-bold text-sm">{t.name}</p>
                <p className="text-xs text-muted-foreground">{t.role}</p>
              </div>
              <div className="flex">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star key={j} className="w-3.5 h-3.5 text-primary fill-primary" />
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default WhyChooseUs;
