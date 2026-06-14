import { useEffect, useRef } from 'react'
import type { ChildSection as SectionData } from '../data/projects'
import MediaGrid from './MediaGrid'

interface Props {
  section: SectionData
}

export default function Section({ section }: Props) {
  const ref = useRef<HTMLElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('visible')
          observer.disconnect()
        }
      },
      { threshold: 0.08 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <section id={section.id} className="section fade-in" ref={ref}>
      <div className="section__inner">
        <div className="section__header">
          <div className="section__label">{section.label}</div>
          <h2 className="section__title">{section.title}</h2>
        </div>

        <div className="section__body">
          {section.body.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>

        {section.comment && (
          <blockquote className="section__comment">{section.comment}</blockquote>
        )}

        {section.media.length > 0 && <MediaGrid items={section.media} />}
      </div>
    </section>
  )
}
