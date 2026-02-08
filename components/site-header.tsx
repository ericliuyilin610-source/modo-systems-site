import Link from 'next/link';

const links = [
  { href: '/', label: 'Home' },
  { href: '/how-it-works', label: 'How it works' },
  { href: '/solutions', label: 'Solutions' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' }
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-gray-200/90 bg-white/95 backdrop-blur-sm">
      <div className="container-shell flex h-16 items-center justify-between gap-4">
        <Link href="/" className="text-[15px] font-semibold tracking-tight text-gray-900">
          Modo Systems
        </Link>
        <nav className="hidden items-center gap-6 text-sm text-gray-600 md:flex">
          {links.map((link) => (
            <Link key={link.href} href={link.href} className="transition hover:text-gray-900">
              {link.label}
            </Link>
          ))}
        </nav>
        <Link
          href="/contact"
          className="rounded-xl border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-800 transition hover:border-gray-400"
        >
          预约诊断
        </Link>
      </div>
    </header>
  );
}
