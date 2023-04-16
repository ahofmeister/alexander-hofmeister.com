import '../styles/globals.css'
import Link from 'next/link'

const Navbar = () => <nav className="sticky top-0 border-b border-b-gray">
  <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
    <a href="/">
      <span className="text-2xl">Alexander</span>
    </a>
    <div className="w-full block w-auto" id="navbar-default">
      <ul
        className="flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
        <Link href="/blog"
              className="hover:text-pastel-green-300">
          Blog
        </Link>
        <Link href="/about"
              className="hover:text-pastel-green-300">
          About
        </Link>
      </ul>
    </div>
  </div>
</nav>

export default async function RootLayout({ children }) {
  return (<html lang="en">
  <body>
  <Navbar/>
  <main className={"w-full mx-auto"}>
    {children}
  </main>
  </body>
  </html>)
}
