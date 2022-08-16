import { getProjects } from '../../repository/projects'

import Layout from '../../components/Layout'
import ProjectCard from '../../components/ProjectCard'
import ProjectCardsGrid from '../../components/ProjectCardsGrid'

import styles from './styles.module.css'

export async function getStaticProps () {
  const projects = getProjects()
  return {
    props: {
      projects
    }
  }
}

export default function Projects ({ projects }) {
  return (
    <Layout>
      <h1 className={styles.title}>Proyectos</h1>
      <ProjectCardsGrid>
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </ProjectCardsGrid>
    </Layout>
  )
}
