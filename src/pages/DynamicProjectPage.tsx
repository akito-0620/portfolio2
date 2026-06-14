import { useParams } from 'react-router-dom'
import { projects } from '../data/projects'
import ProjectPage from './ProjectPage'
import RepoPage from './RepoPage'

export default function DynamicProjectPage() {
  const { projectId } = useParams<{ projectId: string }>()
  const project = projects.find(p => p.id === projectId)

  if (project?.type === 'repo') return <RepoPage />
  return <ProjectPage />
}
