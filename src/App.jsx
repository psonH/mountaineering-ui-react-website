import React from 'react'
import FAQ from './FAQ'
import { Features } from './Features'
import { NavBar } from './NavBar'
import { Slider } from './Slider'
import { Members } from './Members'
import { Contact } from './Contact'
import { Footer } from './Footer'

const App = () => {
  return (
    <div>
        <NavBar />
        <Slider />
        <Features />
        <FAQ />
        <Members />
        <Contact />
        <Footer />
    </div>
  )
}
export default App;