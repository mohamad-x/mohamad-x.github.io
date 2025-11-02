import React from "react";
import Section from "./Section";
import { DATA } from "../data";
import mail from "../assets/mail.png";
import phone from "../assets/phone.png";
import linkedin from "../assets/linkedin.png";

export default function Contact(){
  return (
    <Section id="contact" title="Contact" sub="Reach me through any of the channels below.">
      <div className="contact-grid">
        <a className="contact-item" href={`mailto:${DATA.links.email}`}>
          <img className="contact-icon" src={mail} alt="Email" loading="lazy" />
          <div className="contact-content">
            <div className="contact-label">Email</div>
            <div className="contact-value">{DATA.links.email}</div>
          </div>
        </a>
        <a className="contact-item" href={`tel:${DATA.links.phone.replace(/[^+0-9]/g, "")}`}>
          <img className="contact-icon" src={phone} alt="Phone" loading="lazy" />
          <div className="contact-content">
            <div className="contact-label">Phone</div>
            <div className="contact-value">{DATA.links.phone}</div>
          </div>
        </a>
        <a className="contact-item" href={DATA.links.linkedin} target="_blank" rel="noreferrer">
          <img className="contact-icon" src={linkedin} alt="LinkedIn" loading="lazy" />
          <div className="contact-content">
            <div className="contact-label">LinkedIn</div>
            <div className="contact-value">View profile</div>
          </div>
        </a>
      </div>
    </Section>
  );
}
