import SectionHeading from './SectionHeading'
import { education } from '../data/portfolio'

export default function Education() {
  return (
    <section className="section section--alt" id="education">
      <SectionHeading subtitle="Chapter II" title="Academy Records" />
      <div className="timeline">
        {education.map((item, i) => (
          <article key={`${item.school}-${item.period}`} className="timeline__item">
            <div className="timeline__marker" aria-hidden="true">
              <span>{education.length - i}</span>
            </div>
            <div className="parchment-card timeline__card">
              <div className="timeline__header">
                <div>
                  <h3 className="timeline__role">{item.degree}</h3>
                  <p className="timeline__company">{item.school}</p>
                </div>
                <time className="timeline__period">{item.period}</time>
              </div>
              <p className="timeline__desc">{item.detail}</p>
              {item.highlights?.length > 0 && (
                <ul className="timeline__tags">
                  {item.highlights.map((tag) => (
                    <li key={tag}>{tag}</li>
                  ))}
                </ul>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
