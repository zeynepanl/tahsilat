import React from 'react';
import styles from '@/components/PackagesPage/PricingPlans/PricingPlans.module.css';

function PricingPlans() {
  const plans = [
    {
      name: 'Başlangıç',
      price: '17.750,00 ₺',
      features: [
        "Kredi Kartı Tek Çekim Ödeme Alma",
        "Bayilerden Ödeme Alma",
        "Kredi Kartı Taksitli Ödeme Alma",
        { text: "Bayilerin Alt Bayilerinden Ödeme alma", unavailable: true },
        "100 Bayi Sayısı",
        "Mobil Cihazlarla Uyumluluk",
        { text: "Dövizli Tahsilat (USD, EURO vb.)", unavailable: true },
        { text: "E-mail ile Tahsilat", unavailable: true },
        { text: "SMS ile Tahsilat", unavailable: true },
        { text: "Çoklu Dil Destekli Müşteri Arayüzü", unavailable: true },
        "3D Secure Desteği",
        "Sanal Pos, İşlem İade İmkanı",
        "Android Mobil Uygulamadan Tahsilat",
        "Sunucu Barındırma Hizmeti",
        "İşlem Raporları",
        "Sanal Pos Raporları",
        { text: "Raporlama Dövizi", unavailable: true },
        { text: "Bayi Raporları", unavailable: true },
        { text: "Rapor Dışarı Aktarımı", unavailable: true },
        "Kullanıcı Yetkilendirme",
        "Yönetici Paneli Kullanıcı Sayısı ( 1 )",
        "256 Bit SSL",
        "1 Banka sanal pos entegrasyon"
      ],
      bgColor: '', // bgColor kaldırıldı
    },
    {
      name: 'Ekonomik',
      price: '24.250,00 ₺',
      features: [
        "Kredi Kartı Tek Çekim Ödeme Alma",
        "Bayilerden Ödeme Alma",
        "Kredi Kartı Taksitli Ödeme Alma",
        { text: "Bayilerin Alt Bayilerinden Ödeme alma", unavailable: true },
        "500 Bayi Sayısı",
        "Mobil Cihazlarla Uyumluluk",
        "Dövizli Tahsilat (USD, EURO vb.)",
        "E-mail ile Tahsilat",
        { text: "SMS ile Tahsilat", unavailable: true },
        { text: "Çoklu Dil Destekli Müşteri Arayüzü", unavailable: true },
        "3D Secure Desteği",
        "Sanal Pos, İşlem İade İmkanı",
        "Android Mobil Uygulamadan Tahsilat",
        "Sunucu Barındırma Hizmeti",
        "İşlem Raporları",
        "Sanal POS Raporları",
        "Raporlama Dövizi - Opsiyonel",
        "Bayi Raporları - Opsiyonel",
        "Rapor Dışarı Aktarımı - Opsiyonel",
        "Kullanıcı Yetkilendirme",
        "Yönetici Paneli Kullanıcı Sayısı (3)",
        "256 Bit SSL",
        "5 Banka sanal pos entegrasyon",
      ],
      bgColor: 'bg-gradient-to-r from-purple-700 to-blue-500',
      popular: true,
    },
    {
      name: 'Profesyonel',
      price: '28.500,00 ₺',
      features: [
        "Kredi Kartı Tek Çekim Ödeme Alma",
        "Bayilerden Ödeme Alma",
        "Kredi Kartı Taksitli Ödeme Alma",
        "Bayilerin Alt Bayilerinden Ödeme alma",
        "1000 Bayi Sayısı",
        "Mobil Cihazlarla Uyumluluk",
        "Dövizli Tahsilat (USD, EURO vb.)",
        "E-mail ile Tahsilat",
        "SMS ile Tahsilat",
        "Çoklu Dil Destekli Müşteri Arayüzü",
        "3D Secure Desteği",
        "Sanal Pos, İşlem İade İmkanı",
        "Android Mobil Uygulamadan Tahsilat",
        "Sunucu Barındırma Hizmeti",
        "İşlem Raporları",
        "Sanal POS Raporları",
        "Raporlama Dövizi",
        "Bayi Raporları",
        "Rapor Dışarı Aktarımı",
        "Kullanıcı Yetkilendirme",
        "Yönetici Paneli Kullanıcı Sayısı (10)",
        "256 Bit SSL",
        "22 Banka sanal pos entegrasyon",
      ],
      bgColor: '', // bgColor kaldırıldı
    },
  ];

  return (
    <div className="px-6 font-poppins">
      <h2 className="lg:text-4xl text-2xl font-bold text-center text-active mb-8">Planlar ve Fiyatlandırma</h2>

      <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
        {plans.map((plan, index) => (
          <div
            key={index}
            className={`${plan.bgColor} ${plan.popular ? '' : 'neon-border'} text-white p-8 rounded-lg shadow-lg relative ${styles.card}`}
          >
            {plan.popular && (
              <span className="absolute top-4 right-4 text-white text-xs font-bold p-3 border rounded-full">
                En Popüler
              </span>
            )}
            <h3 className={`${styles.card_title} text-2xl font-semibold mb-6`}>{plan.name}</h3>
            <ul className="space-y-4 mb-8 text-sm">
              {plan.features.map((feature, idx) => (
                <li key={idx} className={`${feature.unavailable ? 'text-red-400' : ''}`}>
                  {feature.unavailable ? '✖' : '✔'} {feature.text || feature}
                </li>
              ))}
            </ul>
            <p className="text-xl font-semibold">
              Lisans Ücreti 
            </p>
            <p><span className="text-3xl font-bold">{plan.price}</span> /yıllık</p>
            <button className={`${styles.button} bg-blue-500 text-white font-bold rounded mt-6`}>
              <span className='text-xl'>Planı Seç</span>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PricingPlans;
