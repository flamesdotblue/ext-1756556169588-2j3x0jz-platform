import React from 'react';

const skillsTop = [
  'React', 'TypeScript', 'Next.js', 'Node.js', 'Tailwind', 'Framer Motion', 'GraphQL', 'WebGL', 'Three.js', 'Vite'
];

const skillsBottom = [
  'Testing', 'Jest', 'Playwright', 'CI/CD', 'Docker', 'Vercel', 'AWS', 'Design Systems', 'Accessibility', 'Perf'
];

export default function SkillsMarquee() {
  return (
    <section id="skills" className="relative py-20">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(255,0,128,0.12),transparent_60%)]" />
      <div className="relative mx-auto max-w-7xl px-4">
        <div className="mb-8 flex items-center gap-3">
          <span className="px-2 py-1 border-2 border-amber-400 bg-amber-500/30 shadow-[4px_4px_0_0_#000] uppercase text-[10px] font-black tracking-widest">Skills</span>
          <h2 className="text-2xl sm:text-3xl font-black tracking-wider" style={{textShadow:'3px 3px 0 #000'}}>Power-Ups & Abilities</h2>
        </div>

        <div className="overflow-hidden border-2 border-white/15 bg-black/40 shadow-[8px_8px_0_0_#000]">
          <MarqueeRow items={skillsTop} reverse={false} speed={22} />
          <div className="h-px w-full bg-white/10" />
          <MarqueeRow items={skillsBottom} reverse={true} speed={26} />
        </div>

        <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
          {['Clean Code', 'Animations', 'APIs', '3D UI', 'Tooling', 'DX'].map((tag) => (
            <span key={tag} className="text-center px-3 py-2 border-2 border-cyan-400/50 bg-cyan-500/20 shadow-[4px_4px_0_0_#000] uppercase text-[10px] font-extrabold tracking-widest">{tag}</span>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes marqueeReverse {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
      `}</style>
    </section>
  );
}

function MarqueeRow({ items, reverse = false, speed = 20 }) {
  const animationName = reverse ? 'marqueeReverse' : 'marquee';
  const duration = `${speed}s`;
  const marqueeItems = [...items, ...items, ...items];

  return (
    <div className="relative w-full">
      <div className="flex whitespace-nowrap" style={{ animation: `${animationName} ${duration} linear infinite` }}>
        {marqueeItems.map((skill, i) => (
          <Badge key={`${skill}-${i}`} label={skill} />
        ))}
      </div>
    </div>
  );
}

function Badge({ label }) {
  return (
    <div className="px-4 py-3 border-2 border-fuchsia-400/50 bg-fuchsia-600/20 shadow-[6px_6px_0_0_#000] m-2 uppercase font-black tracking-widest text-xs">
      {label}
    </div>
  );
}
