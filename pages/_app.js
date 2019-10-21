// Overwrite next.js app.js
import App, { Container } from 'next/app'

import 'antd/dist/antd.css'


import MyContext from '../lib/my-context'
import Layout from '../components/layout'

class MyApp extends App {

  static async getInitialProps ({ Component, ctx }) {

    let pageProps = {}

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }
    return {
      pageProps
    }
  }

  render () {
    const { Component, pageProps } = this.props

    return (
      <Container>
        <Layout>
          <MyContext.Provider value ="test" >
            <Component {...pageProps} />
          </MyContext.Provider>
        </Layout>
      </Container>
    )
  }
}

export default MyApp