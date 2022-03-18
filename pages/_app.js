import Head from 'next/head'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="preload" as="image/svg+xml" href={'./sprite.svg'} />
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
