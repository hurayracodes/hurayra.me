import React from 'react'
import Hero from '../sections/Hero'
import Footer from '../components/Footer'
import About from '../sections/About'
import Experience from '../sections/Experience'
import ClientSection from '../sections/Clients'
// import HeroTest from '../sections/HeroTest'

function App() {
  return (
    <div>
      <Hero/>
      {/* <HeroTest/> */}
      <About/>
      <Experience/>
<ClientSection/>
      <Footer/>
    </div>
  )
}

export default App
