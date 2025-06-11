import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Dokumentasi() {
  return (
    <main className="max-w-5xl mx-auto py-12 px-6 text-[#0A2E50]">
      <h1 className="text-5xl font-bold mb-8 text-center">
        Dokumentasi SI Keuangan Sport Center
      </h1>

      {/* 1. Deskripsi Sistem */}
      <section className="mb-10">
        <h2 className="text-3xl font-semibold mb-4">1. Deskripsi Sistem</h2>
        <p className="text-justify">
          <strong>FinTrack</strong> adalah aplikasi keuangan berbasis web untuk membantu pengelola sport center mencatat transaksi, memantau anggaran, dan menghasilkan laporan keuangan secara otomatis. 
          Sistem ini dilengkapi grafik ringkasan keuangan yang mudah dipahami dengan visualisasi yang interaktif. Laporan dapat diunduh dalam format PDF atau Excel untuk dokumentasi dan audit.
        </p>
      </section>

      {/* 2. Panduan Pengguna */}
      <section className="mb-10">
        <h2 className="text-3xl font-semibold mb-4">2. Panduan Pengguna</h2>

        {/* ADMIN */}
        <article className="mb-6">
          <h3 className="text-2xl font-bold mb-3 text-[#163d63]">
            A. Panduan untuk Admin
          </h3>
          <p>Login ke sistem menggunakan akun admin.</p>

          <div className="space-y-4 mt-2">

            {/* Dashboard Admin */}
            <div className="bg-gray-100 p-4 rounded">
              <div className="mb-4">
                <h4 className="font-semibold mb-1">Dashboard Admin</h4>
                <p className="text-justify">
                  Menampilkan ringkasan transaksi terbaru, anggaran pemasukan, pengeluaran, dan saldo saat ini dari cabang yang dikelola. Dashboard juga dapat digunakan untuk memantau tren keuangan tahunan serta bulanan berdasarkan data pemasukan dan pengeluaran.
                </p>
              </div>
            </div>

            {/* Manajemen Transaksi */}
            <div className="bg-gray-100 p-4 rounded">
              <div className="mb-4">
                <h4 className="font-semibold mb-1">Manajemen Transaksi</h4>
                <p className="text-justify">
                  Admin dapat mengelola transaksi pemasukan dan pengeluaran secara rinci. Dashboard menampilkan ringkasan transaksi hari ini, total transaksi, serta transaksi yang terkunci.
                  Admin juga dapat melihat daftar transaksi dengan detail kategori, jumlah, tanggal, keterangan, dan opsi untuk lihat, edit, atau mengunci transaksi.
                </p>
              </div>
            </div>

            {/* POS */}
            <div className="bg-gray-100 p-4 rounded">
              <div className="mb-4">
                <h4 className="font-semibold mb-1">Point Of Sales (POS)</h4>
                <p className="text-justify">
                  Fitur POS digunakan untuk mencatat pembayaran dari hasil reservasi layanan atau produk. Dashboard menampilkan total pemasukan dari POS secara real-time.
                  Admin dapat melihat tabel pemasukan dari POS yang berisi informasi reservasi, ID reservasi, total pembayaran, dan tanggal transaksi.
                </p>
              </div>
            </div>

            {/* Perencanaan Anggaran */}
            <div className="bg-gray-100 p-4 rounded">
              <div className="mb-6">
                <h3 className="font-semibold mb-2">Perencanaan Anggaran</h3>
                <p>
                  Modul Perencanaan Anggaran memungkinkan admin untuk mengajukan dan mengelola anggaran keuangan sport center per periode tertentu. 
                  Pengguna dapat melihat ringkasan total anggaran yang direncanakan, total pengeluaran saat ini, dan selisihnya.
                </p>
                <p className="mt-2">
                  Setiap pengajuan anggaran memiliki status yang berbeda, seperti:
                </p>
                <ul className="list-disc ml-6 mt-1 mb-2">
                  <li><strong>Draft:</strong> Anggaran sedang disusun dan belum diajukan.</li>
                  <li><strong>Diajukan:</strong> Anggaran sudah diajukan untuk ditinjau.</li>
                  <li><strong>Revisi Diminta:</strong> Pengajuan memerlukan perbaikan atau perubahan sebelum dapat disetujui.</li>
                  <li><strong>Disetujui:</strong> Anggaran telah disetujui dan siap diterapkan.</li>
                  <li><strong>Ditolak:</strong> Pengajuan anggaran tidak disetujui.</li>
                </ul>
                <p>
                  Admin dapat menambah data anggaran baru, melacak status pengajuan, dan meninjau detail setiap anggaran untuk memastikan perencanaan keuangan yang terkontrol dan transparan.
                </p>
                <p>
                  Form Tambah Perencanaan Anggaran memungkinkan pengguna membuat rencana anggaran baru berdasarkan bulan dan tahun tertentu dengan status awal Draft. Pengguna dapat menambahkan rincian anggaran seperti kategori, deskripsi, dan jumlah biaya, dengan total anggaran yang dihitung otomatis. Setelah selesai, anggaran dapat disimpan atau dibatalkan sesuai kebutuhan.
                </p>
              </div>
            </div>

            {/* Rekapitulasi */}
            <div className="bg-gray-100 p-4 rounded">
              <section className="mb-10">
                <h2 className="font-semibold mb-4">Rekapitulasi</h2>
                <p className="text-justify">
                  Modul ini menampilkan rangkuman transaksi keuangan per periode (bulan dan tahun) untuk seluruh cabang atau cabang tertentu. 
                  Data rekapitulasi meliputi total pemasukan, pengeluaran, saldo, jumlah transaksi, dan status tutup buku (terkunci atau terbuka). 
                  Pengguna dapat memfilter periode dan cabang untuk mendapatkan laporan yang diinginkan. 
                  Fitur tutup buku ini dilakukan secara otomatis tiap akhir bulan, di mana sistem akan mengunci data transaksi dan anggaran untuk periode tersebut. Setelah dikunci, data tidak dapat diubah lagi untuk menjaga integritas laporan keuangan. Setelah itu barulah laporan dapat diunduh dalam format PDF atau Excel.
                </p>
              </section>
            </div>

          </div>
        </article>
        </section>

        {/* SUPERADMIN */}
        <article className="mb-6">
          <h3 className="text-xl font-bold mb-3 text-[#163d63]">B. Panduan untuk Superadmin</h3>
          <p>Login ke sistem menggunakan akun Superadmin.</p>

          <div className="bg-gray-100 p-4 rounded mb-4">
            <h4 className="font-semibold mb-1">Dashboard Superadmin</h4>
            <p className="text-justify">
              Halaman Dashboard Superadmin menyajikan ringkasan aktivitas dan kondisi keuangan dari seluruh cabang sport center. Superadmin dapat memantau tren keuangan global, melihat status anggaran yang belum disetujui, serta memeriksa performa pemasukan dan pengeluaran tiap cabang dalam satu tampilan terpusat.
            </p>
            <ul className="list-disc ml-6 mt-2">
              <li>Menampilkan total pemasukan dan pengeluaran seluruh cabang</li>
              <li>Memantau jumlah anggaran yang menunggu persetujuan</li>
              <li>Melihat tren keuangan gabungan secara bulanan dan tahunan</li>
              <li>Akses cepat ke data rekapitulasi dan laporan keuangan</li>
            </ul>
          </div>

          <div className="bg-gray-100 p-4 rounded mt-4">
            <h4 className="font-semibold mb-2">Persetujuan Anggaran</h4>
            <p className="text-justify">
              Superadmin menerima pengajuan atau perencanaan anggaran dari admin cabang. Mereka memiliki kewenangan untuk meninjau, menyetujui, menolak, atau meminta revisi anggaran sebelum diterapkan.
            </p>
            <div className="bg-gray-50 p-3 rounded mt-2">
              <p className="text-sm font-semibold mb-1">Alur Persetujuan:</p>
              <ol className="list-decimal ml-5 text-sm space-y-1">
                <li>Admin cabang membuat rencana anggaran.</li>
                <li>Perenacanaan anggaran dikirim ke Superadmin.</li>
                <li>Superadmin meninjau dan mengambil keputusan: setujui, tolak, atau minta revisi.</li>
              </ol>
            </div>
          </div>

          <div className="bg-gray-100 p-4 rounded mt-6">
            <h4 className="font-semibold mb-2">Manajemen User</h4>
            <p className="text-justify">
              Superadmin dapat menambah, mengedit, dan menghapus akun user admin cabang serta mengatur hak akses masing-masing sesuai kebutuhan.
            </p>
          </div>

          <div className="bg-gray-100 p-4 rounded mt-6">
            <h4 className="font-semibold mb-2">Manajemen Cabang</h4>
            <p className="text-justify">
              Superadmin bertanggung jawab mengelola data cabang sport center, termasuk pembuatan cabang baru, pengaturan admin cabang, dan penghapusan cabang yang tidak aktif.
            </p>
          </div>

          <div className="bg-gray-100 p-4 rounded mt-6">
            <h4 className="font-semibold mb-2">Manajemen Kategori</h4>
            <p className="text-justify">
              Superadmin membuat dan mengelola kategori transaksi yang digunakan secara sistematis di seluruh cabang, seperti kategori operasional, gaji, sewa, dan lain-lain yang terbagi atas kategori pemasukan dan pengeluaran.
            </p>
          </div>

          <div className="bg-gray-100 p-4 rounded mt-6">
            <h4 className="font-semibold mb-2">Rekapitulasi & Laporan</h4>
            <p className="text-justify">
              Superadmin dapat melihat data rekapitulasi keuangan dari seluruh cabang secara menyeluruh. Laporan dapat difilter berdasarkan cabang, periode, dan diunduh dalam format PDF atau Excel untuk kebutuhan audit dan evaluasi.
            </p>
            <p className="mt-2">
              Fitur tutup buku ini dilakukan secara otomatis tiap akhir bulan, di mana sistem akan mengunci data transaksi dan anggaran untuk periode tersebut. Setelah dikunci, data tidak dapat diubah lagi untuk menjaga integritas laporan keuangan. Setelah itu barulah laporan dapat diunduh dalam format PDF atau Excel.
            </p>
          </div>
        </article>
    </main>
  );
}
