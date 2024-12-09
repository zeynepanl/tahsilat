import { useState } from 'react';
import { BiMenuAltRight } from "react-icons/bi";
import { LiaTimesSolid } from "react-icons/lia";
import { IoHomeOutline } from "react-icons/io5";
import { BsPatchQuestion } from "react-icons/bs";
import { IoPricetagsOutline } from "react-icons/io5";
import { BsTelephoneOutbound } from "react-icons/bs";
import gsap from 'gsap';

export default function AppNavbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Animation for scaling the links
  const scaleOnHover = (e) => {
    gsap.to(e.target, {
      scale: 1.2, // Scale up
      duration: 0.3, // Animation duration
      ease: 'power2.out', // Easing function
    });
  };

  const resetScale = (e) => {
    gsap.to(e.target, {
      scale: 1, // Reset scale to normal
      duration: 0.3,
      ease: 'power2.out',
    });
  };

  return (
    <nav className="bg-white dark:bg-gray-900 shadow-md font-poppins w-full py-5 px-5 z-10">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <div className="text-3xl font-semibold text-active dark:text-white font-poppins">
          tahsilatE
        </div>

        {/* Hamburger Icon for Mobile */}
        <div className="flex lg:hidden items-center">
          <button onClick={toggleMenu} className="text-active hover:text-white hover:bg-hover hover:border-none h-10 border border-active rounded-md p-1   dark:text-white focus:outline-none">
            {isMenuOpen ? (
              "" // Çarpı işareti
            ) : (
              <BiMenuAltRight size={32} /> // Menü işareti
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden bg-homeColor/90 fixed inset-y-0 right-0 z-20 transform transition-all duration-300 rounded-l-3xl ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        style={{
          width: '60%',  // Menu will take up 60% of the screen width
        }}
      >
        <div className="flex justify-end p-4">
          <button onClick={toggleMenu} className="text-white">
            <LiaTimesSolid className="w-8 h-8" /> {/* Çarpı işareti */}
          </button>
        </div>
        <div className="flex flex-col h-full text-white space-y-6 mt-16 mx-4">
          <a
            href="/"
            className="text-[22px] flex items-center space-x-6  hover:text-white transition-all duration-300 hover:p-2 "
            onMouseEnter={scaleOnHover}
            onMouseLeave={resetScale}
          >
            <IoHomeOutline size={24} /> <span>Ana Sayfa</span>
          </a>
          <a
            href="/nav/about"
            className="text-[22px] flex items-center space-x-6  hover:p-2 hover:text-white transition-all duration-300"
            onMouseEnter={scaleOnHover}
            onMouseLeave={resetScale}
          >
            <BsPatchQuestion size={24} /> <span>Hakkımızda</span>
          </a>
          <a
            href="/nav/packages"
            className="text-[22px] flex items-center space-x-6 hover:p-2   hover:text-white transition-all duration-300"
            onMouseEnter={scaleOnHover}
            onMouseLeave={resetScale}
          >
            <IoPricetagsOutline size={24} /> <span>Paketler</span>
          </a>
          <a
            href="/nav/communication"
            className="text-[22px] flex items-center space-x-6 hover:p-2   hover:text-white transition-all duration-300"
            onMouseEnter={scaleOnHover}
            onMouseLeave={resetScale}
          >
            <BsTelephoneOutbound size={24} /> <span>İletişim</span>
          </a>
        </div>
      </div>
    </nav>
  );
}
