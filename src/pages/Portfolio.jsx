import React from 'react'
import Footer from '../components/Footer'
import MUD from '../assets/mud.6d06844a.mp4'

export default function Portfolio() {
  return (
    <>
      <div className='w-screen pt-12 bg-gradient-to-br from-violet-600 to-gray-400 font-outfit pb-24 text-black'>
        <div className='text-white text-center py-10 px-5 md:px-24'>
          <h1 className='text-6xl md:text-7xl font-bold'>Lorem.</h1>
          <p className='text-3xl md:text-4xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Eos tenetur labore nobis quibusdam omnis perspiciatis illo earum consequuntur itaque aspernatur?</p>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-5 px-8'>
            <div className='border py-8 rounded-xl shadow-2xl bg-white'>
                <p className='text-6xl font-bold text-purple-500 text-center'>Multi-User Dungeon</p>
              <div className='grid place-items-center'>
                <p className='text-black mt-2 pb-10 px-5 text-center'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque voluptatibus reprehenderit illum nam voluptates dignissimos accusamus. Consequuntur iste ab magnam.</p>
                <ul className='list-disc pt-0 p-14 list-inside'>
                    <li>Worked on a team of 5 developers to create a rogue-like video game using <strong>Java</strong> over a week period.</li>
                    <li>Used Java to implement <strong>design patterns</strong> layed out within <strong><i>Design Patterns Elements of Reusable Object-Oriented Software</i></strong> as well as <strong>MVC</strong>.</li>
                    <li>Used <strong>JUnit</strong> to create extensive unit tests for the game</li>
                    <li>Used a <strong>PostgreSQL database</strong> to store player data.</li>
                 </ul>
                <video className='rounded-xl max-w-[250px] sm:max-w-[325px] md:max-w-[350px] lg:max-w-[550px] xl:max-w-[650px]' autoPlay={false} src={MUD} controls></video>
              </div>
            </div>
            <div className='border py-8 rounded-xl shadow-2xl bg-white'>
                <p className='text-6xl font-bold text-purple-500 text-center'>Webcheckers</p>
              <div className='grid place-items-center'>
                <p className='text-black mt-2 pb-10 px-5 text-center'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque voluptatibus reprehenderit illum nam voluptates dignissimos accusamus. Consequuntur iste ab magnam.</p>
                <ul className='list-disc pt-0 p-14 list-inside'>
                  <li>Worked with a team of five to create a web application for player-versus-player checkers in <strong>Java</strong> with
                  the <strong>Java Spark</strong> framework.</li>
                  <li>Followed <strong>Agile development processes</strong> resulting in economical development of the product.</li>
                  <li>Gave regular in-class demos to colleagues</li>
                  <li>Utilized object-oriented design principles to create to create clear, modular, maintainable code</li>
                </ul>
                <video className='rounded-xl max-w-[250px] sm:max-w-[325px] md:max-w-[350px] lg:max-w-[550px] xl:max-w-[650px]' autoPlay={false} src={MUD} controls></video>
              </div>
            </div>
            <div className='border py-8 rounded-xl shadow-2xl bg-white'>
                <p className='text-6xl font-bold text-purple-500 text-center'>Nutrikit</p>
              <div className='grid place-items-center'>
                <p className='text-black mt-2 pb-10 px-5 text-center'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque voluptatibus reprehenderit illum nam voluptates dignissimos accusamus. Consequuntur iste ab magnam.</p>
                <ul className='list-disc pt-0 p-14 list-inside'>
                  <li><strong>Full-stack</strong> web application developed over a 4 week period. 
                  Stack included <strong>PostgreSQL</strong>, <strong>Python</strong>, <strong>Flask</strong>, <strong>Javascript</strong>, and <strong>React.js</strong>.
                  </li>
                  <li>Used <strong>Pytest</strong> to create robust unit tests for the application</li>
                  <li>It is used to track and support a user's nutritional goals using the nutritional values of food
                      within a database. Additionally, users had the option of adding, removing, or modifying items
                      within the database and visualizing their goals with an interactive progress bar and nutrition label</li>
                  <li>Conducted weekly <strong>peer-to-peer code reviews</strong> over the course of the project</li>
               </ul>
                <video className='rounded-xl max-w-[250px] sm:max-w-[325px] md:max-w-[350px] lg:max-w-[550px] xl:max-w-[650px]' autoPlay={false} src={MUD} controls></video>
              </div>
            </div>
            <div className='border py-8 rounded-xl shadow-2xl bg-white'>
                <p className='text-6xl font-bold text-purple-500 text-center'>Lorem.</p>
              <div className='grid place-items-center'>
                <p className='text-black mt-2 pb-10 px-5 text-center'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque voluptatibus reprehenderit illum nam voluptates dignissimos accusamus. Consequuntur iste ab magnam.</p>
                <video className='rounded-xl max-w-[250px] sm:max-w-[325px] md:max-w-[350px] lg:max-w-[550px] xl:max-w-[650px]' autoPlay={false} src={MUD} controls></video>
              </div>
            </div>
        
        </div>
     </div>
     <Footer></Footer>
    </>
  )
}
