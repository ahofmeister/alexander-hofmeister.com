'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const NavbarLink = ({ href, label, currentPath }) =>
  <Link href={href}
        className={`hover:text-pastel-green-300 mx-5  ${currentPath.startsWith(href) ? 'border-b border-b-pastel-green-300' : ''}`}>
    {label}
  </Link>

const Navbar = () => {
  const currentPath = usePathname()

  return <nav className="sticky top-0 border-b border-b-gray">
    <div className="flex justify-center p-4">
      <NavbarLink href={'/about'} label={'About'} currentPath={currentPath}/>
      <NavbarLink href={'/blog'} label={'Blog'} currentPath={currentPath}/>
      <NavbarLink href={'/projects'} label={'Projects'} currentPath={currentPath}/>
    </div>
  </nav>
}

export default Navbar
