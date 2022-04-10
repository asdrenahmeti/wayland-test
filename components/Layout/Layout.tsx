import { ChildProps } from '../../utils/types'
import Navbar from '../Navbar/Navbar'

function Layout({children}:ChildProps) {
  return (
    <>
      <Navbar />
      {children}
    </>
  )
}

export default Layout
