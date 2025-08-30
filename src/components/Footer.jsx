import React from 'react';
import { Github, Linkedin, Mail, Gamepad2 } from 'lucide-react';

export default function Footer() {
  return (
    <footer id="contact" className="mt-20 border-t border-white/10 bg-black/60">
      <div className="mx-auto max-w-7xl px-4 py-16 grid grid-cols-1 sm:grid-cols-3 gap-10">
        <div>
          <div className="flex items-center gap-2 mb-4">
            <div className="p-2 bg-gradient-to-br from-fuchsia-600 to-violet-700 border-2 border-white/20 shadow-[4px_4px_0_0_#000]">
              <Gamepad2 className="w-5 h-5" />
            </div>
            <span className="font-black tracking-widest uppercase" style={{textShadow:'2px 2px 0 #000'}}>RetroDev</span>
          </div>
          <p className="text-white/70 text-sm max-w-sm">
            Leveling up products with playful interfaces, smooth animations, and solid engineering.
          </p>
        </div>

        <div>
          <h3 className="font-extrabold uppercase tracking-widest text-sm mb-3">Warp Zones</h3>
          <ul className="space-y-2 text-white/80 text-sm">
            <li><a className="hover:text-white" href="#skills">Skills</a></li>
            <li><a className="hover:text-white" href="#projects">Projects</a></li>
            <li><a className="hover:text-white" href="#contact">Contact</a></li>
          </ul>
        </div>

        <div>
          <h3 className="font-extrabold uppercase tracking-widest text-sm mb-3">Connect</h3>
          <div className="flex gap-3">
            <a href="mailto:hello@example.com" className="p-3 border-2 border-white/20 hover:border-white/60 transition-colors bg-black/40 shadow-[4px_4px_0_0_#000]" aria-label="Email"><Mail className="w-4 h-4"/></a>
            <a href="https://github.com" className="p-3 border-2 border-white/20 hover:border-white/60 transition-colors bg-black/40 shadow-[4px_4px_0_0_#000]" aria-label="GitHub"><Github className="w-4 h-4"/></a>
            <a href="https://linkedin.com" className="p-3 border-2 border-white/20 hover:border-white/60 transition-colors bg-black/40 shadow-[4px_4px_0_0_#000]" aria-label="LinkedIn"><Linkedin className="w-4 h-4"/></a>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 py-4 text-center text-xs text-white/60">
        © {new Date().getFullYear()} RetroDev. Press Start to continue.
      </div>
    </footer>
  );
}
