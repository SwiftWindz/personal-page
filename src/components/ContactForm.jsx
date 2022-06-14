import React from 'react'
import { useForm, ValidationError } from '@formspree/react';
import ThankYouContact from '../components/ThankYouContact'

export default function ContactForm() {

const [state, handleSubmit] = useForm("xoqrbvgv");
  if (state.succeeded) {
      return <ThankYouContact/>
  }

  return (
    <div className='w-screen h-full bg-gradient-to-tr from-zinc-800 to-indigo-600 font-outfit pb-24'>
      <div className='pt-20 rounded-xl'>
          <div className=' grid rounded-xl  text-center place-items-center text-white'>
            <p className='text-4xl md:text-6xl font-bold '>Lets get in contact!</p>
            <p className=' mt-2 px-5 py-2 text-3xl md:text-4xl'>Have something you want to tell me? Send me an email below!</p>
          <div className='pt-10'>
          <form className='bg-zinc-800 p-5 pt-10 rounded-lg w-[300px] h-[450px] md:w-[500px] md:h-[500px] drop-shadow-xl ' onSubmit={handleSubmit}>
            <div className='grid  grid-cols-1 max-w-[500px] justify-center text-black'>
              <label className='font-bold text-white pb-2' htmlFor="email">Email Address</label>
              <input className='rounded-md focus:outline-none focus:ring focus:ring-violet-300 ' id="email" type="email" name="email" required={true}/>
              <p className='font-bold text-white pb-2 pt-2'>Full Name</p>
              <input className='rounded-md focus:outline-none focus:ring focus:ring-violet-300 ' id="Name" name="Name" required={true}/>
              <ValidationError prefix="Email"  field="email" errors={state.errors}/> 
              <p className='font-bold text-white pb-2 pt-2'>Message</p>
              <textarea className='border h-[150px] rounded-md focus:outline-none focus:ring focus:ring-violet-300 ' required={true} id="message" name="message"/>
              <ValidationError prefix="Message" field="message"errors={state.errors}/>
              <div className='pb-2 pt-5'>
                <button className='font-bold hover:bg-indigo-200 text-indigo-600 pb-2 pt-2 bg-white rounded-xl w-[100px] text-center focus:outline-none focus:ring focus:ring-violet-300 ' type="submit" disabled={state.submitting}>Send it!</button>
              </div>
            </div>
          </form>
          </div>
        </div>
      </div>
    </div>
  )
}
