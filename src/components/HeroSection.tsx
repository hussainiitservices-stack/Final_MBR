import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.jpg";
import { useRef, useState } from "react";

const WHATSAPP_URL = "https://wa.me/919131128124?text=Hi%2C%20I%20want%20to%20book%20a%20bike%20from%20Mahakal%20Bike%20Rental";

const PHONE_NUMBER = "919131128124";

const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

const handleCallOrWhatsApp = () => {
  if (isMobile) {
    window.location.href = `tel:+${PHONE_NUMBER}`;
  } else {
    window.open(
      `https://wa.me/${PHONE_NUMBER}?text=Hi%20Mahakal%20Bikes,%20I%20want%20to%20book%20a%20bike`,
      "_blank"
    );
  }
};

const HeroSection = () => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setTilt({ x: y * -15, y: x * 15 });
  };

  const resetTilt = () => setTilt({ x: 0, y: 0 });

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={heroBg}
          alt="Motorcycle on scenic road"
          width={1920}
          height={1080}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-foreground/60" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10 pt-24 pb-16">
        <div className="max-w-3xl">
          <motion.div
            ref={cardRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={resetTilt}
            style={{
              transform: `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
              transformStyle: "preserve-3d",
            }}
            className="transition-transform duration-200 ease-out"
          >
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-primary font-semibold text-sm uppercase tracking-widest mb-4"
            >
              Mahakal Bike Rental Services
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-4xl sm:text-5xl lg:text-7xl font-extrabold leading-tight mb-6"
              style={{ color: "hsl(0 0% 100%)" }}
            >
              Ride Your Journey
              <br />
              <span className="text-gradient-primary">with Mahakal Bikes.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35 }}
              className="text-lg sm:text-xl mb-8 max-w-xl"
              style={{ color: "hsl(0 0% 85%)" }}
            >
              Affordable bike rentals in Ujjain & Omkareshwar. Well-maintained scooters and motorcycles for your journey.
            </motion.p>
          </motion.div>

          <motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 0.5 }}
  className="flex flex-wrap gap-4"
>
  {isMobile ? (
    <>
      {/* Mobile: Show BOTH */}
      <Button
        size="lg"
        onClick={() => (window.location.href = `tel:+${PHONE_NUMBER}`)}
        className="bg-primary text-primary-foreground hover:bg-primary/90 text-base px-8 transition-all duration-200 hover:scale-105"
      >
        Call Now
      </Button>

      <Button
        size="lg"
        variant="outline"
        asChild
        className="border-primary/40 text-primary-foreground bg-primary/10 hover:bg-primary/20 text-base px-8 transition-all duration-200 hover:scale-105 backdrop-blur-sm"
      >
        <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
          <MessageCircle className="w-5 h-5 mr-2" />
          WhatsApp Us
        </a>
      </Button>
    </>
  ) : (
    <>
      {/* Desktop: Show ONLY ONE */}
      <Button
        size="lg"
        onClick={handleCallOrWhatsApp}
        className="bg-primary text-primary-foreground hover:bg-primary/90 text-base px-8 transition-all duration-200 hover:scale-105"
      >
        Book on WhatsApp
      </Button>
    </>
  )}
</motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;