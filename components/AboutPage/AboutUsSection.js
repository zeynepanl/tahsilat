import React, { useEffect } from 'react';
import { FaGlobe, FaUsers, FaSmile, FaHeadset } from 'react-icons/fa';
import AOS from 'aos'; // AOS kütüphanesini import et
import 'aos/dist/aos.css'; // AOS stilini import et

function AboutUsSection() {
  useEffect(() => {
    AOS.init({
      duration: 1500,  // Animasyon süresi
      easing: 'ease-out-quint', // Geçiş animasyonu
      once: true, // Animasyon yalnızca bir kez çalışacak
    });
  }, []);

  return (
    <div className="px-4 max-w-full items-center justify-center font-poppins">
      {/* Header Section */}
      <div className="max-w-7xl mx-auto text-center mb-8 bg-white">
        <h2
          className="lg:text-4xl text-2xl font-bold text-active mt-8"
          data-aos="rotate-in" // Başlık için rotate-in animasyonu
        >
          Hakkımızda
        </h2>
        <h3
          className="text-xl font-semibold text-gray-800 mt-2"
          data-aos="fade-up" // Alt başlık için fade-up animasyonu
        >
          Tahsilat ile her şey çok kolay
        </h3>
      </div>

      {/* Content Section */}
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-8 bg-white">
        <div
          className="lg:w-1/2 text-gray-700 space-y-4"
          data-aos="fade-up" // Metin için fade-up animasyonu
        >
          <p>
            <strong>Paracom Ödeme ve Elektronik Para Hizmetleri A.Ş</strong> 2017 yılında Foks Company olarak Yazılım
            Müh. Bilgisayar Üretim ve Geliştirme, Tahsilat Alanlarında Faaliyete Geçmiştir. Firmamız 2022 Yılında Büyük Bir Adım
            Atarak Unvan Değişikliği ile Finansal Teknoloji Alanına Yönelmiştir.
          </p>
          <p>
            Paracom A.Ş. Bünyesinde Tahsilat, Entegreasyon, Fonksiyon Servisleri, Elektronik Cüzdan Yazılımları
            Bulundurmaktadır. Paracom A.Ş Bünyesinde 9 Uzman Yazılım Personeli ve Saha Personeli Bulundurmaktadır.
          </p>
        </div>
        <div
          className="lg:w-1/2 flex justify-center"
          data-aos="zoom-in" // Görsel için zoom-in animasyonu
        >
          <img
            src="/images/aboutpage/aboutsection.png" // Görsel yolunu buraya ekleyin
            alt="About Illustration"
            className="w-full h-auto max-w-md lg:max-w-lg"
          />
        </div>
      </div>

      {/* Statistics Section */}
      <div className="max-w-7xl mx-auto mt-12 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-8 text-center bg-white">
        <Statistic icon={<FaGlobe />} label="Dünya çapında" value="17" data-aos="flip-up" />
        <Statistic icon={<FaUsers />} label="Kullanıcı" value="2000+" data-aos="flip-up" />
        <Statistic icon={<FaSmile />} label="Memnuniyet" value="%95" data-aos="flip-up" />
        <Statistic icon={<FaHeadset />} label="Destek" value="24/7" data-aos="flip-up" />
      </div>
    </div>
  );
}

// Statistic component to render each statistic item
function Statistic({ icon, label, value, ...props }) {
  return (
    <div className="flex flex-col items-center" {...props}>
      <div className="text-3xl text-purple-700 mb-2">{icon}</div>
      <span className="text-2xl font-bold text-gray-800">{value}</span>
      <span className="text-gray-600">{label}</span>
    </div>
  );
}

export default AboutUsSection;
