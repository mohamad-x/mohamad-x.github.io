import React, { useMemo, useState } from 'react'
import { skills, skillsCategories } from '../constants/index.js'

export default function Skills(){
  const [tab, setTab] = useState(skillsCategories[0]?.id || 'top')
  const filtered = useMemo(() => {
    if(tab === 'all') return skills
    if(tab === 'top') return skills.filter(s => s.top === true)
    return skills.filter(s => s.cats?.includes(tab))
  }, [tab])

  return (
    <section className="section" id="skills" aria-label="Skills">
      <h2>Skills</h2>

      {/* Tabs */}
      <div className="skills-tabs" role="tablist" aria-label="Skill categories">
        {skillsCategories.map(c => (
          <button
            key={c.id}
            role="tab"
            aria-selected={tab === c.id}
            className={`skills-tab ${tab === c.id ? 'is-active' : ''}`}
            onClick={()=>setTab(c.id)}
            title={c.tooltip || c.title}
          >
            {c.title}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="skills-grid" role="list">
        {filtered.map((s, i)=>(
          <article className="skill-card" role="listitem" key={i} aria-label={`${s.name} — ${s.levelLabel || ''}`}>
            <div className="skill-head">
              <img src={s.logo} alt="" width="36" height="36" className="skill-logo"/>
              <div className="skill-meta">
                <div className="skill-name">{s.name}</div>
                <div className="skill-sub">{s.levelLabel} {s.years ? `• ${s.years}+ yrs` : ''}</div>
              </div>
              {s.top && <span className="skill-badge">Core</span>}
            </div>

            {/* Tags */}
            {Array.isArray(s.tags) && s.tags.length > 0 && (
              <div className="skill-tags">
                {s.tags.map((t, j)=> <span key={j} className="skill-tag">{t}</span>)}
              </div>
            )}

            {/* Meter */}
            <div className="skill-meter" aria-hidden="true">
              <div className="skill-meter__fill" style={{width: `${Math.min(100, (s.level || 0) * 20)}%`}} />
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
