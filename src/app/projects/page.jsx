import { allProjects } from 'contentlayer/generated'
import Link from 'next/link'

export const revalidate = 3600 * 2

export default async function Projects() {

  const projects = allProjects

  return (
    <div className="mx-auto max-w-2xl py-16 text-center">
      {projects.map(project => <div key={project.title}>
        <h2 className="text-lg">
          <Link href={project.url} className={'text-blue-700 hover:text-blue-900'}>
            {project.title}
          </Link>
        </h2>
      </div>)}

    </div>)
}

