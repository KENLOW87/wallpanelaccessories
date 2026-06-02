import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-24 border-t border-border bg-[#1a1410] text-zinc-300">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 lg:grid-cols-4 lg:px-8">
        <div className="lg:col-span-2">
          <p className="font-[family-name:var(--font-display)] text-2xl font-bold text-white">
            Wall Panel Accessories Malaysia
          </p>
          <p className="mt-3 max-w-md text-sm leading-relaxed text-zinc-400">
            Malaysia&apos;s dedicated supplier of wall panel accessories: profiles, end
            caps, adhesives, mounting hardware, LED strips, and the tools to fit them.
            Trade and DIY welcome.
          </p>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-wider text-white">Browse</p>
          <ul className="mt-3 space-y-2 text-sm">
            <li><Link href="/" className="hover:text-white">Home</Link></li>
            <li><Link href="/about" className="hover:text-white">About</Link></li>
            <li><Link href="/products" className="hover:text-white">Products</Link></li>
            <li><Link href="/gallery" className="hover:text-white">Gallery</Link></li>
            <li><Link href="/contact" className="hover:text-white">Contact</Link></li>
          </ul>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-wider text-white">Contact</p>
          <ul className="mt-3 space-y-2 text-sm text-zinc-400">
            <li>
              <a href="https://wa.me/60162258458" className="hover:text-white">
                WhatsApp: +60 16-225 8458
              </a>
            </li>
            <li>
              <a href="mailto:sales@novaarte.net" className="hover:text-white">
                sales@novaarte.net
              </a>
            </li>
            <li className="leading-relaxed">
              32, Jalan 6/2, Kawasan Perindustrian PKNS,<br />
              43300 Seri Kembangan, Selangor
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-5 py-5 text-xs text-zinc-500 sm:flex-row lg:px-8">
          <p>&copy; {new Date().getFullYear()} Wall Panel Accessories Malaysia. All rights reserved.</p>
          <p>Nationwide delivery from Selangor &middot; Trade enquiries welcome</p>
        </div>
      </div>
    </footer>
  );
}
