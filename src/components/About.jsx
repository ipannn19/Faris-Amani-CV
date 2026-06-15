import SectionHeading from './SectionHeading'
import { profile, about } from '../data/portfolio'

export default function About() {
  return (
    <section className="section" id="about">
      <SectionHeading subtitle="Chapter I" title="The Geoscientist's Chronicle" />
      <div className="about__grid">
        <div className="parchment-card about__card">
          <p className="about__intro">
            <strong>{profile.title}</strong> at {profile.location.split(',')[0]}
          </p>
          <p className="about__text">{profile.summary}</p>
          <div className="about__traits">
            {about.traits.map((trait) => (
              <div key={trait.title} className="trait">
                <span className="trait__icon" aria-hidden="true">{trait.icon}</span>
                <div>
                  <strong>{trait.title}</strong>
                  <p>{trait.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="about__stats">
          {about.stats.map((stat) => (
            <div key={stat.label} className="stat-card">
              <span className="stat-card__number">{stat.number}</span>
              <span className="stat-card__label">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
