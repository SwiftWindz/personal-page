import React from 'react'
import Footer from '../components/Footer'

export default function Contact() {
  return (
    <>
    <div className='w-screen h-screen pt-12 bg-gradient-to-br from-violet-600 to-gray-400 font-outfit pb-8 text-black'>
        <div className= 'px-10 h-full text-center'>
          <div className='h-full border p-10 rounded-xl shadow-2xl bg-white'>
            <p className='text-6xl font-bold text-purple-500'>Lets get in contact!</p>
            <p className='text-black mt-2'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque voluptatibus reprehenderit illum nam voluptates dignissimos accusamus. Consequuntur iste ab magnam.</p>
          </div>
        </div>
    </div>
    <Footer></Footer>
    </>
  )
}
