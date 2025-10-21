import React from 'react'
import { navLinks, brand, links } from '../constants/index.js'

export default function Navbar(){
  const scrollTo = (id) => {
    const el = document.getElementById(id)
    if(el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <nav className="nav">
      <div className="nav-inner">
        <div className="brand">
  <img src="/logo.png" alt="logo" width="28" height="28" style={{borderRadius:'50%'}} />
  <span>{brand.name}</span>
  <span className="dot"></span>
</div>

        <ul>
          {navLinks.map(l => (
            <li key={l.id}><a href={`#${l.id}`} onClick={(e)=>{e.preventDefault(); scrollTo(l.id)}}>{l.title}</a></li>
          ))}
          <li><a href={links.github.href} target="_blank" rel="noreferrer">GitHub</a></li>
        </ul>
      </div>
    </nav>
  )
}
