// import Layout from '../components/Layout/Layout'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  console.log(Component.name)
  if (Component.name === 'Construction') {
    return <Component {...pageProps} />
  } else {
    return (
      // <Layout>
      <Component {...pageProps} />
      // </Layout>
    )
  }
}

export default MyApp
