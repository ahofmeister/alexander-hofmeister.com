import '../styles/globals.css'
import Head from './head'
import Navbar from './Navbar'

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
