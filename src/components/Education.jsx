import React from "react";
import Section from "./Section";
import { DATA } from "../data";

// Import logos and map to keys defined in data.js
import wgu from "../assets/wgu.png";
import generic from "../assets/generic-uni.svg";

const logoMap = {
  wgu,
  generic
};

export default function Education(){
  return (
    <Section id="education" title="Education">
      <div className="grid cols-3">
        {DATA.education.map(e => (
          <div key={e.degree} className="card edu-card">
            <div className="edu-head">
              <img
                className="edu-logo"
                src={logoMap[e.logo] || generic}
                alt={`${e.school} logo`}
                loading="lazy"
              />
              <div>
                <div className="edu-degree">{e.degree}</div>
                <div className="muted">{e.school} — {e.detail}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  )
}
