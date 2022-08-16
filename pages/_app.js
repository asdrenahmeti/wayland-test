import { useEffect } from 'react'
import { useRouter } from 'next/router'
import Layout from '../components/Layout/Layout'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  const router = useRouter()

  useEffect(() => {
    console.log(router)
  }, [router.asPath])

  return (
    <Layout>
      <Component {...pageProps} name={Component.name} />
    </Layout>
  )
}

export default MyApp
