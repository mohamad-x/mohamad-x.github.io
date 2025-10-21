// /src/assets/index.js
// All assets as inline SVG data URLs — no async imports, no duplicates.

const svg = (s) => 'data:image/svg+xml;utf8,' + encodeURIComponent(s)
const makeIcon = (path, viewBox = '0 0 24 24') =>
  'data:image/svg+xml;utf8,' +
  encodeURIComponent(
    `<svg xmlns="http://www.w3.org/2000/svg" viewBox="${viewBox}" fill="none" stroke="%23a7ffeb" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">
      ${path}
    </svg>`
  )

/* Cursor glow */
export const cursorBlob = svg(`
<svg xmlns="http://www.w3.org/2000/svg" width="600" height="600">
  <defs>
    <radialGradient id="g" cx="50%" cy="50%">
      <stop offset="0%" stop-color="#53b6ff" stop-opacity="0.8"/>
      <stop offset="50%" stop-color="#7df3d6" stop-opacity="0.55"/>
      <stop offset="100%" stop-color="#000" stop-opacity="0"/>
    </radialGradient>
  </defs>
  <circle cx="300" cy="300" r="280" fill="url(#g)"/>
</svg>`)

// Public file shortcuts (no bundler import needed)
export const profilePhoto = '/profile.png';
export const wolfLogo = '/logo.png';

/* UI / Social */
export const iconLogo = makeIcon('<circle cx="12" cy="12" r="9" stroke="%2353b6ff"/><text x="12" y="16" font-size="9" text-anchor="middle" fill="%23a7ffeb" font-family="Arial">MA</text>')
export const iconGithub = makeIcon('<path d="M9 19c-4.3 1.4-4.3-2.5-6-3m12 6v-3.9a3.4 3.4 0 0 0-.9-2.6c3 0 6-1.5 6-6a4.6 4.6 0 0 0-1.3-3.2 4.3 4.3 0 0 0-.1-3.2s-1.1-.3-3.4 1.3a11.6 11.6 0 0 0-6 0C7 1.8 5.9 2.1 5.9 2.1a4.3 4.3 0 0 0-.1 3.2A4.6 4.6 0 0 0 4.5 9c0 4.5 3 6 6 6a3.4 3.4 0 0 0-.9 2.6V22"/>')
export const iconExternal = makeIcon('<path d="M18 13v6a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><path d="M15 3h6v6"/><path d="M10 14L21 3"/>')

/* Mini tech badges (not brand-accurate, just hints) */
export const techReact = makeIcon('<circle cx="12" cy="12" r="2"/><ellipse cx="12" cy="12" rx="11" ry="4"/><ellipse cx="12" cy="12" rx="11" ry="4" transform="rotate(60 12 12)"/><ellipse cx="12" cy="12" rx="11" ry="4" transform="rotate(120 12 12)"/>')
export const techVite = makeIcon('<path d="M3 4l9 18L21 4z" fill="%2353b6ff" stroke="none"/><path d="M9 10l3 6 3-6z" fill="%237df3d6" stroke="none"/>')
export const techFM = makeIcon('<path d="M3 12h18M12 3v18"/><circle cx="12" cy="12" r="3" fill="%2353b6ff" stroke="none"/>')
export const techGSAP = makeIcon('<path d="M4 18C5 9 9 6 20 6" /><path d="M4 18c6 0 10 2 16 2" />')
export const techKQL = makeIcon('<rect x="4" y="4" width="16" height="16" rx="2"/><path d="M8 8l8 8M8 16l8-8"/>')
export const techPython = makeIcon('<path d="M8 3h4a5 5 0 0 1 5 5v3H7a4 4 0 0 0-4 4v2a4 4 0 0 0 4 4h3"/><circle cx="9" cy="7" r="1" fill="%23a7ffeb" stroke="none"/>')
export const techPowershell = makeIcon('<path d="M4 6l12 6-12 6" /><path d="M14 18h6"/>')
export const techJava = makeIcon('<path d="M8 18c3 2 5 2 8 0"/><path d="M10 14c2 1 4 1 6 0"/><path d="M12 6c2 2-2 3 0 5 2 1-2 2 0 4" />')

/* Profile photo — inline fallback (replace with a real file when ready) */
export const profilePhoto = svg(`
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 160 160">
  <rect width="160" height="160" rx="24" fill="#0f1b28"/>
  <circle cx="80" cy="64" r="28" fill="#24404f"/>
  <rect x="28" y="100" width="104" height="36" rx="18" fill="#1a2c37"/>
</svg>`)

