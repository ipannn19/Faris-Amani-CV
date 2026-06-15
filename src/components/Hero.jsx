import { profile } from '../data/portfolio'

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero__frame">
        <div className="hero__crest" aria-hidden="true">
          <svg viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="60" cy="60" r="56" stroke="currentColor" strokeWidth="1.5" />
            <path d="M60 20 L72 48 H88 L76 62 L80 88 L60 74 L40 88 L44 62 L32 48 H48 Z" stroke="currentColor" strokeWidth="1.2" fill="none" />
            <circle cx="60" cy="58" r="8" stroke="currentColor" strokeWidth="1" />
          </svg>
        </div>

        <p className="hero__greeting">Portfolio of</p>
        <h1 className="hero__name">{profile.name}</h1>
        <p className="hero__title">{profile.title}</p>
        <p className="hero__tagline">{profile.tagline}</p>

        <div className="hero__actions">
          <button
            type="button"
            className="btn btn--primary"
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
          >
            View My Work
          </button>
          <button
            type="button"
            className="btn btn--outline"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Send an Owl
          </button>
        </div>

        <div className="hero__meta">
          <span>{profile.location}</span>
          <span className="hero__dot" aria-hidden="true">◆</span>
          <a href={`mailto:${profile.email}`}>{profile.email}</a>
        </div>
      </div>
    </section>
  )
}
