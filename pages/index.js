import Head from 'next/head'

import { getSortedProjectsData } from '../scripts/projects'

import Layout from '../components/Layout'
import Hero from '../components/sections/Hero'
import ProjectCard from '../components/ProjectCard'
import ProjectCardsGrid from '../components/ProjectCardsGrid'

export async function getStaticProps () {
  const allProjectsData = getSortedProjectsData()
  return {
    props: {
      allProjectsData
    }
  }
}

export default function Home ({ allProjectsData }) {
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
        {allProjectsData.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </ProjectCardsGrid>
    </Layout>
  )
}
