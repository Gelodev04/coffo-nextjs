
import Hero from '@/components/sections/coffeehouse/Hero'
import OurStory from '@/components/sections/coffeehouse/OurStory'
import Explore from '@/components/sections/home/Explore'
import Gallery from '@/components/sections/home/Gallery'
import OurMenu from '@/components/sections/home/OurMenu'
import React from 'react'

export default function CoffeeHousePage() {
  return (
    <main className=''>
      <Hero/>
      <OurStory/>
      <Explore/>
      <OurMenu/>
      <Gallery/>
    </main>
  )
}
