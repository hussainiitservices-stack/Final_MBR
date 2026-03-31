import activaImg from "@/assets/bike-activa.png";
import jupiterImg from "@/assets/bike-jupiter.jpg";
import pulsarImg from "@/assets/bike-pulsar.jpg";
import bulletImg from "@/assets/bike-bullet.jpg";
import splendorImg from "@/assets/bike-splendor.jpg";
import passionImg from "@/assets/bike-passion.jpg";
import shineImg from "@/assets/bike-shine.jpg";

export type BikeCategory = "All" | "Scooty" | "Motorbike";

export interface Bike {
  id: string;
  name: string;
  category: "Scooty" | "Motorbike";
  image: string;
  pricing: {
    ujjain12hr: number;
    ujjain24hr: number;
    omkareshwar12hr?: number;
    omkareshwar24hr?: number;
  };
}

export const bikes: Bike[] = [
  {
    id: "activa",
    name: "Activa",
    category: "Scooty",
    image: activaImg,
    pricing: { ujjain12hr: 400, ujjain24hr: 600, omkareshwar12hr: 800, omkareshwar24hr: 1200 },
  },
  {
    id: "jupiter",
    name: "Jupiter",
    category: "Scooty",
    image: jupiterImg,
    pricing: { ujjain12hr: 400, ujjain24hr: 600, omkareshwar12hr: 800, omkareshwar24hr: 1200 },
  },
  {
    id: "pulsar",
    name: "Pulsar",
    category: "Motorbike",
    image: pulsarImg,
    pricing: { ujjain12hr: 700, ujjain24hr: 1000, omkareshwar12hr: 1000, omkareshwar24hr: 1400 },
  },
  {
    id: "bullet",
    name: "Bullet",
    category: "Motorbike",
    image: bulletImg,
    pricing: { ujjain12hr: 1200, ujjain24hr: 1600 },
  },
  {
    id: "splendor",
    name: "Splendor",
    category: "Motorbike",
    image: splendorImg,
    pricing: { ujjain12hr: 500, ujjain24hr: 700, omkareshwar12hr: 800, omkareshwar24hr: 1100 },
  },
  {
    id: "passion",
    name: "Passion",
    category: "Motorbike",
    image: passionImg,
    pricing: { ujjain12hr: 500, ujjain24hr: 700, omkareshwar12hr: 800, omkareshwar24hr: 1100 },
  },
  {
    id: "shine",
    name: "Shine",
    category: "Motorbike",
    image: shineImg,
    pricing: { ujjain12hr: 600, ujjain24hr: 800, omkareshwar12hr: 900, omkareshwar24hr: 1200 },
  },
];
