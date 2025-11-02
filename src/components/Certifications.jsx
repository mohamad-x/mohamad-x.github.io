import React from "react";
import Section from "./Section";
import { DATA } from "../data";

// Logos
import microsoft from "../assets/Microsoft.png";
import aws from "../assets/AWS.png";
import comptia from "../assets/comptia.png";
import itil from "../assets/ITIL.png";

// Map vendor -> logo (keys must match DATA.certs[].vendor exactly)
const vendorLogo = {
  Microsoft: microsoft,
  AWS: aws,
  CompTIA: comptia,
  ITIL: itil,
};

export default function Certifications(){
  return (
    <Section id="certifications" title="Certifications" sub="Selected credentials by vendor.">
      <div className="grid cols-2">
        {DATA.certs.map((c) => (
          <div key={c.vendor} className="card certs-card">
            <header className="certs-head">
              <img
                className="certs-logo"
                src={vendorLogo[c.vendor]}
                alt={`${c.vendor} logo`}
                loading="lazy"
              />
              <div className="certs-vendor">{c.vendor}</div>
            </header>
            <div className="certs-list">
              {c.items.map((i) => (
                <span key={i} className="cert-pill">{i}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
