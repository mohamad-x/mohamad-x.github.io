import React, { useEffect, useMemo, useRef, useState, useCallback } from 'react'
import { certifications } from '../constants/index.js'

export default function Certifications(){
  const items = useMemo(() => certifications ?? [], [])
  const [i, setI] = useState(0)
  const wrapRef = useRef(null)
  const railRef = useRef(null)

  const clampIndex = useCallback((n) => {
    const L = items.length
    if (L === 0) return 0
    return ((n % L) + L) % L
  }, [items.length])

  const snapTo = useCallback((idx, smooth = true) => {
    const rail = railRef.current
    if (!rail || !rail.children?.length) return
    const node = rail.children[clampIndex(idx)]
    if (!node) return
    const left = node.offsetLeft - 6 // account for padding gap in rail
    rail.scrollTo({ left, behavior: smooth ? 'smooth' : 'auto' })
  }, [clampIndex])

  const go = useCallback((delta) => {
    setI(prev => {
      const next = clampIndex(prev + delta)
      // snap after state updates in effect
      return next
    })
  }, [clampIndex])

  // Snap whenever index changes
  useEffect(() => { snapTo(i) }, [i, snapTo])

  // Re-snap on resize
  useEffect(() => {
    const onR = () => snapTo(i, false)
    window.addEventListener('resize', onR)
    return () => window.removeEventListener('resize', onR)
  }, [i, snapTo])

  // Keep "center" class updated
  useEffect(() => {
    const rail = railRef.current
    if (!rail) return
    for (let k = 0; k < rail.children.length; k++) {
      rail.children[k].classList.toggle('is-center', k === i)
    }
  }, [i])

  if (!items.length) return null

  return (
    <section className="section" id="certs" aria-label="Certifications">
      <h2>Certifications</h2>

      <div ref={wrapRef} className="certs-wrap">
        {/* Left Arrow */}
        <button
          className="certs-arrow certs-arrow--left"
          type="button"
          aria-label="Previous certification"
          onClick={() => go(-1)}
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M15 18l-6-6 6-6" />
          </svg>
        </button>

        {/* Rail */}
        <div
          ref={railRef}
          className="certs-carousel clean no-drag"
          role="region"
          aria-roledescription="carousel"
          aria-label="Certification cards"
        >
          {items.map((c, idx) => (
            <article key={idx} className={`cert-card ${idx===i?'is-center':''}`} role="group" aria-label={c.name}>
              <div className="cert-card__top" style={{gap:12}}>
                <img className="cert-card__logo" src={c.logo} alt="" width="48" height="48" />
                <div>
                  <div className="cert-card__title">{c.name}</div>
                  <div className="cert-card__issuer">{c.issuer}{c.issued ? ` • ${c.issued}` : ''}</div>
                  {c.url && (
                    <a className="cert-card__cta" href={c.url} target="_blank" rel="noreferrer">
                      View credential
                    </a>
                  )}
                </div>
              </div>
              {Array.isArray(c.details) && c.details.length > 0 && (
                <ul className="cert-card__bullets">
                  {c.details.map((d, j) => <li key={j}>{d}</li>)}
                </ul>
              )}
            </article>
          ))}
        </div>

        {/* Right Arrow */}
        <button
          className="certs-arrow certs-arrow--right"
          type="button"
          aria-label="Next certification"
          onClick={() => go(+1)}
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M9 6l6 6-6 6" />
          </svg>
        </button>
      </div>

      {/* Dots */}
      <div className="certs-dots" role="tablist" aria-label="Certification pagination">
        {items.map((_, idx) => (
          <button
            key={idx}
            role="tab"
            aria-selected={i===idx}
            className={`dot ${i===idx?'is-active':''}`}
            onClick={() => setI(idx)}
            aria-label={`Go to slide ${idx+1}`}
          />
        ))}
      </div>
    </section>
  )
}
