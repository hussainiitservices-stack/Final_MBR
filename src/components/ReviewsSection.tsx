import { motion } from "framer-motion";
import { Star } from "lucide-react";
import googleLogo from "@/assets/google.png";
import qrCode from "@/assets/google-qr.png"; // save your QR image here

const REVIEW_LINK = "https://g.page/r/CfEIaHPrW8JvEAE/review";

const reviews = [
  {
    name: "Rahul Sharma",
    rating: 5,
    text: "Amazing service! Bikes were in great condition. Used Activa for Omkareshwar trip, very smooth experience.",
    time: "2 weeks ago",
    image: "https://i.pravatar.cc/100?img=1",
  },
  {
    name: "Priya Patel",
    rating: 5,
    text: "Very affordable and the team is super helpful. Booked a Pulsar and it was well-maintained.",
    time: "1 month ago",
    image: "https://i.pravatar.cc/100?img=2",
  },
  {
    name: "Amit Verma",
    rating: 4,
    text: "Good bikes, reasonable prices. The Bullet was a joy to ride.",
    time: "3 weeks ago",
    image: "https://i.pravatar.cc/100?img=3",
  },
];

const ReviewsSection = () => (
  <section className="section-padding">
    <div className="container mx-auto">

      {/* Heading */}
      <div className="text-center mb-12">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section-title"
        >
          What Riders <span className="text-primary">Say</span>
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="flex items-center justify-center gap-2 mt-4"
        >
          <div className="flex">
            {[1, 2, 3, 4, 5].map((s) => (
              <Star key={s} className="w-5 h-5 fill-primary text-primary" />
            ))}
          </div>
          <span className="text-sm text-muted-foreground">
            4.8 / 5 from Google Reviews
          </span>
          <img src={googleLogo} alt="Google" width={20} height={20} loading="lazy" className="w-5 h-5 ml-2" />
        </motion.div>
      </div>

      {/* Reviews Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {reviews.map((r, i) => (
          <motion.div
            key={r.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            className="bg-white/80 backdrop-blur-md border border-border rounded-xl p-6 shadow-sm hover:shadow-md transition"
          >
            {/* Profile */}
            <div className="flex items-center gap-3 mb-4">
              <img
                src={r.image}
                alt={r.name}
                width={40}
                height={40}
                loading="lazy"
                className="w-10 h-10 rounded-full object-cover"
              />

              <div className="flex-1">
                <p className="font-medium text-sm text-foreground">
                  {r.name}
                </p>
                <div className="flex items-center gap-2">
                  <p className="text-xs text-muted-foreground">
                    {r.time}
                  </p>
                  <img src={googleLogo} alt="Google" width={16} height={16} loading="lazy" className="w-4 h-4" />
                </div>
              </div>
            </div>

            {/* Stars */}
            <div className="flex gap-0.5 mb-3">
              {Array.from({ length: 5 }).map((_, s) => (
                <Star
                  key={s}
                  className={`w-4 h-4 ${
                    s < r.rating
                      ? "fill-primary text-primary"
                      : "text-border"
                  }`}
                />
              ))}
            </div>

            {/* Text */}
            <p className="text-sm text-muted-foreground leading-relaxed">
              {r.text}
            </p>
          </motion.div>
        ))}
      </div>

      {/* Leave Review Section */}
      <div className="mt-16 flex flex-col items-center text-center">
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-xl font-semibold mb-4"
        >
          Loved our service? Leave us a review ⭐
        </motion.h3>

        {/* QR Code */}
        <img
          src={qrCode}
          alt="Google Review QR"
          width={160}
          height={160}
          loading="lazy"
          className="w-40 h-40 mb-4 border rounded-lg shadow"
        />

        {/* Button */}
        <a
          href={REVIEW_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary/90 transition"
        >
          Write a Google Review
        </a>
      </div>
    </div>
  </section>
);

export default ReviewsSection;