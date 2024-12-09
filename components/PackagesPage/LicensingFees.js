import React, { useState } from 'react';

function LicensingFees() {
  const [country, setCountry] = useState("Türkiye");
  const [currency, setCurrency] = useState("TL");

  const handleCountryChange = (event) => {
    setCountry(event.target.value);
  };

  const handleCurrencyChange = (event) => {
    setCurrency(event.target.value);
  };

  return (
    <div className=" px-6 flex items-center justify-center max-w-full font-poppins">
      <div className="max-w-7xl w-full flex flex-col md:flex-row items-center justify-between space-x-8">
        <div className="text-center md:text-left md:w-1/2">
          <h2 className="lg:text-4xl text-2xl font-semibold text-active text-center pt-8">Lisans Ücretleri</h2> {/* Text-center eklendi */}
          <p className="text-gray-500 mt-2 mb-6 text-center">Ücretleri görmek için ülkenizi ve yerel para biriminizi seçin</p> {/* Text-center eklendi */}

          <div className="flex space-x-4 justify-center md:justify-start">
            {/* Ülke Seçimi */}
            <select 
              value={country} 
              onChange={handleCountryChange} 
              className="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-active focus:border-active p-2.5 w-1/2" // Genişlik ayarlandı
            >
              <option value="Türkiye">Türkiye</option>
              <option value="Amerika">Amerika</option>
              <option value="Almanya">Almanya</option>
              <option value="İngiltere">İngiltere</option>
            </select>

            {/* Para Birimi Seçimi */}
            <select 
              value={currency} 
              onChange={handleCurrencyChange} 
              className="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-active focus:border-active p-2.5 w-1/2" // Genişlik ayarlandı
            >
              <option value="TL">TL</option>
              <option value="USD">USD</option>
              <option value="EUR">EUR</option>
              <option value="GBP">GBP</option>
            </select>
          </div>
        </div>

        {/* Sağdaki Görsel */}
        <div className="mt-8 md:mt-0 md:w-1/2 flex justify-center md:justify-end">
          <img 
            src="/images/packagespage/card.gif" // Resminizin yolunu buraya ekleyin
            alt="Custom Visual"
            className="w-full max-w-[500px] h-auto object-cover rounded-lg"
          />
        </div>
      </div>
    </div>
  );
}

export default LicensingFees;
