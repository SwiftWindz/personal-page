import React from 'react'

export default function Projects() {
  return (
    <div className='w-screen h-full bg-gradient-to-tr from-zinc-800 to-indigo-600 pb-20'>
    <div className='pt-12 font-outfit pb-24 text-black'>
        <div className='text-white text-center py-10 px-5 md:px-24'>
          <h1 className='text-6xl md:text-7xl font-bold'>My Projects</h1>
          <p className='text-3xl md:text-4xl pt-4'>Some new, some old, and all of them learning experiences. I present to you a list of both my
          personal and school projects as well as key information about all of them. Enjoy!</p>
        </div>
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-5 px-8'>
            <div className='border py-8 rounded-2xl shadow-2xl bg-white un'>
                <p className='font-bold text-indigo-600 text-center underline text-4xl lg:text-6xl'>Multi-User Dungeon</p>
              <div className='grid place-items-center'>
                <p className='text-black mt-4 pb-10 px-5 text-center'>
                    Multi-User Dungeon, or MUD, is a 2D rouge-like game. Users could create and use accounts to save their progress. The game itself had two mode, endless and premade mode. In endless, players 
                    would navagate an endless procedurally generated dungeon in search of loot to increase their profile score. They could quit and return at anytime to the same map. In premade mode, players could choose from a list of premade dungeons with
                    with the ultimate goal of finding the goal room. Both modes had players fulfilling the aforementioned while encountering different enemies and obstacles.  
                </p>
                {/* <ul className='list-disc pt-0 p-14 list-inside'>
                    <li>Worked on a team of 5 developers to create a rogue-like video game using <strong>Java</strong> over a week period.</li>
                    <li>Used Java to implement <strong>design patterns</strong> layed out within <strong><i>Design Patterns Elements of Reusable Object-Oriented Software</i></strong> as well as <strong>MVC</strong>.</li>
                    <li>Used <strong>JUnit</strong> to create extensive unit tests for the game</li>
                    <li>Used a <strong>PostgreSQL database</strong> to store player data.</li>
                 </ul> */}
                {/* <video className='rounded-xl max-w-[250px] sm:max-w-[325px] md:max-w-[350px] lg:max-w-[550px] xl:max-w-[650px]' autoPlay={false} src={MUD} controls></video> */}
                <div className='grid grid-cols-2 lg:grid-cols-4 gap-5 px-8'>
                 <h2 className='bg-indigo-200 px-2 rounded-lg text-center shadow-sm'>Java</h2>
                 <h2 className='bg-indigo-200 px-2 rounded-lg text-center shadow-sm'>JavaFX</h2>
                 <h2 className='bg-indigo-200 px-2 rounded-lg text-center shadow-sm'>JUnit</h2>
                 <h2 className='bg-indigo-200 px-2 rounded-lg text-center shadow-sm'>PostgreSQL</h2>
                </div>
              </div>
            </div>
            <div className='border py-8 rounded-2xl shadow-2xl bg-white'>
                <p className='text-4xl lg:text-6xl font-bold text-indigo-600 text-center underline'>Webcheckers</p>
              <div className='grid place-items-center'>
                <p className='text-black mt-4 pb-10 px-5 text-center'>
                    Webcheckers is an online multiplayer game of checkers. Players may make an account and select from other online players to play against.
                    The game is operated with the same rules as American Checkers. The game also supports hint functionality, which allows the player to see the best move againt their opponent
                    and view the rules at any time.
                </p>
                {/* <ul className='list-disc pt-0 p-14 list-inside'>
                  <li>Worked with a team of five to create a web application for player-versus-player checkers in <strong>Java</strong> with
                  the <strong>Java Spark</strong> framework.</li>
                  <li>Followed <strong>Agile development processes</strong> resulting in economical development of the product.</li>
                  <li>Gave regular in-class demos to colleagues</li>
                  <li>Utilized object-oriented design principles to create to create clear, modular, maintainable code</li>
                </ul> */}
                {/* <video className='rounded-xl max-w-[250px] sm:max-w-[325px] md:max-w-[350px] lg:max-w-[550px] xl:max-w-[650px]' autoPlay={false} src={MUD} controls></video> */}
                <div className='grid grid-cols-2 lg:grid-cols-3 gap-5 px-8'>
                 <h2 className='bg-indigo-200 px-2 rounded-lg text-center shadow-sm'>Java</h2>
                 <h2 className='bg-indigo-200 px-2 rounded-lg text-center shadow-sm'>Java Spark</h2>
                 <h2 className='bg-indigo-200 px-2 rounded-lg text-center shadow-sm'>JUnit</h2>
                </div>
              </div>
            </div>
            <div className='border py-8 rounded-2xl shadow-2xl bg-white'>
                <p className='text-4xl lg:text-6xl font-bold text-indigo-600 text-center underline'>Nutrikit</p>
              <div className='grid place-items-center'>
                <p className='text-black mt-4 pb-10 px-5 text-center'>
                    Nutrikit is a full-stack web application that allows users to track their caloric intake and create meal plans. Users have the ability to create caloric and nutritional goals that they wished to meet or pick from preset ones provided to them.
                    From here, users could select food to add to their meal plan and view the nutritional values of said food items provided from a database. The application would alert them if the selected foods did not meet their plan.
                    Users could also submit their own foods to the database for future use in their meal plans
                </p>
                {/* <ul className='list-disc pt-0 p-14 list-inside'>
                  <li><strong>Full-stack</strong> web application developed over a 4 week period. 
                  Stack included <strong>PostgreSQL</strong>, <strong>Python</strong>, <strong>Flask</strong>, <strong>Javascript</strong>, and <strong>React.js</strong>.
                  </li>
                  <li>Used <strong>Pytest</strong> to create robust unit tests for the application</li>
                  <li>It is used to track and support a user's nutritional goals using the nutritional values of food
                      within a database. Additionally, users had the option of adding, removing, or modifying items
                      within the database and visualizing their goals with an interactive progress bar and nutrition label</li>
                  <li>Conducted weekly <strong>peer-to-peer code reviews</strong> over the course of the project</li>
               </ul> */}
                {/* <video className='rounded-xl max-w-[250px] sm:max-w-[325px] md:max-w-[350px] lg:max-w-[550px] xl:max-w-[650px]' autoPlay={false} src={MUD} controls></video> */}
                <div className='grid grid-cols-2 lg:grid-cols-4 gap-5 px-8'>
                 <h2 className='bg-indigo-200 px-2 rounded-lg text-center shadow-sm'>Python</h2>
                 <h2 className='bg-indigo-200 px-2 rounded-lg text-center shadow-sm'>Flask</h2>
                 <h2 className='bg-indigo-200 px-2 rounded-lg text-center shadow-sm'>React.js</h2>
                 <h2 className='bg-indigo-200 px-2 rounded-lg text-center shadow-sm'>PostgreSQL</h2>
                </div>
              </div>
            </div>
            {/* <div className='border py-8 rounded-xl shadow-2xl bg-white'>
                <p className='text-6xl font-bold text-indigo-600 text-center underline'>Lorem.</p>
              <div className='grid place-items-center'>
                <p className='text-black mt-2 pb-10 px-5 text-center'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque voluptatibus reprehenderit illum nam voluptates dignissimos accusamus. Consequuntur iste ab magnam.</p>
                <video className='rounded-xl max-w-[250px] sm:max-w-[325px] md:max-w-[350px] lg:max-w-[550px] xl:max-w-[650px]' autoPlay={false} src={MUD} controls></video>
              </div>
            </div>
         */}
        </div>
     </div>
    </div>
  )
}
