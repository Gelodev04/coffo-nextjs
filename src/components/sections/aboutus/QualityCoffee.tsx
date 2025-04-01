import Image from 'next/image'
import React from 'react'
import Divider from '@/components/ui/Divider'
import { StatsCard } from '@/components/shared/StatsCard'
import { DynamicButton } from '@/components/ui/buttons/DynamicButton'

export default function QualityCoffee() {
  return (
    <section className='bg-no-repeat bg-center bg-contain' style={{backgroundImage: 'url("/images/evrvr-bfg.png")'}}>
    <div className='py-16 flex flex-col items-center px-5'>
        <Image src='/images/jhbj-876x1024.png' alt='Bartenders' width={300} height={300}/>
        <Divider color='#2b231e' margin='mt-10'/>

        <div className='text-center mt-5 max-w-[400px] space-y-5 mb-5'>
            <h1 className='font-playfair text-[38px] font-semibold leading-tight text-main'>Enjoy the best high <br /> quality coffee</h1>
            <p className='text-secondary'>Our coffee bar uses only Ethiopian coffee. All commercially produced coffee originates from Ethiopia. We love Ethiopia for providing the world with coffee to grow, and we continue to love the flavor of that country’s coffee.</p>
        </div>

        <StatsCard/>
    </div>


    <div className='py-16 flex flex-col items-center px-5'>
        <Image className='max-w-[270px]' src='/images/gjhh-782x1024.png' alt='Man holding coffee beans' width={300} height={300}/>

        <Divider color='#2b231e' margin='mt-10'/>

        <div className='text-center my-5 space-y-5 max-w-[350px] '>
            <h1 className='font-playfair text-[38px] font-semibold leading-tight text-main'>We use the highest quality coffee beans</h1>
            <p className='text-secondary'>Our coffee bar uses only Ethiopian coffee. All commercially produced coffee originates from Ethiopia. We love Ethiopia for providing the world with coffee to grow, and we continue to love the flavor of that country’s coffee. The fruity acidity of this single origin coffee is balanced by its sweet honey notes, creating soft, light notes with a light character.</p>
        </div>

        <DynamicButton text='Watch Video'/>
    </div>
    </section>
  )
}
