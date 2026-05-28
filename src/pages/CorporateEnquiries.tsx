import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { Building2, MessageCircle, Check, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

const CORPORATE_BENEFITS = [
  "Volume pricing for 5+ devices",
  "Scheduled on-site or workshop collection",
  "Dedicated account manager via WhatsApp",
  "Detailed repair reporting & invoicing",
  "30-day warranty on every repair",
];

const CorporateEnquiries = () => (
  <div className="min-h-screen">
    <Helmet>
      <title>Corporate Repair Enquiries — JR's Device Care</title>
      <meta name="description" content="Corporate device repair solutions in Durban. Volume pricing, scheduled collections, and dedicated support for businesses, schools, and organisations." />
      <link rel="canonical" href="https://jrs-device-care.lovable.app/corporate" />
      <meta property="og:title" content="Corporate Repair Enquiries — JR's Device Care" />
      <meta property="og:description" content="Corporate device repair solutions in Durban. Volume pricing and dedicated support." />
      <meta property="og:url" content="https://jrs-device-care.lovable.app/corporate" />
    </Helmet>

    <Header />

    <main>
      {/* Hero */}
      <section className="relative pt-28 sm:pt-36 pb-16 sm:pb-24 bg-hero-bg overflow-hidden noise">
        <div className="absolute inset-0 bg-mesh opacity-40 pointer-events-none" />
        <div className="absolute -top-24 right-0 w-[500px] h-[500px] rounded-full bg-primary/5 blur-[120px] pointer-events-none" />

        <div className="container px-4 sm:px-6 relative z-10 max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-1.5 mb-6"
          >
            <Building2 className="w-4 h-4 text-primary" />
            <span className="text-primary text-xs sm:text-sm font-display font-semibold">For Businesses & Organisations</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-hero-foreground leading-[1.05] mb-5"
          >
            Corporate Device
            <br />
            <span className="font-serif-display italic text-gradient font-normal">Repair Solutions</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-hero-foreground/60 text-base sm:text-lg max-w-xl mx-auto mb-8"
          >
            Keep your team's devices running without the downtime. We handle bulk repairs, scheduled collections, and account-managed billing for companies, schools, and organisations across Durban.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-3"
          >
            <Button asChild size="lg" className="font-display font-bold rounded-full h-14 px-8 shadow-glow w-full sm:w-auto">
              <a
                href="https://wa.me/27716865256?text=Hi%20JR's%20Device%20Care!%20I'm%20enquiring%20about%20corporate%20repairs."
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle className="w-5 h-5" />
                Enquire on WhatsApp
              </a>
            </Button>
            <Button asChild variant="outline" size="lg" className="font-display font-semibold rounded-full h-14 px-6 w-full sm:w-auto">
              <a href="/">
                <ArrowLeft className="w-4 h-4" />
                Back to Home
              </a>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 sm:py-20 bg-background">
        <div className="container px-4 sm:px-6 max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-10"
          >
            <span className="text-primary font-display font-semibold text-sm uppercase tracking-widest">Why Businesses Choose Us</span>
            <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold mt-2">Simple, reliable, at scale</h2>
          </motion.div>

          <div className="space-y-4">
            {CORPORATE_BENEFITS.map((benefit, i) => (
              <motion.div
                key={benefit}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="flex items-center gap-4 bg-card border border-border rounded-xl p-4 sm:p-5"
              >
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <Check className="w-5 h-5 text-primary" />
                </div>
                <p className="font-medium text-sm sm:text-base">{benefit}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-10 bg-hero-bg rounded-2xl p-6 sm:p-8 text-center noise"
          >
            <h3 className="font-display font-bold text-lg sm:text-xl text-hero-foreground mb-2">Let's talk</h3>
            <p className="text-hero-foreground/60 text-sm sm:text-base mb-6 max-w-md mx-auto">
              Tell us how many devices you manage and what repairs you typically need — we'll put together a tailored plan.
            </p>
            <Button asChild size="lg" className="font-display font-bold rounded-full h-14 px-8 shadow-glow">
              <a
                href="https://wa.me/27716865256?text=Hi%20JR's%20Device%20Care!%20I'm%20enquiring%20about%20corporate%20repairs."
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle className="w-5 h-5" />
                Start a Conversation
              </a>
            </Button>
          </motion.div>
        </div>
      </section>
    </main>

    <Footer />
    <FloatingWhatsApp />
  </div>
);

export default CorporateEnquiries;
