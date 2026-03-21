import { motion } from "framer-motion";
import { GraduationCap, Users, Calendar, Clock, Wrench, Award, CheckCircle, MessageCircle, Cpu, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

const curriculum = [
  { icon: Cpu, title: "Device Anatomy & Theory", desc: "Understand how phones, tablets & laptops are built at component level." },
  { icon: Wrench, title: "Screen & LCD Replacement", desc: "Hands-on training replacing screens on entry to premium devices." },
  { icon: Zap, title: "Charging & Power Systems", desc: "Diagnose and repair charging ports, ICs, and battery circuits." },
  { icon: Award, title: "Soldering & Micro-Repair", desc: "Learn precision soldering techniques for board-level repairs." },
];

const highlights = [
  "Practical hands-on training with real devices",
  "Small class sizes — max 15 students",
  "Industry-relevant skills from Day 1",
  "Tools & starter kit included",
  "Certificate of completion",
  "Post-course mentorship & support",
];

const AcademySection = () => (
  <section id="academy" className="py-16 sm:py-20 md:py-28 bg-dark-section relative overflow-hidden">
    {/* Background accent */}
    <div className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full bg-primary/5 blur-[120px] pointer-events-none" />

    <div className="container px-4 sm:px-6 relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-10 sm:mb-14"
      >
        <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-1.5 mb-4">
          <GraduationCap className="w-4 h-4 text-primary" />
          <span className="text-xs sm:text-sm font-semibold text-primary uppercase tracking-wider">New Offering</span>
        </div>
        <h2 className="font-display text-2xl sm:text-3xl md:text-5xl font-bold mt-2 mb-3 sm:mb-4 text-dark-section-foreground">
          JR's Device Care <span className="text-primary">Academy</span>
        </h2>
        <p className="text-dark-section-foreground/60 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
          Launch your career in electronics repair. Our intensive 2–3 week hands-on training program
          equips you with the practical skills to diagnose, repair, and maintain modern devices.
        </p>
      </motion.div>

      {/* Key info cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 max-w-4xl mx-auto mb-10 sm:mb-14">
        {[
          { icon: Calendar, label: "April 2026", sub: "Next Intake" },
          { icon: Clock, label: "2–3 Weeks", sub: "Duration" },
          { icon: Users, label: "15 Students", sub: "Class Size" },
          { icon: Award, label: "R5,000", sub: "Per Student" },
        ].map((item, i) => (
          <motion.div
            key={item.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="bg-hero-bg/50 border border-dark-section-foreground/10 rounded-xl p-4 sm:p-5 text-center"
          >
            <item.icon className="w-6 h-6 text-primary mx-auto mb-2" />
            <p className="font-display font-bold text-dark-section-foreground text-sm sm:text-lg">{item.label}</p>
            <p className="text-dark-section-foreground/50 text-xs sm:text-sm">{item.sub}</p>
          </motion.div>
        ))}
      </div>

      {/* Curriculum grid */}
      <div className="mb-10 sm:mb-14">
        <motion.h3
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="font-display font-bold text-lg sm:text-2xl text-dark-section-foreground text-center mb-6 sm:mb-8"
        >
          What You'll Learn
        </motion.h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 max-w-3xl mx-auto">
          {curriculum.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex gap-3 sm:gap-4 bg-hero-bg/30 border border-dark-section-foreground/10 rounded-xl p-4 sm:p-5 hover:border-primary/30 transition-colors"
            >
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                <item.icon className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
              </div>
              <div>
                <h4 className="font-display font-bold text-sm sm:text-base text-dark-section-foreground mb-1">{item.title}</h4>
                <p className="text-dark-section-foreground/50 text-xs sm:text-sm">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Highlights + CTA */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-4xl mx-auto items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h3 className="font-display font-bold text-lg sm:text-xl text-dark-section-foreground mb-4 sm:mb-5">
            Why Train With Us?
          </h3>
          <div className="space-y-2.5 sm:space-y-3">
            {highlights.map((h) => (
              <div key={h} className="flex items-start gap-2.5">
                <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-primary shrink-0 mt-0.5" />
                <span className="text-dark-section-foreground/70 text-sm sm:text-base">{h}</span>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-primary/10 border border-primary/30 rounded-2xl p-6 sm:p-8 text-center"
        >
          <GraduationCap className="w-10 h-10 sm:w-12 sm:h-12 text-primary mx-auto mb-4" />
          <h4 className="font-display font-bold text-xl sm:text-2xl text-dark-section-foreground mb-2">Enrol Now</h4>
          <p className="text-dark-section-foreground/60 text-sm mb-2">April 2026 intake — Limited to 15 seats</p>
          <p className="font-display font-bold text-2xl sm:text-3xl text-primary mb-5">R5,000</p>
          <div className="flex flex-col gap-3">
            <Button asChild size="lg" className="w-full font-display font-bold animate-pulse-glow">
              <a
                href="https://wa.me/27716865256?text=Hi%20JR's%20Device%20Care!%20I'm%20interested%20in%20the%20Academy%20training%20course%20in%20April.%20Please%20send%20me%20more%20details!"
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Enrol via WhatsApp
              </a>
            </Button>
            <Button asChild variant="outline" size="lg" className="w-full font-display font-semibold border-primary/40 text-primary hover:bg-primary/20 hover:text-primary">
              <a href="#book">Apply Online</a>
            </Button>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default AcademySection;
