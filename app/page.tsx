'use client';

import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { FaWhatsapp, FaEnvelope, FaInstagram, FaFacebook } from 'react-icons/fa';
import { Dialog } from '@headlessui/react'; 
import { FaQuoteLeft } from "react-icons/fa6";
import { FaStar } from "react-icons/fa";

const navItems = [
  { name: 'Beranda', href: '/' },
  { name: 'Tentang', href: '#tentang' },
  { name: 'Fitur', href: '#fitur' },
  { name: 'Cuplikan', href: '#cuplikan' },
  { name: 'Pertanyaan', href: '#pertanyaan' },
  { name: 'Testimoni', href: '#testimoni' },
  { name: 'Kontak', href: '#kontak' },
];

const faqs = [
  {
    question: "Apa manfaat utama menggunakan SI Keuangan Sport Center?",
    answer:
      "Sistem ini membantu mencatat transaksi, mengelola anggaran, dan menghasilkan laporan keuangan secara otomatis dan real-time, sehingga manajemen keuangan sport center menjadi lebih mudah, transparan, dan efisien.",
  },
  {
    question: "Apakah sistem ini cocok untuk semua jenis sport center?",
    answer:
      "Ya, sistem dirancang fleksibel dan dapat digunakan untuk berbagai jenis sport center, baik yang memiliki satu cabang maupun banyak cabang.",
  },
  {
    question: "Apakah saya perlu keahlian khusus untuk menggunakannya?",
    answer:
      "Tidak. Antarmuka sistem ini user-friendly dan bisa digunakan oleh siapa saja tanpa latar belakang akuntansi atau IT.",
  },
  {
    question: "Apakah laporan keuangan bisa langsung digunakan untuk audit?",
    answer:
      "Bisa. Laporan disusun otomatis dan tersedia dalam format PDF dan Excel sesuai standar pelaporan, cocok untuk dokumentasi dan audit internal maupun eksternal.",
  },
  {
    question: "Apa keunggulan SI Keuangan Sport Center dibanding mencatat manual?",
    answer:
      "Dengan sistem ini, data tidak akan tercecer, perhitungan lebih akurat, laporan langsung tersedia, dan seluruh proses bisa dilakukan secara digital kapan saja dan di mana saja.",
  },
];

