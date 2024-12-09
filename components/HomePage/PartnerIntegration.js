import React, { useEffect, useRef } from "react";

const PartnerIntegration = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      // GSAP ve ScrollTrigger'ı yalnızca istemci tarafında yükle
      import("gsap").then((gsapModule) => {
        const gsap = gsapModule.default;
        import("gsap/ScrollTrigger").then((ScrollTriggerModule) => {
          const ScrollTrigger = ScrollTriggerModule.default;
          gsap.registerPlugin(ScrollTrigger);

          // ScrollTrigger animasyonu
          gsap.fromTo(
            sectionRef.current,
            { scale: 1 }, // Başlangıç durumu
            {
              scale: 1.2, // Büyüme efekti
              duration: 1.5,
              scrollTrigger: {
                trigger: sectionRef.current, // Tetikleyici alan
                start: "top 75%", // Alanın üst kısmı %75 görünür olduğunda başlar
                end: "top 50%", // Alanın üst kısmı %50 görünür olduğunda biter
                scrub: true, // Scroll hareketine bağlı animasyon
              },
            }
          );
        });
      });
    }
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative py-20 w-full bg-gradient-to-r from-[#2A1860] via-[#422695] to-[#5732C6]"
    >
      <div className="px-6 md:px-12 text-center">
        <h2 className="text-4xl font-extrabold text-white leading-tight">
          İş Ortaklarımızla Güçlü Bağlantılar Kurun
        </h2>
        <p className="mt-6 text-lg text-white max-w-2xl mx-auto">
          Tahsilat süreçlerinizde hızlı ve güvenilir çözümler sunan iş
          ortaklarımızla tanışın. API desteği ve profesyonel altyapımızla tüm
          entegrasyonlar kolay!
        </p>

        {/* Partner Slider */}
        <div className="overflow-hidden relative mt-12">
          <div className="flex animate-scroll gap-8 justify-center w-full">
            {partners.map((partner, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-80 bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 transform transition duration-300 hover:scale-105 hover:shadow-2xl"
              >
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="w-24 h-24 mx-auto rounded-full object-cover shadow-md"
                />
                <h3 className="mt-6 text-2xl font-semibold">{partner.name}</h3>
                <p className="mt-4 text-sm">{partner.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const partners = [
  {
    name: "Garanti BBVA",
    logo: "/images/homepage/garantibbva.jpeg",
    description: "Bankacılık entegrasyonu ile tahsilatlarınızı kolayca yönetin.",
  },
  {
    name: "Logo Yazılım",
    logo: "/images/homepage/logoyazilim.png",
    description: "Muhasebe yazılımlarıyla sorunsuz entegrasyon sağlayın.",
  },
  {
    name: "Papara",
    logo: "/images/homepage/papara.jpg",
    description: "Dijital cüzdan çözümleriyle hızlı ve güvenli ödeme alın.",
  },
  {
    name: "Paracım A.Ş",
    logo: "/images/homepage/paracim.jpeg",
    description: "E-ticaret ödeme altyapısı ile işlerinizi hızlandırın.",
  },
  {
    name: "PayTR",
    logo: "/images/homepage/paytr.png",
    description: "Kolay ödeme çözümleri ile tahsilatlarınızı yönetin.",
  },
];

export default PartnerIntegration;
