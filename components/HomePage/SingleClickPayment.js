import React, { useEffect } from 'react';
import AOS from 'aos'; // AOS kütüphanesini import et
import 'aos/dist/aos.css'; // AOS stillerini import et
import { FaUsers, FaHandHoldingUsd, FaGlobe, FaMobileAlt } from 'react-icons/fa';

function SingleClickPayment() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-out-back',
    });
  }, []);

  return (
    <div className="pt-12 px-6 flex items-center justify-center max-w-full font-poppins bg-white">
      <div className="max-w-7xl w-full mx-auto">
        {/* Header Section */}
        <h2
          className="lg:text-5xl text-2xl font-bold text-active mb-4 text-center"
          data-aos="fade-up"
        >
          Tek Tıkla Ödeme Al
        </h2>
        <p
          className="text-gray-700 text-center mb-8 md:mb-12 text-sm md:text-base"
          data-aos="fade-up"
        >
          Tahsilata İle Ödeme Almak Artık Çok Kolay. Müşteri, Bayi Ve Altbayi Tahsilat Sistemi
        </p>

        <div className="flex flex-col md:flex-row items-center justify-between space-y-6 md:space-y-0">
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
            data-aos="zoom-in"
          >
            <img
              src="/assets/paymentfeatures.gif"
              alt="Tek Tıkla Ödeme Illustration"
              className="w-full max-w-md h-auto rounded-lg shadow-lg"
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
      className="flex items-center space-x-3 md:space-x-4 text-gray-700 hover:text-active transition duration-300 font-poppins"
      data-aos="fade-right"
    >
      <div className="text-xl md:text-2xl text-active">{icon}</div>
      <span className="text-sm md:text-lg font-semibold">{label}</span>
    </div>
  );
}

export default SingleClickPayment;
