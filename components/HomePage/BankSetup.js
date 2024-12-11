import React, { useState, useEffect, useRef } from "react";
import BankForm from "./BankForm"; // Form bileşenini içeri aktarıyoruz
import { FiX } from "react-icons/fi";
import Matter from "matter-js";

const BankSetup = () => {
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false); // Tek seferlik animasyon için durum
  const setupRef = useRef(null); // BankSetup bölümünü referans alıyoruz
  const cardsContainerRef = useRef(null); // Kartları tutacak referans
  const engineRef = useRef(null);
  const runnerRef = useRef(null);

  useEffect(() => {
    const observerOptions = {
      root: null, // Görünürlük alanı viewport
      rootMargin: "0px",
      threshold: 0.7, // Bölümün %10'u görünür olduğunda tetiklenir
    };

    const handleIntersection = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true); // Animasyonun tekrar tetiklenmemesi için
          initializeMatter(); // Matter.js'i başlat
          observer.unobserve(entry.target); // Tekrar izlemeyi durdur
        }
      });
    };

    const observer = new IntersectionObserver(
      handleIntersection,
      observerOptions
    );

    if (setupRef.current) {
      observer.observe(setupRef.current);
    }

    // Cleanup: Gözlemciyi kaldır
    return () => {
      if (setupRef.current) {
        observer.unobserve(setupRef.current);
      }
    };
  }, [hasAnimated]);

  const initializeMatter = () => {
    if (typeof window !== "undefined" && cardsContainerRef.current) {
      const { Engine, Runner, Bodies, Composite, Events } = Matter;

      const engine = Engine.create();
      engineRef.current = engine;

      const runner = Runner.create();
      Runner.run(runner, engine);
      runnerRef.current = runner;

      const containerWidth = cardsContainerRef.current.clientWidth;
      const containerHeight = cardsContainerRef.current.clientHeight;

      const boundaries = [
        Bodies.rectangle(
          containerWidth / 2,
          containerHeight + 10,
          containerWidth,
          20,
          { isStatic: true }
        ), // Zemin
        Bodies.rectangle(-10, containerHeight / 2, 20, containerHeight, {
          isStatic: true,
        }), // Sol duvar
        Bodies.rectangle(
          containerWidth + 10,
          containerHeight / 2,
          20,
          containerHeight,
          { isStatic: true }
        ), // Sağ duvar
        Bodies.rectangle(containerWidth / 2, -10, containerWidth, 20, {
          isStatic: true,
        }), // Tavan
      ];

      Composite.add(engine.world, boundaries);

      const cards = Array.from(cardsContainerRef.current.children); // Kartları al
      const cardBodies = cards.map((card) => {
        const x = Math.random() * containerWidth;
        const y = Math.random() * containerHeight * 0.5; // Kartları üstte başlat
        const body = Bodies.rectangle(
          x,
          y,
          card.offsetWidth,
          card.offsetHeight,
          {
            restitution: 0.6, // Zıplama
            friction: 0.3, // Sürtünme
            density: 0.002, // Yoğunluk
          }
        );

        Composite.add(engine.world, body);
        return body;
      });

      Events.on(engine, "afterUpdate", () => {
        cardBodies.forEach((body, index) => {
          const card = cards[index];
          card.style.transform = `translate(${
            body.position.x - card.offsetWidth / 2
          }px, ${body.position.y - card.offsetHeight / 2}px) rotate(${
            body.angle
          }rad)`;
        });
      });

      return () => {
        Runner.stop(runner);
        Engine.clear(engine);
      };
    }
  };

  return (
    <div ref={setupRef} className="max-w-full mx-auto py-16 px-8">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="mt-12 text-3xl font-bold text-gray-800 dark:text-white">
            Tahsilatlarınızı Kolaylaştırın
          </h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
            Ortak banka tanımlayarak tahsilatlarınızı hızlı ve güvenli bir
            şekilde gerçekleştirin.
          </p>
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-6">
            {["Giriş Yapın", "Banka Seçin", "Tahsilata Başlayın"].map(
              (step, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg"
                >
                  <div className="w-12 h-12 flex items-center justify-center bg-hover text-white rounded-full">
                    {index + 1}
                  </div>
                  <p className="mt-4 text-gray-800 dark:text-gray-300 font-medium">
                    {step}
                  </p>
                </div>
              )
            )}
          </div>
          <div className="mt-8">
            <button
              className="px-6 py-3 bg-hover text-white text-lg font-semibold rounded-lg shadow-lg hover:bg-active transition"
              onClick={() => setIsFormVisible(true)}
            >
              Hemen Tanımla
            </button>
          </div>
        </div>
        {isFormVisible && (
          <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-10">
            <div className="bg-white dark:bg-gray-800 p-8 max-w-lg w-full rounded-lg relative">
              <button
                onClick={() => setIsFormVisible(false)}
                className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
              >
                <FiX size={24} />
              </button>
              <BankForm />
            </div>
          </div>
        )}
      </div>
      <div
        ref={cardsContainerRef}
        className="mt-12 h-80 relative bg-white dark:bg-gray-800 overflow-hidden"
      >
        {[
          "Visa",
          "MasterCard",
          "Amex",
          "PayPal",
          "Diners Club",
          "Discover",
          "JCB",
        ].map((card, index) => (
          <div
            key={index}
            className="absolute bg-white shadow-lg rounded-full flex items-center justify-center w-48 h-24 text-lg font-medium text-gray-800 dark:text-gray-300"
          >
            {card}
          </div>
        ))}
      </div>
    </div>
  );
};

export default BankSetup;
