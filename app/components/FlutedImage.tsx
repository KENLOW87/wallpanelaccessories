import type { CSSProperties } from "react";

type Tone = "wood" | "darkwood" | "marble" | "stone" | "dark" | "warm";

const tones: Record<Tone, { base: string; line: string }> = {
  wood: { base: "linear-gradient(135deg,#c2a878,#9b7d52)", line: "rgba(60,40,20,0.28)" },
  darkwood: { base: "linear-gradient(135deg,#5a4a38,#2f2519)", line: "rgba(0,0,0,0.45)" },
  marble: { base: "linear-gradient(135deg,#efece6,#d4cfc6)", line: "rgba(120,120,120,0.18)" },
  stone: { base: "linear-gradient(135deg,#a59c8e,#7a7163)", line: "rgba(40,36,30,0.30)" },
  dark: { base: "linear-gradient(135deg,#2c2c2c,#151515)", line: "rgba(0,0,0,0.5)" },
  warm: { base: "linear-gradient(135deg,#d8c9b0,#b39e7e)", line: "rgba(70,50,30,0.22)" },
};

/**
 * Renders a real photo when `src` is given, otherwise a vertical "fluted panel"
 * texture in the chosen tone (used as a graceful fallback).
 */
export default function FlutedImage({
  tone = "wood",
  src,
  alt = "",
  label,
  className = "",
  rounded = false,
  gap = 14,
  priority = false,
}: {
  tone?: Tone;
  src?: string;
  alt?: string;
  label?: string;
  className?: string;
  rounded?: boolean;
  gap?: number;
  priority?: boolean;
}) {
  const t = tones[tone];
  const textureStyle: CSSProperties = {
    backgroundImage: `repeating-linear-gradient(90deg, transparent, transparent ${gap - 2}px, ${t.line} ${gap - 2}px, ${t.line} ${gap}px), ${t.base}`,
  };

  return (
    <div
      className={`relative overflow-hidden ${rounded ? "rounded-2xl" : ""} ${className}`}
      style={src ? undefined : textureStyle}
    >
      {src && (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={src}
          alt={alt}
          loading={priority ? "eager" : "lazy"}
          className="absolute inset-0 h-full w-full object-cover"
        />
      )}
      {label && (
        <>
          <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent" />
          <span className="absolute left-5 top-4 font-[family-name:var(--font-display)] text-lg font-bold uppercase tracking-wide text-white drop-shadow">
            {label}
          </span>
        </>
      )}
    </div>
  );
}
