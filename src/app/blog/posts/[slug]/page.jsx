import { allPosts } from 'contentlayer/generated'
import { useMDXComponent } from 'next-contentlayer/hooks'
import { notFound } from 'next/navigation'
import { format, parseISO } from 'date-fns'

export const generateStaticParams = async () => allPosts.map((post) => ({ slug: post._raw.flattenedPath }))

// export const generateMetadata = ({ params }) => {
//   const post = allPosts.find((post) => post._raw.flattenedPath === params.slug)
//
//   if (!post) {
//     notFound()
//   }
//
//   return { title: post.title }
// }

const PostLayout = ({ params }) => {
  const post = allPosts.find((post) => post._raw.flattenedPath.endsWith(params.slug))

  if (!post) {
    notFound()
  }

  const MDXContent = useMDXComponent(post.body.code)

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
