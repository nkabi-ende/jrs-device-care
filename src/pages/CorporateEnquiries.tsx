import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import {
  Building2,
  MessageCircle,
  ClipboardList,
  ShieldCheck,
  Wrench,
  BarChart3,
  RefreshCw,
  ArrowLeft,
  Truck,
  GraduationCap,
  Headphones,
  Hotel,
  Store,
  Briefcase,
  Users,
  Activity,
  Check,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

const WA_AUDIT =
  "https://wa.me/27716865256?text=Hi%20JR's%20Device%20Care!%20I'd%20like%20to%20book%20a%20Corporate%20Electronics%20Audit.";
const WA_CONSULT =
  "https://wa.me/27716865256?text=Hi%20JR's%20Device%20Care!%20I'd%20like%20a%20free%20business%20consultation%20about%20managed%20device%20care.";

const PILLARS = [
  { n: "01", t: "Audit", icon: ClipboardList, d: "We establish exactly what you own and the condition it's in." },
  { n: "02", t: "Maintain", icon: ShieldCheck, d: "Preventative servicing reduces avoidable failures and downtime." },
  { n: "03", t: "Repair", icon: Wrench, d: "Priority diagnostics and repairs under a defined service level." },
  { n: "04", t: "Report", icon: BarChart3, d: "Management sees fleet health, costs and outstanding issues." },
  { n: "05", t: "Replace", icon: RefreshCw, d: "We flag uneconomical equipment and assist with replacement or refurbishment." },
];

const SECTORS = [
  { t: "Security Companies", icon: ShieldCheck, d: "Guard phones, patrol devices and control-room equipment." },
  { t: "Logistics & Fleets", icon: Truck, d: "Courier handsets, scanners and in-cab devices." },
  { t: "Schools & Colleges", icon: GraduationCap, d: "Learner tablets, lab laptops and staff devices." },
  { t: "Call Centres & BPO", icon: Headphones, d: "Headsets, workstations and agent hardware." },
  { t: "Hospitality Groups", icon: Hotel, d: "POS tablets, front-desk and back-office devices." },
  { t: "Retail Chains", icon: Store, d: "Till hardware, stock scanners and store laptops." },
  { t: "Professional Offices", icon: Briefcase, d: "Laptops, docks and accessories across departments." },
  { t: "Field & Sales Teams", icon: Users, d: "Devices that live in vehicles, sites and customers' premises." },
];

const SLA = [
  ["Fault acknowledgement", "Within 1 business hour"],
  ["Collection", "Same day / scheduled route"],
  ["Initial diagnosis", "Within 4 business hours"],
  ["Standard repair", "1 business day where parts are available"],
  ["Complex repair", "2–5 business days"],
  ["Critical device", "Priority queue"],
  ["Quote approval", "Digital approval"],
  ["Client updates", "WhatsApp / email"],
  ["Quality control", "Mandatory pre-return testing"],
  ["Reporting", "Monthly fleet report"],
  ["Escalation", "Named JR account contact"],
];

const TIERS = [
  {
    t: "JR Business Care",
    d: "Scheduled collection, SLA repairs and a monthly fleet report.",
    f: ["Scheduled collection route", "SLA-backed repairs", "Monthly reporting", "Device register access"],
  },
  {
    t: "JR Priority Care",
    d: "Faster response, priority queue and biannual health checks.",
    f: ["Priority repair queue", "Same-day collection windows", "Biannual health checks", "Named account contact"],
    highlight: true,
  },
  {
    t: "JR Managed Fleet",
    d: "Full lifecycle management across your entire device estate.",
    f: ["Quarterly health checks", "Parts procurement & warranty management", "Setup, refurbishment & decommissioning", "Replacement & trade-in planning"],
  },
];

const SERVICES = [
  "Preventative maintenance",
  "Diagnostics",
  "Screen, battery & port repairs",
  "Laptop servicing",
  "Software remediation",
  "Data migration",
  "Collection & delivery",
  "Emergency repairs",
  "Parts procurement",
  "Warranty management",
  "Device setup",
  "Refurbishment",
  "Secure decommissioning",
  "Replacement recommendations",
];

const CorporateEnquiries = () => (
  <div className="min-h-screen">
    <Helmet>
      <title>JR Corporate Device Care — Managed Device Servicing KZN</title>
      <meta
        name="description"
        content="Outsourced device care for KZN organisations: electronics audits, preventative servicing, SLA-backed repairs, fleet reporting and lifecycle management."
      />
      <link rel="canonical" href="https://jrs-device-care.lovable.app/corporate" />
      <meta property="og:title" content="JR Corporate Device Care — Managed Device Servicing KZN" />
      <meta property="og:description" content="Electronics auditing, preventative servicing, repairs and lifecycle management for organisations across KZN." />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://jrs-device-care.lovable.app/corporate" />
      <meta name="twitter:card" content="summary_large_image" />
    </Helmet>

    <Header />

    <main>
      {/* Hero */}
      <section className="relative pt-28 sm:pt-36 pb-14 sm:pb-20 bg-hero-bg overflow-hidden noise">
        <div className="absolute inset-0 bg-mesh opacity-40 pointer-events-none" />
        <div className="absolute -top-24 right-0 w-[500px] h-[500px] rounded-full bg-primary/5 blur-[120px] pointer-events-none" />

        <div className="container px-4 sm:px-6 relative z-10 max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-1.5 mb-6"
          >
            <Building2 className="w-4 h-4 text-primary" />
            <span className="text-primary text-xs sm:text-sm font-display font-semibold tracking-wide">JR CORPORATE DEVICE CARE</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-display text-3xl sm:text-5xl md:text-6xl font-bold text-hero-foreground leading-[1.05] mb-5"
          >
            Your team needs its devices.
            <br />
            <span className="font-serif-display italic text-gradient font-normal">We keep them working.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-hero-foreground/60 text-base sm:text-lg max-w-2xl mx-auto mb-4"
          >
            Electronics auditing, preventative servicing, repairs and lifecycle management for organisations across KZN.
          </motion.p>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.25 }}
            className="text-hero-foreground/45 text-sm font-display uppercase tracking-[0.2em] mb-8"
          >
            Audit · Maintain · Repair · Report · Replace
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-3"
          >
            <Button asChild size="lg" className="font-display font-bold rounded-full h-14 px-8 shadow-glow w-full sm:w-auto">
              <a href={WA_CONSULT} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="w-5 h-5" />
                Request a Free Business Consultation
              </a>
            </Button>
            <Button asChild variant="outline" size="lg" className="font-display font-semibold rounded-full h-14 px-6 w-full sm:w-auto border-primary/30 text-hero-foreground hover:bg-primary/10">
              <a href={WA_AUDIT} target="_blank" rel="noopener noreferrer">
                <ClipboardList className="w-4 h-4" />
                Book a Device Audit
              </a>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Five-part proposition */}
      <section className="py-16 sm:py-20 bg-background">
        <div className="container px-4 sm:px-6 max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <span className="text-primary font-display font-semibold text-sm uppercase tracking-widest">The Proposition</span>
            <h2 className="font-display text-2xl sm:text-4xl font-bold mt-2">Your outsourced device-care department</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {PILLARS.map((p, i) => (
              <motion.div
                key={p.n}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                className="bg-card border border-border rounded-2xl p-5 sm:p-6"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                    <p.icon className="w-5 h-5 text-primary" />
                  </div>
                  <span className="font-mono text-xs text-muted-foreground">{p.n}</span>
                </div>
                <h3 className="font-display font-bold text-lg mb-1.5">{p.t}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{p.d}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Audit lead magnet + health report */}
      <section className="py-16 sm:py-20 bg-muted/30">
        <div className="container px-4 sm:px-6 max-w-5xl mx-auto grid lg:grid-cols-2 gap-8 items-center">
          <div>
            <span className="text-primary font-display font-semibold text-sm uppercase tracking-widest">Start Here</span>
            <h2 className="font-display text-2xl sm:text-4xl font-bold mt-2 mb-4">
              How healthy is your company's device fleet?
            </h2>
            <p className="text-muted-foreground text-sm sm:text-base mb-5 leading-relaxed">
              JR's Corporate Electronics Audit gives management visibility over every phone, tablet, laptop and supported
              electronic asset — its condition, outstanding faults, service requirements and replacement risk.
            </p>
            <ul className="space-y-2 mb-6">
              {[
                "On-site inventory of your device estate",
                "Make, model, serial and assigned user or department",
                "Battery, storage, performance and software condition",
                "Faults, repair priority and replacement recommendation",
              ].map((l) => (
                <li key={l} className="flex items-start gap-2.5 text-sm">
                  <Check className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                  <span>{l}</span>
                </li>
              ))}
            </ul>
            <Button asChild size="lg" className="font-display font-bold rounded-full h-14 px-7 shadow-glow">
              <a href={WA_AUDIT} target="_blank" rel="noopener noreferrer">
                <ClipboardList className="w-5 h-5" />
                Request an Electronics Audit
              </a>
            </Button>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-card border border-border rounded-2xl p-5 sm:p-7 shadow-elegant"
          >
            <div className="flex items-center gap-2 mb-1">
              <Activity className="w-4 h-4 text-primary" />
              <span className="font-display font-bold text-sm uppercase tracking-wider">Electronics Health Report</span>
            </div>
            <p className="text-xs text-muted-foreground mb-5">Example output — 137 devices audited</p>
            <div className="space-y-3">
              {[
                ["Healthy", 104, "bg-primary"],
                ["Service recommended", 18, "bg-primary/60"],
                ["Repair required", 9, "bg-primary/40"],
                ["Replace / uneconomical", 6, "bg-muted-foreground/40"],
              ].map(([label, val, bar]) => (
                <div key={label as string}>
                  <div className="flex justify-between text-sm mb-1.5">
                    <span className="text-muted-foreground">{label as string}</span>
                    <span className="font-display font-bold">{val as number}</span>
                  </div>
                  <div className="h-2 rounded-full bg-muted overflow-hidden">
                    <div className={`h-full rounded-full ${bar as string}`} style={{ width: `${((val as number) / 137) * 100}%` }} />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Sectors */}
      <section className="py-16 sm:py-20 bg-background">
        <div className="container px-4 sm:px-6 max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <span className="text-primary font-display font-semibold text-sm uppercase tracking-widest">Who We Serve</span>
            <h2 className="font-display text-2xl sm:text-4xl font-bold mt-2">Built for device-dependent operations in KZN</h2>
            <p className="text-muted-foreground text-sm sm:text-base mt-3 max-w-2xl mx-auto">
              If downtime costs you money or disrupts operations, managed device care pays for itself.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {SECTORS.map((s, i) => (
              <motion.div
                key={s.t}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.04 }}
                className="bg-card border border-border rounded-2xl p-5 hover:border-primary/40 transition-colors"
              >
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mb-3">
                  <s.icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-display font-bold text-base mb-1">{s.t}</h3>
                <p className="text-muted-foreground text-xs leading-relaxed">{s.d}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SLA */}
      <section className="py-16 sm:py-20 bg-hero-bg noise relative overflow-hidden">
        <div className="absolute inset-0 bg-mesh opacity-30 pointer-events-none" />
        <div className="container px-4 sm:px-6 max-w-4xl mx-auto relative z-10">
          <div className="text-center mb-10">
            <span className="text-primary font-display font-semibold text-sm uppercase tracking-widest">The Differentiator</span>
            <h2 className="font-display text-2xl sm:text-4xl font-bold mt-2 text-hero-foreground">
              A service-level agreement, not vague promises
            </h2>
            <p className="text-hero-foreground/60 text-sm sm:text-base mt-3">
              Example service levels. Your actual SLA is agreed according to contract size, geography, device type,
              parts availability and service tier.
            </p>
          </div>

          <div className="glass rounded-2xl overflow-hidden divide-y divide-hero-foreground/10">
            {SLA.map(([k, v]) => (
              <div key={k} className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 px-5 py-3.5">
                <span className="font-display font-semibold text-sm text-hero-foreground">{k}</span>
                <span className="text-hero-foreground/60 text-sm">{v}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tiers */}
      <section className="py-16 sm:py-20 bg-background">
        <div className="container px-4 sm:px-6 max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <span className="text-primary font-display font-semibold text-sm uppercase tracking-widest">Service Tiers</span>
            <h2 className="font-display text-2xl sm:text-4xl font-bold mt-2">Choose the level of cover you need</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {TIERS.map((t, i) => (
              <motion.div
                key={t.t}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                className={`rounded-2xl p-6 border ${
                  t.highlight ? "border-primary bg-card shadow-glow" : "border-border bg-card"
                }`}
              >
                {t.highlight && (
                  <span className="inline-block text-[10px] font-display font-bold uppercase tracking-widest bg-primary text-primary-foreground rounded-full px-2.5 py-1 mb-3">
                    Most Popular
                  </span>
                )}
                <h3 className="font-display font-bold text-lg mb-1.5">{t.t}</h3>
                <p className="text-muted-foreground text-sm mb-5">{t.d}</p>
                <ul className="space-y-2">
                  {t.f.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm">
                      <Check className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          <p className="text-center text-xs text-muted-foreground mt-6">
            Pricing is scoped per organisation after the electronics audit.
          </p>
        </div>
      </section>

      {/* Device register */}
      <section className="py-16 sm:py-20 bg-muted/30">
        <div className="container px-4 sm:px-6 max-w-5xl mx-auto grid lg:grid-cols-2 gap-8 items-center">
          <div>
            <span className="text-primary font-display font-semibold text-sm uppercase tracking-widest">Device Register</span>
            <h2 className="font-display text-2xl sm:text-4xl font-bold mt-2 mb-4">
              Know what you own, its condition, and what it costs you
            </h2>
            <p className="text-muted-foreground text-sm sm:text-base leading-relaxed mb-4">
              Every corporate client gets a register of their device estate with a service history per asset — and we
              track repair spend against replacement value, so we can tell you plainly when to repair and when to replace.
            </p>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Upgrading a batch of devices? Old units can be traded in, refurbished and resold through JR Certified —
              recovering value instead of filling a storeroom.
            </p>
          </div>

          <div className="space-y-4">
            <div className="bg-card border border-border rounded-2xl p-5 sm:p-6 shadow-elegant">
              <p className="font-display font-bold text-sm uppercase tracking-wider mb-4">ACME KZN — Device Estate</p>
              <div className="grid grid-cols-2 gap-3 mb-4">
                {[
                  ["286", "Total assets"],
                  ["247", "Operational"],
                  ["12", "In repair"],
                  ["14", "Service due"],
                ].map(([v, l]) => (
                  <div key={l} className="rounded-xl bg-muted/50 p-3">
                    <p className="font-display font-bold text-xl">{v}</p>
                    <p className="text-xs text-muted-foreground">{l}</p>
                  </div>
                ))}
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-muted-foreground">Fleet health</span>
                <span className="font-display font-bold text-primary">86%</span>
              </div>
              <div className="h-2 rounded-full bg-muted overflow-hidden mt-2">
                <div className="h-full rounded-full bg-primary" style={{ width: "86%" }} />
              </div>
            </div>

            <div className="bg-card border border-border rounded-2xl p-5 text-sm space-y-1.5">
              <p className="font-display font-bold text-base">Dell Latitude 5420 — JRD-00482</p>
              {[
                ["Assigned", "Finance"],
                ["Condition", "Fair"],
                ["Last serviced", "04 Sep 2026"],
                ["Repairs YTD", "R1,750"],
                ["Current status", "Operational"],
                ["Next inspection", "Dec 2026"],
              ].map(([k, v]) => (
                <div key={k} className="flex justify-between">
                  <span className="text-muted-foreground">{k}</span>
                  <span className="font-medium">{v}</span>
                </div>
              ))}
              <p className="pt-2 text-xs font-display font-bold uppercase tracking-wider text-primary">Repair recommended</p>
            </div>
          </div>
        </div>
      </section>

      {/* Managed servicing suite */}
      <section className="py-16 sm:py-20 bg-background">
        <div className="container px-4 sm:px-6 max-w-4xl mx-auto text-center">
          <span className="text-primary font-display font-semibold text-sm uppercase tracking-widest">Managed Servicing Suite</span>
          <h2 className="font-display text-2xl sm:text-4xl font-bold mt-2 mb-3">Everything a contract can cover</h2>
          <p className="text-muted-foreground text-sm sm:text-base mb-8">
            Plus scheduled quarterly or biannual device health checks, so you're not waiting for equipment to fail.
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            {SERVICES.map((s) => (
              <span key={s} className="rounded-full border border-border bg-card px-4 py-2 text-sm">
                {s}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="pb-16 sm:pb-20 bg-background">
        <div className="container px-4 sm:px-6 max-w-4xl mx-auto">
          <div className="bg-hero-bg rounded-3xl p-7 sm:p-10 text-center noise relative overflow-hidden">
            <div className="absolute inset-0 bg-mesh opacity-30 pointer-events-none" />
            <div className="relative z-10">
              <h2 className="font-display font-bold text-xl sm:text-3xl text-hero-foreground mb-3">
                Let's start with the audit
              </h2>
              <p className="text-hero-foreground/60 text-sm sm:text-base mb-7 max-w-lg mx-auto">
                Tell us roughly how many devices your team depends on and where you're based in KZN — we'll scope the
                audit and come back with a service plan.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                <Button asChild size="lg" className="font-display font-bold rounded-full h-14 px-8 shadow-glow w-full sm:w-auto">
                  <a href={WA_AUDIT} target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="w-5 h-5" />
                    Book a Device Audit
                  </a>
                </Button>
                <Button asChild variant="outline" size="lg" className="font-display font-semibold rounded-full h-14 px-6 w-full sm:w-auto border-primary/30 text-hero-foreground hover:bg-primary/10">
                  <a href="/">
                    <ArrowLeft className="w-4 h-4" />
                    Back to Home
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>

    <Footer />
    <FloatingWhatsApp />
  </div>
);

export default CorporateEnquiries;
