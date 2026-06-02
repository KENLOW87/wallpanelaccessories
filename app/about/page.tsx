import Nav from "../components/Nav";
import Footer from "../components/Footer";
import { ShieldIcon, StockIcon, TruckIcon, ChatIcon } from "../components/icons";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About | Wall Panel Accessories Malaysia",
  description:
    "Malaysia's dedicated wall panel accessories supplier. Backed by 8+ years in the wall panel industry, serving contractors and DIY customers nationwide.",
};

export default function AboutPage() {
  return (
    <>
      <Nav />
      <main className="flex-1">
        <section className="border-b border-border bg-muted">
          <div className="mx-auto max-w-5xl px-5 py-16 lg:px-8 lg:py-24">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-brand">About us</p>
            <h1 className="mt-3 font-[family-name:var(--font-display)] text-4xl font-bold sm:text-5xl">
              The accessory specialist for Malaysia&apos;s wall panel industry.
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-relaxed text-foreground/70">
              We started supplying wall panels in Malaysia eight years ago. Over that time,
              one thing kept coming up: contractors finished their job hunting for the
              right profile, the right adhesive, the right LED strip — from five different
              suppliers. So we built one place that stocks them all.
            </p>
          </div>
        </section>

        <section className="mx-auto max-w-5xl px-5 py-16 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <h2 className="font-[family-name:var(--font-display)] text-2xl font-bold sm:text-3xl">
                What we do
              </h2>
              <p className="mt-4 text-foreground/70 leading-relaxed">
                We stock and supply the accessories that complete a wall panel installation:
                aluminum profiles, end caps, panel adhesives, mounting clips, LED strips,
                cleaning products, and the tools to fit them. We sell to contractors, interior
                designers, renovation firms, and DIY homeowners — same price, same stock, no
                gatekeeping.
              </p>
            </div>
            <div>
              <h2 className="font-[family-name:var(--font-display)] text-2xl font-bold sm:text-3xl">
                Who we serve
              </h2>
              <p className="mt-4 text-foreground/70 leading-relaxed">
                Our customers are installers across Selangor, KL, Johor, Penang, Pahang, and
                Kedah. We ship nationwide and offer same-day pickup at our Seri Kembangan
                warehouse. For trade buyers, we offer volume pricing and account terms —
                ask on WhatsApp.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-muted">
          <div className="mx-auto max-w-7xl px-5 py-16 lg:px-8">
            <h2 className="font-[family-name:var(--font-display)] text-3xl font-bold sm:text-4xl">
              Why customers choose us
            </h2>
            <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {[
                { icon: <StockIcon />, title: "All-in-one stock", body: "Eight accessory categories under one roof. No more chasing five suppliers." },
                { icon: <TruckIcon />, title: "Fast fulfilment", body: "Same-day pickup in Selangor. Nationwide ship within 2-3 working days." },
                { icon: <ShieldIcon />, title: "Tested compatibility", body: "Our adhesives and profiles are tested against the panels we sell." },
                { icon: <ChatIcon />, title: "Real install help", body: "Stuck on a tricky corner? Send a photo. We answer on WhatsApp." },
              ].map((v) => (
                <div key={v.title}>
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand text-white">
                    {v.icon}
                  </div>
                  <p className="mt-4 text-lg font-semibold">{v.title}</p>
                  <p className="mt-2 text-sm text-foreground/70 leading-relaxed">{v.body}</p>
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
