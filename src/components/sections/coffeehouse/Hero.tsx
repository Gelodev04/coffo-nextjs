import CoffeeSwiper from '@/components/shared/CoffeeSwiper'
import { OrderNow } from '@/components/ui/buttons/OrderNow'
import Divider from '@/components/ui/Divider'
import React from 'react'

export default function Hero() {
  return (
    <section className='flex flex-col items-center py-7 px-5 pb-14  lg:flex-row-reverse justify-between lg:max-w-[1100px] mx-auto overflow-hidden lg:h-screen'>
        <CoffeeSwiper/>

        <div className='flex flex-col items-center lg:items-start text-center lg:text-start '>
          <Divider margin='my-8 lg:my-0' color='#2b231e'/>
          <div className='space-y-5 mb-5 max-w-[370px] lg:max-w-[450px]'>
              <h1 className='font-playfair font-semibold text-main text-[46px] leading-tight lg:text-[70px]'>
              Great coffee <br />
              for some joy
              </h1>
              <p className=' text-secondary mt-3 text-lg'>
              There are people who can’t start their day without having a freshly brewed cup of coffee and we understand them.
              </p>
          </div>
          <OrderNow/>
        </div>

    </section>
  )
}
