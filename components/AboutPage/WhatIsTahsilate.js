import React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // AOS stilini import et

function WhatIsTahsilate() {
  return (
    <div className="pt-12 px-6 max-w-full font-poppins">
      {/* Başvuru Süreci Section */}
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="lg:text-4xl text-2xl font-bold text-active my-20" data-aos="fade-up">
          Başvuru Süreci
        </h2>
        <div className="flex justify-center items-center space-x-12">
          <ProcessStep number="1" label="BAŞVURU" delay={0} />
          <div className="border-t-2 border-gray-300 w-16 md:w-24"></div>
          <ProcessStep number="2" label="ONAY" delay={200} />
          <div className="border-t-2 border-gray-300 w-16 md:w-24"></div>
          <ProcessStep number="3" label="ÖDEME AL" delay={400} />
        </div>
      </div>
    </div>
  );
}

// ProcessStep component to render each step in the process
function ProcessStep({ number, label, delay }) {
  return (
    <div
      className="flex flex-col items-center"
      data-aos="fade-up" // Animasyon için data-aos kullanımı
      data-aos-delay={delay} // Her adım için animasyon gecikmesi
    >
      <div
        className="w-12 h-12 flex items-center justify-center rounded-full border-4 border-purple-700 text-purple-700 text-lg font-bold mb-2 transition-all transform hover:scale-110 hover:border-pink-500 hover:text-pink-500 hover:shadow-lg cursor-pointer"
        // Hoverda neon mor rengini uygulamak için
      >
        {number}
      </div>
      <span className="text-purple-700 font-semibold">{label}</span>
    </div>
  );
}

export default WhatIsTahsilate;
