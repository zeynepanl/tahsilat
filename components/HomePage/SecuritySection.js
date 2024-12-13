import React, { useEffect, useRef } from 'react';

export default function SecuritySection() {
  const sectionRef = useRef(null);
  const imageRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const loadGsap = async () => {
        const gsap = (await import('gsap')).default;
        const ScrollTrigger = (await import('gsap/ScrollTrigger')).default;

        gsap.registerPlugin(ScrollTrigger);

        const timeline = gsap.timeline({
          scrollTrigger: {
            trigger: sectionRef.current, // Bu bileşen tetikleyici olacak
            start: 'top 20%', // Sayfa görünümünde %80'e geldiğinde
            end: 'top 50%', // Sayfanın üst kısmının %50'sine geldiğinde
            once: true, // Animasyon yalnızca bir kez çalışır
          },
        });

        // Görselin büyüyerek görünmesi
        timeline.fromTo(
          imageRef.current,
          {
            opacity: 0, // Başlangıçta görünmez
            scale: 0.8, // Küçük başlar
          },
          {
            opacity: 1,
            scale: 1, // Normal boyuta gelir
            duration: 1,
            ease: 'power3.out',
          }
        );

        // Metnin sağdan sola kayarak gelmesi
        timeline.fromTo(
          textRef.current,
          {
            opacity: 0, // Şeffaf başlar
            x: 50, // Sağdan gelir
          },
          {
            opacity: 1,
            x: 0, // Normal konuma gelir
            duration: 1,
            ease: 'power3.out',
          },
          '-=0.5' // Görselin animasyonu ile biraz örtüşür
        );
      };

      loadGsap();
    }
  }, []);

  return (
    <div
      ref={sectionRef}
      className="flex flex-col md:flex-row items-center justify-center p-6 md:p-8 max-w-full mx-auto font-poppins"
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-center">
        {/* Görsel Kısmı */}
        <div
          ref={imageRef}
          className="w-full md:w-1/2 flex justify-center mb-6 md:mb-0"
        >
          <img
            src="/images/homepage/securitysection.png"
            alt="Security Illustration"
            className="w-full md:w-[500px] md:h-[500px] max-w-full h-auto"
          />
        </div>

        {/* Metin Kısmı */}
        <div
          ref={textRef}
          className="w-full md:w-1/2 text-center md:text-left mt-6 md:mt-0 md:ml-12 max-w-2xl"
        >
          <h3 className="text-3xl md:text-4xl font-bold text-indigo-700 mb-4">
            7/24 Güvenlik Önlemleri İle İşinizi Koruyun
          </h3>
          <p className="text-gray-600 leading-relaxed">
            Fraud (Dolandırıcılık) Öncesi Ve Sonrası Koruma Sistemlerimizle, Tüm İşlemleri Güvenle Yönetebilirsiniz.
            Tek Bir Ekrandan Tüm Tahsilatlarınıza Kontrol Ederken, Müşterilerinizin Bilgilerinin Güvende Olduğunu
            Bilerek İşlem Yapabilirsiniz.
          </p>
        </div>
      </div>
    </div>
  );
}
