'use client';

import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

// Data Dummy 15 Galeri dengan variasi aspek rasio lebar (flex-grow) yang dinamis namun tinggi seragam
const galleryItems = [
  {
    id: '1',
    title: 'Pemberkatan Gereja Katedral',
    category: 'Gereja',
    image_url: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=1200',
    aspect: 'flex-[1.6]'
  },
  {
    id: '2',
    title: 'Altar Utama Nuansa Putih',
    category: 'Gereja',
    image_url: 'https://images.unsplash.com/photo-1545232979-fbf34fe370b3?auto=format&fit=crop&q=80&w=1000',
    aspect: 'flex-[1]'
  },
  {
    id: '3',
    title: 'Dekorasi Meja Pemberkatan',
    category: 'Gereja',
    image_url: 'https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?auto=format&fit=crop&q=80&w=1000',
    aspect: 'flex-[1.2]'
  },
  {
    id: '4',
    title: 'Resepsi Pernikahan Indoor',
    category: 'Pernikahan',
    image_url: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&q=80&w=1200',
    aspect: 'flex-[1.4]'
  },
  {
    id: '5',
    title: 'Lamaran Minimalis Modern',
    category: 'Lamaran',
    image_url: 'https://images.unsplash.com/photo-1523438885200-e635ba2c371e?auto=format&fit=crop&q=80&w=1200',
    aspect: 'flex-[1.5]'
  },
  {
    id: '6',
    title: 'Private Birthday Celebration',
    category: 'Event',
    image_url: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&q=80&w=1000',
    aspect: 'flex-[1]'
  },
  {
    id: '7',
    title: 'Sudut Florist & Bunga Segar',
    category: 'Detail',
    image_url: 'https://images.unsplash.com/photo-1561181286-d3fee7d55364?auto=format&fit=crop&q=80&w=1000',
    aspect: 'flex-[1.2]'
  },
  {
    id: '8',
    title: 'Pemberkatan Nikah Outdoor',
    category: 'Pernikahan',
    image_url: 'https://images.unsplash.com/photo-1519741347686-c1e00f4611ba?auto=format&fit=crop&q=80&w=1200',
    aspect: 'flex-[1.6]'
  },
  {
    id: '9',
    title: 'Standing Flower Altar Gereja',
    category: 'Gereja',
    image_url: 'https://images.unsplash.com/photo-1527529482837-4698179dc6ce?auto=format&fit=crop&q=80&w=1000',
    aspect: 'flex-[1]'
  },
  {
    id: '10',
    title: 'Dekorasi Meja Penerima Tamu',
    category: 'Pernikahan',
    image_url: 'https://images.unsplash.com/photo-1532712938310-34cb3982ef74?auto=format&fit=crop&q=80&w=1200',
    aspect: 'flex-[1.3]'
  },
  {
    id: '11',
    title: 'Engagement Ring Setup',
    category: 'Lamaran',
    image_url: 'https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?auto=format&fit=crop&q=80&w=1000',
    aspect: 'flex-[1]'
  },
  {
    id: '12',
    title: 'Pesta Anniversary Eksklusif',
    category: 'Event',
    image_url: 'https://images.unsplash.com/photo-1469371670807-013ccf25f16a?auto=format&fit=crop&q=80&w=1200',
    aspect: 'flex-[1.5]'
  },
  {
    id: '13',
    title: 'Rangkaian Hand Bouquet Pengantin',
    category: 'Detail',
    image_url: 'https://images.unsplash.com/photo-1563245372-f21724e3856d?auto=format&fit=crop&q=80&w=1000',
    aspect: 'flex-[1.1]'
  },
  {
    id: '14',
    title: 'Pemberkatan Sore Hari',
    category: 'Gereja',
    image_url: 'https://images.unsplash.com/photo-1520854221256-17451cc331bf?auto=format&fit=crop&q=80&w=1200',
    aspect: 'flex-[1.4]'
  },
  {
    id: '15',
    title: 'Dekorasi Lorong Jalan Prosesi',
    category: 'Gereja',
    image_url: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&q=80&w=1200',
    aspect: 'flex-[1.3]'
  }
];

