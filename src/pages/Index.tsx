import { Helmet } from "react-helmet-async";
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

const courseSchema = {
  "@context": "https://schema.org",
  "@type": "Course",
  name: "Electronics Repair Technician Training in Durban — JR's Device Care Academy",
  description:
    "Intensive 2-3 week hands-on electronics repair training in Newlands West, Durban. Learn phone screen replacements, soldering, laptop diagnostics and more. June/July 2026 intake — discounted to R4,000 (was R5,000), 20 seats available.",
  provider: {
    "@type": "Organization",
    name: "JR's Device Care",
    sameAs: "https://jrs-device-care.lovable.app",
  },
  offers: {
    "@type": "Offer",
    price: "5000",
    priceCurrency: "ZAR",
    availability: "https://schema.org/LimitedAvailability",
  },
  hasCourseInstance: {
    "@type": "CourseInstance",
    courseMode: "onsite",
    startDate: "2026-04",
    location: {
      "@type": "Place",
      name: "JR's Device Care Academy",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Newlands West",
        addressLocality: "Durban",
        addressRegion: "KwaZulu-Natal",
        postalCode: "4037",
        addressCountry: "ZA",
      },
    },
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "How long does a screen repair take in Durban?", acceptedAnswer: { "@type": "Answer", text: "Most screen repairs at our Newlands West workshop are completed within 1–2 hours. For rarer models, it may take up to 24 hours." } },
    { "@type": "Question", name: "How much does a phone repair cost in Durban?", acceptedAnswer: { "@type": "Answer", text: "Entry-level screen repairs start from R400, batteries from R350. WhatsApp us your model for an exact quote." } },
    { "@type": "Question", name: "Do you repair laptops in Durban?", acceptedAnswer: { "@type": "Answer", text: "Yes, we repair laptops of all brands — screen replacements, battery swaps, charging port fixes, overheating issues, and full diagnostics at our Newlands West workshop." } },
    { "@type": "Question", name: "Who is the JR's Device Care Academy for?", acceptedAnswer: { "@type": "Answer", text: "The course is for anyone wanting to enter the device repair industry — from complete beginners to experienced technicians looking to formalise their skills." } },
    { "@type": "Question", name: "What does the R5,000 Academy course include?", acceptedAnswer: { "@type": "Answer", text: "2–3 weeks of hands-on training, learning materials, a starter toolkit, practice devices, and a certificate of completion." } },
  ],
};

const Index = () => (
  <div className="min-h-screen">
    <Helmet>
      <title>JR's Device Care — Phone &amp; Laptop Repair Durban</title>
      <meta name="description" content="Affordable phone, tablet & laptop repairs in Newlands West, Durban. Same-day screen & battery fixes. WhatsApp us!" />
      <link rel="canonical" href="https://jrs-device-care.lovable.app/" />
      <meta property="og:title" content="JR's Device Care — Phone & Laptop Repair Durban" />
      <meta property="og:description" content="Affordable phone, tablet & laptop repairs in Newlands West, Durban. Same-day fixes — WhatsApp us!" />
      <meta property="og:url" content="https://jrs-device-care.lovable.app/" />
      <script type="application/ld+json">{JSON.stringify(courseSchema)}</script>
      <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
    </Helmet>
    <Header />
    <main>
      <HeroSection />
      <ServicesSection />
      <RepairGallery />
      <PricingSection />
      <AcademySection />
      <IntakeForm />
      <WhyChooseUs />
      <FAQSection />
    </main>
    <Footer />
    <FloatingWhatsApp />
  </div>
);

export default Index;
