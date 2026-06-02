import Nav from "../components/Nav";
import Footer from "../components/Footer";
import { categories } from "../data/categories";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Products | Wall Panel Accessories Malaysia",
  description:
    "Browse all wall panel accessories: aluminum profiles, end caps, adhesives, mounting hardware, LED strips, cleaning supplies, installation tools, and decorative accents.",
};

export default function ProductsPage() {
  return (
    <>
      <Nav />
      <main className="flex-1">
        <section className="border-b border-border bg-muted">
          <div className="mx-auto max-w-7xl px-5 py-14 lg:px-8 lg:py-20">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-brand">Our range</p>
            <h1 className="mt-3 font-[family-name:var(--font-display)] text-4xl font-bold sm:text-5xl">
              Wall panel accessories — full catalogue.
            </h1>
            <p className="mt-4 max-w-2xl text-foreground/70 leading-relaxed">
              Every category we stock. Tap a heading or scroll for details. WhatsApp us
              with a part name or photo for stock check and pricing.
            </p>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-5 py-12 lg:px-8">
          <nav className="mb-10 flex flex-wrap gap-2">
            {categories.map((c) => (
              <a
                key={c.slug}
                href={`#${c.slug}`}
                className="rounded-full border border-border bg-background px-4 py-2 text-sm font-medium text-foreground/80 transition-colors hover:border-brand hover:text-brand"
              >
                {c.title}
              </a>
            ))}
          </nav>

          <div className="space-y-16">
            {categories.map((c) => (
              <article key={c.slug} id={c.slug} className="scroll-mt-24">
                <div className="flex items-start gap-4">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-muted text-brand">
                    {c.icon}
                  </div>
                  <div className="flex-1">
                    <h2 className="font-[family-name:var(--font-display)] text-2xl font-bold sm:text-3xl">
                      {c.title}
                    </h2>
                    <p className="mt-2 max-w-3xl text-foreground/70 leading-relaxed">{c.long}</p>
                  </div>
                </div>

                <ul className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
                  {c.items.map((item) => (
                    <li
                      key={item}
                      className="rounded-xl border border-border bg-background px-4 py-3 text-sm font-medium text-foreground/80"
                    >
                      {item}
                    </li>
                  ))}
                </ul>

                <a
                  href={`https://wa.me/60162258458?text=${encodeURIComponent(
                    `Hi, I'd like a quote on ${c.title}.`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-brand hover:gap-2"
                >
                  WhatsApp for quote <span aria-hidden>&rarr;</span>
                </a>
              </article>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
