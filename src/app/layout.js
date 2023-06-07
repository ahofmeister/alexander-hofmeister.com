import '../styles/globals.css'
import Link from 'next/link'
import Head from './head'

const Navbar = () => <nav className="sticky top-0 border-b border-b-gray">
  <div className="flex items-center mx-auto p-4">
    <Link href="/">
      <span className="text-2xl">Alexander Hofmeister</span>
    </Link>
    <div className="flex ml-20">
      <Link href="/blog"
            className="hover:text-pastel-green-300 mx-5">
        Blog
      </Link>
      <Link href="/about"
            className="hover:text-pastel-green-300">
        About
      </Link>
    </div>
  </div>
</nav>

export default async function RootLayout({ children }) {
  return (<html lang="en">
  <Head/>
  <body>
  <Navbar/>
  <main className={'w-full mx-auto'}>
    {children}
  </main>
  </body>
  </html>)
}
