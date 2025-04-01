import React from 'react'
import Divider from '@/components/ui/Divider'
export default function Header() {
  return (
     <section className="px-5 bg-center bg-cover bg-no-repeat py-16 " style={{backgroundImage: "url('/images/bgedfg.png')"}}>
           <header className="flex flex-col items-center lg:mt-20 lg:items-start lg:max-w-[1100px] mx-auto">
             <Divider color="#2b231e" margin=""/>
             <div className="text-center mt-4 space-y-5 max-w-[400px] lg:text-start">
               <h1 className="text-main font-playfair font-semibold text-[46px] lg:text-[60px]">Our team</h1>
               <p className="text-secondary lg:text-lg">
                 There are people who can’t start their day without having a freshly
                 brewed cup of coffee and we understand them.
               </p>
             </div>
           </header>
         </section>
  )
}
