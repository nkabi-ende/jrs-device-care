import { MessageCircle } from "lucide-react";

const FloatingWhatsApp = () => (
  <a
    href="https://wa.me/27716865256?text=Hi%20JR's%20Device%20Care!%20I%20need%20help%20with%20a%20device."
    target="_blank"
    rel="noopener noreferrer"
    className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-[hsl(142,70%,45%)] hover:bg-[hsl(142,70%,40%)] rounded-full flex items-center justify-center shadow-lg shadow-[hsl(142,70%,45%)/0.3] transition-transform hover:scale-110"
    aria-label="Chat on WhatsApp"
  >
    <MessageCircle className="w-7 h-7 text-white" />
  </a>
);

export default FloatingWhatsApp;
