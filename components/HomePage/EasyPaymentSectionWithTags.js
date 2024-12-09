import React, { useEffect, useRef } from "react";
import AOS from "aos";
// Burada gsap import etmiyoruz. Onu dinamik olarak client-side'da yapacağız.

function EasyPaymentSectionWithTags() {
  const overlayRef = useRef(null);
  const featureContainerRef = useRef(null);
  const featureRefs = useRef([]);

  useEffect(() => {
    // AOS init (Üst kısım için)
    AOS.init({
      duration: 1000,
      easing: "ease-out-back",
    });
  }, []);

  useEffect(() => {
    // GSAP ve ScrollTrigger'ı sadece client-side'da yükle
    if (typeof window !== "undefined") {
      Promise.all([import("gsap"), import("gsap/ScrollTrigger")]).then(
        ([{ gsap }, { ScrollTrigger }]) => {
          gsap.registerPlugin(ScrollTrigger);

          // Overlay başlangıçta görünmez
          gsap.set(overlayRef.current, { opacity: 0 });

          // Kartları başlangıçta görünmez yapıyoruz (normal konumda sadece opacity 0)
          featureRefs.current.forEach((el) => {
            gsap.set(el, { opacity: 0 });
          });

          // ScrollTrigger ile animasyon:
          const tl = gsap.timeline({
            scrollTrigger: {
              trigger: featureContainerRef.current,
              start: "top 80%", // Bu alana scroll ile girildiğinde başlayacak
              end: "top 20%", // Bu nokta geçildiğinde animasyon tamamlanmış sayılacak
              scrub: true, // Scroll ile animasyon senkron
              onEnter: () => {
                // Girerken overlay'i karart
                gsap.to(overlayRef.current, {
                  opacity: 0.7,
                  duration: 1,
                  ease: "power2.out",
                });
              },
              onLeave: () => {
                // Çıkarken overlay'i geri aç
                gsap.to(overlayRef.current, {
                  opacity: 0,
                  duration: 1,
                  ease: "power2.out",
                });
              },
              onLeaveBack: () => {
                // Yukarı doğru çıkarken de overlay'i geri kapat
                gsap.to(overlayRef.current, {
                  opacity: 0,
                  duration: 1,
                  ease: "power2.out",
                });
              },
            },
          });

          // Kartları tek tek görünecek şekilde timeline'a ekleyelim
          featureRefs.current.forEach((el, i) => {
            tl.to(
              el,
              {
                opacity: 1,
                duration: 2,
                ease: "power1.out",
                delay: i * 0.5,
              },
              0
            );
          });
        }
      );
    }
  }, []);

  return (
    <div className="relative pt-12 px-6 items-center justify-center font-poppins max-w-full">
      {/* Tam sayfa karartma overlay */}
      <div
        ref={overlayRef}
        className="fixed top-0 left-0 w-full h-full bg-black z-20 pointer-events-none"
      ></div>

      {/* Üst Kısım (AOS ile) */}
      <div
        className="relative bg-active rounded-lg p-8 text-center text-white max-w-7xl mx-auto"
        data-aos="fade-left"
      >
        <h2 className="lg:text-4xl text-2xl font-bold mb-2 text-left ml-8">
          BİZCE HERŞEY <span className="font-extrabold">ÇOK KOLAY</span>
        </h2>
        <p className="mb-6 text-left ml-8 sm:max-w-56">
          Sektördeki en düşük komisyon oranları ile Tahsilatçı olarak kazanç
          sağlayın.
        </p>

        <div
          className="absolute right-0 bottom-0 transform translate-x-4 translate-y-4 md:translate-x-8 md:translate-y-8 lg:transition-transform lg:transform lg:translate-x-0 lg:translate-y-0 lg:animate-slide-in"
          data-aos="fade-right"
        >
          <img
            src="/images/homepage/easypayment.png"
            alt="Kolay Ödeme Illustration"
            className="w-full max-w-xs md:max-w-sm lg:max-w-md"
          />
        </div>
      </div>

      {/* Alt Kısım */}
      <div
        ref={featureContainerRef}
        className="grid grid-cols-2 gap-8 sm:grid-cols-2 md:grid-cols-4 max-w-7xl mx-auto mt-8"
      >
        <Feature
          refEl={(el) => (featureRefs.current[0] = el)}
          imgSrc="/images/homepage/easy1.png"
          label="17 Ülkeye hizmet"
        />
        <Feature
          refEl={(el) => (featureRefs.current[1] = el)}
          imgSrc="/images/homepage/easy2.PNG"
          label="2000+ Kullanıcı"
        />
        <Feature
          refEl={(el) => (featureRefs.current[2] = el)}
          imgSrc="/images/homepage/easy3.PNG"
          label="%95 Memnuniyet"
        />
        <Feature
          refEl={(el) => (featureRefs.current[3] = el)}
          imgSrc="/images/homepage/easy4.PNG"
          label="24/7 Destek"
        />
      </div>
    </div>
  );
}

// Feature component
function Feature({ imgSrc, label, refEl }) {
  return (
    <div
      ref={refEl}
      className="flex flex-col items-center text-center text-gray-700 font-poppins bg-white rounded-lg p-4 shadow-md z-30"
    >
      <img src={imgSrc} alt={label} className="w-16 h-16 mb-2" />
      <span className="text-lg font-semibold">{label}</span>
    </div>
  );
}

export default EasyPaymentSectionWithTags;
