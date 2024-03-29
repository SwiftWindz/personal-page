import React from 'react'
import pdf from '../assets/normal.pdf';

export default function ResumeComp() {
  return (
    <>
    <div className='w-screen h-full bg-gradient-to-tl to-[#8b5cf6] from-zinc-400 font-outfit pb-20'>
        <div className=' grid pt-12 font-outfit text-center'>
            <div className='grid place-items-center pb-10'>
              <div className=' m-4 p-3 md:m-0 md:p-10 rounded-2xl shadow-2xl bg-zinc-800 grid place-items-center pb-10'>
                  <div className='pb-10'>
                    <p className='text-6xl font-bold text-white'>My Resume. Grab One!</p>
                  </div>
                  <div className=''>
                    <embed className='w-[315px] h-[425px] sm:w-[400px] sm:h-[550px] md:w-[700px] md:h-[920px]' src={pdf} type=""/>
                  </div>
              </div>
            </div>
        </div>
    </div>
    </>
  )
}
