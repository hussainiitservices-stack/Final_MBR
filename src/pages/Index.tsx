import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import WhyChooseUs from "@/components/WhyChooseUs";
import BikeSection from "@/components/BikeSection";
import PricingSection from "@/components/PricingSection";
import ReviewsSection from "@/components/ReviewsSection";
import BookingForm from "@/components/BookingForm";
import WhatsAppButton from "@/components/WhatsAppButton";
import Footer from "@/components/Footer";

const Index = () => (
  <div className="min-h-screen bg-background">
    <Header />
    <main>
      <HeroSection />
      <BikeSection />
      <WhyChooseUs />
      
      <PricingSection />
      <ReviewsSection />
      <BookingForm />
    </main>
    <Footer />
    <WhatsAppButton />
  </div>
);

export default Index;
