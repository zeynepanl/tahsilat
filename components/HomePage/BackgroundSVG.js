import React, { useEffect, useRef } from "react";
import dynamic from "next/dynamic";

// Dynamic import ile GSAP
const gsap = dynamic(() => import("gsap"), { ssr: false });
const ScrollTrigger = dynamic(() => import("gsap/ScrollTrigger"), { ssr: false });

const BackgroundSVG = () => {
  const svgRef = useRef(null);

  useEffect(() => {
    const loadGsap = async () => {
      const gsapInstance = (await import("gsap")).default;
      const ScrollTriggerInstance = (await import("gsap/ScrollTrigger")).default;

      gsapInstance.registerPlugin(ScrollTriggerInstance);

      // GSAP animasyonu
      gsapInstance.to(svgRef.current, {
        rotate: 360, // SVG döner
        scrollTrigger: {
          trigger: document.body, // Tüm sayfa boyunca çalışır
          start: "top top", // Başlangıç noktası
          end: "bottom bottom", // Bitirme noktası
          scrub: 1, // Scroll hareketine bağlı
        },
        duration: 3,
        ease: "linear",
      });
    };

    loadGsap();
  }, []);

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        zIndex: -1, // Arka planda kalır
        overflow: "hidden",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <svg
        ref={svgRef}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 480 480"
        fill="#8A9DFF" // Daha koyu renk
        style={{
          width: "150vw",
          height: "150vh",
          opacity: 0.15, // Şeffaflık
          transformOrigin: "center center", // Dönüş merkezi
        }}
      >
        <path d="M240 240A240 240 0 0 0 0 480h120a120 120 0 0 1 240 0h120a240 240 0 0 0-240-240Z"></path>
        <path d="M480 0H360a120 120 0 0 1-240 0H0a240 240 0 1 0 480 0Z"></path>
      </svg>
    </div>
  );
};

export default BackgroundSVG;
