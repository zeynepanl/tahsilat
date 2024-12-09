import { useState, useEffect } from 'react';
import '@/styles/globals.css';
import Navbar from '@/components/Nav/Navbar';  // Büyük ekranlar için
import AppNavbar from '@/components/Nav/AppNavbar';  // Küçük ekranlar için
import Footer from '@/components/Footer';
import 'aos/dist/aos.css'; // AOS stil dosyasını dahil et
import AOS from 'aos'; // AOS kütüphanesini dahil et

export default function App({ Component, pageProps }) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Ekran boyutunu kontrol et
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024); // 1024px altındaki ekranlar için mobil kabul edilir
    };

    // Pencere boyutunu takip et
    handleResize(); // sayfa ilk yüklendiğinde de kontrol et
    window.addEventListener('resize', handleResize);

    // AOS kütüphanesini başlat
    AOS.init();

    // Temizlik yap
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <>
      {/* Navbar'ı ekran boyutuna göre render et */}
      {isMobile ? <AppNavbar /> : <Navbar />}

      <Component {...pageProps} />
      <Footer/>
    </>
  );
}
