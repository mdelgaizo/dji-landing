import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const stories = [
  {
    id: '01',
    title: 'Sky Hunter',
    subtitle: "See what others can't.",
    description:
      "Dominate any environment. Built for extremes, the Mini 4 Pro delivers 4K HDR clarity even when the sky fights back.",
    accent: 'from-slate-900 to-gray-900',
    tags: ['Dominate the Sky', 'Built for Extremes', '4K HDR Clarity', 'Omnidirectional', 'Fly Farther'],
  },
  {
    id: '02',
    title: 'Pocket Aircraft',
    subtitle: 'Flight. Reimagined.',
    description:
      'Ultra light. Ultra fold. The Mini 4 Pro fits in your pocket and unfolds into a professional aerial platform in seconds.',
    accent: 'from-zinc-900 to-stone-900',
    tags: ['Ultra Light', 'Fold. Go.', '4K HDR Video', 'True Vertical', 'Extended Battery'],
  },
  {
    id: '03',
    title: 'World Above',
    subtitle: 'The world looks different from up here.',
    description:
      'New perspectives. Breathtaking views. 4K HDR color. Every frame captured from above tells a story worth sharing.',
    accent: 'from-blue-950 to-teal-950',
    tags: ['New Perspective', 'Breathtaking Views', '4K HDR Clarity', 'True Colors', 'Capture More'],
  },
  {
    id: '04',
    title: 'Ghost Machine',
    subtitle: 'Engineered beyond sight.',
    description:
      'Next-gen sensing intelligence. APAS 5.0 omnidirectional obstacle avoidance keeps every flight smooth and safe.',
    accent: 'from-indigo-950 to-slate-900',
    tags: ['Next-Gen Tech', 'Omnidirectional', 'APAS 5.0', '4K/60fps HDR', '20KM Range'],
  },
  {
    id: '05',
    title: 'Weekend Explorer',
    subtitle: "Bring home the places you can't describe.",
    description:
      'Adventure ready, compact, and easy to use. Up to 34 minutes in the air to capture every moment of your journey.',
    accent: 'from-amber-950 to-orange-950',
    tags: ['Adventure Ready', 'Compact & Portable', 'Up to 34 Min', 'Capture Every Moment', 'Easy to Use'],
  },
]

export default function Stories() {
  const [active, setActive] = useState(0)
  const story = stories[active]

  return (
    <section id="features" className="bg-black">
      {/* Tab selector */}
      <div className="border-b border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex">
            {stories.map((s, i) => (
              <button
                key={s.id}
                onClick={() => setActive(i)}
                className={`relative py-5 px-4 text-xs tracking-widest uppercase transition-colors duration-200 flex-1 text-center ${
                  i === active ? 'text-white' : 'text-white/30 hover:text-white/60'
                }`}
              >
                <span className="hidden md:block">{s.title}</span>
                <span className="md:hidden">{s.id}</span>
                {i === active && (
                  <motion.div
                    layoutId="tab-indicator"
                    className="absolute bottom-0 left-0 right-0 h-px bg-white"
                  />
                )}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
            className="grid md:grid-cols-2 gap-12 items-center"
          >
            {/* Visual */}
            <div
              className={`relative rounded-sm overflow-hidden aspect-[4/3] bg-gradient-to-br ${story.accent} flex items-center justify-center`}
            >
              {/* Grid overlay */}
              <div
                className="absolute inset-0 opacity-[0.04]"
                style={{
                  backgroundImage:
                    'linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)',
                  backgroundSize: '40px 40px',
                }}
              />
              <div className="text-center px-8">
                <p className="text-white/20 text-xs tracking-[0.3em] uppercase mb-4">{story.id}</p>
                <h2 className="text-white font-black text-4xl md:text-5xl uppercase tracking-tight leading-none mb-2">
                  {story.title}
                </h2>
                <p className="text-white/40 text-sm tracking-wide">{story.subtitle}</p>
              </div>
            </div>

            {/* Text */}
            <div>
              <p className="text-white/30 text-xs tracking-[0.3em] uppercase mb-4">{story.id}</p>
              <h2 className="text-white font-black text-4xl md:text-5xl uppercase tracking-tight leading-none mb-6">
                {story.title}
              </h2>
              <p className="text-white/50 text-sm leading-relaxed mb-10 max-w-sm">
                {story.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {story.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-white/50 text-xs tracking-wider uppercase border border-white/10 px-3 py-1.5 hover:border-white/30 hover:text-white/80 transition-colors duration-200 cursor-default"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}
