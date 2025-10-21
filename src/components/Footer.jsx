import React from 'react'
import { links, brand } from '../constants/index.js'

export default function Footer(){
  const year = new Date().getFullYear()
  return (
    <footer className="footer">
      <div style={{display:'flex', gap:12, justifyContent:'center', alignItems:'center', marginBottom:8}}>
        <a href={links.github.href} target="_blank" rel="noreferrer">GitHub</a>
        <span>•</span>
        <a href={links.external.href} target="_blank" rel="noreferrer">External</a>
      </div>
      <div>© {year} {brand.name}. All rights reserved.</div>
    </footer>
  )
}
