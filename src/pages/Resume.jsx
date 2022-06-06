import React from 'react';
import Footer from '../components/Footer'
import pdf from '../assets/normal .pdf';


export default function Resume() {

  return (
    <>
      <div className='w-screen h-screen pt-[100px] font-outfit bg-zinc-600 text-white text-center'>
        <div className='grid place-items-center '>
          <embed className='w-[600px] h-[800px]' src={pdf} type="" />
        </div>
      </div>
      <Footer></Footer>
    </>
  )
}
