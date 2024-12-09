import React, { useEffect } from 'react';
import AOS from 'aos'; // AOS kütüphanesini import et
import { FaUniversity, FaPhone, FaQrcode, FaExchangeAlt } from 'react-icons/fa';

function SecurePaymentMethods() {
  useEffect(() => {
    AOS.init({
      duration: 2000, // Animasyon süresi 2000ms (2 saniye) olarak arttırıldı
      easing: 'ease-out-back',
    });
  }, []);

  return (
    <div className="pt-24 px-6 items-center justify-center max-w-full">
      {/* Header Section */}
      <div 
        className="text-center mb-8"
        data-aos="fade-down" // Başlık için fade-down animasyonu
      >
        <h2 className="lg:text-4xl text-2xl font-bold text-active">Hızlı Ve Güvenli Ödeme Yöntemleri</h2>
        <p className="text-gray-700 mt-2 max-w-3xl mx-auto">
          İhtiyacınıza Uygun Çeşitli Ödeme Yöntemleriyle İşlemlerinizi Hızlı Ve Güvenilir Bir Şekilde
          Gerçekleştirin. Banka Havalesi, Telefon Numarası, UPI ID ve Kendi Hesabınıza Transfer
          Seçenekleriyle Güvenli Bir Ödeme Deneyimi Yaşayın.
        </p>
      </div>

      {/* Payment Options */}
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 mt-8">
          <PaymentOption 
            icon={<FaUniversity />} 
            label="Banka havalesi" 
            data-aos="zoom-in" // Zoom-in animasyonu
          />
          <PaymentOption 
            icon={<FaPhone />} 
            label="Telefon numarası" 
            data-aos="fade-up" // Fade-up animasyonu
          />
          <PaymentOption 
            icon={<FaQrcode />} 
            label="UPI ID veya QR" 
            data-aos="flip-left" // Flip-left animasyonu
          />
          <PaymentOption 
            icon={<FaExchangeAlt />} 
            label="Self transfer" 
            data-aos="zoom-in-down" // Zoom-in-down animasyonu
          />
        </div>
      </div>
    </div>
  );
}

// PaymentOption component to render each payment option item
function PaymentOption({ icon, label, 'data-aos': dataAos }) {
  return (
    <div 
      className="flex flex-col items-center text-center p-6 rounded-lg shadow-neon w-full h-40 transition font-poppins"
      data-aos={dataAos} // Animasyon burada uygulanır
    >
      <div className="text-3xl text-active mb-4">{icon}</div>
      <span className="text-lg font-semibold text-gray-700">{label}</span>
    </div>
  );
}

export default SecurePaymentMethods;
