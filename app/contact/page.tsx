import Nav from "../components/Nav";
import Footer from "../components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | Wall Panel Accessories Malaysia",
  description:
    "Get in touch for wall panel accessories. WhatsApp, email, or visit our Seri Kembangan showroom. Trade enquiries welcome.",
};

export default function ContactPage() {
  return (
    <>
      <Nav />
      <main className="flex-1">
        <section className="border-b border-border bg-muted">
          <div className="mx-auto max-w-5xl px-5 py-14 lg:px-8 lg:py-20">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-brand">Contact</p>
            <h1 className="mt-3 font-[family-name:var(--font-display)] text-4xl font-bold sm:text-5xl">
              Quote in minutes. Send a photo on WhatsApp.
            </h1>
            <p className="mt-4 max-w-2xl text-foreground/70 leading-relaxed">
              Fastest way to a price: WhatsApp the part you need with a photo or measurement.
              We typically reply within an hour during business hours.
            </p>
          </div>
        </section>

        <section className="mx-auto max-w-5xl px-5 py-14 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-2">
            <div className="space-y-6">
              <ContactRow
                label="WhatsApp (fastest)"
                value="+60 16-225 8458"
                href="https://wa.me/60162258458"
              />
              <ContactRow
                label="Email"
                value="sales@novaarte.net"
                href="mailto:sales@novaarte.net"
              />
              <ContactRow
                label="Showroom"
                value="32, Jalan 6/2, Kawasan Perindustrian PKNS, 43300 Seri Kembangan, Selangor"
                href="https://maps.google.com/?q=32+Jalan+6%2F2+Kawasan+Perindustrian+PKNS+Seri+Kembangan"
              />
              <ContactRow
                label="Hours"
                value={"Mon–Fri 9:00 AM – 6:00 PM\nSat 9:00 AM – 1:00 PM\nSun & PH closed"}
              />
            </div>

            <div className="overflow-hidden rounded-2xl border border-border">
              <iframe
                title="Showroom location"
                src="https://maps.google.com/maps?q=Kawasan+Perindustrian+PKNS+Seri+Kembangan&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: 360 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          <div className="mt-12 rounded-2xl bg-[#1a1410] p-8 text-white sm:p-12">
            <h2 className="font-[family-name:var(--font-display)] text-2xl font-bold sm:text-3xl">
              Trade enquiries
            </h2>
            <p className="mt-3 max-w-2xl text-zinc-300">
              Renovation contractor, interior design firm, or panel installer? Ask about
              volume pricing and account terms. WhatsApp us and mention &quot;trade&quot; — we&apos;ll
              set you up.
            </p>
            <a
              href="https://wa.me/60162258458?text=Hi%2C%20I%27m%20a%20trade%20customer%20interested%20in%20account%20pricing."
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center justify-center rounded-full bg-accent px-7 py-3 text-base font-semibold text-white transition-colors hover:bg-amber-700"
            >
              Open Trade Account
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

function ContactRow({ label, value, href }: { label: string; value: string; href?: string }) {
  const body = (
    <p className="mt-1 whitespace-pre-line text-base leading-relaxed text-foreground">
      {value}
    </p>
  );
  return (
    <div>
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand">{label}</p>
      {href ? (
        <a href={href} target="_blank" rel="noopener noreferrer" className="block hover:text-brand">
          {body}
        </a>
      ) : (
        body
      )}
    </div>
  );
}
