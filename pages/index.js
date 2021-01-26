import Head from "next/head"
import Layout from "components/Layout"
import { getSortedProjectsData } from "scripts/projects"
import Hero from "components/sections/Hero"
import ProjectCard from "components/ProjectCard"
import ProjectCardsGrid from "components/ProjectCardsGrid"

export async function getStaticProps() {
  const allProjectsData = getSortedProjectsData()
  return {
    props: {
      allProjectsData,
    },
  }
}

export default function Home({ allProjectsData }) {
  return (
    <Layout home>
      <Head>
        <title>Yuliana Buitrago González | UX, UI Designer</title>
      </Head>

      <Hero />
      <ProjectCardsGrid>
        {allProjectsData.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </ProjectCardsGrid>
    </Layout>
  )
}
