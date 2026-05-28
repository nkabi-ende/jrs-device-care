import { Smartphone, Phone, MapPin, MessageCircle, Instagram, GraduationCap, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => (
  <footer id="contact" className="relative bg-hero-bg pt-16 sm:pt-20 pb-8 overflow-hidden noise">
    <div className="absolute inset-0 bg-mesh opacity-50 pointer-events-none" />
    <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-primary/5 blur-[120px] pointer-events-none" />

    <div className="container px-4 sm:px-6 relative z-10">
      {/* Big CTA */}
      <div className="max-w-4xl mx-auto text-center mb-16 sm:mb-20">
        <h2 className="font-display text-3xl sm:text-5xl md:text-6xl font-bold text-hero-foreground leading-[1.05] mb-5">
          Got a broken device?
          <br />
          <span className="font-serif-display italic text-gradient font-normal">Let's fix it.</span>
        </h2>
        <p className="text-hero-foreground/60 text-base sm:text-lg max-w-xl mx-auto mb-7">
          One message gets you a free quote, an honest timeline, and a friendly technician in Durban.
        </p>
        <Button asChild size="lg" className="font-display font-bold rounded-full h-14 px-8 shadow-glow">
          <a
            href="https://wa.me/27716865256?text=Hi%20JR's%20Device%20Care!%20I'd%20like%20a%20quote."
            target="_blank"
            rel="noopener noreferrer"
          >
            <MessageCircle className="w-5 h-5" />
            Chat on WhatsApp
          </a>
        </Button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 sm:gap-10 mb-12 pb-12 border-b border-hero-foreground/10">
        <div className="sm:col-span-2 md:col-span-1">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-primary to-primary-glow flex items-center justify-center shadow-glow">
              <Smartphone className="w-5 h-5 text-primary-foreground" />
            </div>
            <span className="font-display font-bold text-lg text-hero-foreground">
              JR's <span className="text-primary">Device Care</span>
            </span>
          </div>
          <p className="text-hero-foreground/50 text-sm leading-relaxed">
            Durban's trusted device repair specialists & training academy in Newlands West.
          </p>
        </div>

        <div>
          <h3 className="font-display font-bold text-hero-foreground mb-4 text-sm uppercase tracking-wider">Services</h3>
          <ul className="space-y-2.5 text-sm">
            {[
              { l: "Phone Repairs", h: "#services" },
              { l: "Laptop Repairs", h: "#services" },
              { l: "Pricing", h: "#pricing" },
              { l: "Repair Gallery", h: "#gallery" },
              { l: "Corporate Enquiries", h: "/corporate" },
            ].map((i) => (
              <li key={i.l}>
                <a href={i.h} className="text-hero-foreground/60 hover:text-primary transition-colors link-underline">
                  {i.l}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-display font-bold text-hero-foreground mb-4 text-sm uppercase tracking-wider">Academy</h3>
          <ul className="space-y-2.5 text-sm">
            <li><a href="#academy" className="text-hero-foreground/60 hover:text-primary transition-colors link-underline">About the program</a></li>
            <li><a href="#academy" className="text-hero-foreground/60 hover:text-primary transition-colors link-underline">Curriculum</a></li>
            <li><a href="#book" className="text-hero-foreground/60 hover:text-primary transition-colors link-underline">Apply now</a></li>
            <li><a href="#faq" className="text-hero-foreground/60 hover:text-primary transition-colors link-underline">FAQ</a></li>
          </ul>
          <a href="#academy" className="inline-flex items-center gap-1 text-primary text-xs font-semibold mt-4 group">
            <GraduationCap className="w-3.5 h-3.5" />
            Enrolling for April 2026
            <ArrowUpRight className="w-3 h-3 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>

        <div>
          <h3 className="font-display font-bold text-hero-foreground mb-4 text-sm uppercase tracking-wider">Contact</h3>
          <div className="space-y-3">
            <a href="tel:0716865256" className="flex items-center gap-2.5 text-hero-foreground/60 hover:text-primary transition-colors text-sm">
              <Phone className="w-4 h-4 shrink-0" /> 071 686 5256
            </a>
            <div className="flex items-center gap-2.5 text-hero-foreground/60 text-sm">
              <MapPin className="w-4 h-4 shrink-0" /> Newlands West, Durban
            </div>
            <a href="https://instagram.com/jrsdevicecare" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2.5 text-hero-foreground/60 hover:text-primary transition-colors text-sm">
              <Instagram className="w-4 h-4 shrink-0" /> @jrsdevicecare
            </a>
          </div>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-center">
        <p className="text-hero-foreground/60 text-xs">
          © {new Date().getFullYear()} JR's Device Care · Phone, Tablet & Laptop Repairs in Durban.
        </p>
        <p className="text-hero-foreground/60 text-xs">
          Crafted with care in Newlands West 🛠️
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
