// pages/index.js

import { compareDesc, format, parseISO } from 'date-fns'
import { allPosts } from 'contentlayer/generated'
import Head from '../head'
import Link from 'next/link'

async function getData() {
  return allPosts.sort((a, b) => {
    return compareDesc(new Date(a.date), new Date(b.date))
  })
}

export default async function Home() {

  const posts = await getData()

  return (
    <div className="mx-auto max-w-2xl py-16 text-center">
      <Head>
        <title>Contentlayer Blog Example</title>
      </Head>

      <h1 className="mb-8 text-3xl font-bold">Blog</h1>

      {posts.map((post, id) => (
        <PostCard key={id} {...post} />
      ))}
    </div>)
}

const PostCard = post => (
  <div className="mb-6">
    <time dateTime={post.publishedAt} className="block text-sm text-slate-600">
      {format(parseISO(post.publishedAt), 'LLLL d, yyyy')}
    </time>
    <h2 className="text-lg">
      <Link href={post.url} className={"text-blue-700 hover:text-blue-900"}>
        {post.title}
      </Link>
    </h2>
  </div>
)