import SectionHeading from './SectionHeading'
import { leadership } from '../data/portfolio'
import { formatBullets } from '../utils/formatBullets'

export default function Leadership() {
  return (
    <section className="section section--alt" id="leadership">
      <SectionHeading subtitle="Chapter IV" title="Leadership Council" />
      <div className="timeline">
        {leadership.map((item, i) => {
          const bullets = formatBullets(item.description)

          return (
            <article key={`${item.organization}-${item.period}`} className="timeline__item">
              <div className="timeline__marker" aria-hidden="true">
                <span>{leadership.length - i}</span>
              </div>
              <div className="parchment-card timeline__card">
                <div className="timeline__header">
                  <div>
                    <h3 className="timeline__role">{item.role}</h3>
                    <p className="timeline__company">{item.organization}</p>
                  </div>
                  <time className="timeline__period">{item.period}</time>
                </div>
                {bullets.length > 1 ? (
                  <ul className="timeline__bullets">
                    {bullets.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                ) : (
                  <p className="timeline__desc">{item.description}</p>
                )}
                {item.highlights?.length > 0 && (
                  <ul className="timeline__tags">
                    {item.highlights.map((tag) => (
                      <li key={tag}>{tag}</li>
                    ))}
                  </ul>
                )}
              </div>
            </article>
          )
        })}
      </div>
    </section>
  )
}
