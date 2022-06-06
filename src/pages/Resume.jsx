import React from 'react';
import Footer from '../components/Footer'
import pdf from '../assets/GanemResume.pdf';


export default function Resume() {

  return (
    <>
      <div className='w-full h-full pt-[60px] md:pt-[100px] font-outfit bg-gradient-to-br from-violet-600 to-gray-400 text-white text-center'>
        <div className='grid place-items-center pb-10'>
          <div className='border m-4 p-3 md:m-0 md:p-10 rounded-xl shadow-2xl bg-white grid place-items-center pb-10'>
            <div className='pb-10'>
              <p className='text-6xl font-bold text-purple-500'>My Resume. Grab one!</p>
            </div>
            <embed className='w-[400px] h-[550px] md:w-[700px] md:h-[920px]' src={pdf} type="" />
          </div>
        </div>
      </div>
      <Footer></Footer>
    </>
  )
}
