import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  GraduationCap, Users, Calendar, Clock, Wrench, Award, CheckCircle, MessageCircle,
  Cpu, Zap, BookOpen, Briefcase, Target, Sparkles, ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const curriculum = [
  { week: "Week 1", icon: Cpu, title: "Foundations & Theory", topics: ["Device anatomy", "Tools & ESD safety", "Reading schematics", "Common fault patterns"] },
  { week: "Week 2", icon: Wrench, title: "Hands-On Repairs", topics: ["Screen & LCD swaps", "Battery replacement", "Charging port repair", "Water-damage rescue"] },
  { week: "Week 3", icon: Zap, title: "Advanced & Business", topics: ["Microsoldering basics", "Board-level diagnostics", "Pricing & customer ops", "Final practical assessment"] },
];

const outcomes = [
  { icon: Award, label: "Certificate of completion" },
  { icon: Briefcase, label: "Job-ready skills from Day 1" },
  { icon: Target, label: "Post-course mentorship" },
  { icon: BookOpen, label: "Starter toolkit included" },
];

// Countdown to April 1, 2026
const TARGET = new Date("2026-04-01T08:00:00+02:00").getTime();

const useCountdown = () => {
  const [now, setNow] = useState(Date.now());
  useEffect(() => {
    const t = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(t);
  }, []);
  const diff = Math.max(0, TARGET - now);
  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    mins: Math.floor((diff / (1000 * 60)) % 60),
    secs: Math.floor((diff / 1000) % 60),
  };
};

