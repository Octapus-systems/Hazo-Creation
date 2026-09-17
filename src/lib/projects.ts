import villa from "@/assets/project-villa.jpg";
import penthouse from "@/assets/project-penthouse.jpg";
import office from "@/assets/project-office.jpg";
import automation from "@/assets/project-automation.jpg";
import hospitality from "@/assets/project-hospitality.jpg";
import kitchen from "@/assets/project-kitchen.jpg";

export type ProjectCategory =
  | "Residential"
  | "Villas"
  | "Apartments"
  | "Commercial"
  | "Retail"
  | "Hospitality";

export interface Project {
  slug: string;
  title: string;
  category: ProjectCategory;
  location: string;
  area: string;
  year: string;
  image: string;
  description: string;
  services: string[];
}

export const projects: Project[] = [
  {
    slug: "palm-shoreline-villa",
    title: "Palm Shoreline Villa",
    category: "Villas",
    location: "Palm Jumeirah, Dubai",
    area: "12,400 sq ft",
    year: "2025",
    image: villa,
    description:
      "A waterfront villa reimagined as a quiet sculpture — full structural renovation, interior architecture, joinery, and full-home automation.",
    services: ["Interior Design", "Villa Renovation", "Home Automation", "Joinery"],
  },
  {
    slug: "downtown-sky-penthouse",
    title: "Downtown Sky Penthouse",
    category: "Apartments",
    location: "Downtown Dubai",
    area: "6,800 sq ft",
    year: "2024",
    image: penthouse,
    description:
      "Panoramic penthouse anchored by warm stone, brushed brass and tailored linen — a calm, cinematic counterpoint to the city skyline.",
    services: ["Interior Design", "Turnkey Fit-Out", "Lighting Automation"],
  },
  {
    slug: "horizon-headquarters",
    title: "Horizon Headquarters",
    category: "Commercial",
    location: "DIFC, Dubai",
    area: "22,000 sq ft",
    year: "2024",
    image: office,
    description:
      "Corporate headquarters expressed in walnut, blackened steel and choreographed daylight — engineered for focus and quiet authority.",
    services: ["Office Design", "Commercial Fit-Out", "AV Systems"],
  },
  {
    slug: "atelier-smart-home",
    title: "Atelier Smart Residence",
    category: "Residential",
    location: "Emirates Hills, Dubai",
    area: "9,200 sq ft",
    year: "2025",
    image: automation,
    description:
      "A whole-home automation platform — lighting, climate, security, AV and shading — designed to disappear into the architecture.",
    services: ["Home Automation", "Lighting", "Security Systems", "AV"],
  },
  {
    slug: "maison-grand-hotel",
    title: "Maison Grand Hotel",
    category: "Hospitality",
    location: "Saadiyat, Abu Dhabi",
    area: "38,000 sq ft",
    year: "2023",
    image: hospitality,
    description:
      "Hotel arrival sequence designed as a slow reveal — travertine, brushed gold and theatrical light shape an unforgettable welcome.",
    services: ["Interior Design", "Turnkey Fit-Out", "Joinery", "Lighting"],
  },
  {
    slug: "linea-culinary-residence",
    title: "Linea Culinary Residence",
    category: "Residential",
    location: "Jumeirah, Dubai",
    area: "1,800 sq ft",
    year: "2025",
    image: kitchen,
    description:
      "A whole-floor culinary suite — bespoke cabinetry, honed marble, and a hidden automation layer for lighting, climate and music.",
    services: ["Joinery", "Renovation", "Lighting Automation"],
  },
];

export const categories: ("All" | ProjectCategory)[] = [
  "All",
  "Residential",
  "Villas",
  "Apartments",
  "Commercial",
  "Hospitality",
];
