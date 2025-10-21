import React, { useEffect, useRef } from 'react'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import Experience from './components/Experience.jsx'
import Education from './components/Education.jsx'
import Skills from './components/Skills.jsx'
import Certifications from './components/Certifications.jsx'   // ← ADD
import Works from './components/Works.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'
import { cursorBlob } from './assets/index.js'

export default function App() {
  const blobRef = useRef(null)

  useEffect(() => {
    const onMove = (e) => {
      blobRef.current?.animate(
        { transform: `translate(${e.clientX - 150}px, ${e.clientY - 150}px)` },
        { duration: 500, fill: 'forwards', easing: 'cubic-bezier(0.22, 1, 0.36, 1)' }
      )
    }
    window.addEventListener('pointermove', onMove)
    return () => window.removeEventListener('pointermove', onMove)
  }, [])

  return (
    <>
      <div ref={blobRef} className="cursor-blob" aria-hidden="true" style={{ backgroundImage: `url(${cursorBlob})` }} />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Education />
        <Skills />
        <Certifications />   {/* ← RENDER HERE */}
        <Works />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
