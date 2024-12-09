// components/PoolCreationForm.js
import React, { useState } from 'react';

const PoolCreationForm = ({ onSubmit }) => {
  const [poolName, setPoolName] = useState('');

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (poolName) {
      onSubmit(poolName);
    }
  };

  return (
    <form onSubmit={handleFormSubmit} className="mt-8 space-y-6">
      <input
        type="text"
        className="w-full mt-2 p-3 border-0 border-b-2 border-gray-300 focus:ring-0 focus:outline-none"
        placeholder="Havuz Adı"
        value={poolName}
        onChange={(e) => setPoolName(e.target.value)}
        required
      />
      <button
        type="submit"
        className="w-full py-3 bg-indigo-600 text-white font-semibold rounded-lg shadow-lg hover:bg-indigo-700 transition duration-200"
      >
        Havuz Oluştur
      </button>
    </form>
  );
};

export default PoolCreationForm;
