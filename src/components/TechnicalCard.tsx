import { useState } from 'react'
import type { TechnicalCard as TCard } from '../data/projects'

const PlaceholderIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
    <rect x="3" y="3" width="18" height="18" rx="2" />
    <circle cx="8.5" cy="8.5" r="1.5" />
    <path d="M21 15l-5-5L5 21" />
  </svg>
)

interface Props {
  card: TCard
}

export default function TechnicalCard({ card }: Props) {
  const [failed, setFailed] = useState(false)

  return (
    <div className="tech-card">
      <div className={`tech-card__media ${!card.image || failed ? 'tech-card__media--placeholder' : ''}`}>
        {!card.image || failed ? (
          <PlaceholderIcon />
        ) : (
          <img
            src={card.image}
            alt={card.imageAlt}
            loading="lazy"
            onError={() => setFailed(true)}
          />
        )}
      </div>
      <div className="tech-card__body">
        <div className="tech-card__title">{card.title}</div>
        <div className="tech-card__text">{card.text}</div>
      </div>
    </div>
  )
}
