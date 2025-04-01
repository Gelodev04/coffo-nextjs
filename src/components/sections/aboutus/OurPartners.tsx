import React from 'react'
import Divider from '@/components/ui/Divider'
import Image from 'next/image'
export default function OurPartners() {
  return (
    <section className='flex flex-col items-center py-16 px-5 bg-no-repeat bg-cover' style={{backgroundImage: "url('/images/bgedfg.png')"}}>
        <Divider color="#2b231e" margin=""/>

        <div className='text-center mt-5 max-w-[400px] space-y-5 mb-5'>
            <h1 className='font-playfair text-[38px] font-semibold leading-tight text-main'>Our partners</h1>
            <p className='text-secondary'>There are people who can’t start their day without having a freshly brewed cup of coffee and we understand them.</p>
        </div>

        <div className='flex gap-10 mt-9'>
            <Image className='size-[150px]' src="/images/partners/gt4tgdw.png" alt="Partners Logo" width={200} height={200} />
            <Image className='size-[150px]'  src="/images/partners/vrgbtj.png" alt="Partners Logo" width={200} height={200} />
        </div>
    </section>
  )
}
