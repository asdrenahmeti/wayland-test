import Footer from '../Footer/Footer'
import Navbar from '../Navbar/Navbar'
import MobileNavbar from '../Navbar/MobileNavbar'

function Layout({ children }) {
  return (
    <>
        <Navbar />
        <MobileNavbar/>
        {children}
        <Footer />
    </>
  )
}

export default Layout
