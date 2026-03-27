import React from 'react';
import { FiArrowUpRight } from 'react-icons/fi';

const Footer = () => {
  return (
    <footer className="w-full border-t border-white/10 bg-black pt-16 pb-8 px-6 lg:px-12 font-space selection:bg-white selection:text-black">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-12 mb-16">
        
        <div className="flex flex-col gap-4">
          <h4 className="cursor-pointer text-white text-2xl font-black uppercase tracking-widest">
            Algorithmus
          </h4>
          <p className="cursor-pointer text-neutral-500 text-sm font-jetbrains max-w-xs leading-relaxed">
            Fostering a culture of competitive programming
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-12 sm:gap-24">
          <div className="flex flex-col gap-4">
            <span className="cursor-pointer text-white font-bold uppercase tracking-widest text-xs mb-2">
              Resources
            </span>
            <a href="https://drive.google.com/file/d/1tw5_K73v231Bw7OAqgvClTyThmRfWxxE/view" className="cursor-pointer text-neutral-400 hover:text-white transition-colors text-sm font-jetbrains flex items-center gap-1 group">
              Intro to CP <FiArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
            </a>
            <a href="https://takeuforward.org/dsa/strivers-a2z-sheet-learn-dsa-a-to-z" className="cursor-pointer text-neutral-400 hover:text-white transition-colors text-sm font-jetbrains flex items-center gap-1 group">
              DSA Sheet<FiArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
            </a>
            <a href="https://www.tle-eliminators.com/cp-sheet" className="cursor-pointer text-neutral-400 hover:text-white transition-colors text-sm font-jetbrains flex items-center gap-1 group">
              CP Sheet <FiArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
            </a>
          </div>
          
          <div className="flex flex-col gap-4">
            <span className="cursor-pointer text-white font-bold uppercase tracking-widest text-xs mb-2">
              Platforms
            </span>
            <a href="https://codeforces.com/" className="cursor-pointer text-neutral-400 hover:text-white transition-colors text-sm font-jetbrains flex items-center gap-1 group">
              Codeforces<FiArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
            </a>
            <a href="https://www.codechef.com/" className="cursor-pointer text-neutral-400 hover:text-white transition-colors text-sm font-jetbrains flex items-center gap-1 group">
              Codechef<FiArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
            </a>
            <a href="https://leetcode.com/" className="cursor-pointer text-neutral-400 hover:text-white transition-colors text-sm font-jetbrains flex items-center gap-1 group">
              Leetcode<FiArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
            </a>
            <a href="https://atcoder.jp/" className="cursor-pointer text-neutral-400 hover:text-white transition-colors text-sm font-jetbrains flex items-center gap-1 group">
              Atcoder<FiArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
            </a>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto w-full flex flex-col sm:flex-row justify-between items-center pt-8 border-t border-white/10 gap-4">
        <p className="cursor-pointer text-neutral-600 text-xs font-jetbrains tracking-wider">
          © {new Date().getFullYear()} ALGORITHMUS. ALL RIGHTS RESERVED.
        </p>
        <div className="flex items-center gap-2">
          <span className="cursor-pointer w-2 h-2 rounded-full bg-neutral-600 animate-pulse"></span>
          <p className="cursor-pointer text-neutral-600 text-xs font-jetbrains uppercase tracking-wider">
            COUT &gt;&gt; ENDL
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;