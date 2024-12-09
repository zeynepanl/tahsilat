// components/MapSection.js
import React from 'react';

function MapSection() {
  const containerStyle = {
    width: '100%',
    height: '400px'
  };

  const mapUrl = "https://www.google.com/maps/embed/v1/place?key=YOUR_GOOGLE_MAPS_API_KEY&q=Ferit+Paşa+Mah.+Ahmet+Hilmi+nalçacı+Cad.+acenteler+sitesi+A/blok+no+75/2+Selçuklu/Konya";

  return (
    <div className=" py-12 px-6 font-poppins">
      <h2 className="text-3xl font-bold text-center text-purple-700 mb-8">Biz Neredeyiz?</h2>
      
      <div className="max-w-7xl mx-auto bg-gradient-to-r from-purple-700 to-blue-500 shadow-lg rounded-lg overflow-hidden p-4">
        <iframe
          src={mapUrl}
          width="100%"
          height="400"
          style={{ border: '0' }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
}

export default MapSection;
