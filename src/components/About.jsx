import React, { useRef, useEffect } from 'react'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { brand, services } from '../constants/index.js'
import { profilePhoto } from '../assets/index.js'

export default function About(){
  // ===== Interactive avatar (tilt like the logo) =====
  const plateRef = useRef(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const rx = useTransform(y, [-50, 50], [10, -10])
  const ry = useTransform(x, [-50, 50], [-12, 12])
  const srx = useSpring(rx, { stiffness: 140, damping: 14 })
  const sry = useSpring(ry, { stiffness: 140, damping: 14 })

  const onMove = (e)=>{
    const r = plateRef.current?.getBoundingClientRect()
    if(!r) return
    const dx = e.clientX - (r.left + r.width/2)
    const dy = e.clientY - (r.top + r.height/2)
    x.set(Math.max(-50, Math.min(50, dx)))
    y.set(Math.max(-50, Math.min(50, dy)))
  }
  const onLeave = ()=>{ x.set(0); y.set(0) }

  return (
    <section className="section" id="about" aria-label="About">
      <h2>About</h2>

      <motion.div
        className="grid cols-2"
        initial="hidden" whileInView="show" viewport={{once:true}}
        variants={{ hidden:{}, show:{ transition:{ staggerChildren:.08 } } }}
      >
        {/* LEFT COLUMN */}
        <motion.div
          variants={{ hidden:{opacity:0, y:14}, show:{opacity:1, y:0} }}
          className="about-left"
        >
          {/* Interactive round photo */}
          <div
            ref={plateRef}
            className="avatar-plate"
            onPointerMove={onMove}
            onPointerLeave={onLeave}
          >
            <motion.div className="avatar-wrap" style={{ rotateX: srx, rotateY: sry }}>
              <div className="avatar-glow" aria-hidden="true"></div>
              <img src={profilePhoto} alt={`${brand.name} headshot`} className="avatar-img" width="220" height="220" />
            </motion.div>
          </div>

          {/* About card pushed slightly down */}
          <div className="card about-card">
            <div style={{padding:'20px'}}>
              <p style={{marginTop:0}}>{brand.summary}</p>
              <p style={{color:'#9fb0c0'}}>
                I design fast, accessible interfaces and motion systems that map to real analyst workflows—clear visuals, measurable performance, and zero fluff.
              </p>
            </div>
          </div>
        </motion.div>

        {/* RIGHT COLUMN — Services grid unchanged */}
        <motion.div
          className="grid"
          variants={{ hidden:{opacity:0, y:12}, show:{opacity:1, y:0} }}
        >
          {services.map((s, i)=>(
            <div className="card" key={i} style={{padding:'16px', display:'flex', gap:12, alignItems:'center'}}>
              <img src={s.icon} width="28" height="28" alt="" />
              <div>
                <div style={{fontWeight:600}}>{s.title}</div>
                <div style={{color:'#9fb0c0'}}>{s.desc}</div>
              </div>
            </div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  )
}
