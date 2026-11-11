'use client';

import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function AboutPage() {
  const stats = [
    { value: '4+', label: 'Tahun Pengalaman' },
    { value: '500+', label: 'Acara Selesai' },
    { value: '300+', label: 'Klien Puas' },
    { value: '24/7', label: 'Support Konsultasi' },
  ];

  const services = [
    {
      title: 'Wedding Decoration',
      desc: 'Dekorasi elegan dengan konsep modern dan detail premium sesuai kebutuhan acara.',
      img: 'https://pwsvjigsqsqktapztqok.supabase.co/storage/v1/object/public/floraless-assets/Hero/T2400379.jpg?auto=format&fit=crop&q=80&w=800',
    },
    {
      title: 'Engagement Decoration',
      desc: 'Dekorasi elegan dengan konsep modern dan detail premium sesuai kebutuhan acara.',
      img: 'https://pwsvjigsqsqktapztqok.supabase.co/storage/v1/object/public/floraless-assets/Hero/Wedding-5.jpeg?auto=format&fit=crop&q=80&w=800',
    },
    {
      title: 'Birthday & Event',
      desc: 'Dekorasi elegan dengan konsep modern dan detail premium sesuai kebutuhan acara.',
      img: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80&w=1200?auto=format&fit=crop&q=80&w=800',
    },
  ];

  const history = [
    {
      year: '2020',
      title: 'Awal Mula Perjalanan',
      desc: 'Floraless didirikan di Yogyakarta dengan fokus awal pada pelayanan dekorasi bunga segar skala kecil untuk pemberkatan gereja.',
    },
    {
      year: '2022',
      title: 'Ekspansi Layanan Event',
      desc: 'Mulai memperluas jangkauan layanan untuk pernikahan outdoor, lamaran (engagement), dan perayaan private event.',
    },
    {
      year: '2024',
      title: 'Pengembangan Tim & Konsep Tematik',
      desc: 'Membentuk tim florist profesional terstruktur dan menghadirkan konsep dekorasi tematik sakral modern.',
    },
    {
      year: '2026',
      title: 'Mitra Dekorasi Terpercaya',
      desc: 'Telah sukses menangani lebih dari 500 acara dengan reputasi pelayanan yang hangat dan detail yang bermakna.',
    },
  ];

  return (
    <main className="min-h-screen bg-white font-sans text-stone-800 antialiased selection:bg-[#c9ae63] selection:text-white">
      <Navbar />

      {/* 1. HERO HEADER */}
      <section className="relative min-h-[92vh] flex flex-col justify-center items-center text-center px-6 pt-24 pb-16 bg-stone-900 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30 mix-blend-luminosity scale-105"
          style={{
            backgroundImage:
              "url('https://pwsvjigsqsqktapztqok.supabase.co/storage/v1/object/public/floraless-assets/Hero/4691437f-d852-4a43-ad5a-76571b030a6d.jpg?auto=format&fit=crop&q=80&w=2000')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/80" />

        <div className="relative z-10 max-w-4xl mx-auto mt-6">
          <span className="text-xs uppercase font-semibold tracking-[0.3em] text-stone-300">
            TENTANG FLORALESS
          </span>
          <h1 className="mt-4 text-4xl sm:text-6xl md:text-7xl font-semibold text-white tracking-tight leading-tight">
            Menciptakan Momen Sakral & <br />
            <span className="font-serif italic font-normal">Tak Terlupakan</span>
          </h1>
          <p className="mt-5 text-stone-200 text-sm sm:text-base font-light tracking-wide max-w-xl mx-auto">
            Mengenal lebih dekat visi, sejarah, dan dedikasi kami dalam menghadirkan dekorasi terbaik di Yogyakarta.
          </p>
          <div className="mt-8 flex justify-center">
            <a
              href="#tentang-kami"
              className="px-7 py-3.5 bg-[#c9ae63] hover:bg-[#b89d52] text-white text-xs tracking-wider uppercase font-medium rounded-full transition shadow-lg"
            >
              Kenali Kami Lebih Dekat
            </a>
          </div>
        </div>
      </section>

      {/* 2. ABOUT US OVERVIEW SECTION */}
      <section id="tentang-kami" className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-center">
            <div className="md:col-span-6 h-[340px] sm:h-[420px] rounded-3xl overflow-hidden shadow-lg relative">
              <img
                src="https://pwsvjigsqsqktapztqok.supabase.co/storage/v1/object/public/floraless-assets/Hero/Screenshot%202026-11-11%20172146.png?auto=format&fit=crop&q=80&w=1200"
                alt="Floraless Decoration"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="md:col-span-6 space-y-5">
              <span className="text-xs font-semibold tracking-[0.25em] text-[#c9ae63] uppercase">
                ABOUT FLORALESS
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-stone-900 leading-tight">
                Kami Selalu Menghadirkan Dekorasi Terbaik
              </h2>
              <p className="text-stone-600 text-sm md:text-base leading-relaxed font-light">
                Floraless hadir untuk membantu menciptakan momen yang elegan, hangat, dan penuh cerita melalui dekorasi modern dengan sentuhan artistik premium.
              </p>
              <p className="text-stone-600 text-sm md:text-base leading-relaxed font-light">
                Kami percaya setiap acara memiliki makna spesial. Karena itu setiap detail kami rancang dengan penuh perhatian agar pengalaman acara menjadi lebih berkesan.
              </p>
              <div className="pt-2">
                <a
                  href="#kontak"
                  className="inline-block px-7 py-3.5 bg-black hover:bg-stone-800 text-white text-xs font-semibold rounded-full transition shadow-md"
                >
                  Booking Sekarang
                </a>
              </div>
            </div>
          </div>

          {/* 3. METRICS / STATS BOXES */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            {stats.map((stat, idx) => (
              <div
                key={idx}
                className="bg-stone-50/70 border border-stone-200/60 rounded-2xl p-6 text-center hover:shadow-sm transition"
              >
                <div className="text-3xl sm:text-4xl font-bold text-[#c9ae63]">
                  {stat.value}
                </div>
                <div className="text-xs text-stone-500 font-medium mt-2">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. SECTION SEJARAH (TIMELINE) */}
      <section className="py-24 bg-stone-50 border-t border-stone-100">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center max-w-xl mx-auto mb-16">
            <span className="text-xs font-semibold tracking-[0.25em] text-[#c9ae63] uppercase">
              OUR JOURNEY
            </span>
            <h2 className="text-3xl font-bold text-stone-900 mt-2">
              Sejarah & Perjalanan Floraless
            </h2>
            <p className="text-stone-500 text-xs sm:text-sm mt-2">
              Perjalanan dedikasi kami dari melayani dekorasi sederhana hingga menjadi mitra acara terpercaya di Yogyakarta.
            </p>
          </div>

          <div className="relative border-l-2 border-[#c9ae63]/30 ml-4 md:ml-32 space-y-12">
            {history.map((item, index) => (
              <div key={index} className="relative pl-8 md:pl-10 group">
                <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-white border-2 border-[#c9ae63] group-hover:bg-[#c9ae63] transition duration-300" />
                
                <div className="md:absolute md:-left-28 md:top-1 text-sm font-bold text-[#c9ae63] uppercase tracking-wider mb-1 md:mb-0">
                  {item.year}
                </div>

                <div className="bg-white p-6 rounded-2xl border border-stone-200/60 shadow-sm">
                  <h3 className="text-lg font-bold text-stone-900">
                    {item.title}
                  </h3>
                  <p className="text-stone-600 text-xs sm:text-sm mt-2 leading-relaxed font-light">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. SPECIALTY SERVICES / LAYANAN KAMI */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {services.map((item, idx) => (
              <div
                key={idx}
                className="bg-white rounded-3xl overflow-hidden border border-stone-200/60 shadow-sm flex flex-col"
              >
                <div className="h-64 sm:h-72 overflow-hidden relative">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-full h-full object-cover hover:scale-105 transition duration-500"
                  />
                </div>
                <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl font-bold text-stone-900">
                      {item.title}
                    </h3>
                    <p className="text-stone-500 text-xs sm:text-sm mt-3 leading-relaxed font-light">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. FOUNDER MESSAGE QUOTE SECTION */}
      <section className="py-24 bg-stone-50/60 border-t border-stone-100">
        <div className="max-w-4xl mx-auto px-6 text-center space-y-6">
          <span className="text-xs uppercase font-semibold tracking-[0.3em] text-[#c9ae63]">
            FOUNDER MESSAGE
          </span>
          <blockquote className="text-2xl sm:text-4xl md:text-5xl font-bold text-stone-900 leading-tight tracking-tight max-w-3xl mx-auto">
            “Dekorasi bukan hanya tentang keindahan, tetapi tentang menciptakan kenangan yang akan selalu dikenang.”
          </blockquote>
          <p className="text-stone-500 text-xs sm:text-sm max-w-xl mx-auto leading-relaxed font-light">
            Floraless hadir untuk membantu setiap pasangan dan keluarga merayakan momen spesial dengan sentuhan dekorasi yang elegan, hangat, profesional, dan penuh makna.
          </p>

          <div className="pt-4 flex flex-col items-center">
            <div className="w-12 h-[2px] bg-[#c9ae63] mb-4" />
            <div className="font-bold text-stone-900 text-sm">Floraless Founder</div>
            <div className="text-[11px] uppercase tracking-widest text-stone-400 mt-0.5">
              CREATIVE DIRECTOR
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}