import React from 'react'

interface ButtonProps {
  text?: string
}

export const OrderNow: React.FC<ButtonProps> = ({ text = "Order Now" }) => {
  return (
    <button className='uppercase bg-[#d74545] text-white font-dm py-4 px-6 tracking-widest text-sm font-semibold cursor-pointer hover:bg-main duration-100 ease-out'>
      {text}
    </button>
  )
}
