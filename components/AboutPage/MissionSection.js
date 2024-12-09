import React, { useEffect } from 'react';
import AOS from 'aos'; // AOS kütüphanesini import ediyoruz
import 'aos/dist/aos.css'; // AOS stillerini import ediyoruz

function MissionSection() {
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
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between">
        {/* Text Section */}
        <div className="md:w-1/2 text-gray-800 px-4" data-aos="fade-right"> {/* Text için animasyon ekledik */}
          <h2 className="lg:text-4xl text-2xl font-bold text-active mb-12">Misyonumuz</h2>
          <p className="text-lg leading-relaxed">
            Çalışanlarımız, Ortaklarımız, Müşterilerimiz, Ürün ve Hizmet Tedarikçilerimizle;
            takım felsefesiyle profesyonelce çalışarak, güvenli, huzurlu, şeffaf, demokratik
            ve katılımcı bir ortam yaratarak ve sürdürülebilir sağlamayı, kaynaklarımızı etkin
            kullanarak, çevreye duyarlı, rekabet edebilir kalitede en az maliyetle en fazla
            satılabilir ürünler yapmayı; yenilik ve gelişmelere açık olarak paydaşlarımızın
            beklentilerini karşılayarak, ülke ekonomisine katkıda bulunan sektörde bir marka 
            olmayı misyonumuz olarak benimsiyoruz.
          </p>
        </div>

        {/* Image Section */}
        <div className="md:w-1/2 flex justify-center items-center mt-8 md:mt-0 w-full ml-auto">
          <img
            src="/images/aboutpage/mission.gif" // Görsel yolunu buraya ekleyin
            alt="Mission Illustration"
            className="w-full max-w-[1200px] h-auto animate-pulse-grow" // Resmin boyutunu arttırdık ve max-w ekledik
            data-aos="fade-left" // Görsel için animasyon
          />
        </div>
      </div>
    </div>
  );
}

export default MissionSection;
