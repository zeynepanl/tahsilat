import React, { useEffect } from 'react';
import AOS from 'aos'; // AOS kütüphanesini import et
import { FaUsers, FaHandHoldingUsd, FaGlobe, FaMobileAlt } from 'react-icons/fa';

function SingleClickPayment() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-out-back',
    });
  }, []);

  return (
    <div className="pt-12 px-6 flex items-center justify-center max-w-full font-poppins">
      <div className="max-w-7xl w-full mx-auto">
        {/* Header Section */}
        <h2
          className="lg:text-5xl text-2xl font-bold text-active mb-2 text-center"
          data-aos="fade-up" // Başlık için fade-up animasyonu
        >
          Tek Tıkla Ödeme Al
        </h2>
        <p
          className="text-gray-700 text-center mb-6 md:mb-8 text-sm md:text-base"
          data-aos="fade-up" // Açıklama için fade-up animasyonu
        >
          Tahsilata İle Ödeme Almak Artık Çok Kolay. Müşteri, Bayi Ve Altbayi Tahsilat Sistemi
        </p>

        <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
          {/* Left Section: Payment Options */}
          <div className="space-y-8 lg:pl-36">
            <PaymentOption icon={<FaUsers />} label="ALT BAYİ TAHSİLAT" />
            <PaymentOption icon={<FaHandHoldingUsd />} label="MÜŞTERİ TAHSİLAT" />
            <PaymentOption icon={<FaGlobe />} label="ONLINE TAHSİLAT" />
            <PaymentOption icon={<FaMobileAlt />} label="MOBİL TAHSİLAT" />
          </div>

          {/* Right Section: Illustration */}
          <div
            className="md:w-1/2 flex justify-center mt-6"
            data-aos="zoom-in" // Görsel için zoom-in animasyonu
          >
            <img
              src="/assets/paymentfeatures.gif"
              alt="Tek Tıkla Ödeme Illustration"
              className="w-[900px] h-auto "
            />
          </div>
        </div>
      </div>
    </div>
  );
}

// PaymentOption component to render each payment item
function PaymentOption({ icon, label }) {
  return (
    <div
      className="flex items-center space-x-3 md:space-x-4 text-gray-700 hover:text-active transition font-poppins"
      data-aos="fade-right" // Her ödeme seçeneği için fade-right animasyonu
    >
      <div className="text-xl md:text-2xl text-active">{icon}</div>
      <span className="text-sm md:text-lg font-semibold hover:text-active">{label}</span>
    </div>
  );
}

export default SingleClickPayment;
