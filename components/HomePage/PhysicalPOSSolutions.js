import React, { useEffect } from "react";
import Image from "next/image";
import { FaCreditCard, FaMobileAlt, FaShoppingCart, FaChartBar, FaClock } from "react-icons/fa";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// GSAP'ı ScrollTrigger ile kullanabilmek için bağlama işlemi
gsap.registerPlugin(ScrollTrigger);

const PhysicalPOSSolutions = () => {
  useEffect(() => {
    // Görsel animasyonu
    gsap.fromTo(
      ".image-container",
      {
        x: "-100%", // Başlangıç pozisyonu (sol)
      },
      {
        x: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".image-container", // Görselin tetikleneceği alan
          start: "top bottom", // Görselin ne zaman görünmeye başladığı
          end: "top center", // Animasyonun bitiş noktası
          scrub: true, // Scroll ile senkronize et
        },
      }
    );

    // Başlık ve metin animasyonu
    gsap.fromTo(
      ".content-text",
      {
        opacity: 0,
        y: 50,
      },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
        stagger: 0.2, // Metinlerin sırasıyla gelmesi için
        scrollTrigger: {
          trigger: ".content-text",
          start: "top bottom",
          end: "top center",
          scrub: true,
        },
      }
    );
  }, []);

  return (
    <div className="bg-white p-6 md:p-20 rounded-lg font-poppins">
      {/* Üst Görsel ve Metin */}
      <div className="relative w-full h-[600px] overflow-hidden rounded-lg mb-12">
        {/* Görsel */}
        <div className="image-container relative w-full h-full">
          <Image
            src="/images/homepage/PhysicalPOSSolutions.jpeg" // Görselin yolu
            alt="Physical POS Solutions"
            fill
            className="object-cover"
          />
        </div>

        {/* Metin */}
        <div className="absolute top-0 right-0 w-full h-full flex flex-col items-end justify-end p-8 lg:p-12 text-white bg-gradient-to-t from-black/60 to-transparent">
          <h1 className="text-3xl lg:text-4xl font-extrabold mb-4 text-right content-text">
            İşletmeniz için Fiziksel <br /> POS Çözümleri
          </h1>
          <p className="text-lg lg:text-xl text-right content-text">
            İster küçük bir işletme olun ister küresel bir kuruluş, sizin
            yanınızdayız.<br /> Satış noktası (POS) çözümlerimiz, işinizi daha verimli
            bir şekilde <br /> yürütmenize ve gelirlerinizi artırmanıza yardımcı olmak
            için tasarlanmıştır.
          </p>
        </div>
      </div>

      {/* Orta Başlık */}
      <h2 className="text-2xl font-semibold text-gray-800 mb-8 text-start ml-4 py-6">
        Güçlü, Kullanımı Kolay POS Sistemleri
      </h2>

      {/* Kartlar */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 justify-center">
        <FeatureCard
          icon={<FaCreditCard />}
          text="Tüm kredi kartlarını kabul edin"
        />
        <FeatureCard
          icon={<FaMobileAlt />}
          text="Mobil POS ile her yerde ödeme alın"
        />
        <FeatureCard icon={<FaShoppingCart />} text="Taksit seçenekleri" />
        <FeatureCard
          icon={<FaChartBar />}
          text="Raporları çalıştırın ve satışları takip edin"
        />
        <FeatureCard icon={<FaClock />} text="Çalışan izinlerini ayarlayın" />
      </div>
    </div>
  );
};

// Özellik Kartı
const FeatureCard = ({ icon, text }) => {
  return (
    <div className="flex flex-col items-center justify-center p-6 border border-purple-500 rounded-lg transform transition duration-300 hover:scale-105">
      <div className="text-2xl text-purple-500 mb-2">{icon}</div> {/* İkon rengi mor */}
      <p className="text-center font-medium text-black ">{text}</p> {/* Yazı rengi siyah */}
    </div>
  );
};

export default PhysicalPOSSolutions;
