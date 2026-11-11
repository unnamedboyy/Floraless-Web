import Link from 'next/link';

export default function Footer() {
  return (
    <footer id="kontak" className="bg-stone-950 text-white pt-16 pb-8 border-t border-stone-900">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-10 pb-12">
        <div>
          <span className="text-xs uppercase tracking-[0.2em] text-[#c9ae63] font-semibold">FLORALESS</span>
          <h3 className="text-xl font-bold mt-3 leading-snug">
            Dekorasi Elegan Untuk Momen Yang Tak Terlupakan.
          </h3>
          <p className="text-stone-400 text-xs mt-3 leading-relaxed font-light">
            Floraless menghadirkan layanan dekorasi modern, hangat, dan profesional untuk wedding, engagement, birthday, dan berbagai acara spesial.
          </p>
        </div>

        <div>
          <h4 className="text-xs uppercase tracking-[0.2em] text-[#c9ae63] font-semibold">MENU</h4>
          <ul className="mt-3 space-y-2 text-xs text-stone-400">
            <li><Link href="#beranda" className="hover:text-white transition">Beranda</Link></li>
            <li><Link href="#tentang" className="hover:text-white transition">Tentang</Link></li>
            <li><Link href="#galeri" className="hover:text-white transition">Galeri</Link></li>
            <li><Link href="#layanan" className="hover:text-white transition">Layanan</Link></li>
            <li><Link href="#kontak" className="hover:text-white transition">Kontak</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-xs uppercase tracking-[0.2em] text-[#c9ae63] font-semibold">SERVICES</h4>
          <ul className="mt-3 space-y-2 text-xs text-stone-400">
            <li>Wedding Decoration</li>
            <li>Engagement Setup</li>
            <li>Birthday Event</li>
            <li>Church Decoration</li>
            <li>Consultation</li>
          </ul>
        </div>

        <div>
          <h4 className="text-xs uppercase tracking-[0.2em] text-[#c9ae63] font-semibold">CONTACT</h4>
          <div className="mt-3 space-y-3 text-xs">
            <div>
              <span className="text-stone-500 block uppercase text-[10px]">EMAIL</span>
              <a href="mailto:support@floraless.com" className="text-stone-300 hover:text-white">support@floraless.com</a>
            </div>
            <div>
              <span className="text-stone-500 block uppercase text-[10px]">WHATSAPP</span>
              <a href="https://wa.me/6285640406548" target="_blank" rel="noopener noreferrer" className="text-stone-300 hover:text-white">+62 856-4040-6548</a>
            </div>
            <div>
              <span className="text-stone-500 block uppercase text-[10px]">LOCATION</span>
              <span className="text-stone-300">Babarsari, Yogyakarta</span>
            </div>
            <div className="pt-1">
              <a 
                href="https://wa.me/6285640406548" 
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-5 py-2.5 bg-[#c9ae63] hover:bg-[#b89d52] text-white text-xs font-semibold rounded-full transition"
              >
                Chat via WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 border-t border-stone-900 pt-6 text-xs text-stone-500">
        <div>© 2026 Floraless. All rights reserved.</div>
      </div>
    </footer>
  );
}