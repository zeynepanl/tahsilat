// components/ContactForm.js
import { useState } from 'react';
import { FaUser, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    subject: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Form gönderimi işlemleri
  };

  return (
    <div className="max-w-full mx-auto font-poppins">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">
        {/* Sol Taraf */}
        <div className="w-full md:w-1/2 flex flex-col justify-center items-center bg-cover bg-center p-10 relative" style={{ backgroundImage: 'url(/path-to-your-background-image.jpg)' }}>
          {/* Arka Planın Üzerine Yerleştirilen GIF */}
          <img src="/images/register/register.gif" alt="Illustration" className="w-full h-full object-cover mb-6 z-10" />
          <div className="flex space-x-4 mt-4 z-20">
            <a href="#" className="text-indigo-600 text-2xl">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#" className="text-indigo-600 text-2xl">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#" className="text-indigo-600 text-2xl">
              <i className="fab fa-twitter"></i>
            </a>
          </div>
        </div>

        {/* Sağ Taraf */}
        <div className="w-full md:w-1/2 flex flex-col justify-center items-center p-10 max-w-7xl mx-auto">
          <h2 className="text-2xl font-bold text-indigo-700 mb-4">Tahsilate Sanal POS Başvuru</h2>
          <p className="text-gray-600 mb-8">Lütfen aşağıdaki bilgilerinizi doldurun</p>

          <form onSubmit={handleSubmit} className="w-full max-w-md">
            <div className="mb-4">
              <label className="sr-only" htmlFor="name">Ad-Soyad</label>
              <div className="relative">
                <FaUser className="absolute left-3 top-3 text-gray-400" />
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Ad-Soyad"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full pl-10 p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-0"
                />
              </div>
            </div>

            <div className="mb-4">
              <label className="sr-only" htmlFor="phone">Mobile Number</label>
              <div className="relative">
                <FaPhoneAlt className="absolute left-3 top-3 text-gray-400" />
                <input
                  type="text"
                  name="phone"
                  id="phone"
                  placeholder="Mobile number"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full pl-10 p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-0"
                />
              </div>
            </div>

            <div className="mb-4">
              <label className="sr-only" htmlFor="email">Email</label>
              <div className="relative">
                <FaEnvelope className="absolute left-3 top-3 text-gray-400" />
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full pl-10 p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-0"
                />
              </div>
            </div>

            <div className="mb-6">
              <label className="sr-only" htmlFor="subject">Konu</label>
              <textarea
                name="subject"
                id="subject"
                placeholder="Konu"
                value={formData.subject}
                onChange={handleChange}
                className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-0"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-active text-white p-3 rounded-lg hover:bg-hover transition duration-200"
            >
              Başvur
            </button>
          </form>
          <p className="text-gray-400 mt-8">TAHSİLATE © 2024. TÜM HAKLARI SAKLIDIR.</p>
        </div>
      </div>
    </div>
  );
}
