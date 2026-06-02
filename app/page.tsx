import Nav from "./components/Nav";
import Footer from "./components/Footer";
import CategoryCard from "./components/CategoryCard";
import { ChatIcon, ShieldIcon, StockIcon, TruckIcon } from "./components/icons";
import { categories } from "./data/categories";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Nav />

      <main className="flex-1">
        {/* Hero */}
        <section className="relative overflow-hidden bg-[#1a1410]">
          <div
            className="absolute inset-0 opacity-30"
            style={{
              backgroundImage:
                "repeating-linear-gradient(90deg, transparent, transparent 28px, rgba(217,119,6,0.15) 28px, rgba(217,119,6,0.15) 30px)",
            }}
            aria-hidden
          />
          <div className="relative mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-32">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-accent">
                Malaysia&apos;s wall panel accessories specialist
              </p>
              <h1 className="mt-5 font-[family-name:var(--font-display)] text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
                Every accessory you need to <span className="text-accent">finish a wall panel.</span>
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-zinc-300">
                Profiles, end caps, adhesives, mounting hardware, LED strips, and installation tools — all in one place.
                Trade pricing, nationwide delivery from Selangor.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/products"
                  className="inline-flex items-center justify-center rounded-full bg-accent px-7 py-3 text-base font-semibold text-white transition-colors hover:bg-amber-700"
                >
                  Browse Accessories
                </Link>
                <a
                  href="https://wa.me/60162258458?text=Hi%2C%20I%27d%20like%20a%20quote%20on%20wall%20panel%20accessories."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-full border border-white/20 px-7 py-3 text-base font-semibold text-white transition-colors hover:bg-white/10"
                >
                  WhatsApp for Quote
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Value props */}
        <section className="border-b border-border bg-background">
          <div className="mx-auto grid max-w-7xl gap-6 px-5 py-12 sm:grid-cols-2 lg:grid-cols-4 lg:px-8">
            {[
              { icon: <StockIcon />, title: "8+ Categories in Stock", body: "From profiles to LED strips — everything for a finished install." },
              { icon: <TruckIcon />, title: "Nationwide Delivery", body: "Same-day pickup in Selangor, fast ship across Malaysia." },
              { icon: <ShieldIcon />, title: "Contractor-Grade", body: "Tested products that hold up on real job sites." },
              { icon: <ChatIcon />, title: "WhatsApp Support", body: "Install advice from a real person, not a chatbot." },
            ].map((v) => (
              <div key={v.title} className="flex gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-muted text-brand">
                  {v.icon}
                </div>
                <div>
                  <p className="font-semibold text-foreground">{v.title}</p>
                  <p className="mt-1 text-sm text-foreground/70">{v.body}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Product categories */}
        <section className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
          <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand">Our Range</p>
              <h2 className="mt-2 font-[family-name:var(--font-display)] text-3xl font-bold sm:text-4xl">
                Eight categories. One supplier.
              </h2>
              <p className="mt-3 max-w-2xl text-foreground/70">
                Everything from the corner profile that hides the joint, to the LED strip that lights it up.
                Browse by category or message us with a part you need.
              </p>
            </div>
            <Link
              href="/products"
              className="inline-flex items-center gap-1 text-sm font-semibold text-brand hover:gap-2"
            >
              View all products <span aria-hidden>&rarr;</span>
            </Link>
          </div>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {categories.map((c) => (
              <CategoryCard
                key={c.slug}
                title={c.title}
                description={c.short}
                icon={c.icon}
                tone={c.tone}
                href={`/products#${c.slug}`}
              />
            ))}
          </div>
        </section>

        {/* Stats */}
        <section className="bg-[#1a1410] text-white">
          <div className="mx-auto grid max-w-7xl gap-8 px-5 py-16 sm:grid-cols-2 lg:grid-cols-4 lg:px-8">
            {[
              { n: "8+", l: "Years in wall panel supply" },
              { n: "5,000+", l: "Projects supplied" },
              { n: "500+", l: "Contractor customers" },
              { n: "100+", l: "Products in stock" },
            ].map((s) => (
              <div key={s.l}>
                <p className="font-[family-name:var(--font-display)] text-5xl font-bold text-accent">{s.n}</p>
                <p className="mt-2 text-sm text-zinc-300">{s.l}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Contact CTA */}
        <section className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
          <div className="rounded-3xl bg-muted p-8 sm:p-14">
            <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand">Get in touch</p>
                <h2 className="mt-2 font-[family-name:var(--font-display)] text-3xl font-bold sm:text-4xl">
                  Tell us what you&apos;re installing.
                </h2>
                <p className="mt-3 text-foreground/70">
                  Send a photo or part name on WhatsApp and we&apos;ll quote you back with stock, price, and a
                  delivery date. No call-back chase, no minimum order.
                </p>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row sm:justify-end">
                <a
                  href="https://wa.me/60162258458"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-full bg-[#25D366] px-7 py-3 text-base font-semibold text-white transition-colors hover:bg-[#20bd5a]"
                >
                  WhatsApp Now
                </a>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-full border border-brand px-7 py-3 text-base font-semibold text-brand transition-colors hover:bg-brand hover:text-white"
                >
                  Visit Showroom
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
