import type { MediaItem } from '../data/projects'
import MediaBlock from './MediaBlock'

interface Props {
  items: MediaItem[]
}

export default function MediaGrid({ items }: Props) {
  const count = Math.min(items.length, 4)
  return (
    <div className={`media-grid media-grid--${count}`}>
      {items.map((item, i) => (
        <MediaBlock key={i} item={item} />
      ))}
    </div>
  )
}
