export default function SectionHeading({ subtitle, title }) {
  return (
    <div className="section-heading">
      <span className="section-heading__ornament" aria-hidden="true">✦</span>
      <p className="section-heading__subtitle">{subtitle}</p>
      <h2 className="section-heading__title">{title}</h2>
      <div className="section-heading__divider" aria-hidden="true" />
    </div>
  )
}
