import {
  AdhesiveIcon,
  CapIcon,
  CleanIcon,
  DecorIcon,
  HardwareIcon,
  LedIcon,
  ProfileIcon,
  ToolIcon,
} from "@/app/components/icons";
import type { ReactNode } from "react";

export interface Category {
  slug: string;
  title: string;
  short: string;
  long: string;
  tone: "brown" | "amber" | "cream" | "dark";
  icon: ReactNode;
  items: string[];
}

export const categories: Category[] = [
  {
    slug: "aluminum-profiles",
    title: "Aluminum Profiles",
    short: "Corner, joint, and channel profiles for clean transitions between panels.",
    long:
      "Anodized aluminum profiles in matte black, brushed silver, gold, and rose gold. Standard 2.4m and 2.7m lengths, custom cuts on request.",
    tone: "brown",
    icon: <ProfileIcon />,
    items: ["L-corner profile", "T-joint profile", "U-channel profile", "Skirting profile"],
  },
  {
    slug: "end-caps-trims",
    title: "End Caps & Trims",
    short: "Finishing pieces that hide raw panel edges for a polished look.",
    long:
      "Matched end caps and edge trims sized to fluted, carbon crystal, and PVC marble panels. Press-fit and adhesive-fix options.",
    tone: "cream",
    icon: <CapIcon />,
    items: ["Fluted panel end cap", "Top trim", "Bottom trim", "Joint cover"],
  },
  {
    slug: "panel-adhesives",
    title: "Panel Adhesives & Sealants",
    short: "Strong-grip mounting adhesives and gap-filling sealants.",
    long:
      "Construction-grade panel adhesives, neutral silicone sealants, and double-sided mounting tape. Tested compatible with PVC, MDF, and carbon crystal substrates.",
    tone: "dark",
    icon: <AdhesiveIcon />,
    items: ["Panel mounting adhesive", "Silicone sealant", "Double-sided tape", "Foam tape"],
  },
  {
    slug: "mounting-hardware",
    title: "Mounting Hardware",
    short: "Clips, screws, brackets, and anchors for every wall type.",
    long:
      "Hidden-fix clip systems, panel screws with colour-matched caps, drywall and concrete anchors, mounting brackets for shelving and accents.",
    tone: "cream",
    icon: <HardwareIcon />,
    items: ["Hidden fix clips", "Coloured panel screws", "Wall anchors", "Z-clip mounts"],
  },
  {
    slug: "led-lighting",
    title: "LED Strips & Lighting",
    short: "Accent and backlighting for fluted and feature panels.",
    long:
      "Warm white and RGB LED strips with diffusers, sized to fit aluminum profiles. Plug-and-play drivers and dimmers included.",
    tone: "amber",
    icon: <LedIcon />,
    items: ["Warm white LED strip", "RGB LED strip", "Diffuser channel", "LED driver"],
  },
  {
    slug: "cleaning-care",
    title: "Cleaning & Maintenance",
    short: "Panel-safe cleaners that don't dull or scratch finishes.",
    long:
      "pH-neutral cleaners, microfibre cloths, and protective sprays formulated for decorative wall panel surfaces.",
    tone: "cream",
    icon: <CleanIcon />,
    items: ["Panel cleaner spray", "Microfibre cloth pack", "Anti-static spray", "Stain remover"],
  },
  {
    slug: "cutting-tools",
    title: "Cutting & Installation Tools",
    short: "Precision cutters, levels, and spacers for clean installs.",
    long:
      "Mitre boxes, panel cutters, laser levels, spacers, and measuring tools sized for the job. Tools that pay for themselves on the first project.",
    tone: "brown",
    icon: <ToolIcon />,
    items: ["Panel cutter", "Mitre box", "Laser level", "Installation spacers"],
  },
  {
    slug: "decorative-accents",
    title: "Decorative Accents",
    short: "Mirrors, wave brick, and trim pieces that lift a feature wall.",
    long:
      "Mirror panels, wave crystal brick, and decorative inlays that pair with fluted and PVC marble panels. Designed to ship and install with the rest of the wall.",
    tone: "dark",
    icon: <DecorIcon />,
    items: ["Mirror panel", "Wave crystal brick", "Decorative inlay", "Feature trim"],
  },
];
