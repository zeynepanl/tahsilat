import React, { useEffect } from "react";
import dynamic from "next/dynamic";
import Image from "next/image";
import {
  FaCreditCard,
  FaMobileAlt,
  FaShoppingCart,
  FaChartBar,
  FaClock,
} from "react-icons/fa";

const gsap = dynamic(() => import("gsap"), { ssr: false });
const ScrollTrigger = dynamic(() => import("gsap/ScrollTrigger"), {
  ssr: false,
});

const PhysicalPOSSolutions = () => {
  useEffect(() => {
    const loadAnimations = async () => {
      const { default: gsap } = await import("gsap");
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");

      gsap.registerPlugin(ScrollTrigger);

      // Kapsayıcıya relative konumlandırma
      gsap.set(".animated-image-container", {
        position: "relative",
        overflow: "hidden",
      });

      // Görseli absolute konumlandır
      gsap.set(".animated-image", {
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        objectFit: "cover",
        zIndex: 1,
        visibility: "hidden",
      });

      // Metni absolute konumlandır
      gsap.set(".animated-text", {
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-end",
        justifyContent: "flex-end",
        padding: "2rem",
        color: "white",
        background: "linear-gradient(to top, rgba(0,0,0,0.5), transparent)",
        zIndex: 10,
        visibility: "hidden",
        opacity: 0,
      });

      // Görsel animasyonu
      gsap.fromTo(
        ".animated-image",
        { opacity: 0.7, x: "100%" },
        {
          opacity: 1,
          x: "0%",
          duration: 5,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".animated-image-container",
            start: "top top",
            end: "bottom top",
            scrub: 1.2,
            onEnter: () => gsap.set(".animated-image", { visibility: "visible" }),
            onLeave: () => gsap.set(".animated-image", { visibility: "hidden" }),
          },
        }
      );

      // Metin animasyonu - Görsel ile aynı anda görünsün
      gsap.fromTo(
        ".animated-text",
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration:5,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".animated-image-container",
            start: "top top",
            end: "bottom top",
            scrub: 1.2,
            onEnter: () => gsap.set(".animated-text", { visibility: "visible" }),
            onLeave: () => gsap.set(".animated-text", { visibility: "hidden" }),
          },
        }
      );
    };

    loadAnimations();
  }, []);

  return (
    <div className="bg-white p-6 md:p-20 rounded-lg font-poppins">
      {/* Üst Görsel ve Metin için Container */}
      <div className="animated-image-container relative w-full h-[600px] mb-12">
        {/* Görsel */}
        <div className="animated-image">
          <Image
            src="/images/homepage/PhysicalPOSSolutions.jpeg"
            alt="Physical POS Solutions"
            fill
            className="object-cover"
          />
        </div>
        {/* Metin */}
        <div className="animated-text">
          <h1 className="text-3xl lg:text-4xl font-extrabold mb-4 text-right">
            İşletmeniz için Fiziksel <br />
            POS Çözümleri
          </h1>
          <p className="text-lg lg:text-xl text-right">
            İster küçük bir işletme olun ister küresel bir kuruluş, sizin yanınızdayız.
            <br /> Satış noktası (POS) çözümlerimiz, işinizi daha verimli bir şekilde
            <br /> yürütmenize ve gelirlerinizi artırmanıza yardımcı olmak için
            tasarlanmıştır.
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
      <div className="text-2xl text-purple-500 mb-2">{icon}</div>
      <p className="text-center font-medium text-black">{text}</p>
    </div>
  );
};

export default PhysicalPOSSolutions;