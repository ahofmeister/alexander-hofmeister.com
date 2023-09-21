import { allProjects } from 'contentlayer/generated'
import Link from 'next/link'

export default async function Projects() {

  return (
    <div className={'m-16 bg-red-500'}>
      <div className="grid grid-cols-3 gap-12">
        {allProjects.map(project =>
          <Link key={project.title} href={project.url} className={'bg-gray'}>
            <div className={'border-gray border p-5'} key={project.title}>
              <h2 className="text-xl">
                {project.title}
              </h2>
              <div className={'mt-2'}>
                {project.summary}
              </div>
            </div>
          </Link>)}

      </div>
    </div>)
}

