import React from 'react'
import Footer from '../components/Footer'

export default function NoPage() {
  return (
      <>
      <div name='about' className='w-screen h-screen pt-40 font-outfit bg-gradient-to-br from-violet-600 to-gray-400 text-white'>
        <div className='max-w-[1240px] mx-auto'>
            <div className='text-center'>
                <h2 className='text-4xl md:text-5xl font-bold'>Thank you for sendin' it!</h2>
            </div>
        </div>
        </div>
    <Footer></Footer>
    </>
  )
}
