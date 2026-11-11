import Link from 'next/link';

export default function Navbar() {
  return (
    <header className="absolute top-0 left-0 right-0 z-50 bg-transparent border-b border-white/10">
      <div className="max-w-6xl mx-auto px-4 h-20 flex items-center justify-between">
        <Link href="/" className="text-xl tracking-widest font-bold text-white uppercase">
          FLORALESS
        </Link>
        <nav className="hidden md:flex space-x-6 text-xs tracking-wider uppercase font-medium text-stone-200">
          <Link href="/" className="hover:text-[#c9ae63] transition">Beranda</Link>
          <Link href="/tentang" className="hover:text-[#c9ae63] transition">Tentang</Link>
          <Link href="/galeri" className="hover:text-[#c9ae63] transition">Galeri</Link>
          <Link href="/layanan" className="hover:text-[#c9ae63] transition">Layanan</Link>
          <Link href="https://wa.me/6285640406548?text=Halo%20Floraless,%20saya%20ingin%20konsultasi%20custom%20dekorasi." className="hover:text-[#c9ae63] transition">Kontak</Link>
        </nav>
      </div>
    </header>
  );
}