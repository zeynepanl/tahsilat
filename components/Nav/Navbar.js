import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import LogoXl from './LogoXl';
import LogoLg from './LogoLg';
import Button from '../Button/Button'; // Button bileşenini doğru import edin

const Navbar = () => {
  const [activeLink, setActiveLink] = useState('/'); // Aktif linki takip et
  const [isVisible, setIsVisible] = useState(true); // Navbar'ın görünürlüğünü kontrol eder
  const [lastScrollY, setLastScrollY] = useState(0); // Son scroll pozisyonu

  const handleScroll = () => {
    if (typeof window !== 'undefined') {
      if (window.scrollY > lastScrollY) {
        setIsVisible(false); // Aşağı kaydırıldığında navbar gizlenir
      } else {
        setIsVisible(true); // Yukarı kaydırıldığında navbar görünür
      }
      setLastScrollY(window.scrollY); // Son scroll pozisyonunu günceller
    }
  };

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }
  }, [lastScrollY]);

  const handleLinkClick = (path) => {
    setActiveLink(path); // Tıklandığında aktif linki güncelle
  };

  return (
    <nav
      className={`bg-white fixed top-0 left-0 w-full z-20 shadow-sm transition-transform duration-300 ${
        isVisible ? 'translate-y-0' : '-translate-y-full'
      }`}
    >
      <div className="max-w-7xl flex items-center justify-between mx-auto p-2 border-b border-gray-100">
        <Link href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          {/* LogoXl sadece xl ekranlarda gösterilir */}
          <div className="hidden xl:block">
            <LogoXl />
          </div>

          {/* LogoLg sadece lg ekranlarda gösterilir */}
          <div className="hidden lg:block xl:hidden">
            <LogoLg />
          </div>
        </Link>

        <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          {/* Başvur butonu */}
          <Link href="/nav/ContactForm">
            {/* Button bileşeni */}
            <Button text={"Başvur"} />
          </Link>
        </div>

        <div className="items-center justify-between hidden md:flex md:w-auto md:order-1" id="navbar-sticky">
          <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium rounded-lg md:space-x-12 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 ml-[-20%]">
            <li className="relative group">
              <Link
                href="/"
                onClick={() => handleLinkClick('/')}
                className={`nav-link block py-2 px-3 md:bg-transparent md:p-0 text-[19px] font-poppins relative whitespace-nowrap ${
                  activeLink === '/' ? 'text-active font-bold' : ''
                }`}
              >
                Ana Sayfa
              </Link>
              <span
                className={`absolute left-1/2 bottom-[-10px] h-[3px] transition-all duration-300 transform -translate-x-1/2 rounded-full ${
                  activeLink === '/'
                    ? 'w-[70%] bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500'
                    : 'w-0'
                } group-hover:w-[70%] group-hover:bg-gradient-to-r group-hover:from-indigo-500 group-hover:via-purple-500 group-hover:to-pink-500`}
              ></span>
            </li>
            <li className="relative group">
              <Link
                href="/nav/about"
                onClick={() => handleLinkClick('/about')}
                className={`nav-link block py-2 px-3 rounded md:bg-transparent md:p-0 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 hover:text-active text-[19px] font-poppins relative whitespace-nowrap ${
                  activeLink === '/about' ? 'text-active font-bold' : ''
                }`}
              >
                Hakkımızda
              </Link>
              <span
                className={`absolute left-1/2 bottom-[-10px] h-[3px] transition-all duration-300 transform -translate-x-1/2 rounded-full ${
                  activeLink === '/about'
                    ? 'w-[70%] bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500'
                    : 'w-0'
                } group-hover:w-[70%] group-hover:bg-gradient-to-r group-hover:from-indigo-500 group-hover:via-purple-500 group-hover:to-pink-500`}
              ></span>
            </li>
            <li className="relative group">
              <Link
                href="/nav/packages"
                onClick={() => handleLinkClick('/packages')}
                className={`nav-link block py-2 px-3 rounded md:bg-transparent md:p-0 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 hover:text-active text-[19px] font-poppins relative whitespace-nowrap ${
                  activeLink === '/packages' ? 'text-active font-bold' : ''
                }`}
              >
                Paketler
              </Link>
              <span
                className={`absolute left-1/2 bottom-[-10px] h-[3px] transition-all duration-300 transform -translate-x-1/2 rounded-full ${
                  activeLink === '/packages'
                    ? 'w-[70%] bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500'
                    : 'w-0'
                } group-hover:w-[70%] group-hover:bg-gradient-to-r group-hover:from-indigo-500 group-hover:via-purple-500 group-hover:to-pink-500`}
              ></span>
            </li>
            <li className="relative group">
              <Link
                href="/nav/communication"
                onClick={() => handleLinkClick('/contact')}
                className={`nav-link block py-2 px-3 rounded md:bg-transparent md:p-0 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 hover:text-active text-[19px] font-poppins relative whitespace-nowrap ${
                  activeLink === '/contact' ? 'text-active font-bold' : ''
                }`}
              >
                İletişim
              </Link>
              <span
                className={`absolute left-1/2 bottom-[-10px] h-[3px] transition-all duration-300 transform -translate-x-1/2 rounded-full ${
                  activeLink === '/contact'
                    ? 'w-[70%] bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500'
                    : 'w-0'
                } group-hover:w-[70%] group-hover:bg-gradient-to-r group-hover:from-indigo-500 group-hover:via-purple-500 group-hover:to-pink-500`}
              ></span>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
