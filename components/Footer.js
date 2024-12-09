import React from 'react';
import { FiSend, FiPhone, FiMail } from 'react-icons/fi';
import { FaLinkedin, FaInstagram, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="text-white max-w-full mx-auto pt-24">
      <div className="mx-auto max-w-7xl bg-gradient-to-r from-purple-700 to-gray-900 p-10">
        <div className="container mx-auto flex flex-col md:flex-row md:justify-between text-center md:text-left">
          
          {/* Logo ve E-posta Bölümü */}
          <div className="flex flex-col items-center md:items-start w-full md:w-auto mb-8 md:mb-0 md:flex-1">
            <h2 className="text-3xl font-poppins font-bold">tahsilatE</h2>
            <div className="flex items-center space-x-2 mt-4 relative w-full sm:w-auto">
              {/* Hidden on small screens (sm) */}
              <input
                type="email"
                placeholder="E-posta gönderin"
                className="p-2 pr-12 rounded-full text-black w-52 hidden sm:block"
              />
              <div className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-hover rounded-full py-3 px-6 flex items-center justify-center hidden sm:block">
                <FiSend className="text-white w-5 h-5" />
              </div>
            </div>
          </div>

          {/* Sosyal Medya İkonları */}
          <div className="flex justify-center md:justify-end space-x-4 mt-4 md:mt-0">
            <a href="#" className="hover:text-gray-400"><FaLinkedin className="w-6 h-6 text-white" /></a>
            <a href="#" className="hover:text-gray-400"><FaInstagram className="w-6 h-6 text-white" /></a>
            <a href="#" className="hover:text-gray-400"><FaTwitter className="w-6 h-6 text-white" /></a>
          </div>
        </div>

        {/* Bilgi Bölümleri (Adres, Bağlantılar, İletişim) */}
        <div className="hidden md:hidden lg:flex flex-col lg:flex-row justify-between w-full mt-8 lg:mt-0 space-y-8 lg:space-y-0 lg:space-x-10">
          {/* Adres Bölümü */}
          <div className="flex flex-col items-center lg:items-start w-full lg:w-auto">
            <h3 className="font-semibold mb-2">ADRES</h3>
            <p className="mt-2 text-center lg:text-left">
              Ferit Paşa Mah. Ahmet Hilmi Nalçacı Cad.<br />
              acenteler sitesi A/blok no 75/2 Selçuklu/Konya
            </p>
          </div>

          {/* Bağlantılar Bölümü */}
          <div className="flex flex-col items-center lg:items-start w-full lg:w-auto">
            <h3 className="font-semibold mb-2">BAĞLANTILAR</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:underline">Yardım Merkezi</a></li>
              <li><a href="#" className="hover:underline">Hakkımızda</a></li>
              <li><a href="#" className="hover:underline">Geliştirici Portalı</a></li>
            </ul>
          </div>

          {/* İletişim Bölümü */}
          <div className="flex flex-col items-center lg:items-start w-full lg:w-auto">
            <h3 className="font-semibold mb-2">İLETİŞİM</h3>
            <p className="flex items-center mt-2">
              <FiPhone className="mr-2" /> (+90) 850 441 64 06
            </p>
            <p className="flex items-center mt-2">
              <FiMail className="mr-2" />
              <a href="mailto:Kurumsal@tahsilate.com" className="hover:underline">Kurumsal@tahsilate.com</a>
            </p>
            <h3 className="font-semibold mt-4">DESTEK SAATLERİ</h3>
            <p className="mt-2">Pazartesi - Cuma</p>
            <p className="mt-2">08:30 - 18:30</p>
          </div>
        </div>

        <div className="border-t mt-8 border-gray-700 pt-4 text-center text-sm">
          Tahsilate © 2023. TÜM HAKLARI SAKLIDIR. | Tahsilate bir paracim Ödeme hizmetleri A.Ş. markasıdır.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
