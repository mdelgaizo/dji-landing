import { motion } from 'framer-motion'
import { Feather, Clock, Video, Eye, Wifi, Wind } from 'lucide-react'

const specs = [
  { icon: Feather, label: 'Ultra Light', value: 'Under 249g' },
  { icon: Clock, label: '34-Min Max', value: 'Flight Time' },
  { icon: Video, label: '4K HDR Video', value: 'True Vertical Shooting' },
  { icon: Eye, label: 'Omnidirectional', value: 'Obstacle Sensing' },
  { icon: Wifi, label: '20KM FHD', value: 'Video Transmission' },
  { icon: Wind, label: 'Level 5', value: 'Wind Resistance' },
]

export default function SpecsBar() {
  return (
    <section className="bg-[#0d0d0d] border-y border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {specs.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              className="flex items-center gap-3"
            >
              <s.icon size={18} className="text-white/40 shrink-0" />
              <div>
                <p className="text-white text-xs font-semibold tracking-wider uppercase">
                  {s.label}
                </p>
                <p className="text-white/40 text-xs mt-0.5">{s.value}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