export default function GalleryPage() {
  return (
    <main className="min-h-screen bg-white font-sans text-stone-800 antialiased selection:bg-[#c9ae63] selection:text-white">
      {/* Navbar */}
      <Navbar />

      {/* 1. HERO SECTION HALAMAN GALERI */}
      <section className="relative min-h-[92vh] flex flex-col justify-center items-center text-center px-6 pt-24 pb-16 bg-stone-900 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30 mix-blend-luminosity scale-105"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=2000')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/80" />

        <div className="relative z-10 max-w-4xl mx-auto mt-6">
          <span className="text-xs uppercase font-semibold tracking-[0.3em] text-stone-300">
            PORTOFOLIO KARYA
          </span>
          <h1 className="mt-4 text-4xl sm:text-6xl md:text-7xl font-semibold text-white tracking-tight leading-tight">
            Galeri Dekorasi <br />
            <span className="font-serif italic font-normal">Floraless</span>
          </h1>
          <p className="mt-5 text-stone-200 text-sm sm:text-base font-light tracking-wide max-w-xl mx-auto">
            Kumpulan dokumentasi portofolio dekorasi gereja, pernikahan, dan berbagai acara sakral di Yogyakarta.
          </p>
          <div className="mt-8 flex justify-center">
            <a
              href="#galeri-grid"
              className="px-7 py-3.5 bg-[#c9ae63] hover:bg-[#b89d52] text-white text-xs tracking-wider uppercase font-medium rounded-full transition shadow-lg"
            >
              Jelajahi Galeri
            </a>
          </div>
        </div>
      </section>

      {/* 2. GRID GALERI 15 GAMBAR */}
      <section id="galeri-grid" className="py-24 bg-stone-50/50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs uppercase font-semibold tracking-[0.25em] text-[#c9ae63]">
              OUR WORK
            </span>
            <h2 className="text-3xl font-bold text-stone-900 mt-2">
              Sentuhan Detail di Setiap Acara
            </h2>
            <p className="text-stone-500 text-xs sm:text-sm mt-2 font-light">
              Setiap sudut dirancang khusus untuk menciptakan suasana yang hangat, sakral, dan berkesan.
            </p>
          </div>

          <div className="flex flex-wrap gap-4 sm:gap-6">
            {galleryItems.map((item) => (
              <div
                key={item.id}
                className={`${item.aspect} min-w-[260px] sm:min-w-[300px] h-60 sm:h-72 md:h-80 rounded-2xl sm:rounded-3xl overflow-hidden shadow-sm hover:shadow-md relative group bg-stone-200 transition duration-300`}
              >
                <img
                  src={item.image_url}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition duration-300 flex flex-col justify-end p-5 sm:p-6">
                  <span className="text-[10px] uppercase font-semibold tracking-widest text-[#c9ae63]">
                    {item.category}
                  </span>
                  <h3 className="text-sm sm:text-base font-bold text-white mt-1">
                    {item.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. CALL TO ACTION SECTION */}
      <section className="py-20 bg-white border-t border-stone-100">
        <div className="max-w-4xl mx-auto px-6 text-center space-y-6">
          <span className="text-xs uppercase font-semibold tracking-[0.3em] text-[#c9ae63]">
            WUJUDKAN IMPIAN ANDA
          </span>
          <h2 className="text-2xl sm:text-4xl font-bold text-stone-900 tracking-tight">
            Tertarik dengan Konsep Dekorasi Kami?
          </h2>
          <p className="text-stone-600 text-xs sm:text-sm max-w-xl mx-auto leading-relaxed font-light">
            Mari diskusikan tema dan konsep acara spesial Anda bersama tim Floraless sekarang juga.
          </p>
          <div className="pt-4">
            <a
              href="https://wa.me/6285640406548?text=Halo%20Floraless,%20saya%20tertarik%20setelah%20melihat%20galeri%20dekorasi%20Anda."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-4 bg-[#c9ae63] hover:bg-[#b89d52] text-white text-xs font-semibold uppercase tracking-wider rounded-full transition shadow-lg"
            >
              Konsultasi via WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </main>
  );
}