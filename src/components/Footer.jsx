import React from 'react'
import {
    FaFacebook,
    FaGithub,
    FaInstagram,
    FaTwitter,
    FaLinkedin,
} from 'react-icons/fa'

export default function Footer() {
  return (
    <div className='w-screen h-full bg-zinc-700 py-7 px-2'>
        <div className=' border-t-2 border-white flex flex-col max-w-[1240px] px-2 mx-auto justify-between sm:flex-row text-center text-white'>
            <p className='py-4'>Phil Ganem, 2022</p>
            <div className='flex justify-between sm:w-[300px] pt-4 text-2xl'>
                <a className="hover:text-violet-200" href="https://github.com/SwiftWindz"><FaGithub /></a>
                <a className="hover:text-violet-200" href="https://www.linkedin.com/in/phil-ganem/"><FaLinkedin /></a>
                <a className="hover:text-violet-200" href="https://www.instagram.com/im_just_phil/"><FaInstagram /></a>
                <a className="hover:text-violet-200" href="https://twitter.com/PhilBreaksCode"><FaTwitter /></a>
            </div>
        </div>
    </div>
  )
}
