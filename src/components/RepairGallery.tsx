import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

import before1 from "@/assets/repair-before-1.jpg";
import after1 from "@/assets/repair-after-1.jpg";
import before2 from "@/assets/repair-before-2.jpg";
import after2 from "@/assets/repair-after-2.jpg";
import before3 from "@/assets/repair-before-3.jpg";
import after3 from "@/assets/repair-after-3.jpg";
import before4 from "@/assets/repair-before-4.jpg";
import after4 from "@/assets/repair-after-4.jpg";

const repairs = [
  {
    before: before1,
    after: after1,
    title: "iPhone Screen Repair",
    description: "Shattered screen replaced with brand new display",
  },
  {
    before: before2,
    after: after2,
    title: "Battery Replacement",
    description: "Swollen battery safely removed and replaced",
  },
  {
    before: before3,
    after: after3,
    title: "Laptop Screen Fix",
    description: "Cracked laptop display restored to perfect condition",
  },
  {
    before: before4,
    after: after4,
    title: "Tablet Water Damage",
    description: "Water-damaged tablet fully restored and functional",
  },
];

const RepairGallery = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [showAfter, setShowAfter] = useState<Record<number, boolean>>({});

  const toggleImage = (index: number) => {
    setShowAfter((prev) => ({ ...prev, [index]: !prev[index] }));
  };

  const next = () => setActiveIndex((i) => (i + 1) % repairs.length);
  const prev = () => setActiveIndex((i) => (i - 1 + repairs.length) % repairs.length);

  return (
    <section className="py-20 bg-dark-section" id="gallery">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="font-display text-3xl md:text-5xl font-bold text-dark-section-foreground mb-4">
            Real <span className="text-primary">Repairs</span>, Real Results
          </h2>
          <p className="text-dark-section-foreground/60 text-lg max-w-xl mx-auto">
            Tap any image to see the before &amp; after transformation
          </p>
        </motion.div>

        {/* Desktop grid */}
        <div className="hidden md:grid grid-cols-2 lg:grid-cols-4 gap-6">
          {repairs.map((repair, index) => (
            <motion.div
              key={repair.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group cursor-pointer"
              onClick={() => toggleImage(index)}
            >
              <div className="relative aspect-square rounded-xl overflow-hidden border border-primary/10">
                <img
                  src={showAfter[index] ? repair.after : repair.before}
                  alt={`${showAfter[index] ? "After" : "Before"} - ${repair.title}`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {/* Label badge */}
                <div
                  className={`absolute top-3 left-3 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${
                    showAfter[index]
                      ? "bg-green-500/90 text-white"
                      : "bg-destructive/90 text-destructive-foreground"
                  }`}
                >
                  {showAfter[index] ? "After" : "Before"}
                </div>
                {/* Tap hint */}
                <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/10 transition-colors flex items-center justify-center">
                  <span className="opacity-0 group-hover:opacity-100 transition-opacity text-white font-display font-semibold text-sm bg-foreground/60 px-4 py-2 rounded-full flex items-center gap-2">
                    Tap to see {showAfter[index] ? "before" : "after"}
                    <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </div>
              <h3 className="font-display font-bold text-dark-section-foreground mt-3 text-sm">
                {repair.title}
              </h3>
              <p className="text-dark-section-foreground/50 text-xs mt-1">
                {repair.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Mobile carousel */}
        <div className="md:hidden">
          <div className="relative">
            <motion.div
              key={`${activeIndex}-${showAfter[activeIndex]}`}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
              className="cursor-pointer"
              onClick={() => toggleImage(activeIndex)}
            >
              <div className="relative aspect-square rounded-xl overflow-hidden border border-primary/10">
                <img
                  src={showAfter[activeIndex] ? repairs[activeIndex].after : repairs[activeIndex].before}
                  alt={`${showAfter[activeIndex] ? "After" : "Before"} - ${repairs[activeIndex].title}`}
                  className="w-full h-full object-cover"
                />
                <div
                  className={`absolute top-3 left-3 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${
                    showAfter[activeIndex]
                      ? "bg-green-500/90 text-white"
                      : "bg-destructive/90 text-destructive-foreground"
                  }`}
                >
                  {showAfter[activeIndex] ? "After" : "Before"}
                </div>
                <div className="absolute bottom-3 left-1/2 -translate-x-1/2 text-white font-display font-semibold text-sm bg-foreground/60 px-4 py-2 rounded-full flex items-center gap-2">
                  Tap to see {showAfter[activeIndex] ? "before" : "after"}
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </motion.div>

            <h3 className="font-display font-bold text-dark-section-foreground mt-4 text-center">
              {repairs[activeIndex].title}
            </h3>
            <p className="text-dark-section-foreground/50 text-sm text-center mt-1">
              {repairs[activeIndex].description}
            </p>

            <div className="flex items-center justify-center gap-4 mt-6">
              <Button
                variant="outline"
                size="icon"
                onClick={prev}
                className="border-primary/30 text-primary hover:bg-primary/10"
              >
                <ChevronLeft className="w-5 h-5" />
              </Button>
              <div className="flex gap-2">
                {repairs.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveIndex(i)}
                    className={`w-2.5 h-2.5 rounded-full transition-colors ${
                      i === activeIndex ? "bg-primary" : "bg-dark-section-foreground/20"
                    }`}
                  />
                ))}
              </div>
              <Button
                variant="outline"
                size="icon"
                onClick={next}
                className="border-primary/30 text-primary hover:bg-primary/10"
              >
                <ChevronRight className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RepairGallery;
