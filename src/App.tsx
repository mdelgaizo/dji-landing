import './index.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import SpecsBar from './components/SpecsBar'
import Stories from './components/Stories'
import Gallery from './components/Gallery'
import PowerDetails from './components/PowerDetails'
import CTA from './components/CTA'

export default function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <Hero />
      <SpecsBar />
      <Stories />
      <Gallery />
      <PowerDetails />
      <CTA />
    </div>
  )
}
