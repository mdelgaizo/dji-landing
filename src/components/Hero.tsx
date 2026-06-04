import { motion } from 'framer-motion'
import { Play } from 'lucide-react'

const slides = [
  { id: '01', label: 'Sky Hunter' },
  { id: '02', label: 'Pocket Aircraft' },
  { id: '03', label: 'World Above' },
  { id: '04', label: 'Ghost Machine' },
  { id: '05', label: 'Weekend Explorer' },
]

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay: i * 0.15, ease: [0.25, 0.46, 0.45, 0.94] },
  }),
}

// Drone SVG placeholder — replaced by gradient visual
function DroneVisual() {
  return (
    <div className="relative w-full h-full flex items-center justify-center">
      {/* Atmospheric glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-transparent to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-black to-transparent" />

      {/* Drone body — stylized SVG */}
      <svg
        viewBox="0 0 600 400"
        className="w-full max-w-2xl opacity-90 drop-shadow-2xl"
        style={{ filter: 'drop-shadow(0 0 60px rgba(100,160,255,0.15))' }}
      >
        {/* Body */}
        <rect x="255" y="170" width="90" height="60" rx="8" fill="#d4d4d4" />
        {/* Camera */}
        <ellipse cx="300" cy="195" rx="18" ry="18" fill="#1a1a1a" />
        <ellipse cx="300" cy="195" rx="10" ry="10" fill="#222" />
        <ellipse cx="300" cy="195" rx="5" ry="5" fill="#333" />
        {/* Arms */}
        <line x1="255" y1="175" x2="160" y2="140" stroke="#bbb" strokeWidth="6" strokeLinecap="round" />
        <line x1="345" y1="175" x2="440" y2="140" stroke="#bbb" strokeWidth="6" strokeLinecap="round" />
        <line x1="255" y1="225" x2="160" y2="260" stroke="#bbb" strokeWidth="6" strokeLinecap="round" />
        <line x1="345" y1="225" x2="440" y2="260" stroke="#bbb" strokeWidth="6" strokeLinecap="round" />
        {/* Propellers */}
        <ellipse cx="160" cy="140" rx="50" ry="8" fill="rgba(200,200,200,0.6)" />
        <ellipse cx="440" cy="140" rx="50" ry="8" fill="rgba(200,200,200,0.6)" />
        <ellipse cx="160" cy="260" rx="50" ry="8" fill="rgba(200,200,200,0.6)" />
        <ellipse cx="440" cy="260" rx="50" ry="8" fill="rgba(200,200,200,0.6)" />
        {/* Motor hubs */}
        <circle cx="160" cy="140" r="10" fill="#888" />
        <circle cx="440" cy="140" r="10" fill="#888" />
        <circle cx="160" cy="260" r="10" fill="#888" />
        <circle cx="440" cy="260" r="10" fill="#888" />
        {/* Landing gear */}
        <line x1="275" y1="230" x2="270" y2="255" stroke="#aaa" strokeWidth="4" />
        <line x1="325" y1="230" x2="330" y2="255" stroke="#aaa" strokeWidth="4" />
        <line x1="262" y1="255" x2="338" y2="255" stroke="#aaa" strokeWidth="4" strokeLinecap="round" />
        {/* Accent LED */}
        <circle cx="300" cy="230" r="4" fill="#ff4444" opacity="0.9" />
      </svg>
    </div>
  )
}

export default function Hero() {
  return (
    <section
      id="product"
      className="relative min-h-screen overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #0a0a0f 0%, #0d1520 40%, #050a0f 100%)',
      }}
    >
      {/* Mountain silhouette background */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `
            radial-gradient(ellipse at 70% 50%, rgba(30,60,100,0.4) 0%, transparent 60%),
            radial-gradient(ellipse at 30% 80%, rgba(10,20,40,0.6) 0%, transparent 50%)
          `,
        }}
      />

      {/* Drone visual — right side */}
      <div className="absolute right-0 top-0 bottom-0 w-1/2 md:w-3/5">
        <DroneVisual />
      </div>

      {/* Left content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-36 pb-24 min-h-screen flex flex-col justify-between">
        <div className="max-w-xl">
          <motion.p
            custom={0}
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="text-white/50 text-xs tracking-[0.3em] uppercase mb-4"
          >
            Sky Hunter
          </motion.p>

          <motion.h1
            custom={1}
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="font-black uppercase leading-none mb-6"
            style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)', letterSpacing: '-0.02em' }}
          >
            See What
            <br />
            Others Can't.
          </motion.h1>

          <motion.p
            custom={2}
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="text-white/60 text-sm leading-relaxed max-w-sm mb-10"
          >
            DJI Mini 4 Pro is our most advanced mini camera drone yet. With powerful imaging,
            omnidirectional obstacle sensing, and 34-min flight time.
          </motion.p>

          <motion.div
            custom={3}
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="flex items-center gap-4"
          >
            <button className="bg-white text-black text-xs font-bold tracking-widest uppercase px-8 py-3 hover:bg-white/90 transition-all duration-200">
              Buy Now
            </button>
            <button className="flex items-center gap-2 text-white/70 hover:text-white text-xs tracking-widest uppercase transition-colors duration-200 border border-white/20 px-6 py-3 hover:border-white/40">
              <Play size={12} fill="currentColor" />
              Watch Video
            </button>
          </motion.div>
        </div>

        {/* Slide indicators */}
        <motion.div
          custom={4}
          variants={fadeUp}
          initial="hidden"
          animate="show"
          className="flex items-center gap-6 mt-16"
        >
          {slides.map((s, i) => (
            <div key={s.id} className="flex flex-col gap-1 group cursor-pointer">
              <div
                className={`h-px transition-all duration-300 ${
                  i === 0 ? 'w-8 bg-white' : 'w-4 bg-white/30 group-hover:bg-white/60'
                }`}
              />
              <span className={`text-xs ${i === 0 ? 'text-white' : 'text-white/40'}`}>
                {s.id}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
