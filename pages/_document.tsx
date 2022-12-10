import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html>
      <Head>
        <link rel='stylesheet' href='prism.css' />
        <script async src='prism.js' data-manual></script>
      </Head>
      <body>
      <Main />
      <NextScript />
      </body>
    </Html>
  )
}