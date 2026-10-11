import React, { useState } from 'react';
import { 
  Truck, 
  MapPin, 
  Phone, 
  MessageCircle, 
  Clock, 
  ShieldCheck, 
  UserCheck, 
  PackageCheck, 
  Navigation, 
  Menu, 
  X, 
  ChevronRight, 
  CheckCircle2, 
  Star,
  Award,
  Zap
} from 'lucide-react';

const WA_NUMBER = "6285261694477"; // Ganti dengan nomor WhatsApp aktif
const LOCATION_NAME = "Medan, Sumatera Utara";
const GOOGLE_MAPS_EMBED = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d127393.24949581788!2d98.60367355!3d3.59519565!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x303131cc1c3eb2fd%3A0x231d56c91f3650e8!2sMedan%2C%20Medan%20City%2C%20North%20Sumatra!5e0!3m2!1sen!2sid!4v1700000000000!5m2!1sen!2sid";

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Helper untuk generate URL WhatsApp dengan pesan otomatis
  const getWaLink = (message) => {
    const encoded = encodeURIComponent(message || "Halo, saya ingin bertanya mengenai sewa mobil pickup di Medan.");
    return `https://wa.me/${WA_NUMBER}?text=${encoded}`;
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans antialiased selection:bg-amber-400 selection:text-slate-900">
      
      {/* ---------------- NAVBAR ---------------- */}
      <nav className="sticky top-0 z-50 bg-slate-900/95 backdrop-blur-md text-white border-b border-slate-800 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <div className="flex items-center space-x-3 cursor-pointer" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
              <div>
                <span className="text-xl font-extrabold tracking-tight block text-white">
                  MEDAN<span className="text-amber-400">PICKUP</span>
                </span>
                <span className="text-[10px] text-slate-400 tracking-widest uppercase font-semibold block -mt-1">
                  Jasa Angkut & Pindahan
                </span>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8 font-medium text-slate-300 text-sm">
              <a href="#home" className="hover:text-amber-400 transition-colors">Beranda</a>
              <a href="#about" className="hover:text-amber-400 transition-colors">Tentang Kami</a>
              <a href="#services" className="hover:text-amber-400 transition-colors">Layanan</a>
              <a href="#location" className="hover:text-amber-400 transition-colors">Lokasi & Kontak</a>
            </div>

            {/* Desktop WA Button */}
            <div className="hidden md:flex items-center">
              <a 
                href={getWaLink("Halo Admin, saya mau sewa mobil pickup di Medan, bisa info harganya?")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white px-5 py-2.5 rounded-full font-semibold shadow-md shadow-emerald-900/20 hover:shadow-lg transition-all transform hover:-translate-y-0.5 active:translate-y-0"
              >
                <MessageCircle className="w-5 h-5 fill-current" />
                <span>Hubungi WA</span>
              </a>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center">
              <button 
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 focus:outline-none"
                aria-label="Toggle Menu"
              >
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {isMenuOpen && (
          <div className="md:hidden bg-slate-900 border-b border-slate-800 px-4 pt-2 pb-6 space-y-3">
            <a 
              href="#home" 
              onClick={() => setIsMenuOpen(false)}
              className="block px-3 py-2 rounded-md font-medium text-slate-200 hover:bg-slate-800 hover:text-amber-400"
            >
              Beranda
            </a>
            <a 
              href="#about" 
              onClick={() => setIsMenuOpen(false)}
              className="block px-3 py-2 rounded-md font-medium text-slate-200 hover:bg-slate-800 hover:text-amber-400"
            >
              Tentang Kami
            </a>
            <a 
              href="#services" 
              onClick={() => setIsMenuOpen(false)}
              className="block px-3 py-2 rounded-md font-medium text-slate-200 hover:bg-slate-800 hover:text-amber-400"
            >
              Layanan
            </a>
            <a 
              href="#location" 
              onClick={() => setIsMenuOpen(false)}
              className="block px-3 py-2 rounded-md font-medium text-slate-200 hover:bg-slate-800 hover:text-amber-400"
            >
              Lokasi & Kontak
            </a>
            <a 
              href={getWaLink("Halo Admin, saya ingin sewa mobil pickup Medan.")}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full mt-4 bg-emerald-500 text-white py-3 rounded-lg font-bold shadow-md"
            >
              <MessageCircle className="w-5 h-5" />
              <span>Chat WhatsApp Sekarang</span>
            </a>
          </div>
        )}
      </nav>

      {/* ---------------- HERO SECTION ---------------- */}
      <section id="home" className="relative  text-white overflow-hidden pt-12 pb-20 lg:pt-20 lg:pb-28" style={{
          backgroundImage: "url('/images.jpeg')"
        }}>
        {/* Background Gradients & Glow Effects */}
        <div className="absolute top-0 right-0 -mt-12 -mr-12 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 -mb-12 -ml-12 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">

              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black leading-tight tracking-tight">
                Jasa Sewa Mobil Pickup Medan <span className="bg-clip-text text-amber-500">Terpercaya & Murah</span>
              </h1>

              <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                Siap melayani pindahan rumah, kos, kantor, angkut barang material, hingga pengiriman barang UMKM untuk wilayah Kota Medan & sekitarnya. Driver berpengalaman, cepat, dan amanah!
              </p>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
                <a 
                  href={getWaLink("Halo, saya ingin sewa mobil pickup Medan. Mohon informasi ketersediaan armada dan tarifnya.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white px-8 py-4 rounded-xl font-bold text-lg shadow-xl shadow-emerald-900/30 hover:scale-[1.02] transition-all"
                >
                  <MessageCircle className="w-6 h-6 fill-current" />
                  <span>Sewa Sekarang via WA</span>
                </a>
                <a 
                  href="#services"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-slate-800 hover:bg-slate-700 border border-slate-700 text-slate-200 px-7 py-4 rounded-xl font-semibold text-base transition-all"
                >
                  <span>Lihat Layanan</span>
                  <ChevronRight className="w-5 h-5 text-slate-400" />
                </a>
              </div>

              {/* Quick Features List */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-6 border-t border-slate-800 text-slate-300 text-xs sm:text-sm">
                <div className="flex items-center justify-center lg:justify-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span className='text-white'>Armada Bersih & Fit</span>
                </div>
                <div className="flex items-center justify-center lg:justify-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span className='text-white'>Termasuk Driver</span>
                </div>
                <div className="flex items-center justify-center lg:justify-start gap-2 col-span-2 sm:col-span-1">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span className='text-white'>Respon Cepat 24 Jam</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------- TENTANG KAMI ---------------- */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Image / Stats Grid */}
            <div className="lg:col-span-5 order-2 lg:order-1">
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-slate-900 text-white p-6 rounded-2xl flex flex-col justify-between h-44 shadow-md">
                  <Award className="w-8 h-8 text-amber-400" />
                  <div>
                    <span className="text-3xl font-extrabold block text-amber-400">5+ Tahun</span>
                    <span className="text-xs text-slate-300">Pengalaman Angkutan Barang</span>
                  </div>
                </div>

                <div className="bg-amber-500 text-slate-950 p-6 rounded-2xl flex flex-col justify-between h-44 shadow-md">
                  <Star className="w-8 h-8 text-slate-950 fill-slate-950" />
                  <div>
                    <span className="text-3xl font-extrabold block">1.200+</span>
                    <span className="text-xs font-medium text-slate-900">Pelanggan Puas di Medan</span>
                  </div>
                </div>

                <div className="bg-slate-100 p-6 rounded-2xl flex flex-col justify-between h-44 border border-slate-200">
                  <ShieldCheck className="w-8 h-8 text-blue-600" />
                  <div>
                    <span className="text-2xl font-bold block text-slate-800">Amanah</span>
                    <span className="text-xs text-slate-500">Barang Dijamin Selamat</span>
                  </div>
                </div>

                <div className="bg-blue-600 text-white p-6 rounded-2xl flex flex-col justify-between h-44 shadow-md">
                  <Clock className="w-8 h-8 text-amber-300" />
                  <div>
                    <span className="text-2xl font-bold block">Tepat Waktu</span>
                    <span className="text-xs text-blue-100">Penjemputan Cepat & On-time</span>
                  </div>
                </div>
              </div>
            </div>

            {/* About Text Content */}
            <div className="lg:col-span-7 space-y-6 order-1 lg:order-2">
              <div className="inline-block px-3 py-1 rounded-md bg-blue-100 text-blue-800 text-xs font-bold uppercase tracking-wider">
                Tentang Kami
              </div>
              
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 leading-tight">
                Mitra Terpercaya Pengangkutan & Pindahan Barang di Kota Medan
              </h2>

              <p className="text-slate-600 leading-relaxed text-base sm:text-lg">
                <strong>Sewa Mobil Pickup Medan</strong> adalah penyedia jasa angkutan barang terdepan yang siap membantu berbagai kebutuhan transportasi logistik Anda. Kami menyediakan armada pickup yang prima, bersih, dan terawat untuk menjamin keamanan setiap barang angkutan Anda.
              </p>

              <p className="text-slate-600 leading-relaxed">
                Didukung oleh supir (driver) yang ramah, hafal rute wilayah Medan dan luar kota Sumatra Utara, kami siap melayani angkut barang pindahan rumah, kos-kosan, kantor, material bangunan, hingga pengantaran rutin usaha/UMKM Anda.
              </p>

              <div className="space-y-3 pt-2">
                <div className="flex items-start gap-3">
                  <div className="p-1 bg-emerald-100 text-emerald-600 rounded-full mt-1">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-800 text-sm">Armada Selalu dalam Kondisi Prima</h4>
                    <p className="text-xs text-slate-500">Rutin servis berkala untuk mencegah kendala di jalan.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-1 bg-emerald-100 text-emerald-600 rounded-full mt-1">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-800 text-sm">Driver Berpengalaman & Bertenaga</h4>
                    <p className="text-xs text-slate-500">Siap membantu proses muat dan bongkar barang dengan hati-hati.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-1 bg-emerald-100 text-emerald-600 rounded-full mt-1">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-800 text-sm">Harga Transparan Tanpa Biaya Tersembunyi</h4>
                    <p className="text-xs text-slate-500">Tarif disesuaikan dengan jarak lokasi dan kapasitas muatan.</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ---------------- LAYANAN (SERVICES) ---------------- */}
      <section id="services" className="py-20 bg-slate-100 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <div className="inline-block px-3 py-1 rounded-md bg-amber-100 text-amber-800 text-xs font-bold uppercase tracking-wider">
              Layanan Unggulan
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">
              Solusi Angkut Barang Terlengkap di Medan
            </h2>
            <p className="text-slate-600 text-base">
              Pilih paket layanan yang sesuai dengan kebutuhan pengangkutan barang atau pindahan Anda.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            
            {/* Service 1 */}
            <div className="bg-white rounded-2xl p-7 shadow-md hover:shadow-xl transition-all duration-300 border border-slate-200 flex flex-col justify-between group">
              <div>
                <div className="w-14 h-14 bg-amber-500/10 text-amber-600 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-amber-500 group-hover:text-slate-950 transition-colors">
                  <Truck className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">Pindahan Rumah & Kos</h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-6">
                  Jasa angkut barang pindahan kos, kontrakan, atau rumah di wilayah Medan. Aman, praktis, dan hemat waktu.
                </p>
              </div>
              <a 
                href={getWaLink("Halo Admin, saya mau tanya tarif sewa pickup untuk pindahan rumah/kos di Medan.")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-amber-600 font-bold text-sm hover:text-amber-700 gap-1 group-hover:translate-x-1 transition-transform"
              >
                <span>Pesan Layanan</span>
                <ChevronRight className="w-4 h-4" />
              </a>
            </div>

            {/* Service 2 */}
            <div className="bg-white rounded-2xl p-7 shadow-md hover:shadow-xl transition-all duration-300 border border-slate-200 flex flex-col justify-between group">
              <div>
                <div className="w-14 h-14 bg-blue-500/10 text-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                  <Clock className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">Sewa Harian / Bulanan</h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-6">
                  Layanan rental mobil pickup + driver secara harian, mingguan, atau borongan sesuai durasi operasional Anda.
                </p>
              </div>
              <a 
                href={getWaLink("Halo Admin, saya butuh sewa pickup harian/mingguan di Medan, bagaimana syaratnya?")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-blue-600 font-bold text-sm hover:text-blue-700 gap-1 group-hover:translate-x-1 transition-transform"
              >
                <span>Pesan Layanan</span>
                <ChevronRight className="w-4 h-4" />
              </a>
            </div>

            {/* Service 3 */}
            <div className="bg-white rounded-2xl p-7 shadow-md hover:shadow-xl transition-all duration-300 border border-slate-200 flex flex-col justify-between group">
              <div>
                <div className="w-14 h-14 bg-emerald-500/10 text-emerald-600 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                  <Navigation className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">Angkut Luar Kota Medan</h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-6">
                  Pengiriman barang ke semua wilayah Sumatera Utara maupun luar provinsi.
                </p>
              </div>
              <a 
                href={getWaLink("Halo Admin, saya mau sewa pickup dari Medan ke Luar Kota. Boleh info harganya?")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-emerald-600 font-bold text-sm hover:text-emerald-700 gap-1 group-hover:translate-x-1 transition-transform"
              >
                <span>Pesan Layanan</span>
                <ChevronRight className="w-4 h-4" />
              </a>
            </div>

            {/* Service 4 */}
            <div className="bg-white rounded-2xl p-7 shadow-md hover:shadow-xl transition-all duration-300 border border-slate-200 flex flex-col justify-between group">
              <div>
                <div className="w-14 h-14 bg-purple-500/10 text-purple-600 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-purple-600 group-hover:text-white transition-colors">
                  <PackageCheck className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">Kirim Barang UMKM</h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-6">
                  Solusi distribusi pasokan barang toko, material ringan, perabotan, atau kargo usaha dengan jadwal fleksibel.
                </p>
              </div>
              <a 
                href={getWaLink("Halo Admin, saya pemilik bisnis UMKM di Medan ingin kerjasama pengiriman barang.")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-purple-600 font-bold text-sm hover:text-purple-700 gap-1 group-hover:translate-x-1 transition-transform"
              >
                <span>Pesan Layanan</span>
                <ChevronRight className="w-4 h-4" />
              </a>
            </div>

          </div>
        </div>
      </section>

      {/* ---------------- CTA WHATSAPP & HIGHLIGHT ---------------- */}
      <section className="py-16 bg-gradient-to-r from-emerald-600 to-teal-700 text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold mb-4">
            Butuh Mobil Pickup Langsung Sekarang Juga?
          </h2>
          <p className="text-emerald-100 text-lg max-w-2xl mx-auto mb-8">
            Jangan ragu! Tim kami siap meluncur ke lokasi Anda di wilayah Medan kapan saja. Konsultasi gratis tanpa komitmen!
          </p>
          <a 
            href={getWaLink("Halo Admin, saya butuh mobil pickup secepatnya di lokasi Medan.")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-slate-900 text-white hover:bg-slate-950 px-8 py-4 rounded-xl font-bold text-lg shadow-2xl hover:scale-105 transition-all"
          >
            <MessageCircle className="w-6 h-6 text-emerald-400 fill-current" />
            <span>Hubungi Via WhatsApp (Fast Response)</span>
          </a>
        </div>
      </section>

      {/* ---------------- KONTAK & TITIK LOKASI MAPS ---------------- */}
      <section id="location" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <div className="inline-block px-3 py-1 rounded-md bg-blue-100 text-blue-800 text-xs font-bold uppercase tracking-wider">
              Lokasi & Kontak
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">
              Kunjungi Pangkalan / Hubungi Kami
            </h2>
            <p className="text-slate-600">
              Pangkalan armada kami berada di titik strategis Kota Medan untuk menjamin kecepatan waktu tempuh penjemputan.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            
            {/* Contact Details Card */}
            <div className="lg:col-span-5 bg-slate-900 text-white p-8 rounded-3xl shadow-xl space-y-8">
              <h3 className="text-2xl font-bold border-b border-slate-800 pb-4 text-amber-400">
                Informasi Kontak
              </h3>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-slate-800 text-amber-400 rounded-xl shrink-0">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-300 text-sm">Alamat Pangkalan</h4>
                    <p className="text-white font-medium mt-1 text-sm leading-relaxed">
                      Jl. Gatot Subroto No. 123, Medan Petisah, Kota Medan, Sumatera Utara 20118
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-slate-800 text-emerald-400 rounded-xl shrink-0">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-300 text-sm">Telepon / WhatsApp</h4>
                    <p className="text-white font-medium mt-1 text-sm">
                      +62 812-3456-7890
                    </p>
                    <span className="text-xs text-slate-400">Siap melayani 24 Jam Nonstop</span>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-slate-800 text-blue-400 rounded-xl shrink-0">
                    <UserCheck className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-300 text-sm">Area Layanan</h4>
                    <p className="text-white font-medium mt-1 text-sm">
                      Dalam Kota, Antar Kota dan Antar Provinsi.
                    </p>
                  </div>
                </div>
              </div>

              {/* Direct Call & WA Buttons */}
              <div className="pt-4 space-y-3">
                <a 
                  href={getWaLink("Halo, saya ingin menanyakan info lokasi pangkalan dan sewa pickup.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full bg-emerald-500 hover:bg-emerald-600 text-white font-bold py-3.5 rounded-xl transition-all shadow-md"
                >
                  <MessageCircle className="w-5 h-5 fill-current" />
                  <span>Chat Direct WhatsApp</span>
                </a>
              </div>
            </div>

            {/* Google Maps Embed */}
            <div className="lg:col-span-7 h-[420px] rounded-3xl overflow-hidden border border-slate-200 shadow-xl relative bg-slate-100">
              <iframe 
                title="Peta Lokasi Sewa Mobil Pickup Medan"
                src={GOOGLE_MAPS_EMBED}
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full filter grayscale-[0.1] contrast-[1.05]"
              ></iframe>
            </div>

          </div>
        </div>
      </section>

      {/* ---------------- FOOTER ---------------- */}
      <footer className="bg-slate-950 text-slate-400 py-12 border-t border-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
            
            {/* Col 1 */}
            <div className="md:col-span-2 space-y-4">
              <div className="flex items-center space-x-3">
                <span className="text-xl font-black text-white tracking-tight">
                  MEDAN<span className="text-amber-400">PICKUP</span>
                </span>
              </div>
              <p className="text-slate-400 text-sm leading-relaxed max-w-md">
                Penyedia layanan sewa mobil pickup handal dan termurah di Kota Medan. Siap membantu pindahan rumah, angkut barang, serta armada operasional bisnis Anda.
              </p>
            </div>

            {/* Col 2 */}
            <div>
              <h4 className="text-white font-bold text-sm mb-4 uppercase tracking-wider">Navigasi Cepat</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#home" className="hover:text-amber-400 transition-colors">Beranda</a></li>
                <li><a href="#about" className="hover:text-amber-400 transition-colors">Tentang Kami</a></li>
                <li><a href="#services" className="hover:text-amber-400 transition-colors">Layanan Angkut</a></li>
                <li><a href="#location" className="hover:text-amber-400 transition-colors">Lokasi & Kontak</a></li>
              </ul>
            </div>

            {/* Col 3 */}
            <div>
              <h4 className="text-white font-bold text-sm mb-4 uppercase tracking-wider">Hubungi Kami</h4>
              <p className="text-sm text-slate-400 mb-2">Kota Medan, Sumatera Utara</p>
              <p className="text-sm text-amber-400 font-semibold mb-4">+62 812-3456-7890</p>
              <a 
                href={getWaLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-slate-800 hover:bg-slate-700 text-xs text-slate-200 px-4 py-2 rounded-lg font-medium border border-slate-700 transition-colors"
              >
                Chat WA Fast Response
              </a>
            </div>

          </div>

          <div className="pt-8 border-t border-slate-900 text-center text-xs text-slate-500 flex flex-col sm:flex-row justify-between items-center gap-4">
            <p>© {new Date().getFullYear()} Sewa Mobil Pickup Medan. All rights reserved.</p>
            <p>Jasa Angkut Barang & Pindahan Terpercaya di Medan</p>
          </div>
        </div>
      </footer>

    </div>
  );
}