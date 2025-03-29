import React from 'react'
import Divider from '../../ui/Divider'

export default function Testimonials() {
  return (
    <section className='bg-white  px-5 flex flex-col items-center pb-14'>
        <Divider color='#2b231e'/>
        <div className='text-center space-y-5 mt-6'>
            <h1 className='font-playfair text-[38px] font-semibold text-main leading-tight'>Hear from our
            awesome clients</h1>
            <p className='text-secondary'>There are people who can’t start their day without having a freshly brewed cup of coffee and we understand them.</p>
        </div>
    </section>
  )
}
