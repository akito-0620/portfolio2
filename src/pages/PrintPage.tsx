import { projects } from '../data/projects'
import type { Project } from '../data/projects'
import MediaGrid from '../components/MediaGrid'
import TechnicalCard from '../components/TechnicalCard'
import MediaBlock from '../components/MediaBlock'

export default function PrintPage() {
  const onlyProjects = projects.filter((p): p is Project => p.type === 'project')
  return (
    <main className="print-page">
      {onlyProjects.map(project => (
        <div key={project.id} className="print-project">
          {/* Hero */}
          <section className="hero hero--print">
            <div className="hero__content">
              <h1 className="hero__title">{project.title}</h1>
              <p className="hero__subtitle">{project.subtitle}</p>
              <p className="hero__desc">{project.description}</p>
            </div>
          </section>

          {/* Overview */}
          <section className="section">
            <div className="section__inner">
              <div className="section__header">
                <div className="section__label">01 Project Overview</div>
                <h2 className="section__title">Project Overview</h2>
              </div>
              <div className="section__body">
                {project.overview.body.map((p, i) => <p key={i}>{p}</p>)}
              </div>
              <MediaGrid items={project.overview.media} />
            </div>
          </section>

          {/* Technical */}
          <section className="section">
            <div className="section__inner">
              <div className="section__header">
                <div className="section__label">02 Technical Overview</div>
                <h2 className="section__title">Technical Overview</h2>
              </div>
              <div className="tech-cards">
                {project.technical.map(card => (
                  <TechnicalCard key={card.title} card={card} />
                ))}
              </div>
            </div>
          </section>

          {/* Demo */}
          {project.demoVideo && (
            <section className="section">
              <div className="section__inner">
                <div className="section__header">
                  <div className="section__label">Demo</div>
                  <h2 className="section__title">Demo Video</h2>
                </div>
                <div className="demo-video">
                  <MediaBlock item={project.demoVideo} />
                </div>
              </div>
            </section>
          )}

          {/* Child sections */}
          {project.children.map(child => (
            <section key={child.id} className="section">
              <div className="section__inner">
                <div className="section__header">
                  <div className="section__label">{child.label}</div>
                  <h2 className="section__title">{child.title}</h2>
                </div>
                <div className="section__body">
                  {child.body.map((p, i) => <p key={i}>{p}</p>)}
                </div>
                {child.comment && (
                  <blockquote className="section__comment">{child.comment}</blockquote>
                )}
                {child.media.length > 0 && <MediaGrid items={child.media} />}
              </div>
            </section>
          ))}

        </div>
      ))}
    </main>
  )
}
