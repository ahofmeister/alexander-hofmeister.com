import { allProjects } from 'contentlayer/generated'
import Link from 'next/link'

export default async function Projects() {

  return (
    <div className={'m-16 bg-red-500'}>
      <div className="grid grid-cols-3 gap-12">
        {allProjects.map(project =>
          <div key={project.title} className={'bg-gray border-gray border p-5'}>
            <Link href={project.url}>
              <div className={''} key={project.title}>
                <h2 className="text-xl">
                  {project.title}
                </h2>
              </div>
            </Link>
            <div className={'mt-2'}>
              {project.summary}
            </div>
            <div className={'mt-2'}>
              <a href={project.externalUrl} target={'_blank'} rel="noreferrer"
                 className={'underline decoration-pastel-green-500 underline-offset-4'}>
                {project.externalUrl}
              </a>
            </div>


          </div>
        )}

      </div>
    </div>)
}

