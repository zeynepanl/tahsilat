import React, { useState, useEffect } from 'react';
import { FaStar } from 'react-icons/fa';

function TestimonialsSection() {
  // State to handle the current index of testimonials shown
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000); // Change every 5 seconds
    return () => clearInterval(interval); // Clean up on unmount
  }, []);

  return (
    <div className="bg-white mx-auto flex items-center justify-center pt-24 px-6 font-poppins">
      {/* Header Section */}
      <div className='bg-active max-w-7xl mx-auto overflow-hidden p-16'>
        <div className="text-white mb-8 text-left ">
          <h2 className="text-3xl font-bold">Bizim Sözümüze Değil, Onların Sözüne Güvenin</h2>
          <p className="mt-2 mx-auto">
            Tahsilatçıya katılarak güvenli bir ödeme deneyimi kazanın. Bizim müşterilerimize bir göz atın.
          </p>
        </div>
        
        <div className="flex justify-end">
          <button className="mt-4 bg-white text-blue-700 font-semibold py-2 px-4 rounded-full hover:bg-gray-200 transition">
            Tümünü Gör
          </button>
        </div>

        {/* Testimonials Cards - Horizontal Scroll */}
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex overflow-x-auto space-x-6 mt-8 pb-8">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard
                key={index}
                testimonial={testimonial}
                isVisible={index === currentIndex || index === (currentIndex + 1) % testimonials.length}
              />
            ))}
          </div>
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center mt-8 space-x-2">
          {testimonials.map((_, index) => (
            <div
              key={index}
              className={`w-3 h-3 rounded-full ${currentIndex === index ? 'bg-white' : 'bg-opacity-50'}`}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
}

// Data for testimonials
const testimonials = [
  {
    name: 'Jane Cooper',
    role: 'CEO, Example Inc.',
    review: 'Purus mauris ornare et sit aliquet. Tincidunt pretium aenean adipiscing pretium nisl vitae.',
    image: '/path/to/jane.jpg',
  },
  {
    name: 'Ralph Edwards',
    role: 'CTO, Example Corp.',
    review: 'Purus mauris ornare et sit aliquet. Tincidunt pretium aenean adipiscing pretium nisl vitae.',
    image: '/path/to/ralph.jpg',
  },
  {
    name: 'Courtney Henry',
    role: 'Marketing, Company X',
    review: 'Purus mauris ornare et sit aliquet. Tincidunt pretium aenean adipiscing pretium nisl vitae.',
    image: '/path/to/courtney.jpg',
  },
  {
    name: 'Cameron Williamson',
    role: 'Manager, Business Y',
    review: 'Purus mauris ornare et sit aliquet. Tincidunt pretium aenean adipiscing pretium nisl vitae.',
    image: '/path/to/cameron.jpg',
  },
];

// Testimonial Card Component
function TestimonialCard({ testimonial, isVisible }) {
  return (
    <div
      className={`bg-white rounded-lg shadow-lg p-6 w-64 transition-all duration-500 ease-in-out transform ${
        isVisible ? 'opacity-100' : 'opacity-50'
      }`}
      style={{
        maxWidth: '320px', // control card width
        minWidth: '250px', // ensure it doesn't shrink too much
        flex: '0 0 auto', // fix card size in the flex container
      }}
    >
      <div className="flex mb-4">
        {Array(5).fill(<FaStar className="text-yellow-400" />)}
      </div>
      <p className="text-gray-700 mb-4">{testimonial.review}</p>
      <div className="flex items-center">
        <img
          src={testimonial.image}
          alt={testimonial.name}
          className="w-10 h-10 rounded-full mr-3"
        />
        <div>
          <h3 className="text-sm font-bold text-gray-900">{testimonial.name}</h3>
          <p className="text-sm text-gray-500">{testimonial.role}</p>
        </div>
      </div>
    </div>
  );
}

export default TestimonialsSection;
