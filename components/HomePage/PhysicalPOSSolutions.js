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

      // Başlangıç stillerini ayarla
      gsap.set(".animated-image-container", {
        position: "relative",
        overflow: "hidden",
      });

      gsap.set(".animated-image", {
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        objectFit: "cover",
        zIndex: 1,
        visibility: "hidden",
        pointerEvents: "none",
      });

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
        pointerEvents: "none",
      });

      gsap.set(".feature-card-container", {
        position: "relative",
        zIndex: 20,
        opacity: 0,
        pointerEvents: "none",
        visibility: "hidden",
      });

      gsap.set(".overlay", {
        opacity: 0,
        pointerEvents: "none",
        zIndex: 5,
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".animated-image-container",
          start: "top top",
          end: "bottom top",
          scrub: 1.2,
          onUpdate: (self) => {
            if (self.direction < 0) {
              gsap.set(".animated-image, .animated-text, .feature-card-container", {
                visibility: "visible",
              });
            }
          },
        },
      });

      tl
        .fromTo(
          ".animated-image",
          { opacity: 0.7, x: "100%" },
          {
            opacity: 1,
            x: "0%",
            duration: 5,
            ease: "power3.out",
            onStart: () =>
              gsap.set(".animated-image", {
                visibility: "visible",
                pointerEvents: "auto",
              }),
          }
        )
        .fromTo(
          ".animated-text",
          { y: 50, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 5,
            ease: "power3.out",
            onStart: () =>
              gsap.set(".animated-text", {
                visibility: "visible",
                pointerEvents: "auto",
              }),
          },
          "<"
        )
        // Arka plan karartma animasyonu
        .to(".overlay", {
          opacity: 0.5,
          pointerEvents: "auto",
          duration: 0.5,
          ease: "power3.out",
        })
        // Kartların animasyonu
        .to(".feature-card-container", {
          opacity: 1,
          visibility: "visible",
          duration: 1.5,
          ease: "power3.inOut",
          pointerEvents: "auto",
        })
        .fromTo(
          ".feature-card",
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            stagger: { each: 0.2 },
            ease: "power3.out",
            onStart: () => {
              gsap.to(".feature-card", {
                boxShadow: "0px 0px 20px 5px rgba(128, 0, 128, 0.8)", // Mor parlayan kenarlık
                repeat: -1,
                yoyo: true,
                duration: 1.5,
              });

              gsap.to(".feature-card", {
                scale: 1.1,
                repeat: -1,
                yoyo: true,
                duration: 1.5,
              });
            },
          },
          "-=1"
        )
        .to({}, { duration: 6 }) // Bekleme süresi
        // Karartmayı geri alma
        .to(".overlay", {
          opacity: 0,
          pointerEvents: "none",
          duration: 0.5,
          ease: "power3.in",
        })
        // Görsel ve metni gizle
        .to(
          ".animated-image",
          {
            opacity: 0,
            duration: 2,
            ease: "power3.in",
            onComplete: () =>
              gsap.set(".animated-image", {
                visibility: "hidden",
                pointerEvents: "none",
              }),
          },
          "-=1"
        )
        .to(
          ".animated-text",
          {
            opacity: 0,
            duration: 2,
            ease: "power3.in",
            onComplete: () =>
              gsap.set(".animated-text", {
                visibility: "hidden",
                pointerEvents: "none",
              }),
          },
          "<"
        )
        .to(".feature-card-container", {
          opacity: 0,
          visibility: "hidden",
          duration: 1,
          ease: "power3.out",
          pointerEvents: "none",
        });
    };

    loadAnimations();
  }, []);

  return (
    <div className="bg-white p-6 md:p-20 rounded-lg font-poppins">
      {/* Overlay */}
      <div className="overlay fixed top-0 left-0 w-full h-full bg-black opacity-0 pointer-events-none"></div>

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
            <br /> yürütmenize ve gelirlerinizi artırmanıza yardımcı olmak için tasarlanmıştır.
          </p>
        </div>
      </div>

      {/* Kartlar */}
      <div className="feature-card-container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 justify-center">
        <FeatureCard icon={<FaCreditCard />} text="Tüm kredi kartlarını kabul edin" />
        <FeatureCard icon={<FaMobileAlt />} text="Mobil POS ile her yerde ödeme alın" />
        <FeatureCard icon={<FaShoppingCart />} text="Taksit seçenekleri" />
        <FeatureCard icon={<FaChartBar />} text="Raporları çalıştırın ve satışları takip edin" />
        <FeatureCard icon={<FaClock />} text="Çalışan izinlerini ayarlayın" />
      </div>
    </div>
  );
};

// Özellik Kartı
const FeatureCard = ({ icon, text }) => {
  return (
    <div className="feature-card flex flex-col items-center justify-center p-6 border border-purple-500 rounded-lg transform transition duration-300 hover:scale-105">
      <div className="text-2xl text-purple-500 mb-2">{icon}</div>
      <p
        className="text-center font-medium text-white"
        style={{
          textShadow: "0px 0px 10px rgba(255, 255, 255, 0.8)", // Parlak beyaz metin efekti
        }}
      >
        {text}
      </p>
    </div>
  );
};

export default PhysicalPOSSolutions;
