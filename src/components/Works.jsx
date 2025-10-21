import React, { useMemo, useRef, useEffect, useState } from 'react'
import { motion, useAnimation } from 'framer-motion'
import { projects } from '../constants/index.js'

// Simple tilt (no deps)
const useTilt = () => {
  const ref = useRef(null)
  useEffect(()=>{
    const el = ref.current
    if(!el) return
    const onMove = (e)=>{
      const r = el.getBoundingClientRect()
      const px = (e.clientX - r.left) / r.width
      const py = (e.clientY - r.top) / r.height
      const rx = (py - 0.5) * 8
      const ry = (0.5 - px) * 10
      el.style.transform = `perspective(800px) rotateX(${rx}deg) rotateY(${ry}deg) translateY(-2px)`
    }
    const reset = ()=>{ el.style.transform = 'perspective(800px) rotateX(0) rotateY(0) translateY(0)' }
    el.addEventListener('pointermove', onMove)
    el.addEventListener('pointerleave', reset)
    return ()=>{ el.removeEventListener('pointermove', onMove); el.removeEventListener('pointerleave', reset)}
  },[])
  return ref
}

const TAGS = ['All','KQL','Python','PowerShell','Java']

export default function Works(){
  const [active, setActive] = useState('All')
  const filtered = useMemo(()=> active==='All' ? projects : projects.filter(p=>p.tags.includes(active)), [active])

  return (
    <section className="section" id="works" aria-label="Projects">
      <h2>Projects</h2>
      <div className="tabs" role="tablist" aria-label="Project filters">
        {TAGS.map(t=>(
          <button key={t} role="tab" className={`tab ${active===t?'active':''}`} onClick={()=>setActive(t)} aria-selected={active===t}>
            {t}
          </button>
        ))}
      </div>

      <div className="cards">
        {filtered.map((p,i)=>(<WorkCard key={i} project={p} idx={i} />))}
      </div>
    </section>
  )
}

function WorkCard({ project, idx }){
  const tiltRef = useTilt()
  const controls = useAnimation()
  useEffect(()=>{
    const timer = setTimeout(()=>{ controls.start({opacity:1, y:0}) }, idx*80)
    return ()=>clearTimeout(timer)
  },[idx, controls])

  return (
    <motion.article
      ref={tiltRef}
      className="work-card card"
      initial={{opacity:0, y:18}} animate={controls}
      transition={{duration:.45, ease:'easeOut'}}
    >
      <a href={project.caseStudy} target="_blank" rel="noreferrer" aria-label={`${project.name} case study`}>
        <div className="thumb" style={{backgroundImage:`url(${project.image})`}} />
      </a>
      <div className="meta">
        <h3 style={{margin:'0 0 6px', fontSize:'1.1rem'}}>{project.name}</h3>
        <p style={{color:'#9fb0c0', marginTop:0}}>{project.description}</p>
        <div className="tags" aria-label="tags">
          {project.tags.map((t,i)=>(<span className="tag" key={i}>{t}</span>))}
        </div>
        <div style={{marginTop:10, display:'flex', gap:10}}>
          {project.caseStudy && <a className="btn" href={project.caseStudy} target="_blank" rel="noreferrer">Case Study</a>}
          {project.repo && <a className="btn" href={project.repo} target="_blank" rel="noreferrer">Repo</a>}
          {project.live && <a className="btn" href={project.live} target="_blank" rel="noreferrer">Live</a>}
        </div>
      </div>
    </motion.article>
  )
}
