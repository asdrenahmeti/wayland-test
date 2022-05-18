import Layout from '../components/Layout/Layout'
import {AppProvider} from "./../components/context";

import '../styles/globals.css'


function MyApp({ Component, pageProps }) {
  return (
    <AppProvider>
    <Layout>
      <Component {...pageProps} />
    </Layout>
    </AppProvider>
  )
}

export default MyApp
