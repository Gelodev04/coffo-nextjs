import { Facebook } from "@/components/svg/Facebook"
import { LinkedIn } from "@/components/svg/LinkedIn"
import { Twitter } from "@/components/svg/Twitter"
import { DynamicButton } from "@/components/ui/buttons/DynamicButton"
import Divider from "@/components/ui/Divider"
import Image from "next/image"

export default function OurTeam() {
    const team = [
        {
            img: '/images/team/baker-coffee-pastry.png',
            name: 'Jefferey Norton',
            role: 'senior barista'
        },
        {
            img: '/images/team/barista-bar-coffee.png',
            name: 'Fred Goldman',
            role: 'owner'
        },
        {
            img: '/images/team/kglrb.png',
             name: 'Will Paterson',
            role: 'waiter'
        },
        {
            img: '/images/team/krgj.png',
            name: 'Allen Kalbo',
            role: 'senior barista'
        },
        {
            img: '/images/team/waiter-coffee.png',
            name: 'Anita Jones',
            role: 'barista'
        },
        {
            img: '/images/team/rgnm.png',
            name: 'Dan Paterson',
            role: 'waiter'
        }
    ]

  return (
    <section className="bg-[#030619] ">
        <div className="px-5 flex flex-col items-center py-16">
            <Divider color='#ECC493'/>
            <div className="text-center mt-6 space-y-3 max-w-[380px] ">
                <h1 className="text-white font-playfair font-semibold text-[38px]">Our team</h1>
                <p className="text-[#C3C4CF]">There are people who can’t start their day without having a freshly brewed cup of coffee and we understand them.</p>
            </div>

            <DynamicButton text="view all team" margin="my-7"/>

            <ul className="grid grid-cols-1 gap-5">
                {team.map((item, index) => (
                    <li key={index} className="max-w-[400px] relative group ">
                        <Image className="" src={item.img} alt="Our Team" width={500} height={500}/>

                        <div className="absolute inset-5  opacity-0 group-hover:opacity-95 transition-opacity duration-500  bg-white flex flex-col items-center justify-center gap-2">
                            <h3 className="font-playfair text-main text-[2rem] font-semibold">{item.name}</h3>
                            <span className="uppercase text-[#706357] font-bold tracking-widest text-sm">{item.role}</span>

                            <div className="flex gap-5 mt-3">
                                <Facebook/>
                                <Twitter/>
                                <LinkedIn/>
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    </section>
  )
}
