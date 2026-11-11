'use client';

import React, { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { createClient } from '@/lib/supabase/client';

const supabase = createClient();

export default function ServicesPage() {
  const [packagesData, setPackagesData] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedPackage, setSelectedPackage] = useState<any | null>(null);

  // Ambil data dari Supabase saat komponen dirender
  useEffect(() => {
    async function fetchPackages() {
      try {
        const { data, error } = await supabase.from('packages').select('*');
        if (error) {
          console.error('Error fetching packages:', error);
        } else {
          setPackagesData(data || []);
        }
      } catch (err) {
        console.error('Unexpected error:', err);
      } finally {
        setLoading(false);
      }
    }

    fetchPackages();
  }, []);

  return (
    <main className="min-h-screen bg-white font-sans text-stone-800 antialiased selection:bg-[#c9ae63] selection:text-white">
      {/* Navbar */}
      <Navbar />

      {/* 1. HERO SECTION */}
      <section className="relative min-h-[92vh] flex flex-col justify-center items-center text-center px-6 pt-24 pb-16 bg-stone-900 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30 mix-blend-luminosity scale-105"
          style={{
            backgroundImage:
              "url('https://pwsvjigsqsqktapztqok.supabase.co/storage/v1/object/public/floraless-assets/Hero/392d33d8-92b7-4519-99be-ac8a0a0f37b4.jpg?auto=format&fit=crop&q=80&w=2000')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/80" />

        <div className="relative z-10 max-w-4xl mx-auto mt-6">
          <span className="text-xs uppercase font-semibold tracking-[0.3em] text-stone-300">
            DAFTAR LAYANAN & PAKET GEREJA
          </span>
          <h1 className="mt-4 text-4xl sm:text-6xl md:text-7xl font-semibold text-white tracking-tight leading-tight">
            Pilihan Paket Dekorasi <br />
            <span className="font-serif italic font-normal">Pemberkatan</span>
          </h1>
          <p className="mt-5 text-stone-200 text-sm sm:text-base font-light tracking-wide max-w-xl mx-auto">
            Wujudkan momen sakral pemberkatan pernikahan Anda di Yogyakarta dengan rangkaian bunga segar terbaik dari Floraless.
          </p>
          <div className="mt-8 flex justify-center">
            <a
              href="#daftar-paket"
              className="px-7 py-3.5 bg-[#c9ae63] hover:bg-[#b89d52] text-white text-xs tracking-wider uppercase font-medium rounded-full transition shadow-lg"
            >
              Lihat Paket & Detail
            </a>
          </div>
        </div>
      </section>

      {/* 2. DAFTAR PAKET */}
      <section id="daftar-paket" className="py-24 bg-stone-50/50">
        <div className="max-w-6xl mx-auto px-6">
          {loading ? (
            <div className="text-center py-20 text-stone-400 text-sm">Memuat data paket dari database...</div>
          ) : packagesData.length === 0 ? (
            <div className="text-center py-20 text-stone-400 text-sm">Belum ada paket yang tersedia.</div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {packagesData.map((pkg) => (
                <div 
                  key={pkg.id} 
                  className="bg-white border border-stone-200/80 rounded-3xl p-6 sm:p-8 flex flex-col justify-between shadow-sm hover:shadow-md transition duration-300"
                >
                  <div>
                    <div className="text-[10px] uppercase tracking-widest text-[#c9ae63] font-semibold">
                      {pkg.type}
                    </div>
                    <h3 className="text-2xl font-bold text-stone-900 mt-2">
                      {pkg.title}
                    </h3>
                    
                    <div className="mt-4 pb-4 border-b border-stone-100">
                      <div className="text-3xl font-bold text-stone-900">
                        {pkg.price_formatted}
                      </div>
                      <div className="text-[11px] text-stone-400 mt-0.5">* Terms & Conditions Apply</div>
                    </div>

                    <p className="text-stone-500 text-xs sm:text-sm mt-4 leading-relaxed font-light">
                      {pkg.description}
                    </p>

                    <ul className="mt-5 space-y-2 text-xs text-stone-600">
                      {pkg.features?.map((feat: string, idx: number) => (
                        <li key={idx} className="flex items-start">
                          <span className="mr-2 text-[#c9ae63] font-bold">✓</span> 
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-8 pt-4 space-y-2.5">
                    <button
                      onClick={() => setSelectedPackage(pkg)}
                      className="w-full py-3 border border-stone-300 hover:border-[#c9ae63] text-stone-700 hover:text-[#c9ae63] text-center rounded-2xl text-xs font-semibold uppercase tracking-wider transition duration-300"
                    >
                      Lihat Detail & Foto
                    </button>

                    <a
                      href={`https://wa.me/6285640406548?text=Halo%20Floraless,%20saya%20tertarik%20dengan%20${encodeURIComponent(pkg.title)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block w-full py-3 bg-stone-900 hover:bg-[#c9ae63] text-white text-center rounded-2xl text-xs font-semibold uppercase tracking-wider transition duration-300 shadow-sm"
                    >
                      Pilih Paket via WhatsApp
                    </a>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* 3. MODAL BOX / DETAIL POPUP */}
      {selectedPackage && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm">
          <div className="bg-white w-full max-w-3xl rounded-3xl overflow-hidden shadow-2xl max-h-[90vh] flex flex-col">
            
            <div className="px-6 py-5 border-b border-stone-100 flex justify-between items-center bg-stone-50">
              <div>
                <span className="text-[10px] uppercase font-semibold tracking-widest text-[#c9ae63]">
                  {selectedPackage.type}
                </span>
                <h3 className="text-xl font-bold text-stone-900">{selectedPackage.title}</h3>
              </div>
              <button 
                onClick={() => setSelectedPackage(null)}
                className="w-9 h-9 rounded-full bg-stone-200 hover:bg-stone-300 flex items-center justify-center text-stone-700 font-bold transition"
              >
                ✕
              </button>
            </div>

            <div className="p-6 overflow-y-auto space-y-6">
              <div>
                <div className="text-2xl font-bold text-stone-900">{selectedPackage.price_formatted}</div>
                <p className="text-stone-600 text-xs sm:text-sm mt-2">{selectedPackage.description}</p>
              </div>

              <div>
                <h4 className="text-xs uppercase font-semibold tracking-wider text-stone-400 mb-3">Galeri Foto Paket</h4>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {selectedPackage.images?.map((imgSrc: string, idx: number) => (
                    <div key={idx} className="h-44 rounded-2xl overflow-hidden bg-stone-100 border border-stone-200">
                      <img src={imgSrc} alt="Preview" className="w-full h-full object-cover hover:scale-105 transition duration-500" />
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-xs uppercase font-semibold tracking-wider text-stone-400 mb-2">Rincian Fasilitas</h4>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-stone-700 bg-stone-50 p-4 rounded-2xl border border-stone-100">
                  {selectedPackage.features?.map((feat: string, idx: number) => (
                    <li key={idx} className="flex items-start">
                      <span className="mr-2 text-[#c9ae63] font-bold">✓</span>
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-[#c9ae63]/10 p-4 rounded-2xl border border-[#c9ae63]/30">
                <div className="text-[11px] font-bold text-stone-900 uppercase tracking-wide">Material & Jenis Bunga:</div>
                <div className="text-xs text-stone-600 mt-1">{selectedPackage.materials}</div>
              </div>
            </div>

            <div className="p-4 sm:p-5 border-t border-stone-100 bg-stone-50 flex justify-end gap-3">
              <button
                onClick={() => setSelectedPackage(null)}
                className="px-5 py-2.5 rounded-xl border border-stone-300 text-xs font-semibold text-stone-600 hover:bg-stone-100 transition"
              >
                Tutup
              </button>
              <a
                href={`https://wa.me/6285640406548?text=Halo%20Floraless,%20saya%20ingin%20konsultasi%20lengkap%20untuk%20${encodeURIComponent(selectedPackage.title)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2.5 rounded-xl bg-[#c9ae63] hover:bg-[#b89d52] text-white text-xs font-semibold uppercase tracking-wider transition shadow-sm"
              >
                Pesan via WhatsApp
              </a>
            </div>

          </div>
        </div>
      )}

      {/* Footer */}
      <Footer />
    </main>
  );
}