import React, {useState} from "react";
import {MenuIcon, XIcon} from "@heroicons/react/outline";
import { Link } from "react-router-dom";

const Navbar = () => {
    const [nav, setNav] = useState(false);
    const handleClick = () => setNav(!nav);

    return(
        <div className="w-screen sm:h-[50px] md:h-[80px] z-10 fixed drop-shadow-xl">
            <div className="px-2 w-full">
                <div className="flex justify-center py-8">
                    <ul className="hidden md:flex flex-row text-center rounded-2xl shadow-2xl p-2 px-8 bg-zinc-800 text-white font-outfit">
                        <button><li className="hover:text-indigo-200 px-8"><Link to="/">About</Link></li></button>
                        <button><li className="hover:text-indigo-200 px-8"><Link to="/projects">Projects</Link></li></button>
                        <button><li className="hover:text-indigo-200 px-8"><Link to='/resume'>Resume</Link></li></button>
                        <button><li className="hover:text-indigo-200 px-8"><Link to="/contact">Contact</Link></li></button>
                    </ul>
                </div>
                <div className="flex md:hidden mt-[-75px]" onClick={handleClick}>
                    {!nav ? 
                    <div className="pt-5">
                        <button><MenuIcon className="w-10 animate-pulse text-zinc-400"/></button>
                    </div> 
                      : 
                    <div className="w-screen sm:h-[50px] md:h-[80px] z-10 fixed drop-shadow-lg">
                        <button><XIcon className="text-zinc-400 pt-5 w-10 animate-pulse py-5"/></button>
                    </div>}
                </div>
            </div>
            <div className="md:hidden font-outfit">
            <div className={!nav ? "hidden" : "absolute bg-zinc-800 w-screen h-screen text-white"}>
                <ul className={"px-8 pt-16"}>
                    <h2 className="py-1 font-bold">PG</h2>
                    <li className="hover:text-indigo-200 border-zinc-300 w-full text-2xl"><button onClick={handleClick}><Link to="/">About</Link></button></li>
                    <li className="hover:text-indigo-200 border-zinc-300 w-full text-2xl"><button onClick={handleClick}><Link to="/projects">Projects</Link></button></li>
                    <li className="hover:text-indigo-200 border-zinc-300 w-full text-2xl"><button onClick={handleClick}><Link to="/resume">Resume</Link></button></li>
                    <li className="hover:text-indigo-200 border-zinc-300 w-full text-2xl"><button onClick={handleClick}><Link to="/contact">Contact</Link></button></li>
                </ul>
            </div>
            </div>
        </div>
    )
} 

export default Navbar;