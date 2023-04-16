import '../styles/globals.css'
import Link from 'next/link'

const Navbar = () => <nav className="sticky top-0 border-b border-b-gray">
  <div className="flex h-16   flex items-center">
    <Link href="/blog"
          className="hover:text-pastel-green-300">
      Blog
    </Link>
    <Link href="/about"
          className="hover:text-pastel-green-300">
      About
    </Link>
  </div>
</nav>

export default async function RootLayout({ children }) {
  return (<html lang="en">
  <body>
  <Navbar/>
  <main>
    {children}
  </main>
  </body>
  </html>)
}
