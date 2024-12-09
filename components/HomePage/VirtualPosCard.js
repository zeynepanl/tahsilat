import React, { useEffect, useRef } from 'react';
import Button from '../Button/Button';
import { useRouter } from 'next/router';

function VirtualPosCard() {
  const router = useRouter();
  const textRef = useRef(null);
  const imageRef = useRef(null);
  const titleRef = useRef(null); // Başlık için referans
  const cardContainerRef = useRef(null);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      import('gsap').then(({ gsap }) => {
        import('gsap/ScrollTrigger').then(({ ScrollTrigger }) => {
          gsap.registerPlugin(ScrollTrigger);

          // Yazıyı harf harf bölme
          const letters = titleRef.current.textContent.split('');
          titleRef.current.innerHTML = ''; // Mevcut içeriği temizle

          letters.forEach((letter) => {
            const span = document.createElement('span');
            span.textContent = letter === ' ' ? '\u00A0' : letter; 
            titleRef.current.appendChild(span);
          });

          // Başlık Harf Harf Animasyonu
          gsap.fromTo(
            titleRef.current.children,
            { opacity: 0, y: 50 },
            {
              opacity: 1,
              y: 0,
              duration: 0.3,
              stagger: 0.05,
            }
          );

          // Hero Resmi Animasyonu
          gsap.fromTo(
            imageRef.current,
            { opacity: 0, x: 300, rotateY: 90, scale: 0.5 },
            {
              opacity: 1,
              x: 0,
              rotateY: 0,
              scale: 1,
              duration: 1.5,
              ease: 'power4.out',
            }
          );

          // Kart Animasyonları
          const cards = Array.from(cardContainerRef.current.children);

          // Çift indeksli kartlar: sağdan gelir -> soldan çıkar
          const evenCards = cards.filter((_, i) => i % 2 === 0);
          // Tek indeksli kartlar: soldan gelir -> sağdan çıkar
          const oddCards = cards.filter((_, i) => i % 2 === 1);

          // Çift indeksli kartlar için timeline
          gsap.timeline({
            scrollTrigger: {
              trigger: cardContainerRef.current,
              start: 'top 90%',
              end: 'top 10%',
              scrub: true,
            },
          })
            .fromTo(
              evenCards,
              { x: 300, opacity: 1 },
              { x: 0, opacity: 1, duration: 2, stagger: 0.2, ease: "power1.inOut" }
            )
            .to(
              evenCards,
              { x: -300, opacity: 1, duration: 2, stagger: 0.2, ease: "power1.inOut" }
            );

          // Tek indeksli kartlar için timeline
          gsap.timeline({
            scrollTrigger: {
              trigger: cardContainerRef.current,
              start: 'top 70%',
              end: 'top 20%',
              scrub: true,
            },
          })
            .fromTo(
              oddCards,
              { x: -300, opacity: 0 },
              { x: 0, opacity: 1, duration: 2, stagger: 0.2, ease: "power1.inOut" }
            )
            .to(
              oddCards,
              { x: 300, opacity: 0, duration: 2, stagger: 0.2, ease: "power1.inOut" }
            );
        });
      });
    }
  }, []);

  const cardData = [
    'Mastercard', 'Troy', 'Bonus', 'QNB', 'Paraf',
    'Albaraka', 'Axess', 'Visa', 'DenizBank', 'World',
    'American Express', 'Bankkart', 'Maximum', 'Yapı Kredi', 'Ziraat',
    'Halkbank', 'Garanti', 'ING', 'HSBC', 'Finansbank',
  ];

  const renderCards = () =>
    cardData.map((card, index) => (
      <div
        key={index}
        className="bg-white shadow-md border border-gray-300 rounded-lg flex justify-center items-center m-2 w-24 h-12"
      >
        <p className="text-gray-800 font-medium text-sm">{card}</p>
      </div>
    ));

  return (
    <div className="pt-24 px-6 items-center justify-center max-w-full font-poppins">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center">
        {/* Metin Kısmı */}
        <div
          className="w-full md:w-1/2 md:pr-8 mb-6 md:mb-0 text-center md:text-left"
          ref={textRef}
        >
          <h2
            className="text-3xl md:text-5xl font-bold text-active mb-4"
            ref={titleRef}
          >
            Avantajlı Sanal Pos Dünyası
          </h2>
          <p className="text-gray-700 text-sm md:text-base">
            Tahsilat Süreçlerinizi Düşünmeyin. Son verimli, güvenli ve kullanıcı dostu altyapımız ile tek tıklama ile kolay ödeme alın. İşinize odaklanın.
          </p>
          <div className="flex justify-center md:justify-start mt-6">
            <Button text="Şimdi Başvur" onClick={() => router.push('/nav/ContactForm')} />
          </div>
        </div>

        {/* Görsel Kısmı */}
        <div
          className="w-full md:w-1/2 flex justify-center"
          ref={imageRef}
        >
          <img
            src="/assets/hero.png"
            alt="Sanal Pos Illustration"
            className="w-full h-auto max-w-xs md:max-w-sm lg:max-w-md xl:max-w-lg"
          />
        </div>
      </div>

      {/* Kartlar */}
      <div
        ref={cardContainerRef}
        className="mt-10 grid grid-cols-10 gap-2 justify-center items-center"
      >
        {renderCards()}
      </div>
    </div>
  );
}

export default VirtualPosCard;
