import Link from "next/link";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import FlutedImage from "./components/FlutedImage";
import { categories } from "./data/categories";
import { projects } from "./data/projects";

const features = [
  { label: "Anti Scratch", icon: "M4 7l8-4 8 4M4 7v10l8 4 8-4V7M4 7l8 4 8-4" },
  { label: "Easy to Clean", icon: "M3 12h18M12 3v18" },
  { label: "Anti Flammable", icon: "M12 2c2 3 4 5 4 8a4 4 0 1 1-8 0c0-1 .5-2 1-3" },
];

export default function Home() {
  return (
    <>
      <Nav />

      <main className="flex-1">
        {/* ===== HERO ===== */}
        <section className="relative overflow-hidden bg-ink">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/images/intro.jpg" alt="Fluted feature wall interior" className="absolute inset-0 h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-ink/95 via-ink/60 to-ink/25" />
          <div className="relative mx-auto flex min-h-[78vh] max-w-7xl flex-col justify-center px-5 py-24 lg:px-8">
            <div className="max-w-2xl">
              <p className="font-[family-name:var(--font-display)] text-4xl font-extrabold uppercase leading-tight text-white [text-shadow:0_2px_12px_rgba(0,0,0,0.6)] sm:text-5xl lg:text-6xl">
                Adds a directional<br />
                <span className="text-lime">flair to any space</span>
              </p>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-zinc-200 [text-shadow:0_1px_8px_rgba(0,0,0,0.7)]">
                Get inspired by a fresh approach to crafting a home that&apos;s uniquely yours —
                fluted panels, PVC marble and carbon crystal walls, supplied across Malaysia.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/products"
                  className="inline-flex items-center justify-center rounded-full bg-lime px-8 py-3 text-sm font-bold uppercase tracking-wide text-ink transition-colors hover:bg-lime-dark"
                >
                  View Products
                </Link>
                <a
                  href="https://wa.me/60162258458"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-full border border-white/25 px-8 py-3 text-sm font-bold uppercase tracking-wide text-white transition-colors hover:bg-white/10"
                >
                  Get a Quote
                </a>
              </div>

              <div className="mt-12 flex gap-8">
                {features.map((f) => (
                  <div key={f.label} className="flex flex-col items-center gap-2 text-center">
                    <span className="flex h-14 w-14 items-center justify-center rounded-full border-2 border-lime">
                      <svg className="h-6 w-6 stroke-lime" fill="none" viewBox="0 0 24 24" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                        <path d={f.icon} />
                      </svg>
                    </span>
                    <span className="text-xs font-semibold uppercase tracking-wide text-zinc-300">
                      {f.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ===== INTRO ===== */}
        <section className="diag-texture bg-background">
          <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-20 lg:grid-cols-2 lg:px-8">
            <div>
              <h2 className="font-[family-name:var(--font-display)] text-3xl font-extrabold uppercase leading-tight text-foreground sm:text-4xl">
                Custom homes with<br />timeless elegance
              </h2>
              <p className="mt-6 leading-relaxed text-foreground/70">
                Wall Panel Accessories Malaysia (Nova Arte Sdn Bhd) is a fluted panel, PVC marble
                and foam panel solutions provider based in Malaysia. Today, we are proud to be one
                of the leading and most recommended importers and wholesalers in the wall panel
                industry. We are inspired to lead and sustain a transformational change in this
                industry with revolutionary product innovation, top-notch design and a dedicated
                team that provides outstanding service.
              </p>
              <Link
                href="/about"
                className="mt-8 inline-flex items-center justify-center rounded-full bg-lime px-7 py-3 text-sm font-bold uppercase tracking-wide text-ink transition-colors hover:bg-lime-dark"
              >
                View More
              </Link>
            </div>
            <FlutedImage tone="marble" src="/images/carbon-crystal.jpg" alt="Living room wall panel feature" rounded className="aspect-[5/4] w-full" />
          </div>
        </section>

        {/* ===== WHAT WE DO ===== */}
        <section className="bg-muted">
          <div className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
            <div className="text-center">
              <p className="text-sm font-bold uppercase tracking-[0.3em] text-lime-dark">What We Do</p>
              <h2 className="mt-3 font-[family-name:var(--font-display)] text-3xl font-extrabold uppercase text-foreground sm:text-4xl">
                Our Wall Panel Range
              </h2>
            </div>
            <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {categories.map((c) => (
                <Link
                  key={c.slug}
                  href={`/products#${c.slug}`}
                  className="group relative block aspect-[4/3] overflow-hidden rounded-2xl"
                >
                  <FlutedImage tone={c.tone} src={c.img} alt={c.title} className="absolute inset-0 h-full w-full transition-transform duration-500 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 flex items-center justify-between p-5">
                    <h3 className="font-[family-name:var(--font-display)] text-lg font-bold uppercase text-white">
                      {c.title}
                    </h3>
                    <span className="flex h-8 w-8 items-center justify-center rounded bg-lime text-ink transition-transform group-hover:translate-x-1">
                      &rarr;
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ===== THOUGHTFUL DESIGN BAND ===== */}
        <section className="relative overflow-hidden">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/images/project2.jpg" alt="LED-lit fluted feature wall" className="absolute inset-0 h-full w-full object-cover" />
          <div className="absolute inset-0 bg-ink/65" />
          <div className="relative mx-auto max-w-7xl px-5 py-24 text-center lg:px-8">
            <h2 className="font-[family-name:var(--font-display)] text-3xl font-extrabold uppercase text-white sm:text-4xl">
              Thoughtful design for modern living
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-lg text-zinc-200">
              The home of your dreams begins with the perfect palette for every room.
            </p>
            <Link
              href="/gallery"
              className="mt-8 inline-flex items-center justify-center rounded-full bg-lime px-8 py-3 text-sm font-bold uppercase tracking-wide text-ink transition-colors hover:bg-lime-dark"
            >
              Find Out More
            </Link>
          </div>
        </section>

        {/* ===== OUR PROJECT ===== */}
        <section className="diag-texture bg-background">
          <div className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
            <div className="text-center">
              <p className="text-sm font-bold uppercase tracking-[0.3em] text-lime-dark">Portfolio</p>
              <h2 className="mt-3 font-[family-name:var(--font-display)] text-3xl font-extrabold uppercase text-foreground sm:text-4xl">
                Our Projects
              </h2>
            </div>
            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {projects.map((p) => (
                <article key={p.title} className="overflow-hidden rounded-2xl border border-border bg-white shadow-sm">
                  <FlutedImage tone={p.tone} src={p.img} alt={p.title} className="aspect-[4/3] w-full" />
                  <div className="p-5">
                    <h3 className="font-[family-name:var(--font-display)] text-base font-bold uppercase leading-snug text-foreground">
                      {p.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-foreground/65">{p.desc}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
