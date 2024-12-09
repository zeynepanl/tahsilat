// components/ProgressBar.js
import React from 'react';

const ProgressBar = ({ progress }) => {
  return (
    <div className="mt-8 p-6 bg-white rounded-xl shadow-lg">
      <div className="flex justify-between items-center">
        <div className="text-lg font-semibold text-gray-700">İşlem Durumu</div>
        <div className="text-sm font-medium text-teal-600">{progress}% Tamamlandı</div>
      </div>
      
      <div className="relative pt-2 mt-4">
        {/* Background bar */}
        <div className="w-full h-2.5 bg-gray-300 rounded-full overflow-hidden">
          <div
            className="bg-gradient-to-r from-teal-400 to-teal-600 h-2.5 rounded-full transition-all duration-500"
            style={{ width: `${progress}%` }}
          ></div>
        </div>

        {/* Animated Circle */}
        <div
          className="absolute top-1/2 transform -translate-y-1/2 left-0 bg-teal-600 rounded-full w-6 h-6 flex items-center justify-center text-white font-bold text-xs transition-all duration-500"
          style={{ left: `${progress}%` }}
        >
          <span>{progress}</span>
        </div>
      </div>
      
    </div>
  );
};

export default ProgressBar;
