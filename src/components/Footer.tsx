import { Smartphone, Phone, MapPin, MessageCircle, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => (
  <footer id="contact" className="bg-hero-bg py-16">
    <div className="container">
      <div className="grid md:grid-cols-3 gap-10 mb-12">
        {/* Brand */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <div className="w-9 h-9 rounded-lg bg-primary flex items-center justify-center">
              <Smartphone className="w-5 h-5 text-primary-foreground" />
            </div>
            <span className="font-display font-bold text-lg text-hero-foreground">
              JR's <span className="text-primary">Device Care</span>
            </span>
          </div>
          <p className="text-hero-foreground/50 text-sm">
            Your trusted device repair specialists in Durban. Fast, affordable, and reliable repairs for all your devices.
          </p>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-display font-bold text-hero-foreground mb-4">Get in Touch</h4>
          <div className="space-y-3">
            <a href="tel:0716865256" className="flex items-center gap-3 text-hero-foreground/60 hover:text-primary transition-colors text-sm">
              <Phone className="w-4 h-4" /> 071 686 5256
            </a>
            <div className="flex items-center gap-3 text-hero-foreground/60 text-sm">
              <MapPin className="w-4 h-4" /> Newlands West & Surrounds, Durban
            </div>
            <a href="https://instagram.com/jrsdevicecare" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-hero-foreground/60 hover:text-primary transition-colors text-sm">
              <Instagram className="w-4 h-4" /> @jrsdevicecare
            </a>
          </div>
        </div>

        {/* CTA */}
        <div>
          <h4 className="font-display font-bold text-hero-foreground mb-4">Ready to Repair?</h4>
          <p className="text-hero-foreground/50 text-sm mb-4">
            Send us a message on WhatsApp for a quick quote.
          </p>
          <Button asChild className="w-full font-display font-semibold">
            <a
              href="https://wa.me/27716865256?text=Hi%20JR's%20Device%20Care!%20I'd%20like%20a%20quote."
              target="_blank"
              rel="noopener noreferrer"
            >
              <MessageCircle className="w-4 h-4 mr-2" />
              Chat on WhatsApp
            </a>
          </Button>
        </div>
      </div>

      <div className="border-t border-hero-foreground/10 pt-6 text-center">
        <p className="text-hero-foreground/30 text-xs">
          © {new Date().getFullYear()} JR's Device Care. All rights reserved.
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
