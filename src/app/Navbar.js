import Link from 'next/link'

const NavbarLink = ({ href, label }) =>
  <Link href={href}
        className="hover:text-pastel-green-300 mx-5">
    {label}
  </Link>

const Navbar = function() {
  return <nav className="sticky top-0 border-b border-b-gray">
    <div className="flex items-center mx-auto p-4">
      <Link href="/" className={"mr-20"}>
        <span className="text-xl">Alexander Hofmeister</span>
      </Link>
      <NavbarLink href={'/about'} label={'About'}/>
      <NavbarLink href={'/blog'} label={'Blog'}/>
      <NavbarLink href={'/projects'} label={'Projects'}/>
  </div>
</nav>
}

export default Navbar
