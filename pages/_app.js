import DefaultLayout from '@components/Layout'
import Head from 'next/head'
import '../styles/globals.css'
function MyApp({ Component, pageProps }) {
  const Layout = Component.Layout || DefaultLayout
  return (
    <>
      <Head>
        <link rel="preload" as="image/svg+xml" href={'./sprite.svg'} />
      </Head>
      {Layout ? (
        <Layout>
          <Component {...pageProps} />
        </Layout>
      ) : (
        <Component {...pageProps} />
      )}
    </>
  )
}

export default MyApp
