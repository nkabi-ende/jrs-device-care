import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import PricingSection from "@/components/PricingSection";
import IntakeForm from "@/components/IntakeForm";
import WhyChooseUs from "@/components/WhyChooseUs";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

const Index = () => (
  <div className="min-h-screen">
    <Header />
    <HeroSection />
    <ServicesSection />
    <PricingSection />
    <IntakeForm />
    <WhyChooseUs />
    <Footer />
    <FloatingWhatsApp />
  </div>
);

export default Index;
