const stars = Array.from({ length: 60 }, (_, i) => ({
  id: i,
  left: `${(i * 17 + 7) % 100}%`,
  top: `${(i * 23 + 11) % 100}%`,
  size: i % 3 === 0 ? 2 : 1,
  delay: `${(i % 10) * 0.4}s`,
  duration: `${2 + (i % 5)}s`,
}))

export default function StarField() {
  return (
    <div className="starfield" aria-hidden="true">
      {stars.map((star) => (
        <span
          key={star.id}
          className="starfield__star"
          style={{
            left: star.left,
            top: star.top,
            width: star.size,
            height: star.size,
            animationDelay: star.delay,
            animationDuration: star.duration,
          }}
        />
      ))}
    </div>
  )
}
