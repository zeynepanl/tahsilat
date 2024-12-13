import { useEffect, useRef } from "react";
import dynamic from "next/dynamic";
import Image from "next/image";

const PaymentLinkIntro = () => {
  const sectionRef = useRef(null);
  const heroRef = useRef(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const loadGsap = async () => {
        const gsap = (await import("gsap")).default;
        const ScrollTrigger = (await import("gsap/ScrollTrigger")).default;

        gsap.registerPlugin(ScrollTrigger);

        // Kenardan kayma animasyonu
        gsap.fromTo(
          heroRef.current,
          {
            x: "-100%",
            opacity: 0,
          },
          {
            x: 0,
            opacity: 1,
            duration: 1.5,
            ease: "power3.out",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 40%",
              once: true, // Sadece bir kez çalışsın
            },
          }
        );

        // Kartların yavaşça görünür hale gelmesi
        const cards = gsap.utils.toArray(".feature");
        gsap.fromTo(
          cards,
          {
            opacity: 0,
            y: 50,
          },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "power3.out",
            stagger: 0.3,
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 80%",
              once: true,
            },
          }
        );
      };

      loadGsap();
    }
  }, []);

  const features = [
    {
      id: 1,
      title: "Özelleştirilebilir Link",
      description: "İşlem detaylarını içeren kişisel link.",
      image: "/images/homepage/card1.png",
    },
    {
      id: 2,
      title: "Zamanlanmış Linkler",
      description: "Belirli aralıklarla otomatik gönderim",
      image: "/images/homepage/card2.png",
    },
    {
      id: 3,
      title: "Geçerlilik Süresi",
      description: "Güvenliği artırmak için, ödeme linkinin geçersizliği",
      image: "/images/homepage/card3.png",
    },
    {
      id: 4,
      title: "QR Kod Paylaşımı",
      description: "Kolay ve hızlı erişim için QR kod oluşturma.",
      image: "/images/homepage/card4.png",
    },
  ];

  return (
    <div ref={sectionRef}>
      {/* Hero Bölümü */}
      <section
        ref={heroRef}
        className="flex flex-col md:flex-row items-center gap-8 px-6 py-12 max-w-7xl mx-auto"
      >
        {/* Sol İçerik */}
        <div className="md:w-1/2">
          <h1 className="text-4xl font-bold text-indigo-600 dark:text-white">
            Link ile Ödeme
          </h1>
          <p className="mt-4 text-gray-600 dark:text-gray-300">
            Tahsilata ile ödeme talepleriniz için kolayca bir bağlantı
            oluşturabilir ve bunu müşterilerinizle paylaşabilirsiniz.
            Müşterileriniz kart bilgilerini girmelerine gerek kalmadan tek bir
            tıklamayla size ödeme yapabilirler.
          </p>
        </div>

        {/* Sağ İçerik */}
        <div className="md:w-1/2">
          <Image
            src="/images/homepage/linkhero.png"
            alt="Ödeme Linki Görseli"
            width={500}
            height={300}
            className="rounded-lg"
          />
        </div>
      </section>

      {/* Özellikler Bölümü */}
      <section className="grid grid-cols-1 md:grid-cols-4 gap-6 px-6 py-12 max-w-7xl mx-auto">
        {features.map((feature) => (
          <div
            key={feature.id}
            className="p-4 feature opacity-0 transform" // Kartları başlangıçta görünmez yapar
          >
            <Image
              src={feature.image}
              alt={feature.title}
              width={200}
              height={200}
              className="mx-auto"
            />
            <h3 className="mt-4 text-lg font-semibold text-gray-800">
              {feature.title}
            </h3>
            <p className="mt-2 text-sm text-gray-600">
              {feature.description}
            </p>
          </div>
        ))}
      </section>
    </div>
  );
};

export default PaymentLinkIntro;
