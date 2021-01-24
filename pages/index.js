import Head from "next/head"
import Link from "next/link"
import Layout from "components/Layout"
import Date from "components/date"
import { getSortedProjectsData } from "lib/projects"
import Hero from "components/Hero"

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
      <ul>
        {allProjectsData.map(({ id, date, title }) => (
          <li key={id}>
            <Link href={`/projects/${id}`}>
              <a>{title}</a>
            </Link>
            <br />
            <small>
              <Date dateString={date} />
            </small>
          </li>
        ))}
      </ul>
    </Layout>
  )
}
