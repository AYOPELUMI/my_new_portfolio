import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Hero from './sections/hero'
import ShowCase from './sections/showcase'
import Navbar from './components/navbar'
import LogoSection from './sections/logoSection'
import FeatureCards from './sections/featureCards'
import Experience from './sections/experience'

function App() {


  return (
    <>
      <Navbar />
      <Hero />
      <ShowCase />
      {/* <LogoSection /> */}
      <FeatureCards />
      <Experience />
    </ >
  )
}

export default App
