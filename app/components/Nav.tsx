"use client";

import Link from "next/link";
import { useState } from "react";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/products", label: "Products" },
  { href: "/gallery", label: "Gallery" },
  { href: "/video", label: "Video" },
  { href: "/news", label: "Latest News" },
  { href: "/contact", label: "Contact" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-ink/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
        <Link href="/" className="flex flex-col leading-none">
          <span className="font-[family-name:var(--font-display)] text-lg font-extrabold uppercase tracking-tight text-white sm:text-xl">
            Wall Panel <span className="text-lime">Accessories</span>
          </span>
          <span className="mt-0.5 text-[10px] uppercase tracking-[0.35em] text-white/55">
            Malaysia
          </span>
        </Link>

        <nav className="hidden items-center gap-7 lg:flex">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-[13px] font-semibold uppercase tracking-wide text-white/85 transition-colors hover:text-lime"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <button
          type="button"
          aria-label="Toggle menu"
          className="lg:hidden"
          onClick={() => setOpen((o) => !o)}
        >
          <svg className="h-6 w-6 stroke-white" fill="none" viewBox="0 0 24 24" strokeWidth="2">
            {open ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {open && (
        <nav className="flex flex-col border-t border-white/10 px-5 py-2 lg:hidden">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="rounded-md px-3 py-2.5 text-sm font-semibold uppercase tracking-wide text-white/85 hover:bg-white/5 hover:text-lime"
              onClick={() => setOpen(false)}
            >
              {l.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
