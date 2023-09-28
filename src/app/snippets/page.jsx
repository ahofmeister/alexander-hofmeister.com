import { compareDesc, format, parseISO } from 'date-fns'
import { allSnippets } from 'contentlayer/generated'
import Link from 'next/link'

async function getSnippets() {
  return allSnippets.sort((a, b) => {
    return compareDesc(new Date(a.publishedAt), new Date(b.publishedAt))
  })
}

export default async function Snippets() {

  const snippets = await getSnippets()

  return (
    <div className="mx-auto max-w-2xl py-16 text-center">
      {snippets.map((snippet, id) => (
        <Snippet key={id} {...snippet} />
      ))}
    </div>)
}

const Snippet = snippet => (
  <div className="mb-6">
    <time dateTime={snippet.publishedAt} className="block text-sm text-slate-600">
      {format(parseISO(snippet.publishedAt), 'LLLL d, yyyy')}
    </time>
    <h2 className="text-lg">
      <Link href={snippet.url} className={"text-blue-700 hover:text-blue-900"}>
        {snippet.title}
      </Link>
    </h2>
  </div>
)
