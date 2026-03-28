import React, { useState } from 'react';
import { FiMail, FiMenu, FiX, FiTerminal } from 'react-icons/fi';
import { FaGithub, FaInstagram } from 'react-icons/fa';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed w-full top-0 z-50 border-b border-white/10 bg-black/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center gap-3 cursor-pointer group">
            <div className="p-2 black rounded-xl group-hover:border-white transition-colors duration-300">
              <img src="./logo.png" alt="logo" className='w-10' />
            </div>
            <span className="text-xl font-bold tracking-widest text-white uppercase">Algorithmus</span>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <a href="#about" className="text-sm font-medium text-neutral-400 hover:text-white transition-colors">About</a>
            <a href="#events" className="text-sm font-medium text-neutral-400 hover:text-white transition-colors">Events</a>
            <a href="#members" className="text-sm font-medium text-neutral-400 hover:text-white transition-colors">Members</a>
            
            <div className="h-4 w-px bg-white/20"></div>
            
            <div className="flex items-center space-x-5">
              <a href="algorithmus.iiitkota@gmail.com"  className="text-neutral-400 hover:text-white transition-colors">
                <FiMail className="w-5 h-5" />
              </a>
              <a href="https://github.com/Algorithmus-IIITK" target='_blank' className="text-neutral-400 hover:text-white transition-colors">
                <FaGithub className="w-5 h-5" />
              </a>
              <a href="https://www.instagram.com/algorithmus.iiitkota/" target='_blank' className="text-neutral-400 hover:text-white transition-colors">
                <FaInstagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div className="md:hidden">
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} 
              className="p-2 text-neutral-400 hover:text-white transition-colors cursor-pointer"
            >
              {isMobileMenuOpen ? <FiX className="w-6 h-6" /> : <FiMenu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden bg-neutral-950 border-b border-white/10 absolute w-full backdrop-blur-xl">
          <div className="px-6 py-4 space-y-4 flex flex-col">
            <a href="#about" onClick={() => setIsMobileMenuOpen(false)} className="text-neutral-300 hover:text-white py-2 tracking-wide">About</a>
            <a href="#events" onClick={() => setIsMobileMenuOpen(false)} className="text-neutral-300 hover:text-white py-2 tracking-wide">Events</a>
            <a href="#members" onClick={() => setIsMobileMenuOpen(false)} className="text-neutral-300 hover:text-white py-2 tracking-wide">Members</a>
            
            <div className="flex space-x-6 pt-4 border-t border-white/10">
              <a href="algorithmus.iiitkota@gmail.com" className="text-neutral-400 hover:text-white"><FiMail className="w-5 h-5" /></a>
              <a href="https://github.com/Algorithmus-IIITK" target='_blank' className="text-neutral-400 hover:text-white"><FaGithub className="w-5 h-5" /></a>
              <a href="https://www.instagram.com/algorithmus.iiitkota/" target='_blank' className="text-neutral-400 hover:text-white"><FaInstagram className="w-5 h-5" /></a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;