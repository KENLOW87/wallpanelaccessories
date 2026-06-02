import Nav from "../components/Nav";
import Footer from "../components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gallery | Wall Panel Accessories Malaysia",
  description:
    "Real installation photos using our wall panel accessories — profiles, trims, LED lighting, and mounting hardware. Inspiration for your next project.",
};

// Placeholder: replace these with real installation photos in /public/gallery/
const placeholders = Array.from({ length: 9 }, (_, i) => ({
  id: i + 1,
  tone: ["#6b4226", "#8b5e3c", "#d97706", "#f0ebe3", "#1a1410", "#a87b53"][i % 6],
  label: ["Fluted feature wall", "LED profile install", "Corner detail", "Wainscoting", "TV console wall", "Office reception", "Bedroom panel", "Stair feature", "Mirror inlay"][i],
}));

export default function GalleryPage() {
  return (
    <>
      <Nav />
      <main className="flex-1">
        <section className="border-b border-border bg-muted">
          <div className="mx-auto max-w-7xl px-5 py-14 lg:px-8 lg:py-20">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-brand">Installations</p>
            <h1 className="mt-3 font-[family-name:var(--font-display)] text-4xl font-bold sm:text-5xl">
              Real walls, finished with our accessories.
            </h1>
            <p className="mt-4 max-w-2xl text-foreground/70 leading-relaxed">
              Snapshots from contractor installs across Malaysia. Got a project you&apos;d like
              featured? Send us photos on WhatsApp.
            </p>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-5 py-12 lg:px-8">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {placeholders.map((p) => (
              <div
                key={p.id}
                className="group relative aspect-square overflow-hidden rounded-2xl"
                style={{ backgroundColor: p.tone }}
              >
                <div
                  className="absolute inset-0 opacity-30"
                  style={{
                    backgroundImage:
                      "repeating-linear-gradient(90deg, transparent, transparent 18px, rgba(255,255,255,0.12) 18px, rgba(255,255,255,0.12) 20px)",
                  }}
                  aria-hidden
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-5">
                  <p className="text-sm font-semibold text-white">{p.label}</p>
                  <p className="text-xs text-white/70">Placeholder &mdash; replace with photo</p>
                </div>
              </div>
            ))}
          </div>

          <p className="mt-10 rounded-xl border border-dashed border-border bg-muted/50 p-6 text-sm text-foreground/70">
            <strong className="text-foreground">For Ken:</strong> drop real installation photos
            into <code className="rounded bg-background px-1.5 py-0.5">public/gallery/</code>{" "}
            and swap the placeholder array in{" "}
            <code className="rounded bg-background px-1.5 py-0.5">app/gallery/page.tsx</code>{" "}
            for real <code className="rounded bg-background px-1.5 py-0.5">&lt;Image&gt;</code> tags.
          </p>
        </section>
      </main>
      <Footer />
    </>
  );
}