/* Placeholder project image */
export const placeholderImg = svg(`
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 750">
  <defs><linearGradient id="g" x1="0" x2="1">
    <stop offset="0" stop-color="#0e1825"/><stop offset="1" stop-color="#13263a"/>
  </linearGradient></defs>
  <rect width="1200" height="750" fill="url(#g)"/>
  <g fill="#7df3d6" opacity=".9">
    <circle cx="200" cy="120" r="6"/><circle cx="320" cy="260" r="4"/><circle cx="520" cy="180" r="5"/>
    <circle cx="820" cy="140" r="7"/><circle cx="980" cy="260" r="5"/><circle cx="1080" cy="120" r="4"/>
  </g>
  <text x="50%" y="52%" fill="#cdebe4" text-anchor="middle" font-size="56" font-family="Segoe UI,Arial">Project Thumbnail</text>
</svg>`)

/* Logos used across Skills/Certs/Experience/Education */
export const logoMicrosoft = svg(`
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
  <rect width="64" height="64" rx="12" fill="#0f1b28"/>
  <g transform="translate(12,12)">
    <rect width="18" height="18" fill="#f35325"/><rect x="22" width="18" height="18" fill="#81bc06"/>
    <rect y="22" width="18" height="18" fill="#05a6f0"/><rect x="22" y="22" width="18" height="18" fill="#ffba08"/>
  </g>
</svg>`)
export const logoAWS = svg(`
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 140 64">
  <rect width="140" height="64" rx="12" fill="#0f1b28"/>
  <g transform="translate(12,18)" fill="#fff">
    <path d="M20 27l6-18h6l6 18h-5l-1-4h-6l-1 4h-5zm8-8h4l-2-7-2 7zM61 27L58 9h5l2 12 4-12h4l4 12 2-12h5l-3 18h-5l-4-12-4 12h-5zM103 27l-6-18h5l4 12 4-12h5l-6 18h-6z"/>
  </g>
  <path d="M20 49c18 8 82 8 100-6" stroke="#ff9900" stroke-width="3" fill="none" stroke-linecap="round"/>
</svg>`)
export const logoCompTIA = svg(`
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
  <rect width="64" height="64" rx="12" fill="#0f1b28"/>
  <circle cx="32" cy="32" r="18" fill="#e31c3d"/>
  <text x="32" y="37" text-anchor="middle" font-size="14" font-family="Arial,Helvetica,sans-serif" fill="#fff">CompTIA</text>
</svg>`)
export const logoITIL = svg(`
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
  <rect width="64" height="64" rx="12" fill="#0f1b28"/>
  <path d="M46 32a14 14 0 1 1-8-12 10 10 0 1 0 8 12z" fill="#6b46c1"/>
  <circle cx="46" cy="32" r="6" fill="#b794f4"/>
</svg>`)
export const logoNewEra = svg(`
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 80 80">
  <rect rx="14" width="80" height="80" fill="#0f1b28"/>
  <path d="M16 54l22-28 26 28" stroke="#7df3d6" stroke-width="6" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
  <circle cx="40" cy="54" r="5" fill="#53b6ff"/>
</svg>`)
export const logoDTE = svg(`
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 80 80">
  <rect rx="14" width="80" height="80" fill="#0f1b28"/>
  <path d="M18 40h44" stroke="#53b6ff" stroke-width="6"/>
  <path d="M26 26h12v28H26zM42 26h12v28H42z" fill="#7df3d6"/>
</svg>`)
export const logoUSCRI = svg(`
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 80 80">
  <rect rx="14" width="80" height="80" fill="#0f1b28"/>
  <path d="M40 18l22 12v20L40 62 18 50V30z" fill="#53b6ff" opacity=".9"/>
  <path d="M40 26l14 8v12L40 54 26 46V34z" fill="#7df3d6"/>
</svg>`)
export const logoWGU = svg(`
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 80 80">
  <rect rx="14" width="80" height="80" fill="#0f1b28"/>
  <path d="M18 26l22-6 22 6v18c0 10-9 20-22 20S18 54 18 44V26z" fill="#7df3d6"/>
  <circle cx="40" cy="44" r="8" fill="#0f1b28"/>
</svg>`)

