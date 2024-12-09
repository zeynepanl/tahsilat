import React, { useState } from "react";

const BankForm = () => {
  const [formData, setFormData] = useState({
    bankName: "",
    accountNumber: "",
    iban: "",
    contactEmail: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted: ", formData);
    alert("Bilgileriniz başarıyla kaydedildi!");
  };

  return (
    <div className="p-8 ">
      <h3 className="text-2xl font-bold text-gray-800 dark:text-white text-center">
        Ortak Banka Tanımlama
      </h3>
      <form className="mt-6 space-y-6" onSubmit={handleSubmit}>
        <div>
          <label className="block text-gray-700 mb-2">
            Banka Adı
          </label>
          <input
            type="text"
            name="bankName"
            value={formData.bankName}
            onChange={handleChange}
            placeholder="Örneğin: Ziraat Bankası"
            className="w-full mt-2 p-3 border-0 border-b-2 border-gray-300 focus:ring-0 focus:outline-none"
            required
          />
        </div>
        <div>
          <label className="block text-gray-700 mb-2">
            Hesap Numarası
          </label>
          <input
            type="text"
            name="accountNumber"
            value={formData.accountNumber}
            onChange={handleChange}
            placeholder="Hesap numaranızı girin"
            className="w-full mt-2 p-3 border-0 border-b-2 border-gray-300 focus:ring-0 focus:outline-none"
            required
          />
        </div>
        <div>
          <label className="block text-gray-700 b-2">
            IBAN
          </label>
          <input
            type="text"
            name="iban"
            value={formData.iban}
            onChange={handleChange}
            placeholder="TRXX XXXX XXXX XXXX XXXX XX"
            className="w-full mt-2 p-3 border-0 border-b-2 border-gray-300 focus:ring-0 focus:outline-none"
            required
          />
        </div>
        <div>
          <label className="block text-gray-700 mb-2">
            İletişim E-Postası
          </label>
          <input
            type="email"
            name="contactEmail"
            value={formData.contactEmail}
            onChange={handleChange}
            placeholder="E-posta adresinizi girin"
            className="w-full mt-2 p-3 border-0 border-b-2 border-gray-300 focus:ring-0 focus:outline-none"
            required
          />
        </div>
        <div className="text-center">
          <button
            type="submit"
            className="px-6 py-3 bg-active text-white text-lg font-semibold rounded-lg shadow-lg hover:bg-hover transition"
          >
            Bilgileri Kaydet
          </button>
        </div>
      </form>
    </div>
  );
};

export default BankForm;
