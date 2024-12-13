import React, { useEffect, useRef } from 'react';
import Button from '../Button/Button';
import { useRouter } from 'next/router';

function VirtualPosCard() {
  const router = useRouter();
  const textRef = useRef(null);
  const imageRef = useRef(null);
  const titleRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      import('gsap').then(({ gsap }) => {
        import('gsap/ScrollTrigger').then(({ ScrollTrigger }) => {
          gsap.registerPlugin(ScrollTrigger);

          // Başlık başlangıç ayarları
          gsap.set(titleRef.current, { opacity: 1, fontSize: '5rem', y: '0%' });

          const tl = gsap.timeline({
            scrollTrigger: {
              trigger: textRef.current,
              start: 'top center',
              end: '+=500',
              scrub: 1,
              pin: true,
            },
          });

          // Başlık animasyonu
          tl.to(
            titleRef.current,
            {
              fontSize: '2rem',
              opacity: 0,
              y: '-100%',
              duration: 2,
              ease: 'power3.inOut',
            }
          );

          // Görselin animasyonu
          tl.fromTo(
            imageRef.current,
            { opacity: 0, scale: 0.5, y: 50 },
            {
              opacity: 1,
              scale: 1,
              y: 0,
              duration: 1.5,
              ease: 'power3.out',
            },
            '-=1'
          );

          // Diğer içerik animasyonu
          tl.fromTo(
            contentRef.current,
            { opacity: 0, y: 50 },
            {
              opacity: 1,
              y: 0,
              duration: 1.5,
              ease: 'power3.out',
              stagger: 0.3,
            },
            '-=1'
          );
        });
      });
    }
  }, []);

  return (
    <div className="pt-24 px-6 items-center justify-center max-w-full font-poppins pb-16">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center">
        {/* Başlangıçta Ortada Görünen Yazı */}
        <div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-5xl font-bold text-active z-10"
          ref={textRef}
        >
          <h1 ref={titleRef}>Avantajlı Sanal Pos Dünyası</h1>
        </div>

        {/* Görsel ve Metin Kısmı */}
        <div className="w-full flex flex-col md:flex-row items-center gap-6 mt-16">
          {/* Metin ve Buton */}
          <div
            className="w-full md:w-1/2 text-center md:text-left"
            ref={contentRef}
          >
            <p className="text-gray-700 text-sm md:text-base">
              Tahsilat Süreçlerinizi Düşünmeyin. Son verimli, güvenli ve kullanıcı dostu altyapımız ile tek tıklama ile kolay ödeme alın. İşinize odaklanın.
            </p>
            <div className="flex justify-center md:justify-start mt-6">
              <Button
                text="Şimdi Başvur"
                onClick={() => router.push('/nav/ContactForm')}
              />
            </div>
          </div>

          {/* Görsel */}
          <div className="w-full md:w-1/2 flex justify-center" ref={imageRef}>
            <img
              src="/assets/hero.png"
              alt="Sanal Pos Illustration"
              className="w-full h-auto max-w-xs md:max-w-sm lg:max-w-md xl:max-w-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default VirtualPosCard;
