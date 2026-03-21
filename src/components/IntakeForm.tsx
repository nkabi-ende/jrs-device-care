import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, ArrowRight, ArrowLeft, Shield, Clock, GraduationCap, Wrench } from "lucide-react";
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

type FormType = "repair" | "academy";

const IntakeForm = () => {
  const [formType, setFormType] = useState<FormType>("repair");
  const [step, setStep] = useState(1);
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    deviceType: "",
    brandModel: "",
    issues: [] as string[],
    notes: "",
    // Academy fields
    experience: "",
    motivation: "",
  });

  const totalSteps = formType === "repair" ? 3 : 3;
  const progress = (step / totalSteps) * 100;

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
    if (formType === "repair") {
      if (step === 2) return form.deviceType.length > 0;
      return form.issues.length > 0;
    }
    // Academy
    if (step === 2) return form.experience.length > 0;
    return true;
  };

  const handleSubmit = () => {
    if (formType === "repair") {
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
    } else {
      const msg = [
        `Hi JR's Device Care Academy!`,
        ``,
        `I'd like to enrol in the April training course.`,
        ``,
        `Name: ${form.name.trim()}`,
        `Phone: ${form.phone.trim()}`,
        form.email.trim() ? `Email: ${form.email.trim()}` : "",
        `Experience Level: ${form.experience}`,
        form.motivation.trim() ? `Why I want to join: ${form.motivation.trim()}` : "",
        ``,
        `Please send me enrolment details and payment info!`,
      ]
        .filter(Boolean)
        .join("%0A");
      window.open(`https://wa.me/27716865256?text=${msg}`, "_blank", "noopener,noreferrer");
    }
  };

  const resetForm = (type: FormType) => {
    setFormType(type);
    setStep(1);
    setForm({ name: "", phone: "", email: "", deviceType: "", brandModel: "", issues: [], notes: "", experience: "", motivation: "" });
  };

  const slideVariants = {
    enter: { opacity: 0, x: 40 },
    center: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -40 },
  };

  return (
    <section id="book" className="py-16 sm:py-20 md:py-28 bg-background">
      <div className="container max-w-2xl px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-8 sm:mb-10"
        >
          <span className="text-primary font-display font-semibold text-sm uppercase tracking-widest">Quick & Easy</span>
          <h2 className="font-display text-2xl sm:text-3xl md:text-5xl font-bold mt-2 mb-3 sm:mb-4">Get Started</h2>
          <p className="text-muted-foreground text-sm sm:text-base">
            Book a repair or apply for our Academy — we'll respond on WhatsApp.
          </p>
        </motion.div>

        {/* Form type toggle */}
        <div className="grid grid-cols-2 gap-3 mb-6 sm:mb-8">
          <button
            onClick={() => resetForm("repair")}
            className={`flex items-center justify-center gap-2 p-3 sm:p-4 rounded-xl border text-sm sm:text-base font-display font-bold transition-all active:scale-95 ${
              formType === "repair"
                ? "border-primary bg-primary/10 text-primary shadow-md"
                : "border-border text-muted-foreground hover:border-primary/30"
            }`}
          >
            <Wrench className="w-4 h-4 sm:w-5 sm:h-5" />
            Book Repair
          </button>
          <button
            onClick={() => resetForm("academy")}
            className={`flex items-center justify-center gap-2 p-3 sm:p-4 rounded-xl border text-sm sm:text-base font-display font-bold transition-all active:scale-95 ${
              formType === "academy"
                ? "border-primary bg-primary/10 text-primary shadow-md"
                : "border-border text-muted-foreground hover:border-primary/30"
            }`}
          >
            <GraduationCap className="w-4 h-4 sm:w-5 sm:h-5" />
            Join Academy
          </button>
        </div>

        {/* Trust badges */}
        <div className="flex flex-col xs:flex-row flex-wrap justify-center gap-3 sm:gap-4 mb-6 sm:mb-8">
          {formType === "repair" ? (
            <>
              <div className="flex items-center justify-center gap-2 bg-primary/5 border border-primary/10 rounded-full px-4 py-2">
                <Shield className="w-4 h-4 text-primary shrink-0" />
                <span className="text-xs sm:text-sm font-medium">Free Diagnostics Quote</span>
              </div>
              <div className="flex items-center justify-center gap-2 bg-primary/5 border border-primary/10 rounded-full px-4 py-2">
                <Clock className="w-4 h-4 text-primary shrink-0" />
                <span className="text-xs sm:text-sm font-medium">Same-Day Repairs Available</span>
              </div>
            </>
          ) : (
            <>
              <div className="flex items-center justify-center gap-2 bg-primary/5 border border-primary/10 rounded-full px-4 py-2">
                <GraduationCap className="w-4 h-4 text-primary shrink-0" />
                <span className="text-xs sm:text-sm font-medium">April 2026 Intake</span>
              </div>
              <div className="flex items-center justify-center gap-2 bg-primary/5 border border-primary/10 rounded-full px-4 py-2">
                <Shield className="w-4 h-4 text-primary shrink-0" />
                <span className="text-xs sm:text-sm font-medium">Only 15 Seats Available</span>
              </div>
            </>
          )}
        </div>

        {/* Progress */}
        <Progress value={progress} className="h-1.5 sm:h-2 mb-6 sm:mb-8 bg-muted" />

        {/* Form card */}
        <div className="bg-card border border-border rounded-2xl p-5 sm:p-6 md:p-8 shadow-lg">
          <AnimatePresence mode="wait">
            {/* STEP 1 — shared: name & phone */}
            {step === 1 && (
              <motion.div key="step1" variants={slideVariants} initial="enter" animate="center" exit="exit" transition={{ duration: 0.3 }}>
                <h3 className="font-display font-bold text-base sm:text-lg mb-1">Your Details</h3>
                <p className="text-muted-foreground text-xs sm:text-sm mb-5 sm:mb-6">Step 1 of {totalSteps}</p>
                <div className="space-y-4">
                  <div>
                    <label className="text-sm font-medium mb-1.5 block">Name</label>
                    <Input placeholder="Your full name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} maxLength={100} className="h-11 sm:h-10" />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-1.5 block">Phone Number</label>
                    <Input placeholder="e.g. 071 234 5678" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} maxLength={20} type="tel" className="h-11 sm:h-10" />
                  </div>
                  {formType === "academy" && (
                    <div>
                      <label className="text-sm font-medium mb-1.5 block">Email (optional)</label>
                      <Input placeholder="your@email.com" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} maxLength={100} type="email" className="h-11 sm:h-10" />
                    </div>
                  )}
                </div>
              </motion.div>
            )}

            {/* STEP 2 — repair: device info | academy: experience */}
            {step === 2 && formType === "repair" && (
              <motion.div key="step2-repair" variants={slideVariants} initial="enter" animate="center" exit="exit" transition={{ duration: 0.3 }}>
                <h3 className="font-display font-bold text-base sm:text-lg mb-1">Device Info</h3>
                <p className="text-muted-foreground text-xs sm:text-sm mb-5 sm:mb-6">Step 2 of 3</p>
                <div className="space-y-4">
                  <div>
                    <label className="text-sm font-medium mb-2 block">Device Type</label>
                    <div className="grid grid-cols-2 gap-3">
                      {DEVICE_TYPES.map((type) => (
                        <button key={type} type="button" onClick={() => setForm({ ...form, deviceType: type })}
                          className={`p-3 rounded-lg border text-sm font-medium transition-all active:scale-95 ${form.deviceType === type ? "border-primary bg-primary/10 text-primary" : "border-border hover:border-primary/30"}`}
                        >{type}</button>
                      ))}
                    </div>
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-1.5 block">Brand & Model (optional)</label>
                    <Input placeholder="e.g. Samsung Galaxy S24" value={form.brandModel} onChange={(e) => setForm({ ...form, brandModel: e.target.value })} maxLength={100} className="h-11 sm:h-10" />
                  </div>
                </div>
              </motion.div>
            )}

            {step === 2 && formType === "academy" && (
              <motion.div key="step2-academy" variants={slideVariants} initial="enter" animate="center" exit="exit" transition={{ duration: 0.3 }}>
                <h3 className="font-display font-bold text-base sm:text-lg mb-1">Your Background</h3>
                <p className="text-muted-foreground text-xs sm:text-sm mb-5 sm:mb-6">Step 2 of 3</p>
                <div className="space-y-4">
                  <div>
                    <label className="text-sm font-medium mb-2 block">Experience Level</label>
                    <div className="grid grid-cols-1 gap-2">
                      {["Complete Beginner", "Some DIY Experience", "Worked in Tech/Electronics", "Professional Technician"].map((level) => (
                        <button key={level} type="button" onClick={() => setForm({ ...form, experience: level })}
                          className={`p-3 rounded-lg border text-sm font-medium transition-all active:scale-95 text-left ${form.experience === level ? "border-primary bg-primary/10 text-primary" : "border-border hover:border-primary/30"}`}
                        >{level}</button>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {/* STEP 3 — repair: issues | academy: motivation */}
            {step === 3 && formType === "repair" && (
              <motion.div key="step3-repair" variants={slideVariants} initial="enter" animate="center" exit="exit" transition={{ duration: 0.3 }}>
                <h3 className="font-display font-bold text-base sm:text-lg mb-1">What's the Issue?</h3>
                <p className="text-muted-foreground text-xs sm:text-sm mb-5 sm:mb-6">Step 3 of 3</p>
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-2 sm:gap-3">
                    {ISSUES.map((issue) => (
                      <label key={issue}
                        className={`flex items-center gap-2 p-3 rounded-lg border text-xs sm:text-sm cursor-pointer transition-all active:scale-95 ${form.issues.includes(issue) ? "border-primary bg-primary/10" : "border-border hover:border-primary/30"}`}
                      >
                        <Checkbox checked={form.issues.includes(issue)} onCheckedChange={() => toggleIssue(issue)} />
                        {issue}
                      </label>
                    ))}
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-1.5 block">Additional details (optional)</label>
                    <Textarea placeholder="Describe the issue in more detail..." value={form.notes} onChange={(e) => setForm({ ...form, notes: e.target.value })} maxLength={500} rows={3} />
                  </div>
                </div>
              </motion.div>
            )}

            {step === 3 && formType === "academy" && (
              <motion.div key="step3-academy" variants={slideVariants} initial="enter" animate="center" exit="exit" transition={{ duration: 0.3 }}>
                <h3 className="font-display font-bold text-base sm:text-lg mb-1">Almost There!</h3>
                <p className="text-muted-foreground text-xs sm:text-sm mb-5 sm:mb-6">Step 3 of 3</p>
                <div className="space-y-4">
                  <div>
                    <label className="text-sm font-medium mb-1.5 block">Why do you want to join the Academy? (optional)</label>
                    <Textarea
                      placeholder="Tell us about your goals — want to start a repair business, upskill, career change..."
                      value={form.motivation}
                      onChange={(e) => setForm({ ...form, motivation: e.target.value })}
                      maxLength={500}
                      rows={4}
                    />
                  </div>
                  <div className="bg-primary/5 border border-primary/10 rounded-xl p-4">
                    <p className="font-display font-bold text-sm mb-1">Course Fee: R5,000</p>
                    <p className="text-muted-foreground text-xs">2–3 week intensive program · Starts April 2026 · Practicals included</p>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Navigation */}
          <div className="flex justify-between mt-6 sm:mt-8 gap-3">
            {step > 1 ? (
              <Button variant="outline" onClick={() => setStep(step - 1)} className="h-11 sm:h-10">
                <ArrowLeft className="w-4 h-4 mr-1" /> Back
              </Button>
            ) : (
              <div />
            )}

            {step < totalSteps ? (
              <Button onClick={() => setStep(step + 1)} disabled={!canNext()} className="h-11 sm:h-10">
                Next <ArrowRight className="w-4 h-4 ml-1" />
              </Button>
            ) : (
              <Button onClick={handleSubmit} disabled={!canNext()} className="animate-pulse-glow h-11 sm:h-10">
                <MessageCircle className="w-4 h-4 mr-2" />
                {formType === "repair" ? "Send via WhatsApp" : "Apply via WhatsApp"}
              </Button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntakeForm;
