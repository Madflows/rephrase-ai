import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link
          href="https://fonts.cdnfonts.com/css/sofia-pro"
          rel="stylesheet"
        />
        <link href="https://fonts.cdnfonts.com/css/cubano" rel="stylesheet" />
        <link href="https://fonts.cdnfonts.com/css/linear" rel="stylesheet"></link>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
