const { Client } = require('@notionhq/client')

export const revalidate = 3600 * 2

async function getProjects() {
  const notion = new Client({ auth: process.env.NOTION_API_KEY })

  const response = await notion.databases.query({ database_id: process.env.NOTION_PROJECTS_DB })
  return response.results
}

export default async function Projects() {

  const projects = await getProjects()

  return (
    <div className="mx-auto max-w-2xl py-16 text-center">
      {projects.map(project => {
        // eslint-disable-next-line react/jsx-key
        return <div>{project.properties.title.title[0].plain_text}</div>
      })}

    </div>)
}

