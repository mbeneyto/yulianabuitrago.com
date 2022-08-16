import Head from 'next/head'

import { getProjects } from '../repository/projects'

import Layout from '../components/Layout'
import Hero from '../components/sections/Hero'
import ProjectCard from '../components/ProjectCard'
import ProjectCardsGrid from '../components/ProjectCardsGrid'

export async function getStaticProps () {
  const projects = getProjects({ pagination: { limit: 4 } })
  return {
    props: {
      projects
    }
  }
}

export default function Home ({ projects }) {
  return (
    <Layout>
      <Head>
        <title>Yuliana Buitrago González | UX, UI Designer</title>
        <meta
          name="description"
          content="El portolio de Yuliana Buitrado, diseñadora UX & UI"
        ></meta>
      </Head>

      <Hero />
      <ProjectCardsGrid>
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </ProjectCardsGrid>
    </Layout>
  )
}
