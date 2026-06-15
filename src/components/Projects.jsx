import SectionHeading from './SectionHeading'
import { projects } from '../data/portfolio'
import { formatBullets } from '../utils/formatBullets'

export default function Projects() {
  return (
    <section className="section section--alt" id="projects">
      <SectionHeading subtitle="Chapter V" title="Field Expeditions" />
      <div className="projects__grid">
        {projects.map((project) => {
          const bullets = formatBullets(project.description)

          return (
            <article key={project.title} className="parchment-card project-card">
              <div className="project-card__glow" aria-hidden="true" />
              <h3 className="project-card__title">{project.title}</h3>
              {bullets.length > 1 ? (
                <ul className="project-card__bullets">
                  {bullets.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              ) : (
                <p className="project-card__desc">{project.description}</p>
              )}
              {project.date?.length > 0 && (
                <ul className="project-card__tech">
                  {project.date.map((d) => (
                    <li key={d}>{d}</li>
                  ))}
                </ul>
              )}
              {project.tech?.length > 0 && (
                <ul className="project-card__tech">
                  {project.tech.map((t) => (
                    <li key={t}>{t}</li>
                  ))}
                </ul>
              )}
              {(project.link || project.github) && (
                <div className="project-card__links">
                  {project.link && (
                    <a href={project.link} className="project-card__link">Live Demo →</a>
                  )}
                  {project.github && (
                    <a href={project.github} className="project-card__link project-card__link--muted">Source Code</a>
                  )}
                </div>
              )}
            </article>
          )
        })}
      </div>
    </section>
  )
}
