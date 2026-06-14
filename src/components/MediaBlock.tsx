import { useState } from 'react'
import type { MediaItem } from '../data/projects'
import { asset } from '../utils/asset'

const PlaceholderIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="placeholder-icon">
    <rect x="3" y="3" width="18" height="18" rx="2" />
    <circle cx="8.5" cy="8.5" r="1.5" />
    <path d="M21 15l-5-5L5 21" />
  </svg>
)

const VideoIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="placeholder-icon">
    <rect x="2" y="4" width="20" height="16" rx="2" />
    <polygon points="10,9 16,12 10,15" fill="currentColor" stroke="none" />
  </svg>
)

interface Props {
  item: MediaItem
}

export default function MediaBlock({ item }: Props) {
  const [failed, setFailed] = useState(false)

  if (item.type === 'video') {
    return (
      <div className="media-block">
        {failed ? (
          <div className="media-block--placeholder">
            <VideoIcon />
            <span className="placeholder-label">{item.alt}</span>
          </div>
        ) : (
          <video
            autoPlay
            muted
            loop
            playsInline
            poster={item.poster ? asset(item.poster) : undefined}
            aria-label={item.alt}
            onError={() => setFailed(true)}
          >
            <source src={asset(item.src)} type="video/mp4" />
          </video>
        )}
      </div>
    )
  }

  return (
    <div className="media-block">
      {failed ? (
        <div className="media-block--placeholder">
          <PlaceholderIcon />
          <span className="placeholder-label">{item.alt}</span>
        </div>
      ) : (
        <img
          src={asset(item.src)}
          alt={item.alt}
          loading="lazy"
          onError={() => setFailed(true)}
        />
      )}
    </div>
  )
}
