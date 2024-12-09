// pages/pool/[poolName].js
import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { LiaTimesSolid } from "react-icons/lia";

const PoolPage = () => {
  const router = useRouter();
  const { poolName } = router.query;

  const [transactions, setTransactions] = useState([
    { id: 1, user: 'John Doe', amount: 1000, status: 'Başarılı', date: '2024-11-15' },
    { id: 2, user: 'Jane Smith', amount: 500, status: 'Başarısız', date: '2024-11-14' },
    { id: 3, user: 'Robert Johnson', amount: 1500, status: 'Başarılı', date: '2024-11-13' },
  ]);

  const [newTransaction, setNewTransaction] = useState({ user: '', amount: '', status: 'Başarılı' });
  const [isSettingsVisible, setIsSettingsVisible] = useState(false);
  const [poolSettings, setPoolSettings] = useState({
    poolName: poolName || 'Genel Havuz',
    maxTransactions: 50,
    adminEmail: 'admin@example.com',
  });

  const handleAddTransaction = () => {
    const newId = transactions.length + 1;
    setTransactions([ ...transactions, { id: newId, ...newTransaction, date: new Date().toISOString().split('T')[0] } ]);
    setNewTransaction({ user: '', amount: '', status: 'Başarılı' });
  };

  const handleTransactionStatusChange = (id) => {
    setTransactions((prev) => prev.map((transaction) =>
      transaction.id === id
        ? { ...transaction, status: transaction.status === 'Başarılı' ? 'Başarısız' : 'Başarılı' }
        : transaction
    ));
  };

  const handlePoolSettingsChange = (e) => {
    const { name, value } = e.target;
    setPoolSettings((prev) => ({ ...prev, [name]: value }));
  };

  const handleSaveSettings = () => {
    alert('Havuz ayarları kaydedildi!');
  };

  const handleClosePage = () => {
    router.back();
  };

  return (
    <div className=" min-h-screen flex items-center justify-center py-12 px-6">
      <div className="container max-w-4xl p-8 relative">

        {/* Close Button */}
        <div className="absolute top-4 right-16 cursor-pointer" onClick={handleClosePage}>
          <LiaTimesSolid className="text-3xl text-gray-700 hover:text-gray-900 transition duration-200" />
        </div>

        {/* Title and Description */}
        <h1 className="text-3xl font-semibold text-gray-800">{poolName} Havuzu</h1>
        <p className="mt-4 text-gray-600 text-lg">Tahsilat işlemlerinizi buradan yönetebilirsiniz.</p>

        {/* Transactions Table */}
        <div className="mt-8">
          <h2 className="text-2xl font-semibold text-active">Tahsilat İşlemleri</h2>
          <div className="overflow-x-auto mt-6">
            <table className="min-w-full bg-white rounded-lg shadow-md">
              <thead>
                <tr className="text-left bg-active text-white">
                  <th className="px-4 py-3 text-sm">İşlem ID</th>
                  <th className="px-4 py-3 text-sm">Kullanıcı</th>
                  <th className="px-4 py-3 text-sm">Miktar</th>
                  <th className="px-4 py-3 text-sm">Durum</th>
                  <th className="px-4 py-3 text-sm">Tarih</th>
                  <th className="px-4 py-3 text-sm">İşlem</th>
                </tr>
              </thead>
              <tbody>
                {transactions.map((transaction) => (
                  <tr key={transaction.id} className="border-t hover:bg-gray-100">
                    <td className="px-4 py-3 text-sm">{transaction.id}</td>
                    <td className="px-4 py-3 text-sm">{transaction.user}</td>
                    <td className="px-4 py-3 text-sm">{transaction.amount} ₺</td>
                    <td className={`px-4 py-3 text-sm font-semibold ${transaction.status === 'Başarılı' ? 'text-green-500' : 'text-red-500'}`}>
                      {transaction.status}
                    </td>
                    <td className="px-4 py-3 text-sm">{transaction.date}</td>
                    <td className="px-4 py-3 text-sm">
                      <button
                        onClick={() => handleTransactionStatusChange(transaction.id)}
                        className="px-4 py-2 bg-active text-white rounded-lg hover:bg-hover transition duration-200"
                      >
                        Durumu Değiştir
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* New Transaction Form */}
        <div className="mt-12">
          <h2 className="text-2xl font-semibold text-active">Yeni İşlem Ekle</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-6">
            <div>
              <label className="block text-left text-lg text-gray-700">Kullanıcı Adı</label>
              <input
                type="text"
                value={newTransaction.user}
                onChange={(e) => setNewTransaction({ ...newTransaction, user: e.target.value })}
                className="w-full mt-2 p-3 border-0 border-b-2 border-gray-300 focus:ring-0 focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-left text-lg text-gray-700">Miktar (₺)</label>
              <input
                type="number"
                value={newTransaction.amount}
                onChange={(e) => setNewTransaction({ ...newTransaction, amount: e.target.value })}
                className="w-full mt-2 p-3 border-0 border-b-2 border-gray-300 focus:ring-0 focus:outline-none"
              />
            </div>

            <div className="sm:col-span-2">
              <label className="block text-left text-lg text-gray-700">Durum</label>
              <select
                value={newTransaction.status}
                onChange={(e) => setNewTransaction({ ...newTransaction, status: e.target.value })}
                className="w-full mt-2 p-3 border-0 border-b-2 border-gray-300 focus:ring-0 focus:outline-none"
              >
                <option value="Başarılı">Başarılı</option>
                <option value="Başarısız">Başarısız</option>
              </select>
            </div>
          </div>

          <div className="mt-8">
            <button
              onClick={handleAddTransaction}
              className="px-6 py-3 bg-active text-white text-lg rounded-xl hover:bg-hover transition duration-200"
            >
              İşlem Ekle
            </button>
          </div>
        </div>

        {/* Pool Settings Button */}
        <div className="mt-12 text-center">
          <button
            onClick={() => setIsSettingsVisible(!isSettingsVisible)}
            className="px-6 py-3 bg-active text-white text-lg rounded-xl hover:bg-hover transition duration-200"
          >
            Havuz Ayarları
          </button>
        </div>

        {/* Pool Settings Form */}
        {isSettingsVisible && (
          <div className="mt-8">
            <h2 className="text-2xl font-semibold text-hover">Havuz Ayarları</h2>
            <div className="mt-6">
              <label className="block text-left text-lg text-gray-700">Havuz Adı</label>
              <input
                type="text"
                name="poolName"
                value={poolSettings.poolName}
                onChange={handlePoolSettingsChange}
                className="w-full mt-2 p-3 border-0 border-b-2 border-gray-300 focus:ring-0 focus:outline-none"
              />
            </div>

            <div className="mt-6">
              <label className="block text-left text-lg text-gray-700">Maksimum İşlem Sayısı</label>
              <input
                type="number"
                name="maxTransactions"
                value={poolSettings.maxTransactions}
                onChange={handlePoolSettingsChange}
                className="w-full mt-2 p-3 border-0 border-b-2 border-gray-300 focus:ring-0 focus:outline-none"
              />
            </div>

            <div className="mt-6">
              <label className="block text-left text-lg text-gray-700">Admin E-posta</label>
              <input
                type="email"
                name="adminEmail"
                value={poolSettings.adminEmail}
                onChange={handlePoolSettingsChange}
                className="w-full mt-2 p-3 border-0 border-b-2 border-gray-300 focus:ring-0 focus:outline-none"
              />
            </div>

            <div className="mt-8">
              <button
                onClick={handleSaveSettings}
                className="px-6 py-3 bg-hover text-white text-lg rounded-xl hover:bg-teal-700 transition duration-200"
              >
                Ayarları Kaydet
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default PoolPage;
