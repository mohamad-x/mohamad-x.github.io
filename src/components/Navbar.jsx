import React, { useEffect } from "react";

export default function Navbar(){
  useEffect(() => {
    const ids = ["#about","#skills","#experience","#projects","#education","#certifications","#contact"]
    const secs = ids.map(id => document.querySelector(id)).filter(Boolean)
    const links = ids.map(id => document.querySelector(`[data-scroll-to="${id}"]`)).filter(Boolean)
    const setActive = (id) => links.forEach(a => a.classList.toggle("active", a.getAttribute("data-scroll-to") === id))
    const obs = new IntersectionObserver((entries) => {
      const top = entries.filter(e => e.isIntersecting).sort((a,b) => a.boundingClientRect.top - b.boundingClientRect.top)[0]
      if (top?.target?.id) setActive("#"+top.target.id)
    }, { rootMargin: "-30% 0px -60% 0px", threshold: [0.1,0.25,0.5] })
    secs.forEach(s => obs.observe(s))
    return () => obs.disconnect()
  }, [])

  useEffect(() => {
    const links = document.querySelectorAll("[data-scroll-to]")
    const on = (e, a) => { const id = a.getAttribute("data-scroll-to"); const el = document.querySelector(id); if(el){ e.preventDefault(); el.scrollIntoView({behavior:"smooth"}) } }
    links.forEach(a => a.addEventListener("click", (e)=>on(e,a)))
    return () => links.forEach(a => a.removeEventListener("click", (e)=>on(e,a)))
  }, [])

  return (
    <div className="nav">
      <div className="wrap nav-inner">
        <div className="brand">Mohamad Abdulazim</div>
        <nav className="nav-links">
          {["#about","#skills","#experience","#projects","#education","#certifications","#contact"].map(id => (
            <a key={id} href={id} data-scroll-to={id}>{id.replace("#","").replace(/^[a-z]/, m => m.toUpperCase())}</a>
          ))}
        </nav>
        <a className="btn-nav" href="/resume.html" target="_blank" rel="noreferrer">Resume</a>
      </div>
    </div>
  )
}
