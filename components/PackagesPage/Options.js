import React, { useState } from 'react';
import { FiX } from 'react-icons/fi';

function Options() {
  const options = [
    { name: "Döviz Raporlama", imgSrc: "/images/packagespage/doviz1.png", description: "Döviz Raporlama : 1.000,00 TL" },
    { name: "Çoklu Dil", imgSrc: "/images/packagespage/language1.png", description: `Çoklu dil (EN, DE, FR, AR,) : 1.750,00 TL` },
    { name: "Döviz İle Tahsilat", imgSrc: "/images/packagespage/doviz1.png", description: "Döviz (USD, EURO, DH) : 1.750,00 TL" },
    { name: "Android Mobil Uygulama", imgSrc: "/images/packagespage/mobil1.png", description: "Mobil Uygulama : 2.000,00 TL" },
    { name: "Bayi Raporlama", imgSrc: "/images/packagespage/rapor1.png", description: "Bayi Raporlama : 1.000,00 TL" },
    { name: "Rapor Dışarı Aktarma", imgSrc: "/images/packagespage/export1.png", description: "Rapor Dışarı Aktarma : 1.000,00 TL" },
    { name: "Panel İlave Kullanıcı", imgSrc: "/images/packagespage/ilave1.png", description: "Panel İlave Kullanıcı 1 Adet : 200,00 TL" },
    { name: "İlave Bayi Ekleme", imgSrc: "/images/packagespage/user1.png", description: "BANKA SANAL POS İLAVE 1 ADET : 1.250,00 TL" },
    { name: "Banka Sanal Post İlave", imgSrc: "/images/packagespage/pos1.png", description: `100 Adet İlave Bayi : 350,00 TL <br/> 500 Adet İlave Bayi : 1.400,00 TL <br/> 1000 Adet İlave Bayi : 2.500,00 TL ` },
  ];

  const [selectedOption, setSelectedOption] = useState(null);

  return (
    <div className="pt-24 px-6 max-w-full mx-auto pb-24">
      <h2 className="lg:text-4xl text-2xl text-center text-active mb-4 font-poppins font-regular">Opsiyonlar</h2>
      <p className="text-center text-gray-500 mb-8 font-poppins">Opsiyonları görüntüleyebilmek için içerik seçiniz</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-7xl mx-auto">
        {options.map((option, index) => (
          <div
            key={index}
            className="border border-active/50 rounded-lg p-10 text-center hover:shadow-[0px_0px_15px_5px_rgba(138,43,226,0.7)] hover:scale-105 transition-all duration-300 cursor-pointer"
            onClick={() => setSelectedOption(option)} // Set the selected option when clicked
          >
            <img src={option.imgSrc} alt={option.name} className="mx-auto mb-4 w-12 h-12" />
            <p className="text-purple-700 font-medium font-poppins text-[24px]">{option.name}</p>
          </div>
        ))}
      </div>

      {/* Display selected option details in a new div */}
      {selectedOption && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center text-white z-10">
          <div className="bg-white p-8 max-w-lg w-full h-auto rounded-lg relative overflow-auto">
            <button
              onClick={() => setSelectedOption(null)}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
            >
              <FiX size={24} /> {/* react-icons'dan FiX ikonunu kullandık */}
            </button>
            <div className="text-center">
              <img
                src={selectedOption.imgSrc}
                alt={selectedOption.name}
                className="mx-auto mb-4 w-16 h-16"
              />
              <h3 className="text-2xl text-active font-bold">{selectedOption.name}</h3>
              {/* Display the description using dangerouslySetInnerHTML */}
              <p className="mt-4 text-gray-700" dangerouslySetInnerHTML={{ __html: selectedOption.description }} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Options;
