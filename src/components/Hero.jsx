import React from "react";
import avatar from "../assets/ProfilePic.png";
import { DATA } from "../data";

export default function Hero(){
  return (
    <section id="about" className="hero section">
      <div className="wrap hero-card">
        <div className="hero-grid" style={{ padding: 24 }}>
          <div>
            <div className="overline">{DATA.title}</div>
            <h1 className="name">{DATA.name}</h1>
            <p className="lead">{DATA.blurb}</p>
            <div className="cta">
              <a className="btn primary" href={`mailto:${DATA.links.email}`}>Email</a>
              <a className="btn secondary" href={DATA.links.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
              <a className="btn secondary" href={DATA.links.github} target="_blank" rel="noreferrer">GitHub</a>
            </div>
          </div>
          <div className="avatar" aria-label="profile photo">
            <img src={avatar} alt="Headshot" />
          </div>
        </div>
      </div>
    </section>
  )
}
