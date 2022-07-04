import React from 'react'
import {
    FaGithub,
    FaTwitter,
    FaLinkedin,
    FaCode
} from 'react-icons/fa'

import{
  MdEmail
} from 'react-icons/md'

export default function Footer() {
  return (
    <div className='w-screen h-full bg-zinc-900 py-4 pb-8 px-2 font-outfit'>
        <div className=' border-t-2 border-white flex flex-col max-w-[1240px] px-2 mx-auto justify-between sm:flex-row text-center text-white'>
        <p className='font-bold'>© 2022 Phil Ganem </p>
            <div>
            <div className='flex justify-between sm:w-[300px] pt-2 text-2xl'>
                <a className="hover:text-indigo-200" href="https://github.com/SwiftWindz"><FaGithub /></a>
                <a className="hover:text-indigo-200" href="https://github.com/SwiftWindz/personal-page"><FaCode /></a>
                <a className="hover:text-indigo-200" href="https://www.linkedin.com/in/phil-ganem/"><FaLinkedin /></a>
                <a className="hover:text-indigo-200" href="https://twitter.com/PhilBreaksCode"><FaTwitter /></a>
                <a className="hover:text-indigo-200" aria-disabled="false" target="_self" href="mailto:philthesoftdev@gmail.com?subject=Hello there!"><MdEmail /></a>
            </div>
            </div>
        </div>
    </div>
  )
}
