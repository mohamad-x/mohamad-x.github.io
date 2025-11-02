import React from "react";
export default function Section({ id, title, sub, children }){
  return (
    <section id={id} className="section">
      <div className="wrap">
        <h2 className="h2">{title}</h2>
        {sub && <p className="muted" style={{ marginTop: 4 }}>{sub}</p>}
        <div style={{ marginTop: 16 }}>{children}</div>
      </div>
    </section>
  )
}
