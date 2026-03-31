import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { bikes, type BikeCategory } from "@/data/bikes";
import { Badge } from "@/components/ui/badge";

const filters: BikeCategory[] = ["All", "Scooty", "Motorbike"];

const BikeSection = () => {
  const [active, setActive] = useState<BikeCategory>("All");
  const filtered = active === "All" ? bikes : bikes.filter((b) => b.category === active);

  return (
    <section id="bikes" className="section-padding">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="section-title"
          >
            Our <span className="text-primary">Fleet</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="section-subtitle"
          >
            Choose from our well-maintained collection
          </motion.p>
        </div>

        <div className="flex justify-center gap-3 mb-10">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActive(f)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                active === f
                  ? "bg-primary text-primary-foreground"
                  : "bg-muted text-muted-foreground hover:bg-muted/80"
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          <AnimatePresence mode="popLayout">
            {filtered.map((bike) => (
              <motion.div
                key={bike.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="glass-card overflow-hidden hover-lift group"
              >
                <div className="relative overflow-hidden aspect-[4/3] bg-muted">
                  <img
                    src={bike.image}
                    alt={bike.name}
                    loading="lazy"
                    width={800}
                    height={600}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <Badge className="absolute top-3 left-3 bg-secondary text-secondary-foreground text-xs">
                    {bike.category}
                  </Badge>
                </div>
                <div className="p-5">
                  <h3 className="font-semibold text-lg text-foreground mb-2">{bike.name}</h3>
                  <div className="flex items-baseline gap-1">
                    <span className="text-2xl font-bold text-primary">₹{bike.pricing.ujjain12hr}</span>
                    <span className="text-sm text-muted-foreground">/ 12hr</span>
                  </div>
                  <p className="text-xs text-muted-foreground mt-1">Ujjain local starting price</p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default BikeSection;
