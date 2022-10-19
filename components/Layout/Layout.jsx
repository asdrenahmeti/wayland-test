// import Footer from '../Footer/Footer'
// import Navbar from '../Navbar/Navbar'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import Construction from '../../pages/construction'

function Layout() {
  const router = useRouter()

  useEffect(() => {}, [router.asPath])

  return (
    <>
      {/* <Navbar page={router.pathname} />
      {children}
      <Footer /> */}
      <Construction />
    </>
  )
}

export default Layout
