import { allSnippets } from 'contentlayer/generated'
import { useMDXComponent } from 'next-contentlayer/hooks'
import { notFound } from 'next/navigation'
import { format, parseISO } from 'date-fns'

export const generateStaticParams = async () => allSnippets.map((snippet) => ({ slug: snippet._raw.flattenedPath }))

export const generateMetadata = ({ params }) => {
  const snippet = allSnippets.find((snippet) => snippet._raw.flattenedPath === params.slug)

  if (!snippet) {
    notFound()
  }

  return { title: snippet.title }
}

const SnippetLayout = ({ params }) => {
  const snippet = allSnippets.find((snippet) => snippet._raw.flattenedPath.endsWith(params.slug))

  if (!snippet) {
    notFound()
  }

  const MDXContent = useMDXComponent(snippet.body.code)

  return (
    <article className="py-8 mx-auto max-w-xl">
      <div className="mb-8 text-center">
        <time dateTime={snippet.publishedAt} className="mb-1 text-xs text-gray-600">
          {format(parseISO(snippet.publishedAt), 'LLLL d, yyyy')}
        </time>
        <h1>{snippet.title}</h1>
      </div>
      <MDXContent/>

    </article>
  )
}

export default SnippetLayout
