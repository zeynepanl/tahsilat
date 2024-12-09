// components/ContactSection.js
import React from 'react';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaInstagram, FaTwitter, FaFacebook } from 'react-icons/fa';

function ContactSection() {
  return (
    <div className="pt-12 px-6 relative font-poppins">
      <h2 className="lg:text-4xl text-2xl font-bold text-center text-purple-700 mb-8">İletişim</h2>

      <div className="flex flex-col md:flex-row max-w-7xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
        
        {/* Sol Taraf: İletişim Bilgileri */}
        <div className="bg-purple-700 text-white p-10 md:w-1/2 h-auto md:h-[600px] flex flex-col justify-between">
          <div className="mb-4">
            <h3 className="text-2xl font-semibold mb-4">İletişim Bilgileri</h3>
            <p>Bizimle İletişime Geçin</p>
          </div>
          
          {/* Telefon, E-posta ve Adres */}
          <div className="flex flex-col justify-center flex-grow">
            <div className="flex items-center mb-3">
              <FaPhoneAlt className="mr-3" />
              <span>(+90) 850 441 84 06</span>
            </div>
            <div className="flex items-center mb-3">
              <FaEnvelope className="mr-3" />
              <span>Kurumsal@atlasltd.com</span>
            </div>
            <div className="flex items-center mb-3">
              <FaMapMarkerAlt className="mr-3" />
              <span>Ferit Paşa Mah. Ahmet Hilmi Nalçacı Cad. acenteler sitesi A blok no 75/2 Selçuklu/Konya</span>
            </div>
          </div>

          {/* Sosyal Medya Linkleri */}
          <div className="flex justify-end space-x-4 mt-4">
            <div className="border-2 border-white rounded-full p-2 hover:border-gray-200">
              <FaInstagram size={24} className="text-white hover:text-gray-200 cursor-pointer" />
            </div>
            <div className="border-2 border-white rounded-full p-2 hover:border-gray-200">
              <FaTwitter size={24} className="text-white hover:text-gray-200 cursor-pointer" />
            </div>
            <div className="border-2 border-white rounded-full p-2 hover:border-gray-200">
              <FaFacebook size={24} className="text-white hover:text-gray-200 cursor-pointer" />
            </div>
          </div>
        </div>
        
        {/* Sağ Taraf: İletişim Formu */}
        <div className="p-8 md:w-1/2 bg-white h-auto md:h-[600px] flex flex-col justify-between">
          <form className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-5">
              {/* Ad-Soyad */}
              <div className="relative z-0 w-full group">
                <input type="text" name="name" id="name" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-active peer" placeholder=" " required />
                <label htmlFor="name" className="absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:text-active peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Ad-Soyad</label>
              </div>

              {/* Şirket */}
              <div className="relative z-0 w-full group">
                <input type="text" name="company" id="company" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-active peer" placeholder=" " required />
                <label htmlFor="company" className="absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:text-active peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Şirket</label>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-5">
              {/* Email */}
              <div className="relative z-0 w-full group">
                <input type="email" name="email" id="email" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-active peer" placeholder=" " required />
                <label htmlFor="email" className="absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:text-active peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email</label>
              </div>

              {/* Telefon */}
              <div className="relative z-0 w-full group">
                <input type="tel" name="phone" id="phone" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-active peer" placeholder=" " required />
                <label htmlFor="phone" className="absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:text-active peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Telefon</label>
              </div>
            </div>

            {/* Konu */}
            <div className="relative z-0 w-full mb-5 group">
              <input type="text" name="subject" id="subject" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-active peer" placeholder=" " required />
              <label htmlFor="subject" className="absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:text-active peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Konu</label>
            </div>

            {/* Mesaj */}
            <div className="relative z-0 w-full mb-5 group">
              <textarea name="message" id="message" rows="4" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-active peer" placeholder=" " required></textarea>
              <label htmlFor="message" className="absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:text-active peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Mesaj</label>
            </div>
          </form>

          {/* Buton */}
          <button type="submit" className="text-white bg-active hover:bg-hover font-medium rounded-lg text-sm w-full p-4 text-center mt-4"><span className='text-xl'>Mesaj Gönder</span></button>
        </div>
      </div>

      {/* Sağ üst ve sol alt köşe resimleri, içerik divlerinin altında ve büyük boyutlu, z-index ile arkaya gönderildi */}
      <img
        src="/images/contactpage/top.png"
        alt="Top Image"
        className="absolute top-[-60px] right-0 w-48 h-48 object-contain z-0"
      />
      <img
        src="/images/contactpage/bottom.png"
        alt="Bottom Image"
        className="absolute bottom-[-60px] left-0 w-48 h-48 object-contain z-0"
      />
    </div>
  );
}

export default ContactSection;
