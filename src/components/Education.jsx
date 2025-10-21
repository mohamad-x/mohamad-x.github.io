import React from 'react'
import { education } from '../constants/index.js'

export default function Education(){
  return (
    <section className="section" id="education" aria-label="Education">
      <h2>Education</h2>

      <div className="edu-timeline">
        {/* Real center line anchored to the middle grid column */}
        <div className="edu-line" aria-hidden="true"></div>

        {education.map((d, i) => {
          const leftSide = i % 2 === 0
          return (
            <div key={i} className="edu-row">
              {/* Card on left OR right */}
              <article className={`edu-card ${leftSide ? 'edu-card--left' : 'edu-card--right'}`}>
                <h3 className="edu-degree">{d.degree}</h3>
                <div className="edu-school">{d.school}</div>
                {d.date && <div className="edu-date">{d.date}</div>}
                {Array.isArray(d.honors) && d.honors.length > 0 && (
                  <ul className="edu-bullets">
                    {d.honors.map((h, j) => <li key={j}>{h}</li>)}
                  </ul>
                )}
              </article>

              {/* Center node + optional range label */}
              <div className="edu-node">
                {d.logo && <img src={d.logo} alt="" width="44" height="44" />}
              </div>
              {d.range && <div className="edu-range">{d.range}</div>}
            </div>
          )
        })}
      </div>
    </section>
  )
}
