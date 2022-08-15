import Footer from '../Footer/Footer'
import Navbar from '../Navbar/Navbar'

function Layout({ children, page }) {
  return (
    <>
      <Navbar page={page} />
      {children}
      <Footer />
    </>
  )
}

export default Layout
