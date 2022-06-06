import React from 'react'
import Footer from '../components/Footer'

export default function Portfolio() {
  return (
    <>
      <div className='w-screen h-screen pt-12 bg-gradient-to-br from-violet-600 to-gray-400 font-outfit pb-8 text-black'>
        <div className='text-white text-center py-10'>
          <h1 className='text-6xl md:text-7xl font-bold'>Lorem.</h1>
          <p className='text-3xl md:text-4xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Eos tenetur labore nobis quibusdam omnis perspiciatis illo earum consequuntur itaque aspernatur?</p>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-4 px-2 text-center'>
            <div className='border py-8 rounded-xl shadow-2xl bg-white'>
                <p className='text-6xl font-bold text-purple-500'>Lorem.</p>
                <p className='text-black mt-2'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque voluptatibus reprehenderit illum nam voluptates dignissimos accusamus. Consequuntur iste ab magnam.</p>
            </div>
            <div className='border py-8 rounded-xl shadow-2xl bg-white'>
                <p className='text-6xl font-bold text-purple-500'>Lorem.</p>
                <p className='text-black mt-2'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque voluptatibus reprehenderit illum nam voluptates dignissimos accusamus. Consequuntur iste ab magnam.</p>
            </div>
            <div className='border py-8 rounded-xl shadow-2xl bg-white'>
                <p className='text-6xl font-bold text-purple-500'>Lorem.</p>
                <p className='text-black mt-2'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque voluptatibus reprehenderit illum nam voluptates dignissimos accusamus. Consequuntur iste ab magnam.</p>
            </div>
            <div className='border py-8 rounded-xl shadow-2xl bg-white'>
                <p className='text-6xl font-bold text-purple-500'>Lorem.</p>
                <p className='text-black mt-2'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque voluptatibus reprehenderit illum nam voluptates dignissimos accusamus. Consequuntur iste ab magnam.</p>
            </div>
            <div className='border py-8 rounded-xl shadow-2xl bg-white'>
                <p className='text-6xl font-bold text-purple-500'>Lorem.</p>
                <p className='text-black mt-2'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque voluptatibus reprehenderit illum nam voluptates dignissimos accusamus. Consequuntur iste ab magnam.</p>
            </div>
            <div className='border py-8 rounded-xl shadow-2xl bg-white'>
                <p className='text-6xl font-bold text-purple-500'>Lorem.</p>
                <p className='text-black mt-2'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque voluptatibus reprehenderit illum nam voluptates dignissimos accusamus. Consequuntur iste ab magnam.</p>
            </div>
        </div>
     </div>
      <Footer></Footer>
    </>
  )
}
