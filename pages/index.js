// pages/index.js
import Head from 'next/head'
import VirtualPosCard from '@/components/HomePage/VirtualPosCard'

import SingleClickPayment from '@/components/HomePage/SingleClickPayment'
import EasyPaymentSectionWithTags from '@/components/HomePage/EasyPaymentSectionWithTags'
import SecurePaymentMethods from '@/components/HomePage/SecurePaymentMethods'
import TestimonialsSection from '@/components/HomePage/TestimonialsSection'
import SecuritySection from '@/components/HomePage/SecuritySection'
import BankSetup from '@/components/HomePage/BankSetup'
import PartnerIntegration from '@/components/HomePage/PartnerIntegration'
import CreatePool from '@/components/HomePage/CreatePool'
import SubDealer from '@/components/HomePage/SubDealer'
import PaymentLinkIntro from '@/components/HomePage/PaymentLinkIntro'

export default function Home() {
  return (
    <>
      {/* Sayfa başlığı ve meta etiketleri */}
      <Head>
        <title>Tahsilate | Sanal Pos</title>
        <meta name="description" content="Next.js ile hazırlanmış örnek bir ana sayfa" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Ana içerik */}
      <main className="max-w-7xl mx-auto">
  <VirtualPosCard />
  <SubDealer />
  <EasyPaymentSectionWithTags />
  <CreatePool />
  <PartnerIntegration />
  <BankSetup />
  <PaymentLinkIntro />
  <SingleClickPayment />
  <SecuritySection />
  <SecurePaymentMethods />
  <TestimonialsSection />
</main>

    </>
  )
}
