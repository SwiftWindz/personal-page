import React from 'react'
import face from '../assets/help.png'

export default function Header() {
  return (
  <div className="p-8 md:pt-24 h-full w-screen flex items-center justify-center bg-gradient-to-tl to-[#8b5cf6] from-zinc-400 shadow-2xl">
    <div className='grid md:grid-cols-2 max-w-[1340px] m-auto md:gap-5 '>
      <div className='max-w-[650px] flex flex-col sm:col-span-1 justify-center md:items-start w-full py-20'>
        <h1 className='text-center md:text-left py-3 text-6xl md:text-7xl font-bold font-outfit text-white'>Phil Ganem</h1>
        <p className='text-3xl md:text-4xl  text-white text-center md:text-left font-outfit'>3rd-Year Software Engineering student at the Rochester Institute of Technology.</p>
      </div>
      <div className='grid max-w-[500px] place-items-center'>
        <div className=' '>
          <img className='hidden md:flex md:w-[325px] md:h-[375px] ' src={face} alt="/" />
        </div>
      </div>
    </div>
  </div>
  )
}
