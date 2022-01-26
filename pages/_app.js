import React from 'react'
import '../src/styles.css'
import Layout from '../src/components/Layout'

const MyApp = ({ Component, pageProps }) => {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp;