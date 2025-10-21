import React, { useEffect, useRef } from 'react'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { brand } from '../constants/index.js'

export default function Hero(){
  const slabRef = useRef(null)
  const parallaxRef = useRef(null)
  const magRefs = useRef([])

  // ===== Parallax background glow (kept from before)
  useEffect(()=>{
    const onMove = (e)=>{
      const r = slabRef.current?.getBoundingClientRect()
      if(!r) return
      const mx = ((e.clientX - r.left) / r.width) * 100
      const my = ((e.clientY - r.top) / r.height) * 100
      parallaxRef.current?.style.setProperty('--mx', mx + '%')
      parallaxRef.current?.style.setProperty('--my', my + '%')
    }
    const el = slabRef.current
    el?.addEventListener('pointermove', onMove)
    return ()=> el?.removeEventListener('pointermove', onMove)
  },[])

  // ===== Magnetic buttons (kept)
  useEffect(()=>{
    const strength = 24
    const enter = (e, btn) => btn.animate({ transform: 'scale(1.02)' }, {duration:120, fill:'forwards'})
    const leave = (e, btn) => btn.animate({ transform: 'translate(0,0) scale(1)' }, {duration:180, fill:'forwards'})
    const move = (e, btn) => {
      const r = btn.getBoundingClientRect()
      const x = e.clientX - (r.left + r.width/2)
      const y = e.clientY - (r.top + r.height/2)
      btn.style.transform = `translate(${x/strength}px, ${y/strength}px) scale(1.02)`
    }
    magRefs.current.forEach(btn=>{
      btn.addEventListener('pointerenter', (ev)=>enter(ev, btn))
      btn.addEventListener('pointerleave', (ev)=>leave(ev, btn))
      btn.addEventListener('pointermove',  (ev)=>move(ev, btn))
    })
    return ()=>{
      magRefs.current.forEach(btn=>{
        btn.replaceWith(btn.cloneNode(true))
      })
    }
  },[])

  // ===== Interactive Logo: cursor tilt + float
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const rx = useTransform(y, [-60, 60], [10, -10])  // rotateX
  const ry = useTransform(x, [-60, 60], [-12, 12])  // rotateY
  const srx = useSpring(rx, { stiffness: 140, damping: 14 })
  const sry = useSpring(ry, { stiffness: 140, damping: 14 })

  const onCardMove = (e)=>{
    const r = slabRef.current?.getBoundingClientRect()
    if(!r) return
    const dx = e.clientX - (r.left + r.width/2)
    const dy = e.clientY - (r.top + r.height/2)
    x.set(Math.max(-60, Math.min(60, dx)))
    y.set(Math.max(-60, Math.min(60, dy)))
  }
  const onCardLeave = ()=>{ x.set(0); y.set(0) }

  return (
    <section className="section" id="home" aria-label="Hero">
      <div className="hero">
        {/* LEFT: copy & CTAs */}
        <div className="hero-copy">
          <motion.div
            initial={{opacity:0, y:20}} whileInView={{opacity:1, y:0}} viewport={{once:true}} transition={{duration:.6}}
          >
            <span className="badge"><span style={{width:8,height:8,borderRadius:999,background:'#7df3d6',display:'inline-block'}}></span> {brand.title}</span>
            <h1 style={{ display:'flex', alignItems:'center', gap:12 }}>
              <img src={brand.logo} width="40" height="40" style={{ borderRadius:'50%' }} alt="logo"/>
              {brand.name}
            </h1>
            <p>{brand.summary}</p>
            <div className="cta-row">
              <a
                ref={el=>magRefs.current[0]=el}
                className="btn primary"
                href={brand.ctas.primary.href}
                onClick={(e)=>{ if(brand.ctas.primary.href.startsWith('#')){ e.preventDefault(); document.querySelector(brand.ctas.primary.href)?.scrollIntoView({behavior:'smooth'})}}}
              >
                {brand.ctas.primary.label}
              </a>
              <a
                ref={el=>magRefs.current[1]=el}
                className="btn"
                href={brand.ctas.secondary.href}
                onClick={(e)=>{ e.preventDefault(); document.querySelector('#contact')?.scrollIntoView({behavior:'smooth'})}}
              >
                {brand.ctas.secondary.label}
              </a>
            </div>
          </motion.div>
        </div>

        {/* RIGHT: INTERACTIVE LOGO */}
        <motion.div
          ref={slabRef}
          className="hero-slab card logo-plate"
          initial={{opacity:0, y:20}} whileInView={{opacity:1, y:0}} viewport={{once:true}} transition={{delay:.1, duration:.7}}
          onPointerMove={onCardMove}
          onPointerLeave={onCardLeave}
          style={{
            minHeight: 360,
            transformStyle: 'preserve-3d',
            perspective: 900
          }}
        >
          <div ref={parallaxRef} className="hero-parallax" />
          <motion.div
            className="logo-wrap"
            style={{
              rotateX: srx,
              rotateY: sry
            }}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            transition={{ type:'spring', stiffness: 200, damping: 16 }}
          >
            <div className="logo-glow" aria-hidden="true"></div>
            <img
              src={brand.logo}
              alt="Mohamad Abdulazim logo"
              className="logo-img"
              width="260"
              height="260"
              draggable="false"
            />
            <button
              className="btn logo-cta"
              onClick={()=>document.querySelector('#works')?.scrollIntoView({behavior:'smooth'})}
            >
              View Projects
            </button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
