import Nav from "../components/Nav";
import Footer from "../components/Footer";
import FlutedImage from "../components/FlutedImage";
import { categories } from "../data/categories";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Products | Wall Panel Accessories Malaysia",
  description:
    "Our wall panel range: carbon crystal wall panels, MDF board, PVC marble, wainscoting, fluted panels and accessories. Supplied nationwide across Malaysia.",
};

function PageHead({ kicker, title, sub }: { kicker: string; title: string; sub: string }) {
  return (
    <section className="bg-ink">
      <div className="mx-auto max-w-7xl px-5 py-16 lg:px-8 lg:py-20">
        <p className="text-sm font-bold uppercase tracking-[0.3em] text-lime">{kicker}</p>
        <h1 className="mt-3 font-[family-name:var(--font-display)] text-4xl font-extrabold uppercase text-white sm:text-5xl">
          {title}
        </h1>
        <p className="mt-4 max-w-2xl leading-relaxed text-zinc-300">{sub}</p>
      </div>
    </section>
  );
}

export default function ProductsPage() {
  return (
    <>
      <Nav />
      <main className="flex-1">
        <PageHead
          kicker="What We Do"
          title="Our Wall Panel Range"
          sub="From feature-wall fluted panels to PVC marble and the accessories that finish the job. WhatsApp us a photo or part name for stock and pricing."
        />

        <section className="diag-texture bg-background">
          <div className="mx-auto max-w-7xl px-5 py-12 lg:px-8">
            <nav className="mb-10 flex flex-wrap gap-2">
              {categories.map((c) => (
                <a
                  key={c.slug}
                  href={`#${c.slug}`}
                  className="rounded-full border border-border bg-white px-4 py-2 text-xs font-bold uppercase tracking-wide text-foreground/80 transition-colors hover:border-lime hover:text-lime-dark"
                >
                  {c.title}
                </a>
              ))}
            </nav>

            <div className="space-y-16">
              {categories.map((c, i) => (
                <article
                  key={c.slug}
                  id={c.slug}
                  className="grid scroll-mt-24 items-center gap-8 lg:grid-cols-2"
                >
                  <FlutedImage
                    tone={c.tone}
                    rounded
                    className={`aspect-[4/3] w-full ${i % 2 ? "lg:order-2" : ""}`}
                  />
                  <div>
                    <h2 className="font-[family-name:var(--font-display)] text-2xl font-extrabold uppercase text-foreground sm:text-3xl">
                      {c.title}
                    </h2>
                    <p className="mt-3 leading-relaxed text-foreground/70">{c.long}</p>
                    <ul className="mt-5 grid grid-cols-2 gap-2">
                      {c.items.map((item) => (
                        <li
                          key={item}
                          className="rounded-lg border border-border bg-white px-3 py-2 text-sm font-medium text-foreground/80"
                        >
                          {item}
                        </li>
                      ))}
                    </ul>
                    <a
                      href={`https://wa.me/60162258458?text=${encodeURIComponent(`Hi, I'd like a quote on ${c.title}.`)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-6 inline-flex items-center justify-center rounded-full bg-lime px-6 py-2.5 text-sm font-bold uppercase tracking-wide text-ink transition-colors hover:bg-lime-dark"
                    >
                      WhatsApp for Quote
                    </a>
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
