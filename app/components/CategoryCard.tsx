import Link from "next/link";
import type { ReactNode } from "react";

interface CategoryCardProps {
  title: string;
  description: string;
  icon: ReactNode;
  tone?: "brown" | "amber" | "cream" | "dark";
  href?: string;
}

const toneClasses: Record<NonNullable<CategoryCardProps["tone"]>, string> = {
  brown: "bg-[#6b4226] text-amber-50",
  amber: "bg-[#d97706] text-amber-50",
  cream: "bg-[#f0ebe3] text-[#1a1410]",
  dark: "bg-[#1a1410] text-amber-50",
};

export default function CategoryCard({
  title,
  description,
  icon,
  tone = "cream",
  href = "/products",
}: CategoryCardProps) {
  return (
    <Link
      href={href}
      className={`group flex flex-col gap-4 rounded-2xl p-6 transition-transform hover:-translate-y-1 ${toneClasses[tone]}`}
    >
      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-black/10 group-hover:bg-black/20">
        {icon}
      </div>
      <div className="flex-1">
        <h3 className="font-[family-name:var(--font-display)] text-xl font-bold">
          {title}
        </h3>
        <p className="mt-2 text-sm leading-relaxed opacity-80">{description}</p>
      </div>
      <span className="inline-flex items-center gap-1 text-sm font-semibold opacity-90 group-hover:gap-2">
        Browse <span aria-hidden>&rarr;</span>
      </span>
    </Link>
  );
}
