export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="footer__ornament" aria-hidden="true">✦ ✦ ✦</div>
      <p className="footer__text">
        Crafted with magic & code — {year} Faris Amani
      </p>
      <p className="footer__motto" aria-hidden="true">
        <em>Draco dormiens nunquam titillandus</em>
      </p>
    </footer>
  )
}
