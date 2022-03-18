import { Head, Html, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link
          href="https://fonts.googleapis.com/css?family=Maitree:300,regular%7CInter:300,regular,500"
          rel="stylesheet"
        />
      </Head>
      <body data-theme="lofi">
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
