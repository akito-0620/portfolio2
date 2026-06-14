import { Link, useParams } from 'react-router-dom'
import { projects } from '../data/projects'
import MediaGrid from '../components/MediaGrid'

export default function SectionPage() {
  const { projectId, sectionId } = useParams<{ projectId: string; sectionId: string }>()
  const found = projects.find(p => p.id === projectId)
  const project = found?.type === 'project' ? found : undefined
  const section = project?.children.find(s => s.id === sectionId)

  if (!project || !section) {
    return (
      <main className="not-found">
        <p>Section not found.</p>
        <Link to={`/${projectId}`}>← {projectId}</Link>
      </main>
    )
  }

  return (
    <main className="section-page">
      <nav className="section-page__nav">
        <Link to={`/${project.id}`} className="section-page__back">
          ← {project.title}
        </Link>
      </nav>

      <article className="section-page__content">
        <div className="section__header">
          <h1 className="section__title section__title--large">{section.title}</h1>
        </div>

        <div className="section__body">
          {section.body.map((p, i) => <p key={i}>{p}</p>)}
        </div>

        {section.comment && (
          <blockquote className="section__comment">{section.comment}</blockquote>
        )}

        {section.media.length > 0 && (
          <div className="section-page__media">
            <MediaGrid items={section.media} />
          </div>
        )}
      </article>
    </main>
  )
}
