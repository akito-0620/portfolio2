import { Link, useParams } from 'react-router-dom'
import { projects } from '../data/projects'
import MediaBlock from '../components/MediaBlock'

export default function RepoPage() {
  const { projectId } = useParams<{ projectId: string }>()
  const found = projects.find(p => p.id === projectId)
  const project = found?.type === 'repo' ? found : undefined

  if (!project) {
    return (
      <main className="not-found">
        <p>Project not found.</p>
        <Link to="/">← 戻る</Link>
      </main>
    )
  }

  return (
    <main className="section-page">
      <nav className="section-page__nav">
        <Link to="/" className="section-page__back">← Portfolio</Link>
      </nav>
      <article className="section-page__content section-page__content--repo">
        <div className="section__header">
          <div className="section__label">{project.label}</div>
          <h1 className="section__title section__title--large">{project.title}</h1>
        </div>
        <div className="section__body">
          <p>{project.description}</p>
        </div>
        {(project.github || project.paper) && (
          <div className="repo-page__links">
            {project.paper && (
              <a href={project.paper} target="_blank" rel="noopener noreferrer" className="repo-page__link">
                論文 →
              </a>
            )}
            {project.github && (
              <a href={project.github} target="_blank" rel="noopener noreferrer" className="repo-page__link">
                GitHub →
              </a>
            )}
          </div>
        )}
        <div className="repo-page__media">
          <MediaBlock item={project.media} />
        </div>
      </article>
    </main>
  )
}
