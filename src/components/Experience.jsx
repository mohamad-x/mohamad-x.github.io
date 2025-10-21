import React, { useMemo, useState, useEffect, useRef } from 'react'
import { experiences } from '../constants/index.js'

export default function Experience(){
  const [active, setActive] = useState(0)
  const listRef = useRef(null)

  // keep active index in range if data changes
  const items = useMemo(()=> experiences ?? [], [])
  const a = Math.min(active, Math.max(0, items.length - 1))

  // keyboard navigation on the left list
  useEffect(()=>{
    const el = listRef.current
    if(!el) return
    const onKey = (e)=>{
      const MAX = items.length - 1
      if(e.key === 'ArrowDown'){ e.preventDefault(); setActive(v => Math.min(MAX, v+1)); }
      if(e.key === 'ArrowUp'){ e.preventDefault(); setActive(v => Math.max(0, v-1)); }
      if(e.key === 'Home'){ e.preventDefault(); setActive(0) }
      if(e.key === 'End'){ e.preventDefault(); setActive(MAX) }
    }
    el.addEventListener('keydown', onKey)
    return ()=> el.removeEventListener('keydown', onKey)
  }, [items.length])

  // convenience to render bullets safely
  const renderPoints = (pts=[]) => (
    <ul className="xp-detail__bullets">
      {pts.map((p,i)=><li key={i}>{p}</li>)}
    </ul>
  )

  return (
    <section className="section" id="experience" aria-label="Experience">
      <h2>Work Experience</h2>

      <div className="xp-wrap">
        {/* LEFT: company/role list */}
        <nav
          className="xp-list"
          ref={listRef}
          role="tablist"
          aria-label="Companies"
          tabIndex={0}
        >
          {items.map((e, i)=>(
            <button
              key={i}
              role="tab"
              aria-selected={i===a}
              className={`xp-item ${i===a ? 'is-active' : ''}`}
              onClick={()=>setActive(i)}
            >
              <span className="xp-item__logo">
                <img src={e.icon} alt="" width="44" height="44"/>
              </span>
              <span className="xp-item__meta">
                <span className="xp-item__title">{e.title}</span>
                <span className="xp-item__company">{e.company}</span>
              </span>
            </button>
          ))}
        </nav>

        {/* RIGHT: details panel */}
        <article className="xp-detail" role="tabpanel" aria-live="polite">
          {items[a] ? (
            <>
              <header className="xp-detail__head">
                <div className="xp-detail__title">{items[a].title}</div>
                <div className="xp-detail__company">{items[a].company}</div>
                <div className="xp-detail__date">{items[a].date}</div>
              </header>
              {renderPoints(items[a].points)}
            </>
          ) : null}
        </article>
      </div>

      {/* Mobile accordion fallback */}
      <div className="xp-accordion">
        {items.map((e, i)=>(
          <details key={i} className="xp-acc">
            <summary className="xp-acc__summary">
              <img src={e.icon} alt="" width="28" height="28" className="xp-acc__logo"/>
              <span className="xp-acc__meta">
                <span className="xp-acc__title">{e.title}</span>
                <span className="xp-acc__company">{e.company}</span>
              </span>
            </summary>
            <div className="xp-acc__body">
              <div className="xp-detail__date" style={{marginBottom:6}}>{e.date}</div>
              {renderPoints(e.points)}
            </div>
          </details>
        ))}
      </div>
    </section>
  )
}
