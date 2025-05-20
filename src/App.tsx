
import './App.css'
import Hero from './sections/hero'
import ShowCase from './sections/showcase'
import Navbar from './components/navbar'
import LogoSection from './sections/logoSection'
import FeatureCards from './sections/featureCards'
import Experience from './sections/experience'
import TechStack from './sections/techStack'
import Contact from './sections/contact'
import Testimonials from './sections/testimonials'


function App() {


  return (
    <>
      <Navbar />
      <Hero />
      <ShowCase />
      <LogoSection />
      <FeatureCards />
      <Experience />
      <TechStack />
      <Testimonials />
      <Contact />
    </ >
  )
}

export default App
