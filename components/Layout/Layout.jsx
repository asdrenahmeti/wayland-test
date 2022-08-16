import Footer from '../Footer/Footer'
import Navbar from '../Navbar/Navbar'
import { useRouter } from 'next/router'
import { useEffect } from 'react'

function Layout({ children }) {
  const router = useRouter()

  useEffect(() => {}, [router.asPath])

  return (
    <>
      <Navbar page={router.pathname} />
      {children}
      <Footer />
    </>
  )
}

export default Layout
