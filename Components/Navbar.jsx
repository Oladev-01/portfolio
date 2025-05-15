'use client';
import Link from "next/link";
import { useState } from 'react';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="w-full bg-slate-900 h-20 flex justify-between items-center  px-4  md:px-10 ">
      
      <div className="text-white w-auto text-[2rem] md:text[2rem] font-bold">
       <h1>Highbee</h1> 
      </div>

      {/* Desktop Menu */}
      <ul className="hidden md:flex text-white gap-5">
  <li className="hover:text-amber-400 transition-colors duration-300"><a href="/">Home</a></li>
  <li className="hover:text-amber-400 transition-colors duration-300"><a href="/About">About</a></li>
  <li className="hover:text-amber-400 transition-colors duration-300"><a href="/Projects">Projects</a></li>
  <li className="hover:text-amber-400 transition-colors duration-300"><a href="/Contact">Contact</a></li>
</ul>


      {/* Mobile Menu Icon */}
      <div 
        className="md:hidden text-white text-3xl cursor-pointer"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? '✖' : '☰'}
      </div>

      {/* Mobile Dropdown Menu with animation */}
      <div
        className={`absolute top-20 left-0 w-full bg-black flex flex-col items-center text-white gap-5 overflow-hidden transition-all duration-500 ease-in-out ${
          menuOpen ? 'max-h-96 py-5' : 'max-h-0 py-0'
        } md:hidden z-50`}
      >
        <ul className="flex flex-col items-start gap-5  w-[100%] p-10">
          <li><a href="/">Home</a></li>
          <li><a href="/About">About</a></li>
          <li><a href="/Projects">Projects</a></li>
          <li><a href="/Contact">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
