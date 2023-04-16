import { format, parseISO } from 'date-fns'
import { allPosts } from 'contentlayer/generated'
import { notFound } from 'next/navigation'
import { useMDXComponent } from 'next-contentlayer/hooks'

export const generateStaticParams = async () => allPosts.map((post) => ({ slug: post._raw.flattenedPath }))

export const generateMetadata = ({ params }) => {
  const post = allPosts.find((post) => post._raw.flattenedPath === params.slug)

  if (!post) {
    notFound()
  }

  return { title: post.title }
}

const PostLayout = ({ params }) => {
  const post = allPosts.find((post) => post._raw.flattenedPath === params.slug)

  const MDXContent = useMDXComponent(post.body.code)

  if (!post) {
    notFound()
  }

  return (
    <article className="py-8 mx-auto max-w-xl">
      <div className="mb-8 text-center">
        <time dateTime={post.publishedAt} className="mb-1 text-xs text-gray-600">
          {format(parseISO(post.publishedAt), 'LLLL d, yyyy')}
        </time>
        <h1>{post.title}</h1>
      </div>
      <MDXContent/>

    </article>
  )
}

export default PostLayout
