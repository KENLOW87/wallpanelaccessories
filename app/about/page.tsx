import Nav from "../components/Nav";
import Footer from "../components/Footer";
import FlutedImage from "../components/FlutedImage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About | Wall Panel Accessories Malaysia",
  description:
    "Wall Panel Accessories Malaysia (Nova Arte Sdn Bhd) — a leading importer and wholesaler of fluted panels, PVC marble and carbon crystal wall panels in Malaysia.",
};

const values = [
  { title: "Product Innovation", body: "We continually source revolutionary panel products that set the pace in the industry." },
  { title: "Top-Notch Design", body: "Finishes and profiles chosen to make every wall a designed feature, not an afterthought." },
  { title: "Outstanding Service", body: "A dedicated team that supports designers, contractors and homeowners alike." },
  { title: "Nationwide Supply", body: "Fast delivery from our Seri Kembangan base to projects across Malaysia." },
];

export default function AboutPage() {
  return (
    <>
      <Nav />
      <main className="flex-1">
        <section className="bg-ink">
          <div className="mx-auto max-w-7xl px-5 py-16 lg:px-8 lg:py-20">
            <p className="text-sm font-bold uppercase tracking-[0.3em] text-lime">About Us</p>
            <h1 className="mt-3 font-[family-name:var(--font-display)] text-4xl font-extrabold uppercase text-white sm:text-5xl">
              Custom homes with timeless elegance
            </h1>
          </div>
        </section>

        <section className="diag-texture bg-background">
          <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-16 lg:grid-cols-2 lg:px-8">
            <FlutedImage tone="darkwood" rounded className="aspect-[5/4] w-full" />
            <div>
              <h2 className="font-[family-name:var(--font-display)] text-2xl font-extrabold uppercase text-foreground sm:text-3xl">
                Who we are
              </h2>
              <p className="mt-5 leading-relaxed text-foreground/70">
                Wall Panel Accessories Malaysia (Nova Arte Sdn Bhd) is a fluted panel, PVC marble
                and foam panel solutions provider based in Malaysia. Today, we are proud to be one
                of the leading and most recommended importers and wholesalers in the wall panel
                industry.
              </p>
              <p className="mt-4 leading-relaxed text-foreground/70">
                We are inspired to lead and sustain a transformational change in this industry with
                revolutionary product innovation, top-notch design and a dedicated team that
                provides outstanding service. We supply residential, commercial and hotel projects
                with a wide range of fluted panels, PVC marble, carbon crystal panels, MDF board,
                wainscoting and all the accessories needed to complete an installation.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-muted">
          <div className="mx-auto max-w-7xl px-5 py-16 lg:px-8">
            <h2 className="text-center font-[family-name:var(--font-display)] text-3xl font-extrabold uppercase text-foreground">
              Why choose us
            </h2>
            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {values.map((v) => (
                <div key={v.title} className="rounded-2xl border border-border bg-white p-6">
                  <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-lime font-bold text-ink">
                    &#10003;
                  </span>
                  <p className="mt-4 font-[family-name:var(--font-display)] text-lg font-bold uppercase text-foreground">
                    {v.title}
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-foreground/65">{v.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
