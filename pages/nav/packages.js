import React from 'react';
import LicensingFees from '@/components/PackagesPage/LicensingFees';
import PricingPlans from '@/components/PackagesPage/PricingPlans/PricingPlans';
import Options from '@/components/PackagesPage/Options';
function Packages() {
  return (
    <div>
      <LicensingFees/>
      <PricingPlans/>
      <Options/>
    </div>
  )
}

export default Packages
