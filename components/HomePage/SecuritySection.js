import React, { useEffect } from 'react';
import AOS from 'aos'; // AOS kütüphanesini import et

export default function SecuritySection() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-out-back',
    });
  }, []);

  return (
    <div 
      className="flex flex-col md:flex-row items-center justify-center p-6 md:p-8 max-w-full mx-auto font-poppins"
      data-aos="fade-up" // Bütün bölüm için fade-up animasyonu
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-center">
        {/* Görsel Kısmı */}
        <div 
          className="w-full md:w-1/2 flex justify-center mb-6 md:mb-0"
          data-aos="fade-left" // Görsel için fade-left animasyonu
        >
          <img 
            src="/images/homepage/securitysection.png" 
            alt="Security Illustration" 
            className="w-full md:w-[500px] md:h-[500px] max-w-full h-auto"
          />
        </div>

        {/* Metin Kısmı */}
        <div 
          className="w-full md:w-1/2 text-center md:text-left mt-6 md:mt-0 md:ml-12 max-w-2xl"
          data-aos="fade-right" // Metin için fade-right animasyonu
        >
          <h3 className="text-3xl md:text-4xl font-bold text-indigo-700 mb-4">
            7/24 Güvenlik Önlemleri İle İşinizi Koruyun
          </h3>
          <p className="text-gray-600 leading-relaxed">
            Fraud (Dolandırıcılık) Öncesi Ve Sonrası Koruma Sistemlerimizle, Tüm İşlemleri Güvenle Yönetebilirsiniz. 
            Tek Bir Ekrandan Tüm Tahsilatlarınıza Kontrol Ederken, Müşterilerinizin Bilgilerinin Güvende Olduğunu Bilerek 
            İşlem Yapabilirsiniz.
          </p>
        </div>
      </div>
    </div>
  );
}
