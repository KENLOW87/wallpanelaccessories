import Link from "next/link";

const discover = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/products", label: "Products" },
  { href: "/gallery", label: "Gallery" },
  { href: "/video", label: "Video" },
  { href: "/news", label: "Latest News" },
  { href: "/contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer className="mt-24 bg-ink text-zinc-300">
      {/* quote band */}
      <div className="border-b border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-5 px-5 py-10 lg:flex-row lg:items-center lg:px-8">
          <h2 className="font-[family-name:var(--font-display)] text-2xl font-extrabold uppercase text-white sm:text-3xl">
            Get a quote with us today!
          </h2>
          <a
            href="https://wa.me/60162258458"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-lime px-7 py-3 text-sm font-bold uppercase tracking-wide text-ink transition-colors hover:bg-lime-dark"
          >
            Contact Us
          </a>
        </div>
      </div>

      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 lg:grid-cols-4 lg:px-8">
        <div className="lg:col-span-2">
          <p className="font-[family-name:var(--font-display)] text-xl font-extrabold uppercase text-white">
            Wall Panel <span className="text-lime">Accessories</span> Malaysia
          </p>
          <p className="mt-4 max-w-md text-sm leading-relaxed text-zinc-400">
            We have a wide range of products to meet residential, commercial and hotel
            requirements — fluted panels, PVC marble, carbon crystal, MDF board, wainscoting
            and all the accessories to finish the job.
          </p>
        </div>

        <div>
          <p className="text-sm font-bold uppercase tracking-wider text-white">Discover</p>
          <ul className="mt-4 space-y-2 text-sm">
            {discover.map((d) => (
              <li key={d.href}>
                <Link href={d.href} className="text-zinc-400 hover:text-lime">
                  {d.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-sm font-bold uppercase tracking-wider text-white">Contact Us</p>
          <ul className="mt-4 space-y-3 text-sm text-zinc-400">
            <li className="leading-relaxed">
              32, Jalan 6/2, Kawasan Perindustrian PKNS,<br />
              43300 Seri Kembangan, Selangor, Malaysia.
            </li>
            <li>
              <a href="https://wa.me/60162258458" className="hover:text-lime">
                +60 16-225 8458
              </a>
            </li>
            <li>
              <a href="mailto:sales@novaarte.net" className="hover:text-lime">
                sales@novaarte.net
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-5 py-5 text-xs text-zinc-500 sm:flex-row lg:px-8">
          <p>&copy; 2022&ndash;{new Date().getFullYear()} Nova Arte Sdn Bhd 201601037227 (1208168-K)</p>
          <p>Wall Panel Accessories Malaysia &middot; Nationwide delivery from Selangor</p>
        </div>
      </div>
    </footer>
  );
}
