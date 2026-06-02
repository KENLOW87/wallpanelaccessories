"use client";

import Link from "next/link";
import { useState } from "react";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/products", label: "Products" },
  { href: "/gallery", label: "Gallery" },
  { href: "/contact", label: "Contact" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/90 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
        <Link href="/" className="flex flex-col leading-tight">
          <span className="font-[family-name:var(--font-display)] text-lg font-bold text-brand sm:text-xl">
            Wall Panel Accessories
          </span>
          <span className="text-[10px] uppercase tracking-[0.2em] text-foreground/60 sm:text-xs">
            Malaysia
          </span>
        </Link>

        <nav className="hidden gap-8 md:flex">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-foreground/80 transition-colors hover:text-brand"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <a
          href="https://wa.me/60162258458"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden rounded-full bg-brand px-5 py-2 text-sm font-semibold text-white transition-colors hover:bg-brand-hover md:inline-block"
        >
          Get a Quote
        </a>

        <button
          type="button"
          aria-label="Toggle menu"
          className="md:hidden"
          onClick={() => setOpen((o) => !o)}
        >
          <svg className="h-6 w-6 stroke-foreground" fill="none" viewBox="0 0 24 24" strokeWidth="2">
            {open ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {open && (
        <nav className="flex flex-col gap-1 border-t border-border px-5 py-3 md:hidden">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="rounded-md px-3 py-2 text-sm font-medium text-foreground/80 hover:bg-muted hover:text-brand"
              onClick={() => setOpen(false)}
            >
              {l.label}
            </Link>
          ))}
          <a
            href="https://wa.me/60162258458"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 rounded-full bg-brand px-5 py-2 text-center text-sm font-semibold text-white"
          >
            Get a Quote
          </a>
        </nav>
      )}
    </header>
  );
}
