import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

export default function CTA() {
  return (
    <section
      className="relative overflow-hidden py-32"
      style={{
        background: 'linear-gradient(180deg, #050505 0%, #0a0a0f 50%, #000 100%)',
      }}
    >
      {/* Subtle radial glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at 50% 60%, rgba(80,120,200,0.08) 0%, transparent 70%)',
        }}
      />

      {/* Horizontal lines */}
      <div className="absolute top-0 left-0 right-0 h-px bg-white/[0.06]" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-white/[0.06]" />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-white/30 text-xs tracking-[0.4em] uppercase mb-6"
        >
          Built to Go Further
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-white font-black uppercase leading-none mb-10"
          style={{ fontSize: 'clamp(2rem, 6vw, 4.5rem)', letterSpacing: '-0.02em' }}
        >
          Adventure Ready.
          <br />
          Create Anywhere.
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex items-center justify-center gap-4 flex-wrap"
        >
          <button className="group flex items-center gap-3 bg-white text-black text-xs font-bold tracking-widest uppercase px-10 py-4 hover:bg-white/90 transition-all duration-200">
            Buy Now
            <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform duration-200" />
          </button>
          <button className="text-white/50 hover:text-white text-xs tracking-widest uppercase border border-white/15 hover:border-white/30 px-8 py-4 transition-all duration-200">
            Learn More
          </button>
        </motion.div>

        {/* Footer note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-white/20 text-xs mt-12 tracking-wider"
        >
          DJI Mini 4 Pro · Under 249g · No license required in most regions
        </motion.p>
      </div>
    </section>
  )
}
