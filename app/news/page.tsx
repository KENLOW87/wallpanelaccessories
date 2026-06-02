import Nav from "../components/Nav";
import Footer from "../components/Footer";
import FlutedImage from "../components/FlutedImage";
import type { Metadata } from "next";
import type { Tone } from "../data/categories";

export const metadata: Metadata = {
  title: "Latest News | Wall Panel Accessories Malaysia",
  description:
    "News, tips and product updates from Wall Panel Accessories Malaysia — fluted panels, PVC marble, carbon crystal and more.",
};

const posts: { title: string; blurb: string; tone: Tone }[] = [
  {
    title: "Why fluted panels are the trend of the year",
    blurb: "Vertical fluted lines add directional flair and texture to feature walls — here's how to use them well.",
    tone: "darkwood",
  },
  {
    title: "PVC marble vs natural marble: which to choose?",
    blurb: "Get the luxury marble look without the weight, cost or maintenance. A quick comparison for your next project.",
    tone: "marble",
  },
  {
    title: "How to light a fluted feature wall with LED",
    blurb: "LED strips between the grooves transform a wall after dark. Our guide to profiles, strips and drivers.",
    tone: "dark",
  },
];

export default function NewsPage() {
  return (
    <>
      <Nav />
      <main className="flex-1">
        <section className="bg-ink">
          <div className="mx-auto max-w-7xl px-5 py-16 lg:px-8 lg:py-20">
            <p className="text-sm font-bold uppercase tracking-[0.3em] text-lime">Latest News</p>
            <h1 className="mt-3 font-[family-name:var(--font-display)] text-4xl font-extrabold uppercase text-white sm:text-5xl">
              News &amp; inspiration
            </h1>
          </div>
        </section>

        <section className="diag-texture bg-background">
          <div className="mx-auto max-w-7xl px-5 py-16 lg:px-8">
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {posts.map((p) => (
                <article key={p.title} className="overflow-hidden rounded-2xl border border-border bg-white shadow-sm">
                  <FlutedImage tone={p.tone} className="aspect-[16/10] w-full" />
                  <div className="p-5">
                    <h2 className="font-[family-name:var(--font-display)] text-base font-bold uppercase leading-snug text-foreground">
                      {p.title}
                    </h2>
                    <p className="mt-2 text-sm leading-relaxed text-foreground/65">{p.blurb}</p>
                  </div>
                </article>
              ))}
            </div>
            <p className="mt-10 rounded-xl border border-dashed border-border bg-muted/60 p-6 text-sm text-foreground/70">
              <strong className="text-foreground">For Ken:</strong> these are sample articles. Send
              your real NEWPAGES blog posts and I&apos;ll bring them across.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
