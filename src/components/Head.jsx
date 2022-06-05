import React from 'react'
import face from '../assets/help.png'

export default function Header() {
  return (
  <div class="p-10 md:pt-28 h-full w-full flex items-center justify-center bg-gradient-to-br from-violet-600 to-gray-400 shadow-2xl">
    <div className='grid md:grid-cols-2 max-w-[1240px] m-auto'>
      <div className=' flex flex-col sm:col-span-1 justify-center md:items-start w-full py-8'>
        <h1 className='text-center md:text-left py-3 text-6xl md:text-7xl font-bold font-outfit text-white'>Phil Ganem fuck</h1>
        <p className='text-3xl md:text-4xl  text-white text-center md:text-left font-outfit'>3rd-Year Software Engineering student at the Rochester Institute of Technology.</p>
      </div>
      <div className='grid max-w-[625px] place-items-center'>
        {/* Fix picture w divs not the same size */}
        <img className=' md:max-w-[2000px] w-650 ' src={face} alt="/" />
      </div>
    </div>
  </div>
  )
}
