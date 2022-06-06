import React from 'react'

export default function About() {
  return (
    <div name='about' className='w-full py-20 font-outfit bg-zinc-600 text-white'>
        <div className='max-w-[1240px] mx-auto'>
            <div className='text-center px-8 md:px-2'>
                <h2 className='text-4xl md:text-5xl font-bold'> <a className='font-bold hover:text-violet-200'  href="https://www.youtube.com/watch?v=rEq1Z0bjdwc&ab_channel=ShortClips" target="_blank" rel="noreferrer noopener">Hello there!</a>  Welcome to my website.</h2>
                <p className='text-2xl md:text-3xl text-white py-6'>I'm a student software engineer based out of Rochester, New York. </p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-4 px-6 md:px-2 text-center'>
                <div className='border py-8 rounded-xl shadow-2xl bg-white'>
                    <p className='text-6xl font-bold text-purple-500'>Education</p>
                    <p className='text-black mt-2 px-5 py-2'>As you probably have already seen, I am a student at the Rochester Institute of Technology.
                    I am currently enrolled in their five year software engineering program with an expected graduation of May 2025.</p>
                </div>
                <div className='border py-8 rounded-xl shadow-2xl bg-white'>
                    <p className='text-6xl font-bold text-purple-500'>Work Experience</p>
                    <p className='text-black mt-2 px-2 py-2'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque voluptatibus reprehenderit illum nam voluptates dignissimos accusamus. Consequuntur iste ab magnam.</p>
                </div>
                <div className='border py-8 rounded-xl shadow-2xl bg-white'>
                    <p className='text-6xl font-bold text-purple-500'>Lorem.</p>
                    <p className='text-black mt-2 px-2 py-2'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque voluptatibus reprehenderit illum nam voluptates dignissimos accusamus. Consequuntur iste ab magnam.</p>
                </div>
                <div className='border py-8 rounded-xl shadow-2xl bg-white'>
                    <p className='text-6xl font-bold text-purple-500'>Lorem.</p>
                    <p className='text-black mt-2 px-2 py-2'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque voluptatibus reprehenderit illum nam voluptates dignissimos accusamus. Consequuntur iste ab magnam.</p>
                </div>
                <div className='border py-8 rounded-xl shadow-2xl bg-white'>
                    <p className='text-6xl font-bold text-purple-500'>Lorem.</p>
                    <p className='text-black mt-2 px-2 py-2'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque voluptatibus reprehenderit illum nam voluptates dignissimos accusamus. Consequuntur iste ab magnam.</p>
                </div>
                <div className='border py-8 rounded-xl shadow-2xl bg-white'>
                    <p className='text-6xl font-bold text-purple-500'>Lorem.</p>
                    <p className='text-black mt-2 px-2 py-2'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque voluptatibus reprehenderit illum nam voluptates dignissimos accusamus. Consequuntur iste ab magnam.</p>
                </div>
            </div>
            
        </div>
    </div>
  )
}