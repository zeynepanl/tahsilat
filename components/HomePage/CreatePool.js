import React, { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/router';

import PoolCreationForm from './PoolCreationForm';
import ProgressBar from './ProgressBar';

const CreatePool = () => {
  const [progress, setProgress] = useState(0);
  const [isProcessing, setIsProcessing] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [poolName, setPoolName] = useState('');
  const router = useRouter();

  const gifRef = useRef(null); // GIF için referans
  const cardRef = useRef(null); // Kart için referans
  const containerRef = useRef(null); // Tüm container için referans

  useEffect(() => {
    if (typeof window !== 'undefined') {
      // GSAP ve ScrollTrigger modüllerini dinamik olarak yükle
      import('gsap').then(({ default: gsap }) => {
        import('gsap/ScrollTrigger').then(({ default: ScrollTrigger }) => {
          gsap.registerPlugin(ScrollTrigger);

          // GIF Yukarıdan Daha Aşağıdan Başlayarak Geliyor
          gsap.fromTo(
            gifRef.current,
            { y: '-50vh', opacity: 0 }, // Daha az yukarıdan başlar
            {
              y: 0, // Yerine gelir
              opacity: 1, // Görünür hale gelir
              duration: 2, // Animasyon süresi
              ease: 'power2.out',
              scrollTrigger: {
                trigger: containerRef.current, // Tüm container tetikler
                start: 'top 80%', // %80 ekranda görünmeye başlar
                end: 'top 40%', // Ortada tamamlanır
                scrub: false, // Kaydırmaya bağlı değil
              },
            }
          );

          // Kart, Büyüyerek ve Hafifçe Sağdan Geliyor
          gsap.fromTo(
            cardRef.current,
            { scale: 0.8, x: 50, opacity: 0 }, // Küçük ve sağdan görünmez şekilde başlar
            {
              scale: 1, // Normal boyuta gelir
              x: 0, // Yerine gelir
              opacity: 1, // Görünür hale gelir
              duration: 1.5, // Animasyon süresi
              ease: 'power3.out', // Daha pürüzsüz bir efekt
              delay: 0.3, // GIF animasyonundan hemen sonra başlar
              scrollTrigger: {
                trigger: gifRef.current, // GIF görünür olduğunda tetikler
                start: 'top 70%', // GIF %70 göründüğünde başlar
                scrub: false, // Kaydırmaya bağlı değil
              },
            }
          );
        });
      });
    }
  }, []);

  useEffect(() => {
    if (isSuccess) {
      const timer = setTimeout(() => {
        router.push(`/pool/${poolName}`);
      }, 2000);

      return () => clearTimeout(timer);
    }
  }, [isSuccess, poolName, router]);

  const handlePoolCreation = (poolName) => {
    setPoolName(poolName);
    setIsProcessing(true);

    let interval = setInterval(() => {
      setProgress((prevProgress) => {
        if (prevProgress === 100) {
          clearInterval(interval);
          setIsSuccess(true);
          return 100;
        }
        return prevProgress + 10;
      });
    }, 500);
  };

  const handleNewPool = () => {
    setIsProcessing(false);
    setIsSuccess(false);
    setProgress(0);
  };

  return (
    <div ref={containerRef} className="mx-auto max-w-full justify-center flex">
      <div className="flex flex-col lg:flex-row py-10 mx-auto max-w-7xl space-y-8 lg:space-y-0 lg:space-x-52 px-4">
        {/* Kart Alanı */}
        <div
          ref={cardRef}
          className="bg-white p-8 lg:p-12 rounded-xl shadow-2xl max-w-sm w-full"
        >
          <h1 className="text-3xl lg:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-indigo-600 mb-6 lg:mb-8">
            Tahsilat Havuzu Oluştur
          </h1>
          <p className="text-base lg:text-lg text-gray-700 mb-6">
            Özel ödeme havuzları ile tahsilat işlemlerinizi yönetmenin en hızlı
            yolu.
          </p>

          {!isSuccess && !isProcessing && (
            <PoolCreationForm onSubmit={handlePoolCreation} />
          )}

          {isProcessing && !isSuccess && (
            <div className="mt-6">
              <ProgressBar progress={progress} />
            </div>
          )}

          {isSuccess && (
            <div className="mt-8 text-center bg-teal-50 p-6 rounded-lg shadow-lg">
              <h2 className="text-2xl lg:text-3xl font-semibold text-teal-600 mb-4">
                Havuz Başarıyla Oluşturuldu!
              </h2>
              <p className="text-sm lg:text-base text-gray-600 mb-6">
                Havuzunuz hazır! Şimdi yönlendiriliyorsunuz...
              </p>
              <div className="w-10 h-10 lg:w-12 lg:h-12 border-4 border-t-4 border-teal-600 rounded-full animate-spin mx-auto mb-4"></div>
              <p className="text-sm text-gray-600 mt-2">
                2 saniye içinde yönlendirileceksiniz...
              </p>
              <button
                className="mt-6 px-6 py-2 bg-indigo-600 text-white font-semibold rounded-full shadow-lg hover:bg-indigo-700 transition duration-300"
                onClick={handleNewPool}
              >
                Yeni Havuz Oluştur
              </button>
            </div>
          )}
        </div>

        {/* GIF Görseli */}
        <div
          ref={gifRef}
          className="flex justify-center items-center"
        >
          <img
            src="/images/homepage/pool.gif" // GIF dosyasının yolu
            alt="Pool Creation"
            className="max-w-full w-64 lg:w-96 object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default CreatePool;
