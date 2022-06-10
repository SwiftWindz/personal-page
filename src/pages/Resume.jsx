import React from 'react';
import Footer from '../components/Footer'
import ResumeComp from '../components/ResumeComp';

export default function Resume() {

  return (
    <>
      <div className='grid grid-cols-1 h-screen '>
        <ResumeComp/>
        <Footer/>
      </div>
    </>
  )
}
