
import DeliveryService from '@/components/sections/coffeehouse/DeliveryService'
import Hero from '@/components/sections/coffeehouse/Hero'
import NewFlavor from '@/components/sections/coffeehouse/NewFlavor'
import OurStory from '@/components/sections/coffeehouse/OurStory'
import Explore from '@/components/sections/home/Explore'
import Gallery from '@/components/sections/home/Gallery'
import OurMenu from '@/components/sections/home/OurMenu'
import ShopHours from '@/components/sections/home/ShopHours'
import Testimonials from '@/components/sections/home/Testimonials'
import React from 'react'

export default function CoffeeHousePage() {
  return (
    <main className='font-dm'>
      <Hero/>
      <OurStory/>
      <Explore/>
      <OurMenu/>
      <Gallery/>
      <DeliveryService/>
      <NewFlavor/>
      <Testimonials/>
      <ShopHours/>
    </main>
  )
}
