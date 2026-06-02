import type { Tone } from "./categories";

export interface Project {
  title: string;
  desc: string;
  tone: Tone;
  img: string;
}

// Real project write-ups + photos mirrored from geometra.com.my
export const projects: Project[] = [
  {
    title: "Modern Office Divider — WCE02 Brown Fluted Column",
    desc: "Fluted column WCE02-Brown installed in an office to separate areas while keeping openness and airflow. The vertical fluted design creates a modern aesthetic while letting light and ventilation pass between spaces.",
    tone: "wood",
    img: "/images/project1.jpg",
  },
  {
    title: "Futuristic Hairline Black Fluted Feature Wall with LED",
    desc: "Fluted panel WN03 Hairline Black installed ceiling-to-wall as a striking feature wall. LED lighting between the flutes enhances the modern, futuristic ambience, while the dark metallic hairline texture adds bold character.",
    tone: "dark",
    img: "/images/project2.jpg",
  },
  {
    title: "Classic Wood Fluted Kitchen Wall with Mirror Lighting",
    desc: "Fluted panel WN01 Wood brings a clean, timeless look to the kitchen wall. The vertical lines create an elegant visual effect that complements the half-moon mirror with lighting.",
    tone: "warm",
    img: "/images/project3.jpg",
  },
  {
    title: "45-Degree Coffee Fluted Panel Feature Wall with LED",
    desc: "Fluted panel W12 Coffee installed at a 45-degree angle creates a unique, dynamic pattern. LED lighting integrated between the grooves makes the feature wall more eye-catching and stylish.",
    tone: "darkwood",
    img: "/images/project4.jpg",
  },
  {
    title: "Slim Dark Walnut Fluted TV Feature Wall",
    desc: "Slim-design fluted panel SWT07 Dark Walnut creates a strong vertical wood texture that becomes the highlight of the living room. The elegant walnut tone makes the TV backdrop look refined and striking.",
    tone: "darkwood",
    img: "/images/project5.jpg",
  },
  {
    title: "Muji-Style Beige Fluted Reception Feature Wall",
    desc: "Fluted panel W02 Beige across a 16-foot reception backdrop creates a clean Muji-inspired aesthetic. Combined with fluted accessory profiles, it transforms the reception into a welcoming, professional space.",
    tone: "stone",
    img: "/images/project6.jpg",
  },
];
