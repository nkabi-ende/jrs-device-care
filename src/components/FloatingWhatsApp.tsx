import { MessageCircle } from "lucide-react";

const FloatingWhatsApp = () => (
  <a
    href="https://wa.me/27716865256?text=Hi%20JR's%20Device%20Care!%20I%20need%20help%20with%20a%20device."
    target="_blank"
    rel="noopener noreferrer"
    className="group fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50"
    aria-label="Chat on WhatsApp"
  >
    <span className="absolute inset-0 rounded-full bg-[hsl(142,70%,45%)] animate-ping opacity-30" />
    <span className="relative w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-[hsl(142,70%,50%)] to-[hsl(142,70%,40%)] rounded-full flex items-center justify-center shadow-2xl shadow-[hsl(142,70%,45%)]/40 transition-transform group-hover:scale-110 active:scale-95 ring-4 ring-background">
      <MessageCircle className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
    </span>
    <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 hidden md:block opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap glass rounded-full px-3 py-1.5 text-xs font-medium text-hero-foreground pointer-events-none">
      Chat with us
    </span>
  </a>
);

export default FloatingWhatsApp;
