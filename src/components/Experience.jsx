import React from "react";
import Section from "./Section";
import { DATA } from "../data";


export default function Experience(){
  return (
    <Section id="experience" title="Experience" sub="Impact with clear metrics.">
      <div className="timeline">
        {DATA.jobs.map((j, idx) => (
          <article key={`${j.company}-${j.role}`} className="tl-item">
            <div className="tl-dot" aria-hidden />
            <div className="tl-card">
              <header className="tl-head">
                <div>
                <div className="tl-role">{j.role}</div>
                <div className="tl-company muted">{j.company}</div>
                </div>
                <div className="tl-dates muted">{j.dates}</div>
              </header>
              <ul className="ul">
                {j.bullets.map((b,i) => <li key={i}>{b}</li>)}
              </ul>
            </div>
            </article>
          ))}
      </div>
    </Section>
  )
}