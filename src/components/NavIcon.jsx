const icons = {
  about: (
    <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path
        d="M6 24 L16 6 L26 24 Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
        fill="rgba(212,175,55,0.12)"
      />
      <path d="M10 20 H22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <circle cx="16" cy="14" r="2" fill="currentColor" />
      <path d="M13 6 L16 2 L19 6" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
    </svg>
  ),
  education: (
    <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path
        d="M8 6 H24 C25.1 6 26 6.9 26 8 V24 C26 25.1 25.1 26 24 26 H8 C6.9 26 6 25.1 6 24 V8 C6 6.9 6.9 6 8 6 Z"
        stroke="currentColor"
        strokeWidth="1.5"
        fill="rgba(212,175,55,0.1)"
      />
      <path d="M10 11 H22 M10 16 H18 M10 21 H20" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
      <path d="M20 4 L22 6 L20 8" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="22" cy="6" r="1.5" fill="currentColor" />
    </svg>
  ),
  skills: (
    <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path
        d="M6 26 L8 8 C8 7 9 6 10 6 C11 6 12 7 12 8 L14 26"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        fill="rgba(212,175,55,0.15)"
      />
      <path d="M5 26 H15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path className="wand-sparkle wand-sparkle--1" d="M18 10 L19 8 M22 12 L24 11 M20 16 L22 17" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
      <path className="wand-sparkle wand-sparkle--2" d="M24 8 L25 6 M27 14 L29 14" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
      <circle className="wand-sparkle wand-sparkle--3" cx="26" cy="10" r="1" fill="currentColor" />
    </svg>
  ),
  projects: (
    <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path
        d="M10 13 C10 9.5 12.5 7 16 7 C19.5 7 22 9.5 22 13 V19 C22 23.5 19.5 27 16 27 C12.5 27 10 23.5 10 19 V13 Z"
        stroke="currentColor"
        strokeWidth="1.5"
        fill="rgba(212,175,55,0.1)"
      />
      <path
        d="M14 7 V4.5 C14 3.7 14.7 3 15.5 3 H16.5 C17.3 3 18 3.7 18 4.5 V7"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <rect x="13" y="1" width="6" height="3" rx="1" fill="rgba(212,175,55,0.25)" stroke="currentColor" strokeWidth="1.2" />
      <path
        d="M12 20 C12 22.5 13.8 24.5 16 24.5 C18.2 24.5 20 22.5 20 20"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
        fill="currentColor"
        fillOpacity="0.3"
      />
      <circle className="potion-bubble potion-bubble--1" cx="14" cy="18" r="1" fill="currentColor" opacity="0.7" />
      <circle className="potion-bubble potion-bubble--2" cx="17.5" cy="16" r="0.8" fill="currentColor" opacity="0.5" />
      <circle className="potion-bubble potion-bubble--3" cx="15" cy="14" r="0.6" fill="currentColor" opacity="0.4" />
      <path d="M16 10 V12 M14.5 11 H17.5" stroke="currentColor" strokeWidth="1" strokeLinecap="round" opacity="0.5" />
    </svg>
  ),
  leadership: (
    <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path
        d="M8 24 L16 8 L24 24 Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
        fill="rgba(212,175,55,0.12)"
      />
      <path d="M10 20 H22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <circle cx="16" cy="15" r="2.5" stroke="currentColor" strokeWidth="1.2" fill="rgba(212,175,55,0.2)" />
      <path d="M12 24 V27 H20 V24" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M16 5 V8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <circle cx="16" cy="4" r="1.2" fill="currentColor" />
    </svg>
  ),
  contact: (
    <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path
        className="owl-wing owl-wing--left"
        d="M8 17 C4 15 3 19 5 21 C6.5 22 7.5 21 8.5 20"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinecap="round"
        fill="rgba(212,175,55,0.1)"
      />
      <path
        className="owl-wing owl-wing--right"
        d="M24 17 C28 15 29 19 27 21 C25.5 22 24.5 21 23.5 20"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinecap="round"
        fill="rgba(212,175,55,0.1)"
      />
      <ellipse cx="16" cy="21" rx="6" ry="5.5" fill="rgba(212,175,55,0.12)" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="16" cy="12" r="6.5" fill="rgba(212,175,55,0.15)" stroke="currentColor" strokeWidth="1.5" />
      <path d="M11.5 7.5 L10 3.5 L13.5 7" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M20.5 7.5 L22 3.5 L18.5 7" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="13" cy="12" r="2.2" stroke="currentColor" strokeWidth="1.2" fill="#001233" />
      <circle cx="19" cy="12" r="2.2" stroke="currentColor" strokeWidth="1.2" fill="#001233" />
      <circle cx="13" cy="12" r="0.9" fill="currentColor" />
      <circle cx="19" cy="12" r="0.9" fill="currentColor" />
      <path d="M16 14 L16 16.5 L14.5 15.5 Z" fill="currentColor" />
      <rect x="11" y="25" width="10" height="6" rx="0.8" fill="rgba(212,175,55,0.2)" stroke="currentColor" strokeWidth="1.2" />
      <path d="M11 25 L16 28.5 L21 25" stroke="currentColor" strokeWidth="1.2" strokeLinejoin="round" />
      <path d="M16 28.5 V31" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
    </svg>
  ),
}

export default function NavIcon({ id }) {
  return icons[id] ?? null
}
