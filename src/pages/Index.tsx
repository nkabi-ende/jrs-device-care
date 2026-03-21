import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import RepairGallery from "@/components/RepairGallery";
import PricingSection from "@/components/PricingSection";
import AcademySection from "@/components/AcademySection";
import IntakeForm from "@/components/IntakeForm";
import WhyChooseUs from "@/components/WhyChooseUs";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

const Index = () => (
  <div className="min-h-screen">
    <Header />
    <HeroSection />
    <ServicesSection />
    <RepairGallery />
    <PricingSection />
    <AcademySection />
    <IntakeForm />
    <WhyChooseUs />
    <FAQSection />
    <Footer />
    <FloatingWhatsApp />
  </div>
);

export default Index;
