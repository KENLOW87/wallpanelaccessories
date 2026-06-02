import Nav from "../components/Nav";
import Footer from "../components/Footer";
import FlutedImage from "../components/FlutedImage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Video | Wall Panel Accessories Malaysia",
  description:
    "Installation and product videos for fluted panels, PVC marble and carbon crystal wall panels by Wall Panel Accessories Malaysia.",
};

export default function VideoPage() {
  return (
    <>
      <Nav />
      <main className="flex-1">
        <section className="bg-ink">
          <div className="mx-auto max-w-7xl px-5 py-16 lg:px-8 lg:py-20">
            <p className="text-sm font-bold uppercase tracking-[0.3em] text-lime">Video</p>
            <h1 className="mt-3 font-[family-name:var(--font-display)] text-4xl font-extrabold uppercase text-white sm:text-5xl">
              See it on the wall
            </h1>
            <p className="mt-4 max-w-2xl leading-relaxed text-zinc-300">
              Product showcases and installation clips for our wall panel range.
            </p>
          </div>
        </section>

        <section className="diag-texture bg-background">
          <div className="mx-auto max-w-7xl px-5 py-16 lg:px-8">
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {["Fluted panel install", "PVC marble feature wall", "Carbon crystal showcase"].map((t) => (
                <div key={t} className="overflow-hidden rounded-2xl border border-border bg-white">
                  <div className="relative">
                    <FlutedImage tone="darkwood" className="aspect-video w-full" />
                    <span className="absolute inset-0 flex items-center justify-center">
                      <span className="flex h-14 w-14 items-center justify-center rounded-full bg-lime/90 text-ink">
                        <svg className="h-6 w-6 fill-ink" viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg>
                      </span>
                    </span>
                  </div>
                  <p className="p-4 text-sm font-semibold uppercase tracking-wide text-foreground">{t}</p>
                </div>
              ))}
            </div>
            <p className="mt-10 rounded-xl border border-dashed border-border bg-muted/60 p-6 text-sm text-foreground/70">
              <strong className="text-foreground">For Ken:</strong> send your YouTube/TikTok links or
              video files and I&apos;ll embed the real clips here.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
