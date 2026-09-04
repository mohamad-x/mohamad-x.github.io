import React from "react";
import Section from "./Section";
import { DATA } from "../data";

export default function Skills(){
  return (
    <Section id="skills" title="Skills" sub="Security operations backed by governance, risk, compliance, resilience, and automation.">
      <div className="grid cols-3">
        {DATA.skills.map(g => (
          <div key={g.group} className="card">
            <div style={{ fontWeight: 700, color: "var(--cyan)", marginBottom: 8 }}>{g.group}</div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
              {g.items.map(i => <span key={i} className="pill">{i}</span>)}
            </div>
          </div>
        ))}
      </div>
    </Section>
  )
}
