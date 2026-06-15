export function formatBullets(text) {
  if (!text) return []

  return text
    .split('•')
    .map((part) => part.trim())
    .filter(Boolean)
}
