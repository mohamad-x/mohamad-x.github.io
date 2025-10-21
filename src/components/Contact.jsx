import React from 'react'
import { motion } from 'framer-motion'
import { brand, links } from '../constants/index.js'

const IconMail = (props) => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>
    <path d="M4 6h16a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2z"/>
    <path d="m22 8-10 6L2 8"/>
  </svg>
)

const IconPhone = (props) => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.08 4.18 2 2 0 0 1 4.06 2h3a2 2 0 0 1 2 1.72c.13.98.38 1.93.73 2.83a2 2 0 0 1-.45 2.11L8.1 9.9a16 16 0 0 0 6 6l1.24-1.24a2 2 0 0 1 2.11-.45c.9.35 1.85.6 2.83.73A2 2 0 0 1 22 16.92z"/>
  </svg>
)

const IconLinkedIn = (props) => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>
    <path d="M16 8a6 6 0 0 1 6 6v6h-4v-6a2 2 0 0 0-4 0v6h-4v-6a6 6 0 0 1 6-6z"/>
    <rect x="2" y="9" width="4" height="11" />
    <circle cx="4" cy="4" r="2" />
  </svg>
)

export default function Contact(){
  const email = brand?.contact?.email || 'example@example.com'
  const phone = brand?.contact?.phone || '(000) 000-0000'
  const linkedin = links?.external?.href || '#'

  return (
    <section className="section" id="contact" aria-label="Contact">
      <h2 className="sr-only">Contact</h2>
      <motion.div
        className="contact-signature"
        initial={{opacity:0, y:12}}
        whileInView={{opacity:1, y:0}}
        viewport={{once:true}}
        transition={{duration:.5}}
      >
        <a className="sig-link" href={`mailto:${email}`} title="Email">
          <IconMail /><span className="sig-text">{email}</span>
        </a>

        <span className="sig-divider">•</span>

        <a className="sig-link" href={`tel:${phone}`} title="Phone">
          <IconPhone /><span className="sig-text">{phone}</span>
        </a>

        <span className="sig-divider">•</span>

        <a className="sig-link" href={linkedin} target="_blank" rel="noreferrer" title="LinkedIn: Mohamad Abdulazim">
          <IconLinkedIn /><span className="sig-text">{brand.name}</span>
        </a>


      </motion.div>
    </section>
  )
}
