import React from 'react'
import Footer from '../components/Footer'
import { useForm, ValidationError } from '@formspree/react';
import ThankYou from '../pages/ThankYou';

export default function Contact() {
  const [state, handleSubmit] = useForm("xoqrbvgv");
  if (state.succeeded) {
      return <ThankYou/>
  }
  return (
    <>
    <div className='w-screen h-screen bg-gradient-to-br from-violet-600 to-gray-400 font-outfit text-black'>
          <div className=' p-10 rounded-xl'>
             <div className=' grid py-10 rounded-xl  text-center place-items-center text-white'>
                <p className='text-4xl md:text-6xl font-bold '>Lets get in contact!</p>
                <p className=' mt-2 px-5 py-2 text-3xl md:text-4xl'>Have something you want to tell me? Send me an email below!</p>
              <div className='pt-10'>
              <form className='bg-zinc-600 p-5 pt-10 rounded-lg w-[300px] h-[400px] md:w-[500px] md:h-[500px] drop-shadow-xl ' onSubmit={handleSubmit}>
                <div className='grid  grid-cols-1 max-w-[500px] justify-center text-black'>
                  <label className='font-bold text-white pb-2' htmlFor="email">Email Address</label>
                  <input className='border' id="email" type="email" name="email"/>
                  <p className='font-bold text-white pb-2 pt-2'>Name</p>
                  <input className='border' id="Name" name="Name"/>
                  <ValidationError prefix="Email"  field="email" errors={state.errors}/> 
                  <p className='font-bold text-white pb-2 pt-2'>Message</p>
                  <textarea className='border h-[100px]' id="message" name="message"/>
                  <ValidationError prefix="Message" field="message"errors={state.errors}/>
                  <div className='pb-2 pt-5'>
                    <button className='font-bold hover:bg-violet-200 text-violet-600 pb-2 pt-2 bg-white rounded-xl w-[100px] text-center' type="submit" disabled={state.submitting}>Send it!</button>
                  </div>
                </div>
              </form>
              </div>
            </div>
          </div>
    </div>
    <Footer></Footer>
    </>
  )
}

