import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, ArrowRight, ArrowLeft, Shield, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Progress } from "@/components/ui/progress";

const ISSUES = [
  "Cracked Screen",
  "Battery Issues",
  "Charging Problems",
  "Water Damage",
  "Software Issues",
  "Other",
];

const DEVICE_TYPES = ["Phone", "Tablet", "Laptop", "Other"];

const IntakeForm = () => {
  const [step, setStep] = useState(1);
  const [form, setForm] = useState({
    name: "",
    phone: "",
    deviceType: "",
    brandModel: "",
    issues: [] as string[],
    notes: "",
  });

  const progress = (step / 3) * 100;

  const toggleIssue = (issue: string) => {
    setForm((prev) => ({
      ...prev,
      issues: prev.issues.includes(issue)
        ? prev.issues.filter((i) => i !== issue)
        : [...prev.issues, issue],
    }));
  };

  const canNext = () => {
    if (step === 1) return form.name.trim().length > 0 && form.phone.trim().length > 0;
    if (step === 2) return form.deviceType.length > 0;
    return form.issues.length > 0;
  };

  const handleSubmit = () => {
    const msg = [
      `Hi JR's Device Care!`,
      ``,
      `Name: ${form.name.trim()}`,
      `Phone: ${form.phone.trim()}`,
      `Device: ${form.deviceType}${form.brandModel ? ` - ${form.brandModel.trim()}` : ""}`,
      `Issues: ${form.issues.join(", ")}`,
      form.notes.trim() ? `Notes: ${form.notes.trim()}` : "",
      ``,
      `Please let me know about availability and pricing!`,
    ]
      .filter(Boolean)
      .join("%0A");

    window.open(`https://wa.me/27716865256?text=${msg}`, "_blank", "noopener,noreferrer");
  };

  const slideVariants = {
    enter: { opacity: 0, x: 40 },
    center: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -40 },
  };

  return (
    <section id="book" className="py-20 md:py-28 bg-background">
      <div className="container max-w-2xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <span className="text-primary font-display font-semibold text-sm uppercase tracking-widest">Quick & Easy</span>
          <h2 className="font-display text-3xl md:text-5xl font-bold mt-2 mb-4">Book Your Repair</h2>
          <p className="text-muted-foreground">
            Tell us about your device and we'll get back to you on WhatsApp with a quote.
          </p>
        </motion.div>

        {/* Trust badges */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          <div className="flex items-center gap-2 bg-primary/5 border border-primary/10 rounded-full px-4 py-2">
            <Shield className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium">Free Diagnostics Quote</span>
          </div>
          <div className="flex items-center gap-2 bg-primary/5 border border-primary/10 rounded-full px-4 py-2">
            <Clock className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium">Same-Day Repairs Available</span>
          </div>
        </div>

        {/* Progress */}
        <Progress value={progress} className="h-2 mb-8 bg-muted" />

        {/* Form card */}
        <div className="bg-card border border-border rounded-2xl p-6 md:p-8 shadow-lg">
          <AnimatePresence mode="wait">
            {step === 1 && (
              <motion.div key="step1" variants={slideVariants} initial="enter" animate="center" exit="exit" transition={{ duration: 0.3 }}>
                <h3 className="font-display font-bold text-lg mb-1">Your Details</h3>
                <p className="text-muted-foreground text-sm mb-6">Step 1 of 3</p>
                <div className="space-y-4">
                  <div>
                    <label className="text-sm font-medium mb-1.5 block">Name</label>
                    <Input
                      placeholder="Your full name"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      maxLength={100}
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-1.5 block">Phone Number</label>
                    <Input
                      placeholder="e.g. 071 234 5678"
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      maxLength={20}
                    />
                  </div>
                </div>
              </motion.div>
            )}

            {step === 2 && (
              <motion.div key="step2" variants={slideVariants} initial="enter" animate="center" exit="exit" transition={{ duration: 0.3 }}>
                <h3 className="font-display font-bold text-lg mb-1">Device Info</h3>
                <p className="text-muted-foreground text-sm mb-6">Step 2 of 3</p>
                <div className="space-y-4">
                  <div>
                    <label className="text-sm font-medium mb-2 block">Device Type</label>
                    <div className="grid grid-cols-2 gap-3">
                      {DEVICE_TYPES.map((type) => (
                        <button
                          key={type}
                          type="button"
                          onClick={() => setForm({ ...form, deviceType: type })}
                          className={`p-3 rounded-lg border text-sm font-medium transition-all ${
                            form.deviceType === type
                              ? "border-primary bg-primary/10 text-primary"
                              : "border-border hover:border-primary/30"
                          }`}
                        >
                          {type}
                        </button>
                      ))}
                    </div>
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-1.5 block">Brand & Model (optional)</label>
                    <Input
                      placeholder="e.g. Samsung Galaxy S24, iPhone 15 Pro"
                      value={form.brandModel}
                      onChange={(e) => setForm({ ...form, brandModel: e.target.value })}
                      maxLength={100}
                    />
                  </div>
                </div>
              </motion.div>
            )}

            {step === 3 && (
              <motion.div key="step3" variants={slideVariants} initial="enter" animate="center" exit="exit" transition={{ duration: 0.3 }}>
                <h3 className="font-display font-bold text-lg mb-1">What's the Issue?</h3>
                <p className="text-muted-foreground text-sm mb-6">Step 3 of 3</p>
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-3">
                    {ISSUES.map((issue) => (
                      <label
                        key={issue}
                        className={`flex items-center gap-2 p-3 rounded-lg border text-sm cursor-pointer transition-all ${
                          form.issues.includes(issue)
                            ? "border-primary bg-primary/10"
                            : "border-border hover:border-primary/30"
                        }`}
                      >
                        <Checkbox
                          checked={form.issues.includes(issue)}
                          onCheckedChange={() => toggleIssue(issue)}
                        />
                        {issue}
                      </label>
                    ))}
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-1.5 block">Additional details (optional)</label>
                    <Textarea
                      placeholder="Describe the issue in more detail..."
                      value={form.notes}
                      onChange={(e) => setForm({ ...form, notes: e.target.value })}
                      maxLength={500}
                      rows={3}
                    />
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Navigation */}
          <div className="flex justify-between mt-8">
            {step > 1 ? (
              <Button variant="outline" onClick={() => setStep(step - 1)}>
                <ArrowLeft className="w-4 h-4 mr-1" /> Back
              </Button>
            ) : (
              <div />
            )}

            {step < 3 ? (
              <Button onClick={() => setStep(step + 1)} disabled={!canNext()}>
                Next <ArrowRight className="w-4 h-4 ml-1" />
              </Button>
            ) : (
              <Button onClick={handleSubmit} disabled={!canNext()} className="animate-pulse-glow">
                <MessageCircle className="w-4 h-4 mr-2" />
                Send via WhatsApp
              </Button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntakeForm;
