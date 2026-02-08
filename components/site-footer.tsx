import Link from 'next/link';

export function SiteFooter() {
  return (
    <footer className="border-t border-gray-200 bg-white">
      <div className="container-shell flex flex-col gap-3 py-10 text-sm text-gray-500 md:flex-row md:items-center md:justify-between">
        <p>© {new Date().getFullYear()} Modo Systems</p>
        <div className="flex items-center gap-5">
          <Link href="/how-it-works" className="hover:text-gray-800">
            How it works
          </Link>
          <Link href="/contact" className="hover:text-gray-800">
            Contact
          </Link>
        </div>
      </div>
    </footer>
  );
}
