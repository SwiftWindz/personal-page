import React from 'react'
import Footer from '../components/Footer'
import MUD from '../assets/mud.6d06844a.mp4'

export default function Portfolio() {
  return (
    <>
      <div className='w-screen pt-12 bg-gradient-to-br from-violet-600 to-gray-400 font-outfit pb-24 text-black'>
        <div className='text-white text-center py-10 px-5 md:px-24'>
          <h1 className='text-6xl md:text-7xl font-bold'>Lorem.</h1>
          <p className='text-3xl md:text-4xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Eos tenetur labore nobis quibusdam omnis perspiciatis illo earum consequuntur itaque aspernatur?</p>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-5 px-8 text-center'>
            <div className='border py-8 rounded-xl shadow-2xl bg-white'>
                <p className='text-6xl font-bold text-purple-500'>Lorem.</p>
              <div className='grid place-items-center'>
                <p className='text-black mt-2 pb-10 px-5'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque voluptatibus reprehenderit illum nam voluptates dignissimos accusamus. Consequuntur iste ab magnam.</p>
                <video className='rounded-xl max-w-[350px] md:max-w-[600px]' autoPlay="false" src={MUD} controls></video>
              </div>
            </div>
            <div className='border py-8 rounded-xl shadow-2xl bg-white'>
                <p className='text-6xl font-bold text-purple-500'>Lorem.</p>
              <div className='grid place-items-center'>
                <p className='text-black mt-2 pb-10 px-5'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque voluptatibus reprehenderit illum nam voluptates dignissimos accusamus. Consequuntur iste ab magnam.</p>
                <video className='rounded-xl max-w-[350px] md:max-w-[600px]' autoPlay="false" src={MUD} controls></video>
              </div>
            </div>
            <div className='border py-8 rounded-xl shadow-2xl bg-white'>
                <p className='text-6xl font-bold text-purple-500'>Lorem.</p>
              <div className='grid place-items-center'>
                <p className='text-black mt-2 pb-10 px-5'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque voluptatibus reprehenderit illum nam voluptates dignissimos accusamus. Consequuntur iste ab magnam.</p>
                <video className='rounded-xl max-w-[350px] md:max-w-[600px]' autoPlay="false" src={MUD} controls></video>
              </div>
            </div>
            <div className='border py-8 rounded-xl shadow-2xl bg-white'>
                <p className='text-6xl font-bold text-purple-500'>Lorem.</p>
              <div className='grid place-items-center'>
                <p className='text-black mt-2 pb-10 px-5'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque voluptatibus reprehenderit illum nam voluptates dignissimos accusamus. Consequuntur iste ab magnam.</p>
                <video className='rounded-xl max-w-[350px] md:max-w-[600px]' autoPlay="false" src={MUD} controls></video>
              </div>
            </div>
        
        </div>
     </div>
     <Footer></Footer>
    </>
  )
}
