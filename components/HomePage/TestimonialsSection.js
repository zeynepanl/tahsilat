

import React, { useEffect, useRef, useState } from "react";
import { FaStar } from "react-icons/fa";

function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const sectionRef = useRef(null);
  const mainTextRef = useRef(null);
  const headerRef = useRef(null);
  const subHeaderRef = useRef(null);
  const cardsContainerRef = useRef(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      import("gsap").then(({ gsap }) => {
        import("gsap/ScrollTrigger").then(({ ScrollTrigger }) => {
          gsap.registerPlugin(ScrollTrigger);

          // 1. Ana Metin Animasyonu
          gsap.fromTo(
            mainTextRef.current,
            { opacity: 1, y: 0 },
            {
              opacity: 0,
              y: -50,
              duration: 1,
              scrollTrigger: {
                trigger: mainTextRef.current,
                start: "top top",
                end: "+=600",
                scrub: true,
                pin: true,
              },
            }
          );

          // 2. "Bizim Sözümüze Değil" ve "Onların Sözüne Güvenin" Animasyonu
          gsap.fromTo(
            headerRef.current,
            { opacity: 1, y: 0 },
            {
              opacity: 1,
              y: -100, // Yukarı doğru kayma
              duration: 1,
              scrollTrigger: {
                trigger: headerRef.current,
                start: "top center",
                end: "+=600",
                scrub: true,
              },
            }
          );

          gsap.fromTo(
            subHeaderRef.current,
            { opacity: 1, y: 0 },
            {
              opacity: 0,
              y: 100, // Aşağı doğru kayma
              duration: 1,
              scrollTrigger: {
                trigger: subHeaderRef.current,
                start: "top center",
                end: "+=600",
                scrub: true,
              },
            }
          );

          // 3. Yorum Kartlarının Ortaya Gelmesi
          gsap.fromTo(
            cardsContainerRef.current.children,
            { opacity: 0, y: 50 },
            {
              opacity: 1,
              y: 0,
              stagger: 0.2, // Her kart arka arkaya gelir
              duration: 1,
              scrollTrigger: {
                trigger: cardsContainerRef.current,
                start: "top center",
                end: "bottom center",
                scrub: true,
              },
            }
          );
        });
      });
    }

    // Testimonials Slider
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000); // 5 saniyede bir geçiş
    return () => clearInterval(interval); // Cleanup
  }, []);

  return (
    <div ref={sectionRef} className="bg-indigo-700 text-white font-poppins">
      {/* 1. Ana Metin */}
      <div
        ref={mainTextRef}
        className="flex items-center justify-center h-screen text-center"
      >
        <h1 className="text-4xl font-bold mb-4">
          Tahsilate'ye binlerce kişi güveniyor! 
          <br/> Bakın müşterilerimiz ne diyor.
        </h1>
      </div>

      {/* 2. Yeni Metinler ve Yorum Kartları */}
      <div className="flex flex-col items-center justify-center h-screen text-center space-y-12">
        <h2 ref={headerRef} className="text-4xl font-bold">
          Bizim Sözümüze Değil
        </h2>
        <div
          ref={cardsContainerRef}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-8"
        >
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} testimonial={testimonial} />
          ))}
        </div>
        <h2 ref={subHeaderRef} className="text-4xl font-bold mt-4">
          Onların Sözüne Güvenin
        </h2>
      </div>
    </div>
  );
}

function TestimonialCard({ testimonial }) {
  return (
    <div
      className="bg-white rounded-lg shadow-lg p-6 w-64 transition-all duration-500 ease-in-out transform opacity-0"
      style={{
        maxWidth: "320px",
        minWidth: "250px",
        flex: "0 0 auto",
      }}
    >
      <div className="flex mb-4">
        {Array(5).fill(<FaStar className="text-yellow-400" />)}
      </div>
      <p className="text-gray-700 mb-4">{testimonial.review}</p>
      <div className="flex items-center">
        <img
          src={testimonial.image}
          alt={testimonial.name}
          className="w-10 h-10 rounded-full mr-3"
        />
        <div>
          <h3 className="text-sm font-bold text-gray-900">
            {testimonial.name}
          </h3>
          <p className="text-sm text-gray-500">{testimonial.role}</p>
        </div>
      </div>
    </div>
  );
}

const testimonials = [
  {
    name: "Jane Cooper",
    role: "CEO, Example Inc.",
    review:
      "Purus mauris ornare et sit aliquet. Tincidunt pretium aenean adipiscing pretium nisl vitae.",
    image: "/path/to/jane.jpg",
  },
  {
    name: "Ralph Edwards",
    role: "CTO, Example Corp.",
    review:
      "Purus mauris ornare et sit aliquet. Tincidunt pretium aenean adipiscing pretium nisl vitae.",
    image: "/path/to/ralph.jpg",
  },
  {
    name: "Courtney Henry",
    role: "Marketing, Company X",
    review:
      "Purus mauris ornare et sit aliquet. Tincidunt pretium aenean adipiscing pretium nisl vitae.",
    image: "/path/to/courtney.jpg",
  },
  {
    name: "Cameron Williamson",
    role: "Manager, Business Y",
    review:
      "Purus mauris ornare et sit aliquet. Tincidunt pretium aenean adipiscing pretium nisl vitae.",
    image: "/path/to/cameron.jpg",
  },
];

export default TestimonialsSection;
