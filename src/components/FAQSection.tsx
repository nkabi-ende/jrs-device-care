import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, MessageCircle, Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const faqs = [
  {
    category: "Repairs",
    items: [
      { q: "How long does a screen repair take?", a: "Most screen repairs are completed within 1–2 hours. For rarer models that require special parts, it may take up to 24 hours. We'll always give you an accurate time estimate before starting." },
      { q: "Do you use original parts?", a: "We use high-quality OEM-compatible parts that match or exceed original specifications. For premium devices, we can source genuine parts on request — just let us know your preference." },
      { q: "Is there a warranty on repairs?", a: "Yes! All repairs come with a 30-day warranty covering the specific part replaced and the labour. If anything goes wrong with the repair, bring it back and we'll sort it out — no extra charge." },
      { q: "Can you fix water-damaged devices?", a: "We can! Water damage repair involves ultrasonic cleaning, component-level diagnostics, and replacing any corroded parts. Success rates depend on how quickly you bring it in — the sooner the better." },
    ],
  },
  {
    category: "Pricing & Payment",
    items: [
      { q: "How much does a repair cost?", a: "Pricing depends on the device model and the type of repair. Entry-level screen repairs start from R400, batteries from R350. Check our Pricing section for detailed ranges, or WhatsApp us your model for an exact quote." },
      { q: "Do I need to pay upfront?", a: "No upfront payment required. We diagnose your device for free, give you a quote, and you only pay once the repair is complete and you're satisfied." },
      { q: "What payment methods do you accept?", a: "We accept cash, EFT/bank transfer, and mobile payments. Whatever's most convenient for you." },
    ],
  },
  {
    category: "Process",
    items: [
      { q: "Do I need to book an appointment?", a: "Walk-ins are welcome, but booking via WhatsApp helps us prepare the right parts in advance so your repair is faster. Just send us your device model and issue." },
      { q: "Can you repair my device on-site?", a: "We primarily operate from our Newlands West location, but for bulk or corporate repairs, we can arrange collection and delivery in the Durban area." },
      { q: "What if my device can't be repaired?", a: "If we determine your device isn't repairable, there's no charge. We'll explain what went wrong and advise you on your best options moving forward." },
    ],
  },
  {
    category: "Academy",
    items: [
      { q: "Who is the Academy course for?", a: "The course is designed for anyone wanting to enter the device repair industry — from complete beginners to those with some DIY experience looking to formalise their skills. No prior qualifications needed." },
      { q: "What does the R5,000 course fee include?", a: "The fee covers 2–3 weeks of intensive hands-on training, all learning materials, a starter toolkit, practice devices, and a certificate of completion. There are no hidden costs." },
      { q: "When does the next intake start?", a: "The next intake is in April 2026. Class size is limited to 15 students to ensure personalised attention. WhatsApp us to reserve your seat before it fills up." },
      { q: "Will I be able to start working after the course?", a: "Absolutely. The curriculum is designed to make you job-ready. You'll learn practical, in-demand skills — screen replacements, soldering, diagnostics — and receive post-course mentorship to help you launch." },
    ],
  },
];

const FAQItem = ({ q, a }: { q: string; a: string }) => {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      layout
      className="border border-border rounded-xl overflow-hidden bg-card hover:border-primary/30 transition-colors"
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between gap-3 px-4 sm:px-5 py-3.5 sm:py-4 text-left"
      >
        <span className="font-display font-semibold text-xs sm:text-sm md:text-base text-foreground">{q}</span>
        <motion.div
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.2 }}
          className="shrink-0"
        >
          <ChevronDown className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
        </motion.div>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <p className="px-4 sm:px-5 pb-4 sm:pb-5 text-xs sm:text-sm text-muted-foreground leading-relaxed">{a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const FAQSection = () => {
  const [activeCategory, setActiveCategory] = useState("Repairs");
  const [search, setSearch] = useState("");

  const filtered = faqs
    .filter((c) => (search ? true : c.category === activeCategory))
    .flatMap((c) =>
      c.items.filter(
        (item) =>
          item.q.toLowerCase().includes(search.toLowerCase()) ||
          item.a.toLowerCase().includes(search.toLowerCase())
      )
    );

  return (
    <section id="faq" className="py-16 sm:py-20 md:py-28 bg-background">
      <div className="container max-w-3xl px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-8 sm:mb-10"
        >
          <span className="text-primary font-display font-semibold text-sm uppercase tracking-widest">FAQ</span>
          <h2 className="font-display text-2xl sm:text-3xl md:text-5xl font-bold mt-2 mb-3 sm:mb-4">Got Questions?</h2>
          <p className="text-muted-foreground max-w-md mx-auto text-sm sm:text-base">
            Find quick answers below, or WhatsApp us for anything else.
          </p>
        </motion.div>

        {/* Search */}
        <div className="relative mb-6 sm:mb-8">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <Input
            placeholder="Search questions..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="pl-10 bg-card border-border h-11 sm:h-10"
          />
        </div>

        {/* Category tabs */}
        {!search && (
          <div className="flex gap-2 mb-6 sm:mb-8 overflow-x-auto pb-1 -mx-4 px-4 sm:mx-0 sm:px-0 sm:flex-wrap scrollbar-hide">
            {faqs.map((c) => (
              <button
                key={c.category}
                onClick={() => setActiveCategory(c.category)}
                className={`px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-all whitespace-nowrap shrink-0 ${
                  activeCategory === c.category
                    ? "bg-primary text-primary-foreground shadow-md"
                    : "bg-muted text-muted-foreground hover:text-foreground"
                }`}
              >
                {c.category}
              </button>
            ))}
          </div>
        )}

        {/* FAQ items */}
        <div className="space-y-2 sm:space-y-3">
          <AnimatePresence mode="wait">
            {filtered.length > 0 ? (
              filtered.map((item, i) => (
                <motion.div
                  key={item.q}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.04 }}
                >
                  <FAQItem q={item.q} a={item.a} />
                </motion.div>
              ))
            ) : (
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center text-muted-foreground py-8 text-sm"
              >
                No results found. Try a different search or ask us directly!
              </motion.p>
            )}
          </AnimatePresence>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-10 sm:mt-12"
        >
          <p className="text-muted-foreground text-sm mb-4">Still have questions?</p>
          <Button asChild className="font-display font-semibold gap-2 h-11 sm:h-10">
            <a
              href="https://wa.me/27716865256?text=Hi%20JR's%20Device%20Care!%20I%20have%20a%20question."
              target="_blank"
              rel="noopener noreferrer"
            >
              <MessageCircle className="w-4 h-4" />
              Ask on WhatsApp
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQSection;
