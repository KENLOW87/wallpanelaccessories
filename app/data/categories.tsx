export type Tone = "wood" | "darkwood" | "marble" | "stone" | "dark" | "warm";

export interface Category {
  slug: string;
  title: string;
  short: string;
  long: string;
  tone: Tone;
  items: string[];
}

// Mirrors the "What We Do" range on geometra.com.my
export const categories: Category[] = [
  {
    slug: "carbon-crystal-wall-panel",
    title: "Carbon Crystal Wall Panel",
    short: "Scratch-resistant, easy-clean panels with a flawless matte or gloss finish.",
    long:
      "Carbon crystal wall panels deliver a premium, seamless finish that resists scratches, moisture and fading. Ideal for feature walls, TV consoles and wardrobe fronts in homes, offices and hotels.",
    tone: "dark",
    items: ["Matte finish", "High gloss", "Marble pattern", "Solid colours"],
  },
  {
    slug: "mdf-board",
    title: "MDF Board",
    short: "Versatile engineered board for wave panels, feature walls and joinery.",
    long:
      "MDF wave and grooved boards bring depth and rhythm to a wall. A smooth, paintable surface that machines cleanly for custom carpentry and built-in furniture.",
    tone: "warm",
    items: ["Wave board", "Grooved board", "Paintable surface", "Custom carpentry"],
  },
  {
    slug: "pvc-marble",
    title: "PVC Marble",
    short: "Lightweight marble-look sheets — the luxury of stone, easier to install.",
    long:
      "PVC marble sheets reproduce natural marble veining at a fraction of the weight and cost. Waterproof and wipe-clean, perfect for feature walls, columns and wet areas.",
    tone: "marble",
    items: ["Calacatta white", "Black marble", "Beige travertine", "Grey veined"],
  },
  {
    slug: "wainscoting",
    title: "Wainscoting",
    short: "Classic wall moulding that adds timeless character to any room.",
    long:
      "Wainscoting and decorative moulding frame a wall with elegant proportion. Pre-finished profiles make it fast to create a refined, classic feature on feature walls and hallways.",
    tone: "stone",
    items: ["Panel moulding", "Chair rail", "Skirting", "Decorative frames"],
  },
  {
    slug: "fluted-panel",
    title: "Fluted Panel",
    short: "Vertical fluted lines that add a directional flair to any space.",
    long:
      "Our signature fluted panels create striking vertical rhythm and texture. Available in wood, hairline, walnut and coffee tones — pair with LED lighting for a modern, futuristic feature wall.",
    tone: "darkwood",
    items: ["Wood tone", "Hairline black", "Dark walnut", "Coffee / beige"],
  },
  {
    slug: "accessories",
    title: "Accessories",
    short: "Profiles, end caps, trims and adhesives that complete the install.",
    long:
      "Every finishing piece a wall panel installation needs — aluminium profiles, end caps, trims, adhesives, mounting hardware and LED strips. Matched to the panels we supply.",
    tone: "wood",
    items: ["Aluminium profiles", "End caps & trims", "Panel adhesive", "LED strips"],
  },
];