export default function LandingPage() {
  const pathname = usePathname();
  const [activeIndex, setActiveIndex] = React.useState(0);
  const refs = React.useRef<(HTMLAnchorElement | null)[]>([]);
  const [selectedImage, setSelectedImage] = React.useState<string | null>(null);
  const [openIndex, setOpenIndex] = React.useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(index === openIndex ? null : index);
  };

  React.useEffect(() => {
    const index = navItems.findIndex((item) => item.href === pathname);
    if (index >= 0) setActiveIndex(index);
  }, [pathname]);

  return (
    <main className="bg-white text-[#0A2E50] min-h-screen">
      {/* Navbar */}
      <nav className="flex items-center justify-between px-8 py-4 bg-indigo-900 text-white sticky top-0 z-50 shadow-md">
        <div className="flex items-left space-x-2">
          <Image src="/logoatas.png" alt="Logo" width={150} height={150} className="rounded-lg" />
        </div>

        <div className="relative flex space-x-4">
          <motion.div
            className="absolute bg-white rounded-full h-10"
            layoutId="nav-indicator"
            transition={{ type: 'spring', stiffness: 500, damping: 30 }}
            style={{
              zIndex: 0,
              width: refs.current[activeIndex]?.offsetWidth || 0,
              left: refs.current[activeIndex]?.offsetLeft || 0,
              top: 0,
            }}
          />
          <div className="space-x-2 hidden md:flex">
            {navItems.map((item, index) => (
              <a
                key={item.href}
                href={item.href}
                ref={(el) => (refs.current[index] = el)}
                onClick={() => setActiveIndex(index)}
                className={`relative z-10 px-4 py-2 rounded-full transition duration-300 ${
                  activeIndex === index ? 'text-indigo-900 font-semibold' : 'hover:bg-white/20'
                }`}
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section
        className="relative text-center py-48 px-5 text-white"
        style={{
          backgroundImage: `url('/s1.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative z-10">
          <h1 className="text-4xl md:text-6xl font-bold mb-4" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.7)' }}>
            SI Keuangan Sport Center
          </h1>
          <p className="text-lg md:text-xl mb-6 max-w-2xl mx-auto" style={{ textShadow: '1px 1px 3px rgba(0,0,0,0.6)' }}>
            Sistem Informasi Keuangan Digital untuk Sport Center Modern
          </p>
          <div className="flex space-x-4 justify-center max-w-md mx-auto">
            <Link href="/daftar">
              <button className="bg-white text-indigo-900 px-6 py-3 rounded-xl font-bold hover:bg-gray-100 transition duration-300 shadow-md">
                🚀 Masuk ke Akunmu Sekarang
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Tentang */}
      <section id="tentang" className="bg-white py-20 px-6 md:px-10 lg:px-20">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-center text-[#0A2E50] mb-10">Tentang Kami</h2>
          <p className="text-gray-700 text-lg leading-relaxed mb-4">
            <strong>SI Keuangan Sport Center</strong> adalah sistem informasi yang dikembangkan untuk membantu pengelolaan keuangan sport center secara modern dan efisien. Kami percaya bahwa teknologi bisa mempermudah pemilik usaha olahraga dalam mencatat transaksi, memantau anggaran, dan mengelola cabang hanya dengan satu platform. Dengan tampilan yang simpel namun fungsional, SI Keuangan dibuat untuk siapapun — bahkan yang belum terbiasa dengan aplikasi keuangan sekalipun.
          </p>
        </div>
      </section>


      {/* Fitur */}
      <section id="fitur" className="pt-20 pb-16 px-4 bg-gray-50">
        <h2 className="text-2xl font-bold text-center text-[#0A2E50] mb-10">Fitur</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          <Card className="shadow-md hover:shadow-lg transition duration-300">
            <CardContent className="p-6">
              <h3 className="text-lg font-semibold text-indigo-700 mb-3">Untuk Admin</h3>
              <ul className="list-disc ml-5 text-sm text-gray-700 space-y-1">
                <li>Dashboard Admin</li>
                <li>Transaksi</li>
                <li>Perencanaan Anggaran</li>
                <li>POS</li>
                <li>Rekapitulasi</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="shadow-md hover:shadow-lg transition duration-300">
            <CardContent className="p-6">
              <h3 className="text-lg font-semibold text-indigo-700 mb-3">Untuk Superadmin</h3>
              <ul className="list-disc ml-5 text-sm text-gray-700 space-y-1">
                <li>Dashboard</li>
                <li>Rekapitulasi</li>
                <li>Perencanaan Anggaran</li>
                <li>Manajemen User</li>
                <li>Manajemen Cabang</li>
                <li>Manajemen Kategori</li>
              </ul>
            </CardContent>
          </Card>
        </div>
        {/* Dokumentasi */}
        <div className="max-w-3xl mx-auto mt-10 px-2 text-center">
          <h2 className="text-2xl font-bold text-center text-[#0A2E50] mb-10">Dokumentasi</h2>
          <Card className="w-full max-w-2xl shadow-md hover:shadow-lg transition duration-300">
            <CardContent className="px-8 py-6 space-y-6">
              <p className="w-full text-sm text-gray-700 leading-relaxed">
                Dokumentasi berisi panduan utama untuk Admin dan Superadmin supaya bisa menggunakan fitur dengan mudah.
              </p>
              <Link href="/dokumentasi" passHref>
                <Button className="bg-gradient-to-r from-indigo-900 to-[#163d63] hover:scale-105 transition-transform duration-300 text-white px-6 py-2 text-sm rounded-xl">
                  📂 Baca Dokumentasi
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Cuplikan */}
      <section id="cuplikan" className="pt-20 py-16 px-4 max-w-5xl mx-auto">
        <h2 className="text-2xl font-bold text-center text-[#0A2E50] mb-10">Cuplikan Tampilan</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
          {[
            { src: '/da.png', desc: 'Gambar Dashboard Admin' },
            { src: '/dsa.png', desc: 'Gambar Dashboard Super Admin' },
            { src: '/ra.png', desc: 'Gambar Rekaptulasi Admin' },
            { src: '/rsa.png', desc: 'Gambar Rekaptulasi Super Admin' },
            { src: '/dpa.png', desc: 'Gambar Detail Perencanaan Anggaran Admin' },
            { src: '/dpsa.png', desc: 'Gambar Detail Perencanaan Anggaran Super Admin' },
          ].map((item, idx) => (
            <div key={idx} className="flex flex-col items-center cursor-pointer" onClick={() => setSelectedImage(item.src)}>
              <Image src={item.src} alt={item.desc} width={600} height={400} className="object-contain rounded-lg shadow-md hover:shadow-lg transition" />
              <p className="mt-2 text-center text-gray-700">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* Modal Gambar */}
        <Dialog open={!!selectedImage} onClose={() => setSelectedImage(null)} className="fixed inset-0 z-50 flex items-center justify-center bg-black/70">
          <Dialog.Panel className="relative max-w-4xl mx-auto p-6 bg-transparent">
            {/* Tombol Close */}
            <div className="absolute -top-6 -right-6">
              <button
                  className="text-white bg-black/60 hover:bg-black/80 rounded-full p-3 shadow-lg"
                  onClick={() => setSelectedImage(null)}
                  aria-label="Close"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
            </div>

            {/* Gambar diperbesar */}
            {selectedImage && (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
              >
                <Image
                  src={selectedImage}
                  alt="Cuplikan Diperbesar"
                  width={1200}
                  height={800}
                  className="rounded-lg object-contain mx-auto"
                />
              </motion.div>
            )}
          </Dialog.Panel>
        </Dialog>
      </section>

      <section id="pertanyaan" className="scroll-mt-24 max-w-3xl mx-auto my-20 px-4">
        <h2 className="text-2xl font-bold text-center text-[#0A2E50] mb-10">Pertanyaan Umum</h2>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`transition-all duration-300 rounded-xl overflow-hidden shadow-sm border ${
                openIndex === index ? "bg-indigo-50 border-indigo-400" : "bg-white border-gray-200"
              }`}
            >
              <button
                onClick={() => toggle(index)}
                className="w-full px-5 py-4 flex justify-between items-center text-left hover:bg-indigo-100/40 transition"
              >
                <span
                  className={`text-sm font-medium ${
                    openIndex === index ? "text-indigo-700" : "text-gray-800"
                  }`}
                >
                  {faq.question}
                </span>
                <span className="ml-4 text-indigo-600 transition-transform duration-300">
                  {openIndex === index ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 transform rotate-180"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  )}
                </span>
              </button>

              {openIndex === index && (
                <div className="px-5 pb-4 text-gray-700 text-sm leading-relaxed">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      <section id="testimoni" className="bg-gray-100 py-16 px-4">
       <h2 className="text-2xl font-bold text-center text-[#0A2E50] mb-8 mt-4">Testimoni</h2>
        <p className="text-center text-gray-500 text-sm mt-4 mb-4">Apa sih kata para pengguna?</p>
        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-6">
          {[
            {
              name: "Budi Santoso",
              review:
                "Laporan keuangan kini lebih rapi dan cepat dicek. SI Keuangan bantu banget buat operasional harian sport center kami.",
              rating: 5,
            },
            {
              name: "Rina Oktaviani",
              review:
                "Tutup buku otomatis dan fitur rekap sangat menghemat waktu saya. Tidak perlu hitung manual lagi tiap akhir bulan.",
              rating: 4,
            },
            {
              name: "Dedi Firmansyah",
              review:
                "Tampilan simpel, data keuangan aman, dan bisa dipantau dari HP. SI Keuangan sangat cocok buat pemilik cabang sport center.",
              rating: 5,
            },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-white rounded-xl shadow-md p-6 flex flex-col justify-between relative"
            >
              {/* Icon quote */}
              <div className="text-yellow-400 text-3xl mb-4">
                <FaQuoteLeft />
              </div>

              {/* Isi testimoni */}
              <p className="text-gray-700 italic mb-6">“{item.review}”</p>

              {/* Nama dan rating */}
              <div className="flex items-center justify-between">
                <strong className="text-sm text-gray-900">{item.name}</strong>
                <div className="flex space-x-1">
                  {[...Array(5)].map((_, index) => (
                    <FaStar
                      key={index}
                      className={`${
                        index < item.rating ? "text-yellow-400" : "text-gray-300"
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer id="kontak" className="bg-indigo-900 text-gray-300 py-8 px-4">
        <div className="max-w-md mx-auto flex flex-col items-center space-y-4 text-center">
          
          {/* Teks Kontak */}
          <h3 className="text-base font-semibold text-white">Hubungi Kami</h3>

          {/* Ikon Sosial Media */}
          <div className="flex space-x-5 text-white">
            <a
              href="https://wa.me/6281234567890"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-green-400"
              aria-label="WhatsApp Developer"
            >
              <FaWhatsapp size={20} />
            </a>
            <a
              href="https://instagram.com/sikeuangan"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-pink-400"
              aria-label="Instagram Developer"
            >
              <FaInstagram size={20} />
            </a>
            <a
              href="https://facebook.com/sikeuangan"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400"
              aria-label="Facebook Developer"
            >
              <FaFacebook size={20} />
            </a>
            <a
              href="mailto:support@sikeuangan.id"
              className="hover:text-indigo-300"
              aria-label="Email Developer"
            >
              <FaEnvelope size={20} />
            </a>
          </div>

          {/* Garis Pemisah */}
          <div className="w-full border-t border-white/20" />

          {/* Copyright */}
          <p className="text-xs text-gray-400 pt-2">
            © {new Date().getFullYear()} <span className="font-semibold text-white">SI Keuangan Sport Center</span>
          </p>
        </div>
      </footer>
    </main>
  );
}