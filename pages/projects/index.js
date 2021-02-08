import Layout from "components/Layout"
import { getSortedProjectsData } from "scripts/projects"
import ProjectCard from "components/ProjectCard"
import ProjectCardsGrid from "components/ProjectCardsGrid"
import styles from "./styles.module.css"

export async function getStaticProps() {
  const allProjectsData = getSortedProjectsData()
  return {
    props: {
      allProjectsData,
    },
  }
}

export default function Projects({ allProjectsData }) {
  return (
    <Layout>
      <h1 className={styles.title}>Proyectos</h1>
      <ProjectCardsGrid>
        {allProjectsData.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </ProjectCardsGrid>
    </Layout>
  )
}
