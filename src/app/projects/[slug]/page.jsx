import { allProjects } from 'contentlayer/generated'
import { notFound } from 'next/navigation'
import { useMDXComponent } from 'next-contentlayer/hooks'

export const generateStaticParams = async () => allProjects.map((post) => ({ slug: post._raw.flattenedPath }))

export const generateMetadata = ({ params }) => {
  const post = allProjects.find((post) => post._raw.flattenedPath.endsWith(params.slug))

  if (!post) {
    notFound()
  }

  return { title: post.title }
}

const PostLayout = ({ params }) => {
  const project = allProjects.find((project) => project._raw.flattenedPath.endsWith(params.slug))

  const MDXContent = useMDXComponent(project.body.code)

  if (!project) {
    notFound()
  }

  return (
    <article className="py-8 mx-auto max-w-xl">
      <div className="mb-8 text-center">
        <h1>{project.title}</h1>
      </div>
      <MDXContent/>
    </article>
  )
}

export default PostLayout
