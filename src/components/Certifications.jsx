import React, { useEffect, useRef, useState } from 'react'
import { certifications } from '../constants/index.js'

export default function Certifications(){
  const trackRef = useRef(null)
  const [active, setActive] = useState(0)
  const [dragging, setDragging] = useState(false)
  const dragRef = useRef({ startX: 0, startScroll: 0, moved: 0 })

  // update active dot based on scroll position
  useEffect(()=>{
    const el = trackRef.current
    if(!el) return
    const onScroll = () => {
      const w = el.clientWidth
      const i = Math.round(el.scrollLeft / w)
      setActive(Math.max(0, Math.min(certifications.length - 1, i)))
    }
    el.addEventListener('scroll', onScroll, { passive: true })
    return ()=> el.removeEventListener('scroll', onScroll)
  },[])

  // LEFT-click drag instead of right-click
  const onPointerDown = (e)=>{
    if(e.button !== 0) return               // left button only
    const el = trackRef.current
    if(!el) return
    setDragging(true)
    dragRef.current.startX = e.clientX
    dragRef.current.startScroll = el.scrollLeft
    dragRef.current.moved = 0
    el.setPointerCapture?.(e.pointerId)
  }
  const onPointerMove = (e)=>{
    if(!dragging) return
    const el = trackRef.current
    const dx = (e.clientX - dragRef.current.startX)
    dragRef.current.moved = Math.max(dragRef.current.moved, Math.abs(dx))
    el.scrollLeft = dragRef.current.startScroll - dx * 1.2
  }
  const endDrag = (e)=>{
    if(!dragging) return
    setDragging(false)
    const el = trackRef.current
    el.releasePointerCapture?.(e.pointerId)
    // snap to nearest slide
    const w = el.clientWidth
    el.scrollTo({ left: Math.round(el.scrollLeft / w) * w, behavior: 'smooth' })
  }

  const goTo = (i)=>{
    const el = trackRef.current
    el?.scrollTo({ left: i * el.clientWidth, behavior: 'smooth' })
  }

  // prevent accidental click-through while dragging
  const suppressClickIfDragged = (e)=>{
    if(dragRef.current.moved > 6){ e.preventDefault(); e.stopPropagation(); }
  }

  return (
    <section className="section" id="certs" aria-label="Certifications">
      <h2>Certifications</h2>

      <div
        className={`certs-carousel clean ${dragging ? 'dragging' : ''}`}
        ref={trackRef}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={endDrag}
        onPointerLeave={endDrag}
        onClick={suppressClickIfDragged}
      >
        {certifications.map((c, i)=>{
          const isCenter = i === active
          const scale = isCenter ? 1 : 0.96
          const lift = isCenter ? -6 : 0
          return (
            <article
              key={i}
              className={`cert-card ${isCenter ? 'is-center' : ''}`}
              style={{ transform: `translateY(${lift}px) scale(${scale})` }}
              role="group"
              aria-label={`${c.name} — ${c.issuer}`}
            >
              <div className="cert-card__top">
                {c.logo && <img className="cert-card__logo" src={c.logo} alt="" width="48" height="48" />}
              </div>

              <h3 className="cert-card__title">{c.name}</h3>
              <div className="cert-card__issuer">{c.issuer}</div>

              {(c.issued || c.expires) && (
                <div className="cert-card__dates">
                  {c.issued && <>Issued: {c.issued}</>}
                  {c.issued && c.expires && ' • '}
                  {c.expires && <>Expires: {c.expires}</>}
                </div>
              )}

              {Array.isArray(c.details) && c.details.length > 0 && (
                <ul className="cert-card__bullets">
                  {c.details.slice(0,6).map((b, idx)=> <li key={idx}>{b}</li>)}
                </ul>
              )}

              {c.url && (
                <a className="btn cert-card__cta" href={c.url} target="_blank" rel="noreferrer">
                  View Credential
                </a>
              )}
            </article>
          )
        })}
      </div>

      <div className="certs-dots" role="tablist" aria-label="Certification slides">
        {certifications.map((_, i)=>(
          <button
            key={i}
            className={`dot ${i === active ? 'is-active' : ''}`}
            onClick={()=>goTo(i)}
            aria-label={`Go to slide ${i+1}`}
            aria-selected={i===active}
          />
        ))}
      </div>

      <p className="certs-hint">Click & drag to scrub • Hover to read details • Click to open credential</p>
    </section>
  )
}
