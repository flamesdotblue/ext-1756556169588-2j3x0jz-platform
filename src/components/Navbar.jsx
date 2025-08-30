import React from 'react';
import { Gamepad2, Github, Linkedin } from 'lucide-react';

export default function Navbar() {
  return (
    <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-black/40 bg-black/30 border-b border-white/10">
      <div className="mx-auto max-w-7xl px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="p-2 bg-gradient-to-br from-fuchsia-600 to-violet-700 border-2 border-white/20 shadow-[4px_4px_0_0_#000]">
            <Gamepad2 className="w-5 h-5" />
          </div>
          <span className="font-black tracking-widest uppercase text-sm sm:text-base" style={{textShadow:'2px 2px 0 #000'}}>RetroDev</span>
        </div>
        <nav className="flex items-center gap-3">
          <a href="#skills" className="px-3 py-2 border-2 border-white/30 hover:border-white transition-colors bg-black/40 shadow-[4px_4px_0_0_#000] font-semibold tracking-wide uppercase text-xs">Skills</a>
          <a href="#contact" className="px-3 py-2 border-2 border-pink-500/50 hover:border-pink-400 transition-colors bg-pink-600/30 shadow-[4px_4px_0_0_#000] font-semibold tracking-wide uppercase text-xs">Contact</a>
          <div className="hidden sm:flex items-center gap-2 pl-2 ml-2 border-l border-white/10">
            <a href="https://github.com" aria-label="GitHub" className="p-2 border-2 border-white/20 hover:border-white/60 transition-colors bg-black/40 shadow-[3px_3px_0_0_#000]"><Github className="w-4 h-4"/></a>
            <a href="https://linkedin.com" aria-label="LinkedIn" className="p-2 border-2 border-white/20 hover:border-white/60 transition-colors bg-black/40 shadow-[3px_3px_0_0_#000]"><Linkedin className="w-4 h-4"/></a>
          </div>
        </nav>
      </div>
    </header>
  );
}
