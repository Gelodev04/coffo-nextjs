import CoffeeSwiper from '@/components/shared/CoffeeSwiper'
import { OrderNow } from '@/components/ui/buttons/OrderNow'
import Divider from '@/components/ui/Divider'
import React from 'react'

export default function Hero() {
  return (
    <section className='flex flex-col items-center py-7 px-5 pb-14'>
        <CoffeeSwiper/>
        <Divider margin='my-8' color='#2b231e'/>

        <div className='space-y-5 mb-5 max-w-[370px]'>
            <h1 className='font-playfair font-semibold text-main text-[46px] text-center leading-tight'>
            Great coffee <br />
            for some joy
            </h1>
            <p className='text-center text-secondary mt-3'>
            There are people who can’t start their day without having a freshly brewed cup of coffee and we understand them.
            </p>
        </div>

        <OrderNow/>
    </section>
  )
}
