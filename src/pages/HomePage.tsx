import { useState } from 'react'
import { Link } from 'react-router-dom'
import { projects } from '../data/projects'
import type { Project, RepoProject } from '../data/projects'
import { profile } from '../data/profile'
import MediaBlock from '../components/MediaBlock'
import { asset } from '../utils/asset'

function Avatar() {
  const [failed, setFailed] = useState(false)
  return (
    <div className="profile__avatar">
      {failed ? (
        <span className="profile__avatar--initials">
          {profile.nameEn.split(' ').map(s => s[0]).join('')}
        </span>
      ) : (
        <img src={asset(profile.avatar)} alt={profile.nameEn} onError={() => setFailed(true)} />
      )}
    </div>
  )
}

export default function HomePage() {
  const mainProjects = projects.filter((p): p is Project => p.type === 'project')
  const repoProjects = projects.filter((p): p is RepoProject => p.type === 'repo')

  return (
    <main className="home">

      {/* Profile */}
      <section className="home__profile">

        {/* Left: photo + name + affiliation */}
        <div className="profile__left">
          <Avatar />
          <h1 className="profile__name">{profile.nameJa}</h1>
          <p className="profile__name-en">{profile.nameEn}</p>
          <p className="profile__university">{profile.university}</p>
          <p className="profile__field">{profile.field}</p>
        </div>

        {/* Right: about + links + tags */}
        <div className="profile__right">
          <h2 className="profile__about-title">私について</h2>
          <p className="profile__bio">{profile.bio}</p>

          <div className="profile__meta">
            <div className="profile__meta-col">
              <h3 className="profile__meta-heading">プロフィール</h3>
              <ul className="profile__link-list">
                {profile.links.map(link => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      target={link.href.startsWith('mailto') ? undefined : '_blank'}
                      rel="noopener noreferrer"
                      className="profile__link"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="profile__meta-col">
              <h3 className="profile__meta-heading">研究</h3>
              <ul className="profile__tag-list">
                {profile.research.map(tag => (
                  <li key={tag} className="profile__tag">#{tag}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>

      </section>

      {/* Main projects */}
      <div className="home__projects">
        {mainProjects.map(project => (
          <Link key={project.id} to={`/${project.id}`} className="project-card">
            <div className="project-card__media">
              {project.heroImages[0] ? (
                <MediaBlock item={project.heroImages[0]} />
              ) : (
                <div className="project-card__media-placeholder" />
              )}
            </div>
            <div className="project-card__body">
              <span className="project-card__label">Project</span>
              <h2 className="project-card__title">{project.title}</h2>
              <p className="project-card__subtitle">{project.subtitle}</p>
              <p className="project-card__desc">{project.description}</p>
              <div className="project-card__children">
                {project.children.map(child => (
                  <span key={child.id} className="project-card__child-tag">
                    {child.label}
                  </span>
                ))}
              </div>
              <span className="project-card__cta">詳細を見る →</span>
            </div>
          </Link>
        ))}
      </div>

      {/* Repo projects */}
      {repoProjects.length > 0 && (
        <div className="home__repos">
          <p className="home__repos-label">Other Projects</p>
          <div className="home__repos-grid">
            {repoProjects.map(project => (
              <Link key={project.id} to={`/${project.id}`} className="child-card child-card--repo">
                <div className="child-card__media">
                  <MediaBlock item={project.media} />
                </div>
                <div className="child-card__body">
                  <span className="child-card__label">{project.label}</span>
                  <h2 className="child-card__title">{project.title}</h2>
                  <p className="child-card__excerpt">{project.description}</p>
                  <span className="child-card__cta">詳細 →</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}

    </main>
  )
}
