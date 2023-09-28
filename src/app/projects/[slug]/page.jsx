import { allProjects } from 'contentlayer/generated'
import { notFound } from 'next/navigation'
import { useMDXComponent } from 'next-contentlayer/hooks'

export const generateStaticParams = async () => allProjects.map((project) => ({ slug: project._raw.flattenedPath }))

export const generateMetadata = ({ params }) => {
  const project = allProjects.find((project) => project._raw.flattenedPath.endsWith(params.slug))

  if (!project) {
    notFound()
  }

  return { title: project.title }
}

const ProjectLayout = ({ params }) => {
  const project = allProjects.find((project) => project._raw.flattenedPath.endsWith(params.slug))

  if (!project) {
    notFound()
  }

  const MDXContent = useMDXComponent(project.body.code)

  return (
    <article className="py-8 mx-auto max-w-xl">
      <div className="mb-8 text-center">
        <h1>{project.title}</h1>
      </div>
      <MDXContent/>
    </article>
  )
}

export default ProjectLayout
