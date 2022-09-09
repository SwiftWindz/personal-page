import React from 'react'
import {
    FaGraduationCap,
    FaLaptopCode,
    FaBook
} from 'react-icons/fa'

export default function About() {
  return (
    <div name='about' className='w-screen h-full  py-20 font-outfit bg-zinc-800 text-white'>
        <div className='max-w-[1500px] mx-auto'>
            <div className='text-center px-8 md:px-2 '>
                <h2 className='text-4xl md:text-5xl font-bold'> <a className='font-bold hover:text-violet-200'  href="https://www.youtube.com/watch?v=rEq1Z0bjdwc&ab_channel=ShortClips" target="_blank" rel="noreferrer noopener">Hello there!</a>  Welcome to my website.</h2>
                <p className='text-2xl md:text-3xl text-white py-6 pb-10'>My name is Phil Ganem and I'm a student software engineer, activist, and coffee snob based out of Rochester, New York. 
                I am currently working my way through the Rochester Institute of Technology's five year software engineering program.</p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-4 px-6 md:px-2 text-center '>
                <div className=' py-8 text-white '>
                    <FaGraduationCap className='inline-flex text-4xl md:text-5xl' />
                    <p className='text-5xl lg:text-6xl font-bold text-[#8b5cf6]'>Education</p>
                    
                    <div className='px-2'> 
                        <div className='pt-2 pb-2 border-b-2 border-b-stone-700'>
                            <h2 className='font-bold'>Rochester Institute of Technology</h2>
                            <h3>Bachelor of Science Software Engineering 2025</h3>
                            <h3>GPA: 3.69 / 4.00 </h3>
                        </div>
                        <div className='pt-2'>
                            <p>Noteworthy Courses: Engineering of Software Subsystems (<strong>SWEN262</strong>), 
                            Intro to Software Engineering (<strong>SWEN261</strong>), 
                            Personal Software Engineering (<strong>SWEN250</strong>), 
                            Web Engineering (<strong>SWEN344</strong>), 
                            Software Process and Project Managment (<strong>SWEN256</strong>), 
                            Software Developement and Problem Solving I (<strong>SWEN123</strong>), 
                            Software Developement and Problem Solving II (<strong>SWEN124</strong>), 
                            Software Engineering Freshman Seminar (<strong>SWEN101</strong>).
                            </p>
                        </div>
                    </div>                 

                {/* <p className='text-black pt-2 p-2'>
                        As you might have seen, I am a student at the Rochester Institute of Technology. I am currently in my third year of their five year software engineering program. I am expected to graduate 
                        in May 2025.
                    </p>
                    <p className='text-black pt-2 p-2'>Courses of note:
                    Noteworthy Courses: Engineering of Software Subsystems (<strong>SWEN262</strong>), 
                Intro to Software Engineering (<strong>SWEN261</strong>), 
                Personal Software Engineering (<strong>SWEN250</strong>), 
                Web Engineering (<strong>SWEN344</strong>), 
                Software Process and Project Managment (<strong>SWEN256</strong>), 
                Software Developement and Problem Solving I (<strong>SWEN123</strong>), 
                Software Developement and Problem Solving II (<strong>SWEN124</strong>), 
                Software Engineering Freshman Seminar (<strong>SWEN101</strong>).</p> */}
                </div>
                <div className=' py-8'>
                    <FaLaptopCode className='text-4xl md:text-5xl inline-flex' />
                    <p className='text-5xl lg:text-6xl font-bold text-[#8b5cf6]'>Experience</p>
                    <div className='px-2 '> 
                        <div className='pt-2 pb-2 border-b-2 border-b-stone-700'>
                            <h2 className='font-bold'>Rochester Institute of Technology</h2>
                            <h3>Software Engineering Course Assistant</h3>
                            <h3>Aug 2021 to Present</h3>
                        </div>
                        <div className='pt-2'>
                            <ul className='list-disc list-inside'>
                                <li>
                                Grade assignments and exams in Python and Java for Rochester Institute of Technology's Software
                                Engineering and Problem Solving 1 & 2 course sequence.
                                </li>
                                <li>
                                Work one-on-one with students during and after class time to guide students to an understanding of course content.
                                </li>
                            </ul>
                         
                        </div>
                    </div>     
                    
                </div>
                <div className='py-8  justify-center'>
                    <FaBook className='text-4xl md:text-5xl inline-flex' />
                    <p className='text-5xl lg:text-6xl font-bold text-[#8b5cf6]'>Expertise</p>
                    <div className='pt-2 pb-2 border-b-2 border-b-stone-700'>
                        <h2 className='font-bold'>Technologies and Skills</h2>
                        <p>Being a software engineer also means being a full time student. Heres what I've learned...</p>
                    </div>
                    <div className='px-2'> 
                        <div className='pt-2'>
                            <h2 className='font-bold'>Technology that I am proficient with...</h2>
                        </div>
                        <div className='pt-2'>
                            <h1>Java, Python, C, Javascript, REACT.js, HTML, CSS, Flask, SQL, and TailwindCSS</h1>
                        </div>

                        <div className='mt-2 pt-2 border-t-2 border-t-stone-700'>
                            <h2 className='font-bold'>Technology that I am learning...</h2>
                        </div>
                        <div className='pt-2'>
                            <h1>Rust, Typescript, and MongoDB</h1>
                        </div>
                    </div>  
                </div>
            </div>
            
        </div>
    </div>
  )
}