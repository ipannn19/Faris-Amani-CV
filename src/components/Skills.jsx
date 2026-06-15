import SectionHeading from './SectionHeading'
import { skills } from '../data/portfolio'

export default function Skills() {
  return (
    <section className="section" id="skills">
      <SectionHeading subtitle="Chapter III" title="Spells & Expertise" />
      <div className="skills__grid">
        {skills.map((group) => (
          <div key={group.category} className="parchment-card skills__card">
            <h3 className="skills__category">{group.category}</h3>
            <ul className="skills__list">
              {group.items.map((skill) => (
                <li key={skill} className="skills__item">
                  <span className="skills__dot" aria-hidden="true" />
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}
