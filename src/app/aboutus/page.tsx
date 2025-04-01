import Header from '@/components/sections/aboutus/Header'
import OurPartners from '@/components/sections/aboutus/OurPartners'
import OurTeam from '@/components/sections/aboutus/OurTeam'
import QualityCoffee from '@/components/sections/aboutus/QualityCoffee'
import React from 'react'

export default function AboutUs() {
  return (
    <main className=''>
        <Header/>
        <QualityCoffee/>
        <OurTeam/>
        <OurPartners/>
    </main>
  )
}
