import type { CSSProperties } from "react";

type Tone = "wood" | "darkwood" | "marble" | "stone" | "dark" | "warm";

const tones: Record<Tone, { base: string; line: string; glow?: string }> = {
  wood: { base: "linear-gradient(135deg,#c2a878,#9b7d52)", line: "rgba(60,40,20,0.28)" },
  darkwood: { base: "linear-gradient(135deg,#5a4a38,#2f2519)", line: "rgba(0,0,0,0.45)" },
  marble: { base: "linear-gradient(135deg,#efece6,#d4cfc6)", line: "rgba(120,120,120,0.18)" },
  stone: { base: "linear-gradient(135deg,#a59c8e,#7a7163)", line: "rgba(40,36,30,0.30)" },
  dark: { base: "linear-gradient(135deg,#2c2c2c,#151515)", line: "rgba(0,0,0,0.5)" },
  warm: { base: "linear-gradient(135deg,#d8c9b0,#b39e7e)", line: "rgba(70,50,30,0.22)" },
};

/**
 * Placeholder that renders a vertical "fluted panel" texture in a chosen tone.
 * Stands in for real product photography until Ken supplies the image files.
 * Pass `label` to overlay a caption; `gap`/`thickness` tune the flute density.
 */
export default function FlutedImage({
  tone = "wood",
  label,
  className = "",
  rounded = false,
  gap = 14,
}: {
  tone?: Tone;
  label?: string;
  className?: string;
  rounded?: boolean;
  gap?: number;
}) {
  const t = tones[tone];
  const style: CSSProperties = {
    backgroundImage: `repeating-linear-gradient(90deg, transparent, transparent ${gap - 2}px, ${t.line} ${gap - 2}px, ${t.line} ${gap}px), ${t.base}`,
  };
  return (
    <div
      aria-hidden
      className={`relative overflow-hidden ${rounded ? "rounded-2xl" : ""} ${className}`}
      style={style}
    >
      <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent" />
      {label && (
        <span className="absolute left-5 top-4 font-[family-name:var(--font-display)] text-lg font-bold uppercase tracking-wide text-white drop-shadow">
          {label}
        </span>
      )}
    </div>
  );
}
