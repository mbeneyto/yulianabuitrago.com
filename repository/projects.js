import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import remark from 'remark'
import html from 'remark-html'

const projectsDataDirectory = path.join(process.cwd(), 'data')

export function getProjects ({ pagination = { limit: 10, skip: 0 }, sorting = { key: 'order', order: 'desc' } } = {}) {
  // Get files under /data folder
  const projects = fs.readdirSync(projectsDataDirectory)
  const projectsData = projects.map((projectFile) => {
    // Read markdown file as string
    const projectFilePath = path.join(projectsDataDirectory, projectFile)
    const projectFileContent = fs.readFileSync(projectFilePath, 'utf8')

    // Use gray-matter to parse the project metadata section
    const projectMetadata = matter(projectFileContent)

    return projectMetadata.data
  })

  const { key, order } = sorting
  const { limit, skip } = pagination
  // Sort & filter projects
  return projectsData
    .sort((a, b) => {
      if (order === 'desc') {
        return a[key].localeCompare(b[key])
      }

      return b[key].localeCompare(a[key])
    })
    .slice(skip, limit)
}

export function getProjectsIds () {
  const fileNames = fs.readdirSync(projectsDataDirectory)

  return fileNames.map((fileName) => ({
    params: {
      id: fileName.replace(/\.md$/, '')
    }
  }))
}

export async function getProjectData (id) {
  const projectFilePath = path.join(projectsDataDirectory, `${id}.md`)
  const projectFileContent = fs.readFileSync(projectFilePath, 'utf8')

  // Use gray-matter to parse the project metadata section
  const projectMetadata = matter(projectFileContent)

  // Use remark to convert markdown into HTML string
  const processedContent = await remark()
    .use(html)
    .process(projectMetadata.content)
  const contentHtml = processedContent.toString()

  // Combine the data with the id
  return {
    contentHtml,
    ...projectMetadata.data
  }
}
