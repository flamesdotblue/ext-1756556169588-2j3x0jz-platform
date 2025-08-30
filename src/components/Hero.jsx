import React from 'react';
import Spline from '@splinetool/react-spline';
import { Rocket } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/OIGfFUmCnZ3VD8gH/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-[#0b0b12]" />
      <div className="relative z-10 mx-auto max-w-7xl px-4 pt-28 pb-20 flex flex-col items-start">
        <span className="pointer-events-auto mb-4 inline-block px-3 py-1 border-2 border-lime-400/60 bg-lime-500/20 shadow-[4px_4px_0_0_#000] tracking-widest uppercase text-[10px] font-black">Player 1: Developer</span>
        <h1 className="pointer-events-auto text-4xl sm:text-6xl lg:text-7xl font-black leading-tight drop-shadow-[4px_4px_0_rgba(0,0,0,1)]">
          Building Pixel-Perfect\n          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 via-pink-400 to-amber-300">Web Experiences</span>
        </h1>
        <p className="pointer-events-auto mt-4 max-w-2xl text-white/80 text-sm sm:text-base">
          I craft responsive, performant, and playful interfaces with modern stacks. Press Start to explore my world.
        </p>
        <div className="pointer-events-auto mt-8 flex flex-wrap gap-3">
          <a href="#skills" className="inline-flex items-center gap-2 px-5 py-3 border-2 border-fuchsia-400 bg-fuchsia-600/30 hover:bg-fuchsia-600/50 transition-colors shadow-[6px_6px_0_0_#000] font-extrabold uppercase tracking-wider text-sm">
            <Rocket className="w-4 h-4"/>
            Start
          </a>
          <a href="#contact" className="inline-flex items-center gap-2 px-5 py-3 border-2 border-white/30 bg-black/50 hover:border-white/60 transition-colors shadow-[6px_6px_0_0_#000] font-extrabold uppercase tracking-wider text-sm">
            Contact
          </a>
        </div>
      </div>
    </section>
  );
}
