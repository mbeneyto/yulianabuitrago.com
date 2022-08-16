import Head from 'next/head'

import Layout from '../../components/Layout'

import { getProjectsIds, getProjectData } from '../../repository/projects'

export async function getStaticPaths () {
  const paths = getProjectsIds()
  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps ({ params }) {
  const projectData = await getProjectData(params.id)
  return {
    props: {
      projectData
    }
  }
}

export default function Project ({ projectData }) {
  return (
    <>
      <Head>
        <title>{projectData.title}</title>
      </Head>
      <Layout>
        <article>
          <h1>{projectData.title}</h1>
          <div></div>
          <div dangerouslySetInnerHTML={{ __html: projectData.contentHtml }} />
        </article>
      </Layout>
    </>
  )
}
