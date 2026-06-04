import { motion } from 'framer-motion'

const techSpecs = [
  { value: '1/1.3"', label: 'CMOS Sensor' },
  { value: '4K/60fps', label: 'HDR Video' },
  { value: '10-bit D-Log M', label: 'Color Performance' },
  { value: '34 MIN', label: 'Max Flight Time' },
  { value: '20 KM', label: 'Video Transmission' },
  { value: 'Level 5', label: 'Wind Resistance' },
]

export default function PowerDetails() {
  return (
    <section id="specs" className="bg-black border-t border-white/[0.06] py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left: lens visual */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative aspect-square max-w-md mx-auto"
          >
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-zinc-800 to-zinc-950 border border-white/10" />
            <div className="absolute inset-4 rounded-full bg-gradient-to-br from-zinc-700 to-zinc-900 border border-white/[0.08]" />
            <div className="absolute inset-10 rounded-full bg-gradient-to-br from-zinc-600 to-zinc-800 border border-white/[0.06]" />
            <div className="absolute inset-16 rounded-full bg-gradient-to-br from-zinc-500 to-zinc-700 border border-white/[0.04]" />
            <div className="absolute inset-24 rounded-full bg-black border border-white/10 flex items-center justify-center">
              <div className="text-center">
                <p className="text-white/30 text-xs tracking-widest uppercase">Lens</p>
                <p className="text-white font-bold text-lg">f/1.7</p>
              </div>
            </div>
            {/* Spec labels around the ring */}
            <div className="absolute top-2 left-1/2 -translate-x-1/2 text-white/30 text-xs tracking-wider">4K HDR</div>
            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 text-white/30 text-xs tracking-wider">10-bit</div>
            <div className="absolute left-2 top-1/2 -translate-y-1/2 text-white/30 text-xs tracking-wider">Wide</div>
            <div className="absolute right-0 top-1/2 -translate-y-1/2 text-white/30 text-xs tracking-wider">82.1°</div>
          </motion.div>

          {/* Right: specs */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-white/30 text-xs tracking-[0.3em] uppercase mb-4">Specifications</p>
              <h2 className="text-white font-black text-4xl md:text-5xl uppercase tracking-tight leading-none mb-12">
                Power In
                <br />
                Every Detail
              </h2>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
              {techSpecs.map((s, i) => (
                <motion.div
                  key={s.label}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  className="border-t border-white/10 pt-4"
                >
                  <p className="text-white font-bold text-lg mb-1">{s.value}</p>
                  <p className="text-white/40 text-xs tracking-wider uppercase">{s.label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
