import React from 'react'
import { useForm, ValidationError } from '@formspree/react';
import ThankYouContact from '../components/ThankYouContact'

export default function ContactForm() {

const [state, handleSubmit] = useForm("xoqrbvgv");
  if (state.succeeded) {
      return <ThankYouContact/>
  }

  return (
    <div className='w-screen h-full bg-gradient-to-tl to-[#8b5cf6] from-zinc-400 font-outfit pb-24'>
      <div className='pt-24 rounded-xl'>
          <div className=' grid rounded-xl  text-center place-items-center text-white'>
            <p className='text-4xl md:text-6xl font-bold '>Lets get in contact!</p>
            <p className=' mt-2 px-5 py-2 text-3xl md:text-4xl'>Have something you want to tell me? Send me an email below!</p>
          <div className='pt-10'>
          <form className='bg-zinc-800 rounded-2xl w-[350px] h-[400px] md:w-[700px] md:h-[350px] drop-shadow-xl ' onSubmit={handleSubmit}>
            <div className='grid grid-cols-1 md:grid-cols-2 md:p-6'>
              <div className='w-full md:pr-10 text-center md:text-left md:border-r-2 pb-8'>
                <div className='pb-8'>
                  <p className='text-sm text-gray-400'>Full Name</p>
                  <input className='focus:outline-none border-b-2 focus:border-violet-300 bg-zinc-800 ' id="Name" name="Name" required={true}/>
                </div>
                <div>
                  <p className='text-sm text-gray-400'>Email</p>
                  <input className='focus:outline-none border-b-2 focus:border-violet-300 bg-zinc-800 ' id="email" type="email" name="email" required={true}/>
                </div>
              </div>
              <div className='border-t-2 md:border-t-0 '>
                <p className='text-center md:text-left md:pl-4 text-sm text-gray-400 pt-8 md:pt-0'>Message</p>
                <textarea className=' h-[250px] w-[300px] bg-zinc-800 focus:outline-none resize-none md:pl-1' placeholder='...' required={true} id="message" name="message"/>
                <ValidationError prefix="Message" field="message"errors={state.errors}/>
              </div>
            </div>
            <div className=' w-full'>
              <button className='font-bold rounded-b-xl bg-white text-violet-600 pb-2 pt-2 w-full text-center focus:outline-none focus:ring focus:ring-violet-300 hover:bg-violet-200 ' type="submit" disabled={state.submitting}>Send it!</button>
            </div>
            {/* <div className='grid  grid-cols-1 max-w-[500px] justify-center text-black'>
              <label className='font-bold text-white pb-2' htmlFor="email">Email Address</label>
              <input className='rounded-md focus:outline-none focus:ring focus:ring-violet-300 ' id="email" type="email" name="email" required={true}/>
              <p className='font-bold text-white pb-2 pt-2'>Full Name</p>
              <input className='rounded-md focus:outline-none focus:ring focus:ring-violet-300 ' id="Name" name="Name" required={true}/>
              <ValidationError prefix="Email"  field="email" errors={state.errors}/> 
              <p className='font-bold text-white pb-2 pt-2'>Message</p>
              <textarea className='border h-[150px] rounded-md focus:outline-none focus:ring focus:ring-violet-300 ' required={true} id="message" name="message"/>
              <ValidationError prefix="Message" field="message"errors={state.errors}/>
              <div className='pb-2 pt-5'>
                <button className='font-bold hover:bg-violet-200 text-violet-600 pb-2 pt-2 bg-white rounded-xl w-[100px] text-center focus:outline-none focus:ring focus:ring-violet-300 ' type="submit" disabled={state.submitting}>Send it!</button>
              </div>
            </div> */}
          </form>
          </div>
        </div>
      </div>
    </div>
  )
}
