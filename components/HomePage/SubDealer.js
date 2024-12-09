import React, { useEffect, useRef } from "react";

function SubDealer() {
  const gifRef = useRef(null); // GIF için referans
  const textItemsRef = useRef([]); // Yazılar için referans listesi

  useEffect(() => {
    if (typeof window !== "undefined") {
      // GSAP ve ScrollTrigger'ı dinamik olarak yükle
      import("gsap").then((gsapModule) => {
        const gsap = gsapModule.default;
        import("gsap/ScrollTrigger").then((ScrollTriggerModule) => {
          const ScrollTrigger = ScrollTriggerModule.default;
          gsap.registerPlugin(ScrollTrigger);

          // GIF Büyüme Animasyonu
          gsap.fromTo(
            gifRef.current,
            { scale: 1 }, // Başlangıç durumu
            {
              scale: 1.2, // Bitiş durumu
              duration: 1.5,
              scrollTrigger: {
                trigger: gifRef.current, // Tetikleyici eleman
                start: "top 70%", // Görünürlüğün %70'inde başlar
                end: "top 30%", // %30'da biter
                scrub: true, // Scroll hareketine göre animasyon
              },
            }
          );

          // Yazılar Soldan Gelme Animasyonu (Her yazı ayrı ayrı tetiklenir)
          textItemsRef.current.forEach((item, index) => {
            gsap.fromTo(
              item,
              { opacity: 0, x: -50 }, // Soldan ve görünmez
              {
                opacity: 1,
                x: 0, // Görünür ve yerine gelir
                duration: 1,
                scrollTrigger: {
                  trigger: item, // Her yazı kendi tetikleyicisi ile
                  start: "top 50%", // Yazı görünmeden hemen önce başlar
                  end: "top 30%", // Yazı görünür olduğunda biter
                  scrub: true, // Scroll hareketine göre animasyon
                },
              }
            );
          });
        });
      });
    }
  }, []);

  return (
    <div className="relative w-full h-screen bg-black flex justify-center items-center pt-12 ">
      {/* Background GIF */}
      <div
        className="absolute top-0 left-0 w-full h-full "
        ref={gifRef} // GIF için referans
      >
        <img
          src="/images/homepage/subdealer.gif"
          alt="Background GIF"
          className="w-full h-full object-cover "
        />
      </div>

      {/* Content Section */}
      <div className="absolute top-12 left-12 text-white">
        {/* Header */}
        <h1 className="text-3xl md:text-4xl font-bold mb-6">
          Alt Bayimiz Olun!
        </h1>

        {/* List Items */}
        <ul className="space-y-4">
          {[
            "Alacaklarınız için tahsilat garantisi sağlar.",
            "Nakit akışınızı hızlı ve güvenli olarak gerçekleştirebilirsiniz.",
            "Bayiler tek tek ziyaret edilmez, böylece iş gücü ve zaman tasarrufu sağlanır.",
            "Ödemeler entegrasyon ile muhasebe programınıza otomatik aktarılır.",
          ].map((text, index) => (
            <li
              key={index}
              className="flex items-center"
              ref={(el) => (textItemsRef.current[index] = el)} // Yazılar için referans
            >
              <div className="w-8 h-8 flex items-center justify-center rounded-full border-2 border-white bg-transparent text-sm font-bold">
                {index + 1}
              </div>
              <p className="ml-4 text-base md:text-lg">{text}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default SubDealer;
