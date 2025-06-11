import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {process.env.NODE_ENV === 'production' && 
          <script src="/motevation/gh-pages-router.js" />
        }
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