/* Security/Cloud/Tools (also used in Skills) */
export const logoPython = svg(`
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 72 72">
  <rect rx="14" width="72" height="72" fill="#0f1b28"/>
  <path d="M36 16c8 0 12 2 12 8v8H30c-6 0-8 4-8 10s2 10 8 10h4v-6h-3c-3 0-5-2-5-4s2-4 5-4h22c6 0 8-4 8-10s-2-10-8-10h-4v6h3c3 0 5 2 5 4s-2 4-5 4H26c-6 0-8 4-8 10" fill="#ffd43b"/>
  <path d="M36 16c-8 0-12 2-12 8v8h18c6 0 8 4 8 10s-2 10-8 10h-4v-6h3c3 0 5-2 5-4s-2-4-5-4H19c-6 0-8-4-8-10s2-10 8-10h4v6h-3c-3 0-5 2-5 4s2 4 5 4h22c6 0 8-4 8-10" fill="#3776ab" opacity=".9"/>
</svg>`)
export const logoPowerShell = svg(`
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 72 72">
  <rect rx="14" width="72" height="72" fill="#0f1b28"/>
  <path d="M18 22l28 14-28 14 4 6 34-20-34-20z" fill="#5391fe"/>
  <rect x="36" y="48" width="16" height="4" rx="2" fill="#7df3d6"/>
</svg>`)
export const logoJava = svg(`
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 72 72">
  <rect rx="14" width="72" height="72" fill="#0f1b28"/>
  <path d="M36 18c6 6-6 10 0 16 6 6-6 10 0 16" stroke="#f15a29" stroke-width="3" fill="none"/>
  <path d="M18 48c12 8 24 8 36 0" stroke="#53b6ff" stroke-width="3" fill="none"/>
</svg>`)
export const logoKQL = svg(`
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 72 72">
  <rect rx="14" width="72" height="72" fill="#0f1b28"/>
  <text x="36" y="42" font-family="Arial,Helvetica,sans-serif" font-size="22" text-anchor="middle" fill="#7df3d6">KQL</text>
</svg>`)
export const logoAzure = svg(`
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 72 72">
  <rect rx="14" width="72" height="72" fill="#0f1b28"/>
  <path d="M36 14 18 52h16l-6 6h26L36 14z" fill="#38a5ff"/>
</svg>`)
export const logoEntra = svg(`
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 72 72">
  <rect rx="14" width="72" height="72" fill="#0f1b28"/>
  <path d="M36 16l18 16-18 24L18 32z" fill="#7df3d6"/>
</svg>`)
export const logoDefender = svg(`
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 72 72">
  <rect rx="14" width="72" height="72" fill="#0f1b28"/>
  <path d="M36 14c12 6 18 6 18 6v14c0 10-7 18-18 24-11-6-18-14-18-24V20s6 0 18-6z" fill="#2aa1ff"/>
</svg>`)
export const logoSentinel = svg(`
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 72 72">
  <rect rx="14" width="72" height="72" fill="#0f1b28"/>
  <path d="M36 16l20 12v16L36 60 16 44V28z" fill="#7df3d6" opacity=".9"/>
  <circle cx="36" cy="36" r="6" fill="#53b6ff"/>
</svg>`)
export const logoSentinelOne = svg(`
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 72 72">
  <rect rx="14" width="72" height="72" fill="#0f1b28"/>
  <rect x="28" y="16" width="4" height="40" rx="2" fill="#9b5cff"/>
  <rect x="40" y="16" width="4" height="40" rx="2" fill="#9b5cff"/>
  <circle cx="36" cy="36" r="14" fill="none" stroke="#9b5cff" stroke-width="3"/>
</svg>`)
export const logoCrowdStrike = svg(`
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 72 72">
  <rect rx="14" width="72" height="72" fill="#0f1b28"/>
  <path d="M20 42c12-4 20-10 32-22-6 14-10 22-14 28" stroke="#ff4d4f" stroke-width="3" fill="none"/>
</svg>`)
export const logoProofpoint = svg(`
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 72 72">
  <rect rx="14" width="72" height="72" fill="#0f1b28"/>
  <rect x="16" y="24" width="40" height="24" rx="6" fill="#d9e1ea"/>
  <circle cx="28" cy="36" r="6" fill="#0f1b28"/>
</svg>`)
export const logoLinux = svg(`
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 72 72">
  <rect rx="14" width="72" height="72" fill="#0f1b28"/>
  <path d="M36 20c10 0 14 8 14 14 0 8-6 18-14 18S22 42 22 34c0-6 4-14 14-14z" fill="#ffd43b"/>
  <circle cx="30" cy="30" r="2" fill="#0f1b28"/><circle cx="42" cy="30" r="2" fill="#0f1b28"/>
</svg>`)
export const logoGit = svg(`
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 72 72">
  <rect rx="14" width="72" height="72" fill="#0f1b28"/>
  <path d="M20 36l16-16 16 16-16 16-16-16z" fill="#f05033"/>
  <circle cx="36" cy="36" r="4" fill="#fff"/>
</svg>`)
export const logoNetworking = svg(`
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 72 72">
  <rect rx="14" width="72" height="72" fill="#0f1b28"/>
  <path d="M20 48h32M24 24h24M36 24v24" stroke="#7df3d6" stroke-width="3" />
</svg>`)
export const logoGRC = svg(`
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 72 72">
  <rect rx="14" width="72" height="72" fill="#0f1b28"/>
  <path d="M18 44l12-12 8 8 16-16" stroke="#7df3d6" stroke-width="4" fill="none" />
  <rect x="18" y="20" width="36" height="32" rx="6" stroke="#53b6ff" stroke-width="2" fill="none"/>
</svg>`)
