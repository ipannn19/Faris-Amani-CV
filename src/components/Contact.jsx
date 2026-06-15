import SectionHeading from './SectionHeading'
import { profile } from '../data/portfolio'

export default function Contact() {
  return (
    <section className="section section--alt" id="contact">
      <SectionHeading subtitle="Epilogue" title="Send an Owl" />
      <div className="contact__grid">
        <div className="parchment-card contact__info">
          <p className="contact__intro">
            Whether you have a quest in mind or simply wish to connect, my inbox is always open.
            I typically respond within one business day.
          </p>
          <a href={`mailto:${profile.email}`} className="contact__email">
            {profile.email}
          </a>
          <div className="contact__socials">
            {profile.links.linkedin && (
              <a href={profile.links.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">LinkedIn</a>
            )}
            {profile.links.github && (
              <a href={profile.links.github} target="_blank" rel="noreferrer" aria-label="GitHub">GitHub</a>
            )}
            {profile.links.twitter && (
              <a href={profile.links.twitter} target="_blank" rel="noreferrer" aria-label="Twitter">Twitter</a>
            )}
          </div>
        </div>

        <form className="parchment-card contact__form" onSubmit={(e) => e.preventDefault()}>
          <label className="form-field">
            <span>Your Name</span>
            <input type="text" name="name" placeholder="Hermione Granger" required />
          </label>
          <label className="form-field">
            <span>Your Email</span>
            <input type="email" name="email" placeholder="owl@hedwig.mail" required />
          </label>
          <label className="form-field">
            <span>Your Message</span>
            <textarea name="message" rows={5} placeholder="I have a proposition for you..." required />
          </label>
          <button type="submit" className="btn btn--primary btn--full">
            Release the Owl
          </button>
        </form>
      </div>
    </section>
  )
}
