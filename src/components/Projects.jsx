import React from 'react' 
import MUD from '../assets/mud.mp4'
import Checkers from '../assets/checkers.mp4'
import Cocktail from '../assets/cocktail.png'


export default function Projects() {
  return (
    <div className='w-screen font-outfit h-full bg-gradient-to-tr from-zinc-800 to-indigo-600 pb-20'>
    <div className='pt-12 pb-24 text-black'>
        <div className='text-white text-center py-10 px-5 md:px-24'>
          <h1 className='text-5xl md:text-7xl font-bold'>My Projects</h1>
          <p className='text-3xl md:text-4xl pt-4'>Some new, some old, and all of them learning experiences. I present to you a list of both my
          personal and school projects as well as key information about all of them. Enjoy!</p>
        </div>
        <div className='grid grid-cols-1 lg:grid-cols-3 px-8 gap-6 place-items-center'>
            
            <div className=" pt-8">
              <div className="rounded-lg shadow-lg bg-white max-w-xl">
                <video className='rounded-t-lg' autoPlay={false} src={MUD} controls></video> 
                <div className="p-6">
                  <h5 className="text-indigo-600  text-xl font-bold mb-2 text-center ">Multi-User Dungeon</h5>
                  <p className="text-gray-700 text-base text-center">
                  Multi-User Dungeon, or MUD, is a 2D rogue-like game. Users could create and use accounts to save their progress. The game itself had two modes, endless and premade mode. In endless, players would navigate an endless procedural generated dungeon in search of loot to increase their profile score. They could quit and return at any time to the same map. In premade mode, players could choose from a list of premade dungeons with the ultimate goal of finding the goal room. Both modes had players fulfilling the aforementioned while encountering different enemies and obstacles.
                  </p>
                  <div className='grid grid-cols-2 lg:grid-cols-4 gap-5 p-6'>
                  <h2 className='bg-indigo-200 px-2 rounded-lg text-center shadow-sm text-sm'>Java</h2>
                    <h2 className='bg-indigo-200 px-2 rounded-lg text-center shadow-sm text-sm'>JavaFX</h2>
                    <h2 className='bg-indigo-200 px-2 rounded-lg text-center shadow-sm text-sm'>JUnit</h2>
                    <h2 className='bg-indigo-200 px-2 rounded-lg text-center shadow-sm text-sm'>PostgreSQL</h2>
                  </div>
                  <div className=' text-center grid'>
                    <button className='bg-indigo-500 hover:text-indigo-200 px-2 rounded-lg text-center shadow-sm text-lg text-white'><a target="_blank" rel="noreferrer noopener" href="https://github.com/SwiftWindz/Dungeon">View Code</a></button>
                  </div> 
                </div>
              </div>
            </div>


            <div className=" pt-8">
              <div className="rounded-lg shadow-lg bg-white max-w-xl">
                <img className="rounded-t-lg" src="http://placehold.jp/6366f1/ffffff/780x520.png?text=Placeholder" alt=""/>
                <div className="p-6">
                  <h5 className="text-indigo-600  text-xl font-bold mb-2 text-center ">Nutrikit</h5>
                  <p className="text-gray-700 text-base text-center">
                    Nutrikit is a full-stack web application that allows users to track their caloric intake and create meal plans. Users have the ability to create caloric and nutritional goals that they wished to meet or pick from preset ones provided to them.
                    From here, users could select food to add to their meal plan and view the nutritional values of said food items provided from a database. The application would alert them if the selected foods did not meet their plan.
                    Users could also submit their own foods to the database for future use in their meal plans
                  </p>
                  <div className='grid grid-cols-2 lg:grid-cols-4 gap-5 p-6'>
                    <h2 className='bg-indigo-200 px-2 rounded-lg text-center shadow-sm text-sm'>Python</h2>
                    <h2 className='bg-indigo-200 px-2 rounded-lg text-center shadow-sm text-sm'>Flask</h2>
                    <h2 className='bg-indigo-200 px-2 rounded-lg text-center shadow-sm text-sm'>React.js</h2>
                    <h2 className='bg-indigo-200 px-2 rounded-lg text-center shadow-sm text-sm'>PostgreSQL</h2>
                  </div>
                  <div className=' text-center grid'>
                    <button className='bg-indigo-500 hover:text-indigo-200 px-2 rounded-lg text-center shadow-sm text-lg text-white'><a target="_blank" rel="noreferrer noopener" href="https://github.com/SwiftWindz/NutritionApp">View Code</a></button>
                  </div>
                </div>
              </div>
            </div>

            <div className=" pt-8">
              <div className="rounded-lg shadow-lg bg-white max-w-xl">
                <video className='rounded-t-lg' autoPlay={false} src={Checkers} controls></video> 
                <div className="p-6">
                  <h5 className="text-indigo-600  text-xl font-bold mb-2 text-center">Webcheckers</h5>
                  <p className="text-gray-700 text-base text-center">
                    Webcheckers is an online multiplayer game of checkers. Players may make an account and select from other online players to play against.
                    The game is operated with the same rules as American Checkers. The game also supports hint functionality, which allows the player to see the best move against their opponent
                    and view the rules at any time.
                  </p>
                  <div className='grid grid-cols-2 lg:grid-cols-3 gap-5 p-6 justify-center  '>
                    <h2 className='bg-indigo-200 px-2 rounded-lg text-center shadow-sm text-sm'>Java</h2>
                    <h2 className='bg-indigo-200 px-2 rounded-lg text-center shadow-sm text-sm'>Java Spark</h2>
                    <h2 className='bg-indigo-200 px-2 rounded-lg text-center shadow-sm text-sm'>JUnit</h2>
                  </div>
                  <div className=' text-center grid'>
                    <button className='bg-indigo-500 hover:text-indigo-200 px-2 rounded-lg text-center shadow-sm text-lg text-white'><a target="_blank" rel="noreferrer noopener" href="https://github.com/SwiftWindz/Online-Checkers">View Code</a></button>
                  </div>
                </div>
              </div>
            </div>

            <div className=" pt-8">
              <div className="rounded-lg shadow-lg bg-white max-w-xl">
                <img className="rounded-t-lg" src={Cocktail} alt=""/>
                <div className="p-6">
                  <h5 className="text-indigo-600  text-xl font-bold mb-2 text-center">Cocktail Cabinet</h5>
                  <p className="text-gray-700 text-base text-center">
                    Cocktail Cabinet is a web application where users can find their favorite cocktail recipes
                    from CocktailDB and be directed to a place where they can obtain the ingredients. Users can also have the application select a random cocktail recipe for them to try.
                    
                  </p>
                  <div className='grid grid-cols-2 lg:grid-cols-3 gap-5 p-6 justify-center  '>
                    <h2 className='bg-indigo-200 px-2 rounded-lg text-center shadow-sm text-sm'>React.js</h2>
                    <h2 className='bg-indigo-200 px-2 rounded-lg text-center shadow-sm text-sm'>TailwindCSS</h2>
                    <h2 className='bg-indigo-200 px-2 rounded-lg text-center shadow-sm text-sm'>Axios</h2>
                  </div>
                  <div className=' text-center grid gap-4'>
                    <button className='bg-indigo-500 hover:text-indigo-200 px-2 rounded-lg text-center shadow-sm text-lg text-white'><a target="_blank" rel="noreferrer noopener" href="https://github.com/SwiftWindz/Cocktail-Cabinet">View Code</a></button>
                    <button className='bg-indigo-500 hover:text-indigo-200 px-2 rounded-lg text-center shadow-sm text-lg text-white'><a target="_blank" rel="noreferrer noopener" href="https://swiftwindz.github.io/Cocktail-Cabinet/">View Website</a></button>
                  </div>
                </div>
              </div>
            </div>

        </div>
     </div>
    </div>
  )
}
