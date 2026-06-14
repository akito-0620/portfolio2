import { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { projects } from '../data/projects'
import type { MediaItem } from '../data/projects'
import MediaBlock from '../components/MediaBlock'
import TechnicalCard from '../components/TechnicalCard'

function HeroImage({ item, flexBasis }: { item: MediaItem; flexBasis: string }) {
  const [failed, setFailed] = useState(false)
  return (
    <div className="hero__image-slot" style={{ flex: `0 0 ${flexBasis}` }}>
      {!failed && (
        <img src={item.src} alt={item.alt} onError={() => setFailed(true)} />
      )}
    </div>
  )
}

export default function ProjectPage() {
  const { projectId } = useParams<{ projectId: string }>()
  const found = projects.find(p => p.id === projectId)
  const project = found?.type === 'project' ? found : undefined

  if (!project) {
    return (
      <main className="not-found">
        <p>Project not found.</p>
        <Link to="/">← 戻る</Link>
      </main>
    )
  }

  return (
    <main className="project-page">
      {/* Hero */}
      <section className="hero">
        <div className="hero__images">
          {(() => {
            const total = project.heroImages.reduce((sum, img) => sum + (img.naturalWidth ?? 1), 0)
            return project.heroImages.map((img, i) => {
              const pct = ((img.naturalWidth ?? 1) / total * 100).toFixed(4) + '%'
              return <HeroImage key={i} item={img} flexBasis={pct} />
            })
          })()}
        </div>
        <div className="hero__content">
          <Link to="/" className="hero__back">← Portfolio</Link>
          <h1 className="hero__title">{project.title}</h1>
          <p className="hero__subtitle">{project.subtitle}</p>
          <p className="hero__desc">{project.description}</p>
        </div>
      </section>

      {/* Project Overview + Demo Video */}
      <section className="section">
        <div className="section__inner">
          <div className="section__header">
            <div className="section__label">01 Project Overview</div>
            <h2 className="section__title">Project Overview</h2>
          </div>
          <div className="section__body">
            {project.overview.body.map((p, i) => <p key={i}>{p}</p>)}
          </div>
          {project.demoVideo && (
            <div className="overview-video">
              <MediaBlock item={project.demoVideo} />
            </div>
          )}
        </div>
      </section>

      {/* Technical Overview */}
      <section className="section">
        <div className="section__inner">
          <div className="section__header">
            <div className="section__label">02 Technical Overview</div>
            <h2 className="section__title">Technical Overview</h2>
          </div>
          <div className="section__body">
            <p>UI・制御・ハードウェア・製作・評価を横断して形にした研究です。</p>
          </div>
          <div className="tech-cards">
            {project.technical.map(card => (
              <TechnicalCard key={card.title} card={card} />
            ))}
          </div>
        </div>
      </section>

      {/* Child blocks */}
      <section className="section section--children">
        <div className="section__inner">
          <div className="section__header">
            <div className="section__label">Activities</div>
            <h2 className="section__title">活動の記録</h2>
          </div>
          <div className="child-cards">
            {project.children.map(child => (
              <Link
                key={child.id}
                to={`/${project.id}/${child.id}`}
                className="child-card"
              >
                <div className="child-card__media">
                  {child.media[0] ? (
                    <MediaBlock item={child.media[0]} />
                  ) : (
                    <div className="child-card__media-placeholder" />
                  )}
                </div>
                <div className="child-card__body">
                  <span className="child-card__label">{child.label}</span>
                  <h3 className="child-card__title">{child.title}</h3>
                  <p className="child-card__excerpt">{child.body[0]}</p>
                  <span className="child-card__cta">詳細 →</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

    </main>
  )
}
