import React, {useState} from "react";
import {MenuIcon, XIcon} from "@heroicons/react/outline";
import { BrowserRouter, Route, Link } from "react-router-dom";

const Navbar = () => {
    const [nav, setNav] = useState(false);
    const handleClick = () => setNav(!nav);

    return(
        <div className="w-screen sm:h-[50px] md:h-[80px] z-10 fixed drop-shadow-lg">
            <div className="px-2 w-full">
                <div className="flex justify-center py-8">
                    <ul className="hidden md:flex flex-row text-center rounded-2xl shadow-2xl p-2 px-8 bg-zinc-600 pb- text-white font-outfit">
                        <button><li className="hover:text-violet-200 px-8"><Link to="/">About</Link></li></button>
                        <button><li className="hover:text-violet-200 px-8"><Link to="/">About</Link></li></button>
                        <button><li className="hover:text-violet-200 px-8"><Link to="/">About</Link></li></button>
                        <button><li className="hover:text-violet-200 px-8"><Link to="/">About</Link></li></button>
                    </ul>
                </div>
                <div className="flex md:hidden mt-[-75px]" onClick={handleClick}>
                    {!nav ? <button><MenuIcon className="w-10 pt-5 animate-pulse text-black"/></button> : <button><XIcon className="text-black pt-5 w-10 animate-pulse py-5"/></button>}
                </div>
            </div>
            <div className="md:hidden font-outfit">
                <ul className={!nav ? "hidden" : "absolute bg-white  w-full h-screen px-8 py-10"}>
                <h2 className="py-1">PG</h2>
                <button><li className="hover:text-indigo-600 border-b-2 border-zinc-300 w-full text-2xl"><Link to="home"  smooth={true} offset={0} duration={500}> About</Link></li></button>
                <li className="hover:text-indigo-600 border-b-2 border-zinc-300 w-full text-2xl"><Link to="about"  smooth={true} offset={-200} duration={500}>Portfolio</Link></li>
                <li className="hover:text-indigo-600 border-b-2 border-zinc-300 w-full text-2xl"><Link to="about"  smooth={true} offset={-200} duration={500}>Resume</Link></li>
                <li className="hover:text-indigo-600 border-b-2 border-zinc-300 w-full text-2xl"><Link to="support"  smooth={true} offset={-50} duration={500}>Contact</Link></li>
                </ul>
            </div>
        </div>
    )
} 

export default Navbar;