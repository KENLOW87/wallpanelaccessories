import Nav from "../components/Nav";
import Footer from "../components/Footer";
import FlutedImage from "../components/FlutedImage";
import { projects } from "../data/projects";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gallery | Wall Panel Accessories Malaysia",
  description:
    "Real wall panel installations across Malaysia — fluted feature walls, PVC marble, carbon crystal and LED-lit projects by Wall Panel Accessories Malaysia.",
};

export default function GalleryPage() {
  return (
    <>
      <Nav />
      <main className="flex-1">
        <section className="bg-ink">
          <div className="mx-auto max-w-7xl px-5 py-16 lg:px-8 lg:py-20">
            <p className="text-sm font-bold uppercase tracking-[0.3em] text-lime">Portfolio</p>
            <h1 className="mt-3 font-[family-name:var(--font-display)] text-4xl font-extrabold uppercase text-white sm:text-5xl">
              Our Projects
            </h1>
            <p className="mt-4 max-w-2xl leading-relaxed text-zinc-300">
              A selection of fluted, PVC marble and carbon crystal wall installations completed for
              homes, offices and hotels across Malaysia.
            </p>
          </div>
        </section>

        <section className="diag-texture bg-background">
          <div className="mx-auto max-w-7xl px-5 py-16 lg:px-8">
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {projects.map((p) => (
                <article key={p.title} className="overflow-hidden rounded-2xl border border-border bg-white shadow-sm">
                  <FlutedImage tone={p.tone} className="aspect-[4/3] w-full" />
                  <div className="p-5">
                    <h2 className="font-[family-name:var(--font-display)] text-base font-bold uppercase leading-snug text-foreground">
                      {p.title}
                    </h2>
                    <p className="mt-2 text-sm leading-relaxed text-foreground/65">{p.desc}</p>
                  </div>
                </article>
              ))}
            </div>

            <p className="mt-10 rounded-xl border border-dashed border-border bg-muted/60 p-6 text-sm text-foreground/70">
              <strong className="text-foreground">For Ken:</strong> the panel-texture tiles are
              placeholders. Send the real project photos (or export them from NEWPAGES) and I&apos;ll
              swap them into <code className="rounded bg-white px-1.5 py-0.5">public/images/</code> for
              each project.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
