import React from 'react'
import Hero from './sections/Hero'
import Footer from './components/Footer'
import About from './sections/About'
import Knowledge from './sections/Knowledge'
import Projects from './sections/Projects'
import Experience from './sections/WorkExperience'
import Navigation from './sections/Navigation'
import Clients from './sections/Clients'
import SkillsSection from './sections/SkillsSection'
import Contect from './sections/Contect'

function App() {
  return (
    <div className='font-sans bg-linear-to-tr from-slate-900/5 to-slate-900/70'>
      <Navigation />
      <Hero/>
      <About/>
      <Experience/>
      <Knowledge />
      <SkillsSection />
         <Projects/>
<Clients/>
<Contect/>
  <Footer/>

    </div>
  )
}

export default App
