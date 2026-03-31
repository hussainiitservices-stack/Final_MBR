import { motion } from "framer-motion";
import { IndianRupee, Wrench, CalendarCheck, Headphones, Shield, MapPin } from "lucide-react";
import { useRef, useState } from "react";

const features = [
  { icon: IndianRupee, title: "Affordable Pricing", desc: "Best rates in Ujjain & Omkareshwar region" },
  { icon: Wrench, title: "Well-Maintained", desc: "Regularly serviced and safety-checked bikes" },
  { icon: CalendarCheck, title: "Easy Booking", desc: "Book in minutes via form or WhatsApp" },
  { icon: Headphones, title: "Local Support", desc: "24/7 roadside assistance available" },
  { icon: Shield, title: "Insured Rides", desc: "All vehicles come with valid insurance" },
  { icon: MapPin, title: "Flexible Pickup", desc: "Convenient pickup and drop locations" },
];

const TiltCard = ({ icon: Icon, title, desc }: { icon: typeof IndianRupee; title: string; desc: string }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const handleMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setTilt({ x: y * -10, y: x * 10 });
  };

  return (
    <div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={() => setTilt({ x: 0, y: 0 })}
      style={{
        transform: `perspective(800px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
        transformStyle: "preserve-3d",
      }}
      className="glass-card p-6 sm:p-8 hover-lift transition-transform duration-200 ease-out cursor-default"
    >
      <div className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center mb-4">
        <Icon className="w-6 h-6 text-accent-foreground" />
      </div>
      <h3 className="font-semibold text-lg text-foreground mb-2">{title}</h3>
      <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>
    </div>
  );
};

const WhyChooseUs = () => (
  <section id="why-us" className="section-padding bg-muted/30">
    <div className="container mx-auto">
      <div className="text-center mb-12 sm:mb-16">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section-title"
        >
          Why Choose <span className="text-primary">Mahakal</span>?
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="section-subtitle"
        >
          Trusted by hundreds of riders across Ujjain
        </motion.p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((f, i) => (
          <motion.div
            key={f.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
          >
            <TiltCard {...f} />
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default WhyChooseUs;
