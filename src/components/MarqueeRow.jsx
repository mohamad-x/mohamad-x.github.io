import React, { useMemo } from 'react'

/**
 * Generic infinite marquee row with fade masks at edges.
 * Props:
 *  - items: array<any>
 *  - render: (item, idx) => ReactNode (your pill/card)
 *  - speedSec: number (default 28)
 *  - ariaLabel: string
 */
export default function MarqueeRow({ items = [], render, speedSec = 28, ariaLabel = 'logos' }) {
  const doubled = useMemo(() => [...items, ...items], [items])
  return (
    <div className="mrq-track" role="region" aria-roledescription="carousel" aria-label={ariaLabel}>
      <div className="mrq-fade mrq-fade--left" aria-hidden="true"></div>
      <div className="mrq-fade mrq-fade--right" aria-hidden="true"></div>

      <div className="mrq-row" style={{ animationDuration: `${speedSec}s` }}>
        {doubled.map((it, i) => (
          <div key={i} className="mrq-item">
            {render(it, i)}
          </div>
        ))}
      </div>
    </div>
  )
}
