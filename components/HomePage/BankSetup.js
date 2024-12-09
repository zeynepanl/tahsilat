import React, { useState } from "react";
import BankForm from "./BankForm"; // Form bileşenini içeri aktarıyoruz
import { FiX } from "react-icons/fi";

const BankSetup = () => {
  // Form görünürlüğünü kontrol etmek için state
  const [isFormVisible, setIsFormVisible] = useState(false);

  return (
    <div className="max-w-full mx-auto py-16 px-8">
      <div className="mx-auto max-w-7xl">
      <div className="max-w-4xl mx-auto text-center">
        {/* Başlık */}
        <h2 className="text-3xl font-bold text-gray-800 dark:text-white">
          Tahsilatlarınızı Kolaylaştırın
        </h2>
        <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
          Ortak banka tanımlayarak tahsilatlarınızı hızlı ve güvenli bir şekilde gerçekleştirin.
        </p>
        {/* Adımlar */}
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-6">
          {["Giriş Yapın", "Banka Seçin", "Tahsilata Başlayın"].map((step, index) => (
            <div
              key={index}
              className="flex flex-col items-center p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg"
            >
              <div className="w-12 h-12 flex items-center justify-center bg-hover text-white rounded-full">
                {index + 1}
              </div>
              <p className="mt-4 text-gray-800 dark:text-gray-300 font-medium">{step}</p>
            </div>
          ))}
        </div>
        {/* CTA Button */}
        <div className="mt-8">
          <button
            className="px-6 py-3 bg-hover text-white text-lg font-semibold rounded-lg shadow-lg hover:bg-active transition"
            onClick={() => setIsFormVisible(true)} // Butona tıklanınca formu aç
          >
            Hemen Tanımla
          </button>
        </div>
      </div>

      {/* Modal Form */}
      {isFormVisible && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-10">
          <div className="bg-white dark:bg-gray-800 p-8 max-w-lg w-full rounded-lg relative">
            <button
              onClick={() => setIsFormVisible(false)} // Formu kapat
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
            >
              <FiX size={24} />
            </button>
            <BankForm />
          </div>
        </div>
      )}
      </div>

    </div>
  );
};

export default BankSetup;
