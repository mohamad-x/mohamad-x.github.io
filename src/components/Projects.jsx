import React from "react";
import Section from "./Section";
import { DATA } from "../data";


export default function Projects(){
return (
<Section id="projects" title="Projects" sub="Built for real SOC workflows.">
<div className="grid cols-2">
{DATA.projects.map(p => (
<div key={p.title} className="card">
<div style={{ display: "flex", justifyContent: "space-between", gap: 12 }}>
<div style={{ fontWeight: 700 }}>{p.title}</div>
<div style={{ display: "flex", gap: 8 }}>
<a className="pill" href={p.link} target="_blank" rel="noreferrer">Repo</a>
</div>
</div>
<p className="muted" style={{ marginTop: 8 }}>{p.desc}</p>
<div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginTop: 8 }}>
{p.stack.map(s => <span key={s} className="pill">{s}</span>)}
</div>
</div>
))}
</div>
</Section>
)
}