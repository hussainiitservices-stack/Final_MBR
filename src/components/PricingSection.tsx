import { motion } from "framer-motion";
import { Check } from "lucide-react";

const pricingData = [
  {
    title: "Scooty",
    subtitle: "Activa / Jupiter",
    highlight: false,
    routes: [
      { route: "Ujjain Local", price12: 400, price24: 600 },
      { route: "Ujjain → Omkareshwar", price12: 800, price24: 1200 },
    ],
  },
  {
    title: "Pulsar",
    subtitle: "Bajaj Pulsar 150",
    highlight: true,
    routes: [
      { route: "Ujjain Local", price12: 700, price24: 1000 },
      { route: "Ujjain → Omkareshwar", price12: 1000, price24: 1400 },
    ],
  },
  {
    title: "Bullet",
    subtitle: "Royal Enfield 350",
    highlight: false,
    routes: [
      { route: "All Routes", price12: 1200, price24: 1600 },
    ],
  },
];

const PricingSection = () => (
  <section id="pricing" className="section-padding bg-muted/30">
    <div className="container mx-auto">
      <div className="text-center mb-12 sm:mb-16">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section-title"
        >
          Transparent <span className="text-primary">Pricing</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="section-subtitle"
        >
          No hidden charges. What you see is what you pay.
        </motion.p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {pricingData.map((plan, i) => (
          <motion.div
            key={plan.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className={`glass-card p-6 sm:p-8 relative overflow-hidden ${
              plan.highlight ? "ring-2 ring-primary" : ""
            }`}
          >
            {plan.highlight && (
              <div className="absolute top-0 right-0 bg-primary text-primary-foreground text-xs font-semibold px-3 py-1 rounded-bl-lg">
                Popular
              </div>
            )}
            <h3 className="text-xl font-bold text-foreground mb-1">{plan.title}</h3>
            <p className="text-sm text-muted-foreground mb-6">{plan.subtitle}</p>

            <div className="space-y-4">
              {plan.routes.map((r) => (
                <div key={r.route} className="border-b border-border/50 pb-4 last:border-0 last:pb-0">
                  <p className="text-sm font-medium text-foreground mb-2">{r.route}</p>
                  <div className="flex gap-4">
                    <div className="flex items-baseline gap-1">
                      <span className="text-2xl font-bold text-primary">₹{r.price12}</span>
                      <span className="text-xs text-muted-foreground">/12hr</span>
                    </div>
                    <div className="flex items-baseline gap-1">
                      <span className="text-2xl font-bold text-foreground">₹{r.price24}</span>
                      <span className="text-xs text-muted-foreground">/24hr</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* <div className="mt-6 space-y-2">
              {["Helmet included", "Valid insurance", "24/7 support"].map((f) => (
                <div key={f} className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Check className="w-4 h-4 text-primary flex-shrink-0" />
                  {f}
                </div>
              ))}
            </div> */}
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default PricingSection;
