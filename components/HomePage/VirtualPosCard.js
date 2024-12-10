import React, { useEffect, useRef } from 'react';
import Button from '../Button/Button';
import { useRouter } from 'next/router';

function VirtualPosCard() {
  const router = useRouter();
  const textRef = useRef(null);
  const imageRef = useRef(null);
  const titleRef = useRef(null);
  const cardContainerRef = useRef(null);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      import('gsap').then(({ gsap }) => {
        import('gsap/ScrollTrigger').then(({ ScrollTrigger }) => {
          gsap.registerPlugin(ScrollTrigger);

          // Başlık Harf Harf Animasyonu
          const letters = titleRef.current.textContent.split('');
          titleRef.current.innerHTML = '';
          letters.forEach((letter) => {
            const span = document.createElement('span');
            span.textContent = letter === ' ' ? '\u00A0' : letter;
            titleRef.current.appendChild(span);
          });

          gsap.fromTo(
            titleRef.current.children,
            { opacity: 0, y: 50 },
            {
              opacity: 1,
              y: 0,
              duration: 0.5,
              stagger: 0.1,
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
              duration: 2,
              ease: 'power4.out',
            }
          );

          // Kartları gruplandırma
          const cards = Array.from(cardContainerRef.current.children);
          const groupSize = Math.ceil(cards.length / 2);
          const firstRow = cards.slice(0, groupSize);
          const secondRow = cards.slice(groupSize);

          // İlk sıra sağdan gelir
          gsap.timeline({
            scrollTrigger: {
              trigger: cardContainerRef.current,
              start: 'top 80%',
              end: 'top 40%',
              scrub: true,
            },
          }).fromTo(
            firstRow,
            { x: 300, opacity: 0 },
            {
              x: 0,
              opacity: 1,
              duration: 3,
              ease: 'power2.out',
              stagger: 0.3,
            }
          );

          // İkinci sıra soldan gelir
          gsap.timeline({
            scrollTrigger: {
              trigger: cardContainerRef.current,
              start: 'top 80%',
              end: 'top 40%',
              scrub: true,
            },
          }).fromTo(
            secondRow,
            { x: -300, opacity: 0 },
            {
              x: 0,
              opacity: 1,
              duration: 3,
              ease: 'power2.out',
              stagger: 0.3,
            }
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
        className="relative mt-10 h-60 overflow-hidden" // Sabit alan
      >
        <div className="grid grid-cols-10 gap-2 justify-center items-center">
          {renderCards()}
        </div>
      </div>
    </div>
  );
}

export default VirtualPosCard;
