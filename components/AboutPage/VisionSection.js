import React, { useEffect } from 'react';
import AOS from 'aos'; // AOS kütüphanesini import ediyoruz
import 'aos/dist/aos.css'; // AOS stillerini import ediyoruz

function VisionSection() {
  // AOS'u başlatıyoruz
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animasyon süresi
      easing: 'ease-out-back', // Animasyon geçişi
      once: true, // Bir kere tetiklenmesini sağlar
    });
  }, []);

  return (
    <div className="py-12 px-4 max-w-full font-poppins">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center">
        {/* Image Section */}
        <div className="md:w-1/2 flex justify-center mb-8 md:mb-0">
          <img
            src="/images/aboutpage/vision.gif"
            alt="Vision Illustration"
            className="w-full h-auto max-w-md animate-pulse-grow"
            data-aos="fade-right" // Görselin animasyonu
          />
        </div>

        {/* Text Section */}
        <div className="md:w-1/2 text-gray-800 text-right " data-aos="fade-left"> {/* Text için animasyon ekledik */}
          <h2 className="lg:text-4xl text-2xl font-bold text-active mb-12">Vizyonumuz</h2>
          <p className="text-lg leading-relaxed">
            Temel kalite politikalarımız çerçevesinde oluşturduğumuz yönetim ve
            üretim stratejilerimiz ışığında, ürettiğimiz ürünlerimizle ileri ve saygın bir
            kuruluş olarak sektörümüzde lider kuruluşlar arasında yer almak, kalitede
            referans olmak, son teknolojinin takipçisi olmak, modern çizgisiyle
            tasarım ve estetikte öncü olmak, yurt içi ve yurt dışı pazarlarda ve
            müşteri tercihi olmak vizyonumuzdur.
          </p>
        </div>
      </div>
    </div>
  );
}

export default VisionSection;
