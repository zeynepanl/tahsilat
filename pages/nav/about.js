import AboutUsSection from '@/components/AboutPage/AboutUsSection';
import MissionSection from '@/components/AboutPage/MissionSection';
import VisionSection from '@/components/AboutPage/VisionSection';
import WhatIsTahsilate from '@/components/AboutPage/WhatIsTahsilate';
import React from 'react'

function About() {
  return (
    <div>
      <AboutUsSection/>
      <WhatIsTahsilate/>
      <MissionSection/>
      <VisionSection/>
    </div>
  )
}

export default About;
