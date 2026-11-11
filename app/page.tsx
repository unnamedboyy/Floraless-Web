'use client';

import React, { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { createClient } from '@/lib/supabase/client';

interface PackageItem {
  id: string;
  title: string;
  category: string;
  type?: string;
  price: number;
  price_formatted?: string;
  description: string;
  features: string[];
}

interface TestimonialItem {
  id: string;
  client_name: string;
  event_type: string;
  review_text: string;
  rating: number;
}

export default function HomePage() {
  const [activeStep, setActiveStep] = useState(1);
  const [packages, setPackages] = useState<PackageItem[]>([]);
  const [testimonials, setTestimonials] = useState<TestimonialItem[]>([]);
  const [loading, setLoading] = useState(true);

  // Index kartu yang aktif di tengah
  const [currentIndex, setCurrentIndex] = useState(0);

  const supabase = createClient();

  // Fetch Data Paket dan Testimoni dari Supabase
  useEffect(() => {
    async function fetchData() {
      try {
        const [pkgRes, testRes] = await Promise.all([
          supabase.from('packages').select('*').limit(3),
          supabase.from('testimonials').select('*').order('created_at', { ascending: false })
        ]);

        if (pkgRes.data) setPackages(pkgRes.data);
        if (testRes.data) setTestimonials(testRes.data);
      } catch (err) {
        console.error('Error fetching data:', err);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, [supabase]);

  // Auto Slide Testimonial otomatis bergerak tiap 4 detik
  useEffect(() => {
    if (testimonials.length === 0) return;
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const stepsContent = [
    {
      id: 1,
      title: "Konsultasi Awal",
      desc: "Kami memulai dengan sesi konsultasi untuk memahami konsep acara, tema dekorasi, serta kebutuhan teknis Anda. Tim Floraless akan membantu menyempurnakan ide agar sesuai dengan lokasi acara dan menciptakan suasana yang elegan.",
      img: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1000](https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1000"
    },
    {
      id: 2,
      title: "Perencanaan Kreatif",
      desc: "Merancang moodboard, sketsa tata letak bunga, dan pemilihan palet warna yang selaras dengan konsep sakral pernikahan atau acara Anda.",
      img: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&q=80&w=1000](https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&q=80&w=1000"
    },
    {
      id: 3,
      title: "Produksi",
      desc: "Tim florist profesional mempersiapkan rangkaian bunga segar berkualitas tinggi dan membangun instalasi dekorasi dengan presisi detail tinggi.",
      img: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=1000](https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=1000"
    },
    {
      id: 4,
      title: "Hari Acara",
      desc: "Eksekusi lapangan yang tepat waktu dan terstruktur memastikan seluruh dekorasi tertata sempurna sebelum tamu dan prosesi dimulai.",
      img: "https://pwsvjigsqsqktapztqok.supabase.co/storage/v1/object/public/floraless-assets/Hero/C3_04137.jpeg?auto=format&fit=crop&q=80&w=1000"
    }
  ];

  const currentStepData = stepsContent.find(s => s.id === activeStep) || stepsContent[0];

  return (
    <main className="min-h-screen bg-white font-sans text-stone-800 antialiased selection:bg-[#c9ae63] selection:text-white">
      
      {/* 1. NAVBAR */}
      <Navbar />

      {/* 2. HERO SECTION */}
      <section id="beranda" className="relative min-h-[92vh] flex flex-col justify-center items-center text-center px-6 pt-24 pb-16 bg-stone-900 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30 mix-blend-luminosity scale-105"
          style={{ backgroundImage: "url('https://pwsvjigsqsqktapztqok.supabase.co/storage/v1/object/public/floraless-assets/Hero/C3_03857(1).jpeg?auto=format&fit=crop&q=80&w=2000')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/80" />

        <div className="relative z-10 max-w-4xl mx-auto mt-6">
          <span className="text-xs uppercase font-semibold tracking-[0.3em] text-stone-300">
            FLOWER ARRANGEMENT
          </span>
          <h1 className="mt-4 text-4xl sm:text-6xl md:text-7xl font-semibold text-white tracking-tight leading-tight">
            Dekorasi Gereja & Event <br />
            <span className="font-serif italic font-normal">Yogyakarta</span>
          </h1>
          <p className="mt-5 text-stone-200 text-sm sm:text-base font-light tracking-wide max-w-xl mx-auto">
            Mewujudkan dekorasi sakral dan elegan untuk hari istimewa Anda.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a href="https://wa.me/6285640406548?text=Halo%20Floraless,%20saya%20ingin%20melakukan%20booking%20dekorasi." target="_blank" rel="noopener noreferrer" className="px-7 py-3.5 bg-[#c9ae63] hover:bg-[#b89d52] text-white text-xs tracking-wider uppercase font-medium rounded-full transition shadow-lg">
              Booking Sekarang
            </a>
            <a href="#layanan" className="px-7 py-3.5 bg-transparent border border-white/40 hover:border-white text-white text-xs tracking-wider uppercase font-medium rounded-full transition">
              Lihat Paket
            </a>
          </div>
        </div>
      </section>

      {/* 3. FEATURE HIGHLIGHTS */}
      <section className="bg-white py-14 border-b border-stone-100">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="flex items-start space-x-4">
            <div className="w-10 h-10 rounded-full bg-[#c9ae63]/15 text-[#c9ae63] flex items-center justify-center shrink-0 mt-0.5">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"/></svg>
            </div>
            <div>
              <h4 className="text-sm font-bold text-stone-900">Layanan Konsultasi</h4>
              <p className="text-xs text-stone-500 mt-1 leading-relaxed">Diskusi konsep, kebutuhan, dan estimasi secara transparan sebelum acara dimulai.</p>
            </div>
          </div>
          <div className="flex items-start space-x-4">
            <div className="w-10 h-10 rounded-full bg-[#c9ae63]/15 text-[#c9ae63] flex items-center justify-center shrink-0 mt-0.5">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
            </div>
            <div>
              <h4 className="text-sm font-bold text-stone-900">Tepat Waktu</h4>
              <p className="text-xs text-stone-500 mt-1 leading-relaxed">Tim kami bekerja terjadwal dan profesional untuk memastikan semuanya siap sesuai timeline.</p>
            </div>
          </div>
          <div className="flex items-start space-x-4">
            <div className="w-10 h-10 rounded-full bg-[#c9ae63]/15 text-[#c9ae63] flex items-center justify-center shrink-0 mt-0.5">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
            </div>
            <div>
              <h4 className="text-sm font-bold text-stone-900">Jangkauan Luas</h4>
              <p className="text-xs text-stone-500 mt-1 leading-relaxed">Melayani berbagai wilayah dengan koordinasi tim yang terstruktur dan efisien.</p>
            </div>
          </div>
          <div className="flex items-start space-x-4">
            <div className="w-10 h-10 rounded-full bg-[#c9ae63]/15 text-[#c9ae63] flex items-center justify-center shrink-0 mt-0.5">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"/></svg>
            </div>
            <div>
              <h4 className="text-sm font-bold text-stone-900">Semua Acara</h4>
              <p className="text-xs text-stone-500 mt-1 leading-relaxed">Mulai dari pernikahan, corporate event, hingga private celebration kami tangani dengan detail.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. ABOUT SECTION */}
      <section id="tentang" className="py-16 bg-stone-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="relative flex flex-col md:flex-row items-center justify-center">
            
            <div className="w-full md:w-[65%] h-[320px] sm:h-[400px] rounded-3xl overflow-hidden shadow-md relative z-0">
              <img 
                src="https://pwsvjigsqsqktapztqok.supabase.co/storage/v1/object/public/floraless-assets/Hero/T2400379.jpg?auto=format&fit=crop&q=80&w=1200" 
                alt="Dekorasi Gereja Floraless" 
                className="w-full h-full object-cover"
              />
            </div>

            <div className="w-[90%] sm:w-[80%] md:w-[48%] bg-[#c9ae63] text-white p-6 sm:p-10 rounded-3xl shadow-xl relative md:absolute md:right-4 lg:right-12 z-10 -mt-16 md:mt-0">
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
                Tentang Floraless
              </h2>
              <p className="mt-3 text-stone-100 text-xs sm:text-sm leading-relaxed font-light">
                Floraless adalah jasa dekorasi gereja dan event tematik di Yogyakarta, dengan fokus pada pernikahan dan misa pemberkatan. Kami merancang dekorasi yang indah dan bermakna, menciptakan suasana sakral yang menyatu dengan nilai dan cerita setiap acara.
              </p>
              <div className="mt-6">
                <a href="/tentang" className="inline-block px-5 py-2 bg-white/20 hover:bg-white/30 border border-white/50 text-white text-xs font-medium rounded-full transition">
                  Selengkapnya
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 5. GALLERY SECTION */}
      <section id="galeri" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-stone-900 mb-12">Galeri Kami</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            <div className="md:col-span-7 h-72 md:h-80 rounded-2xl overflow-hidden shadow-md relative group">
              <img src="https://pwsvjigsqsqktapztqok.supabase.co/storage/v1/object/public/floraless-assets/Hero/T2400373.jpeg?auto=format&fit=crop&q=80&w=800" alt="Galeri 1" className="w-full h-full object-cover group-hover:scale-105 transition duration-500" />
            </div>
            <div className="md:col-span-5 h-72 md:h-80 rounded-2xl overflow-hidden shadow-md relative group">
              <img src="https://pwsvjigsqsqktapztqok.supabase.co/storage/v1/object/public/floraless-assets/Hero/DSC09960.jpeg?auto=format&fit=crop&q=80&w=800" alt="Galeri 2" className="w-full h-full object-cover group-hover:scale-105 transition duration-500" />
            </div>
            <div className="md:col-span-5 h-64 md:h-72 rounded-2xl overflow-hidden shadow-md relative group">
              <img src="https://pwsvjigsqsqktapztqok.supabase.co/storage/v1/object/public/floraless-assets/Hero/WhatsApp%20Image%202026-06-10%20at%2009.10.15.jpeg?auto=format&fit=crop&q=80&w=800" alt="Galeri 3" className="w-full h-full object-cover group-hover:scale-105 transition duration-500" />
            </div>
            <div className="md:col-span-7 h-64 md:h-72 rounded-2xl overflow-hidden shadow-md relative group">
              <img src="https://pwsvjigsqsqktapztqok.supabase.co/storage/v1/object/public/floraless-assets/Hero/auth-bg.jpg?auto=format&fit=crop&q=80&w=800" alt="Galeri 4" className="w-full h-full object-cover group-hover:scale-105 transition duration-500" />
            </div>
          </div>
        </div>
      </section>

      {/* 6. PROCESS SECTION */}
      <section className="py-20 bg-stone-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <h2 className="text-3xl font-bold text-stone-900">Proses Perencanaan Acara Bersama Floraless</h2>
            <p className="mt-3 text-stone-600 text-sm leading-relaxed">
              Floraless tidak hanya menghadirkan dekorasi, tetapi juga menciptakan pengalaman acara yang berkesan dengan proses yang terstruktur.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            <div className="lg:col-span-4 flex flex-col justify-between space-y-3 lg:space-y-0">
              {stepsContent.map((step) => (
                <button
                  key={step.id}
                  onClick={() => setActiveStep(step.id)}
                  className={`w-full text-left p-5 rounded-2xl transition duration-300 flex flex-col justify-center ${
                    activeStep === step.id 
                      ? 'bg-[#c9ae63] text-white shadow-md' 
                      : 'bg-white text-stone-700 border border-stone-200/80 hover:border-[#c9ae63]/50'
                  }`}
                >
                  <div className="font-bold text-sm">{step.title}</div>
                  <div className={`text-xs mt-1 ${activeStep === step.id ? 'text-stone-100' : 'text-stone-400'}`}>
                    Klik untuk melihat detail proses.
                  </div>
                </button>
              ))}
            </div>

            <div className="lg:col-span-8 bg-white pb-6 rounded-3xl border border-stone-200/60 shadow-sm flex flex-col justify-between">
              <div>
                <div className="h-64 md:h-72 rounded-t-3xl overflow-hidden mb-6 relative">
                  <img src={currentStepData.img} alt={currentStepData.title} className="w-full h-full object-cover" />
                </div>
                <h3 className="text-xl px-6 font-bold text-stone-900">{currentStepData.title}</h3>
                <p className="mt-3 px-6 text-stone-600 text-sm leading-relaxed">
                  {currentStepData.desc}
                </p>
              </div>
              <div className="mt-6 px-6">
                <a href="https://wa.me/6285640406548?text=Halo%20Floraless,%20saya%20ingin%20konsultasi." target="_blank" rel="noopener noreferrer" className="inline-block w-full text-center py-3 border border-[#c9ae63] text-[#c9ae63] hover:bg-[#c9ae63] hover:text-white rounded-xl text-xs font-semibold uppercase tracking-wider transition">
                  Konsultasi Sekarang
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. PACKAGES SECTION (DARK THEME) */}
      <section id="layanan" className="py-24 bg-stone-950 text-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12">
            <div>
              <span className="text-xs uppercase font-medium tracking-[0.2em] text-[#c9ae63]">PACKAGES</span>
              <h2 className="text-3xl md:text-4xl font-bold mt-2 leading-tight">
                Pilih Paket Dekorasi <br /> Sesuai Kebutuhan
              </h2>
            </div>
            <p className="text-stone-400 text-xs sm:text-sm max-w-sm mt-4 md:mt-0 leading-relaxed">
              Pilihan layanan dekorasi gereja dan event yang dapat disesuaikan dengan konsep acara Anda.
            </p>
          </div>

          {loading ? (
            <div className="text-center py-16 text-stone-500 text-sm">Memuat pilihan paket...</div>
          ) : packages.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {packages.map((pkg) => (
                <div key={pkg.id} className="bg-stone-900 border border-stone-800 p-6 rounded-2xl flex flex-col justify-between shadow-sm">
                  <div>
                    <span className="text-xs uppercase tracking-wider text-[#c9ae63] bg-[#c9ae63]/10 px-3 py-1 rounded-full font-semibold">
                      {pkg.type || pkg.category || 'Gereja'}
                    </span>
                    <h3 className="text-lg font-bold mt-4">{pkg.title}</h3>
                    <p className="text-stone-400 text-xs mt-2 leading-relaxed">{pkg.description}</p>
                    <div className="text-xl font-bold text-[#c9ae63] mt-4">
                      {pkg.price_formatted || `Rp ${Number(pkg.price).toLocaleString('id-ID')}`}
                    </div>
                  </div>
                  <a 
                    href={`https://wa.me/6285640406548?text=Halo%20Floraless,%20saya%20tertarik%20dengan%20${encodeURIComponent(pkg.title)}`} 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-6 w-full py-3 bg-[#c9ae63] text-white text-center rounded-xl text-xs font-semibold uppercase tracking-wider hover:bg-[#b89d52] transition block"
                  >
                    Pilih Paket
                  </a>
                </div>
              ))}
            </div>
          ) : (
            <div className="w-full py-16 rounded-2xl bg-stone-900/50 border border-stone-800/80 text-center text-stone-400 text-sm">
              Belum ada paket tersedia.
            </div>
          )}
        </div>
      </section>

      {/* 8. TESTIMONIALS SECTION (STRICTLY 3 CARDS IN VIEW: CENTER HIGHLIGHTED + 2 SIDE FADE) */}
      <section className="py-24 bg-stone-50 overflow-hidden">
        <div className="w-full text-center">
          <span className="text-xs uppercase font-medium tracking-[0.2em] text-[#c9ae63]">
            TESTIMONI KLIEN
          </span>
          <h2 className="text-3xl font-bold text-stone-900 mt-2 px-6">
            Kata Mereka Tentang Layanan Kami
          </h2>
          <p className="text-stone-500 text-xs sm:text-sm mt-2 font-light px-6">
            Pengalaman nyata pelanggan Floraless untuk hari spesial mereka.
          </p>

          <div className="mt-14 relative w-full overflow-hidden py-4">
            {testimonials.length > 0 ? (
              <div className="w-full flex justify-center">
                
                <div 
                  className="flex items-center transition-transform duration-700 ease-in-out"
                  style={{ 
                    transform: `translateX(calc(50% - ${currentIndex * 444 + 210}px))` 
                  }}
                >
                  {testimonials.map((t, idx) => {
                    const total = testimonials.length;
                    const prevIdx = (currentIndex - 1 + total) % total;
                    const nextIdx = (currentIndex + 1) % total;

                    const isActive = idx === currentIndex;
                    const isPrev = idx === prevIdx;
                    const isNext = idx === nextIdx;

                    if (!isActive && !isPrev && !isNext) {
                      return <div key={t.id} style={{ width: '420px', marginRight: '24px' }} className="shrink-0 invisible" />;
                    }

                    return (
                      <div 
                        key={t.id} 
                        onClick={() => setCurrentIndex(idx)}
                        style={{ width: '420px', marginRight: '24px' }}
                        className={`shrink-0 transition-all duration-700 ease-in-out cursor-pointer ${
                          isActive 
                            ? 'scale-100 opacity-100 z-20' 
                            : 'scale-90 opacity-40 blur-[0.6px] z-10 hover:opacity-60'
                        }`}
                      >
                        <div className={`p-8 rounded-3xl transition-all duration-700 flex flex-col justify-between text-left min-h-[260px] ${
                          isActive 
                            ? 'bg-white shadow-2xl border border-stone-200/90 ring-1 ring-stone-900/5' 
                            : 'bg-white/70 shadow-sm border border-stone-200/40'
                        }`}>
                          <div>
                            <div className="flex text-[#c9ae63] mb-3 text-sm">
                              {'★'.repeat(t.rating || 5)}
                            </div>
                            <p className="text-stone-700 text-sm leading-relaxed italic font-light">
                              "{t.review_text}"
                            </p>
                          </div>
                          <div className="mt-6 pt-4 border-t border-stone-100 flex justify-between items-center">
                            <div>
                              <div className="font-bold text-stone-900 text-sm">{t.client_name}</div>
                              <div className="text-[11px] text-[#c9ae63] font-medium uppercase tracking-wider mt-0.5">{t.event_type}</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>

              </div>
            ) : (
              <div className="max-w-md mx-auto py-14 rounded-2xl bg-white border border-stone-200/60 text-center text-stone-400 text-xs">
                Belum ada ulasan tersedia.
              </div>
            )}

            <div className="flex justify-center items-center gap-6 mt-10">
              <button 
                onClick={handlePrev}
                className="w-10 h-10 rounded-full bg-white border border-stone-200 hover:bg-[#c9ae63] hover:text-white flex items-center justify-center text-stone-700 transition shadow-sm cursor-pointer"
                aria-label="Previous Testimonial"
              >
                ‹
              </button>
              
              <div className="text-xs font-medium text-stone-500 tracking-wider">
                {currentIndex + 1} dari {testimonials.length}
              </div>

              <button 
                onClick={handleNext}
                className="w-10 h-10 rounded-full bg-white border border-stone-200 hover:bg-[#c9ae63] hover:text-white flex items-center justify-center text-stone-700 transition shadow-sm cursor-pointer"
                aria-label="Next Testimonial"
              >
                ›
              </button>
            </div>

          </div>
        </div>
      </section>

      {/* 9. FOOTER */}
      <Footer />

    </main>
  );
}