const AcademySection = () => {
  const { days, hours, mins, secs } = useCountdown();

  return (
    <section id="academy" className="relative py-20 sm:py-28 md:py-36 bg-hero-bg overflow-hidden noise">
      <div className="absolute inset-0 bg-mesh opacity-70 pointer-events-none" />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-primary/10 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-primary-glow/10 blur-[120px] pointer-events-none" />

      <div className="container px-4 sm:px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-12 sm:mb-16"
        >
          <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-1.5 mb-5">
            <Sparkles className="w-3.5 h-3.5 text-primary" />
            <span className="text-xs font-semibold text-primary uppercase tracking-widest">JR's Device Care Academy</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl md:text-6xl font-bold text-hero-foreground leading-[1.05] mb-5">
            Train as an{" "}
            <span className="font-serif-display italic text-gradient font-normal">electronics technician</span>
            <br className="hidden sm:block" />
            in just 2–3 weeks.
          </h2>
          <p className="text-hero-foreground/60 text-base sm:text-lg leading-relaxed">
            An intensive, hands-on program in Newlands West, Durban — designed to take you from curious beginner to
            job-ready repair technician. <span className="text-hero-foreground">Limited to 20 seats per intake.</span>
          </p>
        </motion.div>

        {/* Countdown */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto mb-12 sm:mb-16"
        >
          <div className="glass aurora rounded-2xl sm:rounded-3xl p-5 sm:p-7 text-center">
            <p className="text-xs sm:text-sm text-hero-foreground/60 uppercase tracking-widest mb-3">
              Next intake — April 1, 2026
            </p>
            <div className="grid grid-cols-4 gap-2 sm:gap-4">
              {[
                { v: days, l: "Days" },
                { v: hours, l: "Hours" },
                { v: mins, l: "Min" },
                { v: secs, l: "Sec" },
              ].map((u) => (
                <div key={u.l} className="bg-hero-bg/40 border border-hero-foreground/10 rounded-xl py-3 sm:py-4">
                  <div className="font-display font-bold text-2xl sm:text-4xl text-primary tabular-nums">
                    {String(u.v).padStart(2, "0")}
                  </div>
                  <div className="text-[10px] sm:text-xs text-hero-foreground/50 uppercase tracking-wider mt-1">{u.l}</div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Bento grid */}
        <div className="grid grid-cols-1 md:grid-cols-6 gap-3 sm:gap-4 mb-12 sm:mb-16 max-w-6xl mx-auto">
          {/* Big intro card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="md:col-span-4 glass rounded-3xl p-6 sm:p-8 relative overflow-hidden"
          >
            <div className="absolute -top-10 -right-10 w-48 h-48 rounded-full bg-primary/20 blur-3xl" />
            <div className="relative">
              <GraduationCap className="w-10 h-10 text-primary mb-4" />
              <h3 className="font-display font-bold text-2xl sm:text-3xl text-hero-foreground mb-3">
                A craft-focused program for the new repair economy.
              </h3>
              <p className="text-hero-foreground/60 text-sm sm:text-base leading-relaxed">
                Africa's repair industry is booming. We're training technicians who can diagnose, repair and run
                their own workshops — not just follow YouTube tutorials. Small classes. Real devices. Real results.
              </p>
            </div>
          </motion.div>

          {/* Price card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="md:col-span-2 bg-gradient-to-br from-primary to-primary-glow rounded-3xl p-6 sm:p-8 text-primary-foreground relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl" />
            <p className="text-xs uppercase tracking-widest font-bold opacity-70 mb-2">Course Fee</p>
            <p className="font-display font-bold text-5xl sm:text-6xl mb-1">R5,000</p>
            <p className="text-sm opacity-80">All-inclusive · No hidden fees</p>
            <div className="mt-6 pt-6 border-t border-primary-foreground/20 space-y-1.5 text-sm font-medium">
              <p>✓ All learning materials</p>
              <p>✓ Starter toolkit</p>
              <p>✓ Practice devices</p>
            </div>
          </motion.div>

          {/* Stats row */}
          {[
            { icon: Calendar, label: "April 2026", sub: "Next intake" },
            { icon: Clock, label: "2–3 Weeks", sub: "Full-time" },
            { icon: Users, label: "20 Students", sub: "Per cohort" },
            { icon: Award, label: "Certified", sub: "On completion" },
          ].map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15 + i * 0.05 }}
              className="md:col-span-2 glass rounded-2xl p-4 sm:p-5 flex items-center gap-4 hover:border-primary/30 transition-colors"
            >
              <div className="w-11 h-11 rounded-xl bg-primary/15 flex items-center justify-center shrink-0">
                <item.icon className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="font-display font-bold text-hero-foreground text-base sm:text-lg leading-tight">{item.label}</p>
                <p className="text-hero-foreground/50 text-xs sm:text-sm">{item.sub}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Curriculum timeline */}
        <div className="max-w-6xl mx-auto mb-14 sm:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-8 sm:mb-10"
          >
            <h3 className="font-display font-bold text-2xl sm:text-3xl text-hero-foreground mb-2">The curriculum</h3>
            <p className="text-hero-foreground/50 text-sm sm:text-base">Three weeks. Fully practical. Built around real workshop scenarios.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5 relative">
            {/* Connecting line */}
            <div className="hidden md:block absolute top-7 left-[16%] right-[16%] h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

            {curriculum.map((week, i) => (
              <motion.div
                key={week.week}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="relative glass rounded-2xl p-6 hover:border-primary/30 transition-all hover:-translate-y-1 duration-300"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-primary-glow flex items-center justify-center shadow-glow">
                    <week.icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <span className="text-xs font-mono text-primary/60 uppercase tracking-widest">{week.week}</span>
                </div>
                <h4 className="font-display font-bold text-lg text-hero-foreground mb-3">{week.title}</h4>
                <ul className="space-y-2">
                  {week.topics.map((t) => (
                    <li key={t} className="flex items-start gap-2 text-sm text-hero-foreground/60">
                      <CheckCircle className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                      <span>{t}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Outcomes + CTA */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-3 glass rounded-3xl p-6 sm:p-8"
          >
            <h3 className="font-display font-bold text-xl sm:text-2xl text-hero-foreground mb-5">What you walk away with</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {outcomes.map((o) => (
                <div key={o.label} className="flex items-center gap-3 bg-hero-foreground/5 rounded-xl p-3">
                  <div className="w-9 h-9 rounded-lg bg-primary/15 flex items-center justify-center shrink-0">
                    <o.icon className="w-4 h-4 text-primary" />
                  </div>
                  <span className="text-sm text-hero-foreground/80 font-medium">{o.label}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2 bg-gradient-to-br from-primary/15 to-primary-glow/10 border border-primary/30 rounded-3xl p-6 sm:p-8 text-center flex flex-col justify-center"
          >
            <p className="text-xs uppercase tracking-widest text-primary/80 font-bold mb-2">Reserve your seat</p>
            <p className="font-display font-bold text-2xl text-hero-foreground mb-1">Only 20 seats</p>
            <p className="text-hero-foreground/60 text-sm mb-5">First-come, first-served</p>

            <Button asChild size="lg" className="w-full font-display font-bold rounded-full h-12 shadow-glow group mb-3">
              <a
                href="https://wa.me/27716865256?text=Hi%20JR's%20Device%20Care!%20I'd%20like%20to%20enrol%20in%20the%20April%20Academy."
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle className="w-5 h-5" />
                Enrol via WhatsApp
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>
            </Button>
            <Button asChild variant="outline" size="lg" className="w-full font-display font-semibold rounded-full h-12 bg-transparent border-hero-foreground/20 text-hero-foreground hover:bg-hero-foreground/5 hover:text-primary hover:border-primary/40">
              <a href="#book">Apply with the form</a>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AcademySection;
