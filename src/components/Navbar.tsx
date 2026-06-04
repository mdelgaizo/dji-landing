import { motion, useScroll, useTransform } from 'framer-motion'

const links = ['Product', 'Features', 'Experience', 'Specs', 'Accessories']

export default function Navbar() {
  const { scrollY } = useScroll()
  const bg = useTransform(scrollY, [0, 80], ['rgba(0,0,0,0)', 'rgba(0,0,0,0.92)'])
  const borderOpacity = useTransform(scrollY, [0, 80], [0, 0.15])

  return (
    <motion.nav
      style={{ backgroundColor: bg }}
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-sm"
    >
      <motion.div
        style={{ borderBottomColor: `rgba(255,255,255,${borderOpacity})` }}
        className="border-b border-transparent"
      >
        <div className="max-w-7xl mx-auto px-6 h-14 flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <span className="text-white font-black text-lg tracking-tight leading-none">
              dji
            </span>
            <span className="text-white/40 text-xs font-light tracking-[0.2em] uppercase">
              Mini 4 Pro
            </span>
          </div>

          {/* Links */}
          <ul className="hidden md:flex items-center gap-8">
            {links.map((l) => (
              <li key={l}>
                <a
                  href={`#${l.toLowerCase()}`}
                  className="text-white/70 hover:text-white text-xs tracking-widest uppercase transition-colors duration-200"
                >
                  {l}
                </a>
              </li>
            ))}
          </ul>

          {/* CTA */}
          <button className="bg-white text-black text-xs font-semibold tracking-widest uppercase px-5 py-2 hover:bg-white/90 transition-colors duration-200">
            Buy Now
          </button>
        </div>
      </motion.div>
    </motion.nav>
  )
}
