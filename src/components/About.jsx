import React from 'react'

export default function About() {
  return (
    <div name='about' className='w-full h-full  py-20 font-outfit bg-zinc-600 text-white'>
        <div className='max-w-[1240px] mx-auto'>
            <div className='text-center px-8 md:px-2'>
                <h2 className='text-4xl md:text-5xl font-bold'> <a className='font-bold hover:text-violet-200'  href="https://www.youtube.com/watch?v=rEq1Z0bjdwc&ab_channel=ShortClips" target="_blank" rel="noreferrer noopener">Hello there!</a>  Welcome to my website.</h2>
                <p className='text-2xl md:text-3xl text-white py-6 pb-10'>My name is Phil Ganem and I'm a student software engineer, activist, and coffee snob based out of Rochester, New York. I'm currently 
                I am currently working my way through the Rochester Institute of Technology's five year software engineering program.</p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-4 px-6 md:px-2 text-center'>
                <div className='border py-8 rounded-xl shadow-2xl bg-white'>
                    <p className='text-5xl lg:text-6xl font-bold text-purple-500'>Lorem.</p>
                    <p className='text-black mt-2 px-5 py-2'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias neque magnam necessitatibus hic, qui odit nisi eligendi eaque obcaecati totam deleniti dolor at distinctio sequi quis, modi accusamus eius vero. Ea excepturi, placeat culpa nihil necessitatibus a in quo dolores suscipit quas similique maiores autem sit, voluptate iure, modi dolorem dolor porro ducimus optio ullam. Dolorum assumenda dolores ipsum dolorem cumque sed non pariatur explicabo, veritatis quo aut eligendi sit obcaecati reprehenderit? Dignissimos non velit, excepturi cupiditate consectetur veniam quod!</p>
                </div>
                <div className='border py-8 rounded-xl shadow-2xl bg-white'>
                    <p className='text-5xl lg:text-6xl font-bold text-purple-500'>Lorem.</p>
                    <p className='text-black mt-2 px-2 py-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae sunt molestiae sed itaque nemo sint architecto laboriosam dolore exercitationem consectetur, ab magnam perferendis accusamus unde beatae in error est amet porro saepe quod nam tempora suscipit dolor. Nam temporibus consectetur similique voluptatem distinctio provident alias exercitationem hic molestias ut, ipsum laborum architecto fuga cumque eum id! Dignissimos et minima similique atque facilis reiciendis. Beatae aliquam, neque, adipisci aperiam necessitatibus saepe provident consequuntur velit quibusdam quo rem fugit qui iusto quos!</p>
                </div>
                <div className='border py-8 rounded-xl shadow-2xl bg-white'>
                    <p className='text-5xl lg:text-6xl font-bold text-purple-500'>Lorem.</p>
                    <p className='text-black mt-2 px-2 py-2'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Explicabo adipisci sapiente itaque repudiandae aut, perferendis qui rerum eius? Ab magnam non cum, fugiat quidem ducimus asperiores voluptatibus excepturi, velit incidunt illo. Blanditiis facere accusamus consectetur assumenda, eos dignissimos aliquid nostrum enim. Nisi quia laudantium sed natus neque quae sequi magni deleniti commodi, voluptatibus omnis molestias corrupti assumenda maiores laborum eos a rerum! Ipsam laborum quaerat animi iste dignissimos? Quaerat, totam consectetur aliquid reiciendis porro illo inventore. Odit reprehenderit vel nam!</p>
                </div>
            </div>
            
        </div>
    </div>
  )
}