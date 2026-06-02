import Nav from "../components/Nav";
import Footer from "../components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | Wall Panel Accessories Malaysia",
  description:
    "Get a quote on wall panels. WhatsApp, call or email Wall Panel Accessories Malaysia, or visit our Seri Kembangan showroom.",
};

function Row({ label, value, href }: { label: string; value: string; href?: string }) {
  const body = (
    <p className="mt-1 whitespace-pre-line text-base leading-relaxed text-foreground">{value}</p>
  );
  return (
    <div>
      <p className="text-xs font-bold uppercase tracking-[0.2em] text-lime-dark">{label}</p>
      {href ? (
        <a href={href} target="_blank" rel="noopener noreferrer" className="block hover:text-lime-dark">
          {body}
        </a>
      ) : (
        body
      )}
    </div>
  );
}

export default function ContactPage() {
  return (
    <>
      <Nav />
      <main className="flex-1">
        <section className="bg-ink">
          <div className="mx-auto max-w-7xl px-5 py-16 lg:px-8 lg:py-20">
            <p className="text-sm font-bold uppercase tracking-[0.3em] text-lime">Contact</p>
            <h1 className="mt-3 font-[family-name:var(--font-display)] text-4xl font-extrabold uppercase text-white sm:text-5xl">
              Get a quote with us today
            </h1>
            <p className="mt-4 max-w-2xl leading-relaxed text-zinc-300">
              The fastest way to a price: WhatsApp the panel you need with a photo or measurement.
              We typically reply within an hour during business hours.
            </p>
          </div>
        </section>

        <section className="diag-texture bg-background">
          <div className="mx-auto max-w-5xl px-5 py-14 lg:px-8">
            <div className="grid gap-10 lg:grid-cols-2">
              <div className="space-y-6">
                <Row label="WhatsApp (fastest)" value="+60 16-225 8458" href="https://wa.me/60162258458" />
                <Row label="Email" value="sales@novaarte.net" href="mailto:sales@novaarte.net" />
                <Row
                  label="Showroom"
                  value="32, Jalan 6/2, Kawasan Perindustrian PKNS, 43300 Seri Kembangan, Selangor, Malaysia."
                  href="https://maps.google.com/?q=Kawasan+Perindustrian+PKNS+Seri+Kembangan"
                />
                <Row label="Hours" value={"Mon–Fri 9:00 AM – 6:00 PM\nSat 9:00 AM – 1:00 PM\nSun & PH closed"} />
              </div>
              <div className="overflow-hidden rounded-2xl border border-border">
                <iframe
                  title="Showroom location"
                  src="https://maps.google.com/maps?q=Kawasan+Perindustrian+PKNS+Seri+Kembangan&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0, minHeight: 340 }}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
