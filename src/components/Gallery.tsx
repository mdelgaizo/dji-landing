import { motion } from 'framer-motion'
import { Play, ArrowRight } from 'lucide-react'

const cells = [
  { type: 'video', label: 'Surfing the Wave', span: 'col-span-1 row-span-2', bg: 'from-blue-950 to-cyan-950' },
  { type: 'image', label: 'Mountain Peak', span: '', bg: 'from-slate-800 to-gray-900' },
  { type: 'image', label: 'Golden Sunset', span: '', bg: 'from-amber-950 to-orange-900' },
  { type: 'image', label: 'Solo Hiker', span: '', bg: 'from-emerald-950 to-teal-900' },
  { type: 'image', label: 'Coastal Road', span: '', bg: 'from-stone-900 to-zinc-900' },
  { type: 'video', label: 'Ocean Waves', span: '', bg: 'from-sky-950 to-blue-950' },
  { type: 'image', label: 'Azure Bay', span: 'col-span-1', bg: 'from-teal-950 to-cyan-950' },
]

export default function Gallery() {
  return (
    <section id="experience" className="bg-[#050505] py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-end justify-between mb-10">
          <div>
            <p className="text-white/30 text-xs tracking-[0.3em] uppercase mb-3">Visual Gallery</p>
            <h2 className="text-white font-black text-4xl md:text-5xl uppercase tracking-tight leading-none">
              Capture More
            </h2>
            <p className="text-white/40 text-sm mt-2 tracking-wide">Every moment. Any adventure.</p>
          </div>
          <button className="hidden md:flex items-center gap-2 text-white/50 hover:text-white text-xs tracking-widest uppercase transition-colors duration-200 border border-white/10 hover:border-white/30 px-5 py-3">
            View Gallery
            <ArrowRight size={12} />
          </button>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 auto-rows-[200px]">
          {cells.map((cell, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.97 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.5, delay: i * 0.07, ease: 'easeOut' }}
              className={`relative overflow-hidden rounded-sm bg-gradient-to-br ${cell.bg} ${cell.span} group cursor-pointer`}
            >
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300" />
              <div
                className="absolute inset-0 opacity-[0.03] group-hover:opacity-[0.05] transition-opacity duration-300"
                style={{
                  backgroundImage:
                    'linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)',
                  backgroundSize: '30px 30px',
                }}
              />
              {cell.type === 'video' && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-10 h-10 rounded-full border border-white/40 flex items-center justify-center group-hover:border-white/70 group-hover:bg-white/10 transition-all duration-300">
                    <Play size={14} fill="white" className="text-white ml-0.5" />
                  </div>
                </div>
              )}
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/60 to-transparent">
                <p className="text-white/80 text-xs tracking-wider uppercase">{cell.label}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
