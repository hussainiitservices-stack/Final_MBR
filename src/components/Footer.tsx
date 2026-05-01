import { Phone, MapPin, MessageCircle } from "lucide-react";
import logo from "@/assets/2-logo.png";

const WHATSAPP_URL = "https://wa.me/919131128124?text=Hi%2C%20I%20want%20to%20book%20a%20bike%20from%20Mahakal%20Bike%20Rental";

const Footer = () => {
  const year = new Date().getFullYear();

  const scrollTo = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-4 sm:px-6 py-12 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Logo + About */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <img
                src={logo}
                alt="Mahakal Bikes Logo"
                width={54}
                height={40}
                loading="lazy"
                className="h-10 object-contain"
              />
              <span className="font-bold text-lg">Mahakal Bikes</span>
            </div>
            <p className="text-sm opacity-70 leading-relaxed">
              Affordable bike rental services in Ujjain and Omkareshwar. Your trusted ride partner.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4 text-sm uppercase tracking-wider opacity-80">
              Quick Links
            </h4>
            <div className="space-y-2">
              {["Home", "Bikes", "Pricing", "Contact"].map((l) => (
                <button
                  key={l}
                  onClick={() => scrollTo(`#${l.toLowerCase()}`)}
                  className="block text-sm opacity-70 hover:opacity-100 hover:text-primary transition-all duration-200"
                >
                  {l}
                </button>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4 text-sm uppercase tracking-wider opacity-80">
              Contact
            </h4>
            <div className="space-y-3 text-sm opacity-70">

              {/* Phone */}
              <a
                href="tel:+919131128124"
                className="flex items-center gap-2 hover:opacity-100 hover:text-primary transition-all"
              >
                <Phone className="w-4 h-4 flex-shrink-0" />
                <span>+91 91311 28124</span>
              </a>

              {/* Address */}
              <a
                href="https://maps.google.com/?q=Railway+Station+Ujjain+Dewas+Rd+Malipura+Ujjain"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-2 hover:opacity-100 hover:text-primary transition-all"
              >
                <MapPin className="w-4 h-4 flex-shrink-0 mt-1" />
                <span>
                  Railway Station, Ujjain Dewas Rd,<br />
                  Malipura, Ujjain,<br />
                  Madhya Pradesh 456001, India
                </span>
              </a>

              {/* WhatsApp */}
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:opacity-100 hover:text-primary transition-all"
              >
                <MessageCircle className="w-4 h-4 flex-shrink-0" />
                <span>WhatsApp Us</span>
              </a>
            </div>
          </div>

          {/* Service Areas */}
          <div>
            <h4 className="font-semibold mb-4 text-sm uppercase tracking-wider opacity-80">
              Service Areas
            </h4>
            <div className="space-y-2 text-sm opacity-70">
              <p>Ujjain City</p>
              <p>Mahakaleshwar Temple Area</p>
              <p>Omkareshwar</p>
              <p>Ujjain → Omkareshwar Route</p>
            </div>
          </div>
        </div>

        {/* Bottom */}
<div className="border-t border-background/10 mt-10 pt-6 text-center space-y-2">
  <p className="text-sm opacity-50">
    © {year} Mahakal Bike Rental Services. All rights reserved.
  </p>

  <p className="text-xs opacity-60">
    Developed by{" "}
    <a
      href="https://hussainiitservices.com/"
      target="_blank"
      rel="noopener noreferrer"
      className="text-primary hover:underline"
    >
      Hussaini IT Services
    </a>
  </p>
</div>
      </div>
    </footer>
  );
};

export default Footer;