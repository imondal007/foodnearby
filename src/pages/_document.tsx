import Document, { Html, Head, Main, NextScript } from "next/document";

class CustomDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <meta name="application-name" content="Food Nearby" />
          <meta name="apple-mobile-web-app-capable" content="yes" />
          <meta
            name="apple-mobile-web-app-status-bar-style"
            content="default"
          />
          <meta name="apple-mobile-web-app-title" content="Food Nearby" />
          <meta name="description" content="Find nearby restaurant list" />
          <meta name="mobile-web-app-capable" content="yes" />
          <meta name="msapplication-TileColor" content="#000000" />
          <meta name="msapplication-tap-highlight" content="no" />
          <meta name="theme-color" content="#ffffff" />

          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/static/icons/apple-touch-icon.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/static/icons/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/static/icons/favicon-16x16.png"
          />
          <link rel="manifest" href="/static/manifest.json" />
          <link
            rel="mask-icon"
            href="/static/icons/favicon-mask.svg"
            color="#5bbad5"
          />
          <link rel="shortcut icon" href="/static/icons/favicon.ico" />

          <meta name="twitter:card" content="summary" />
          <meta name="twitter:url" content="https://foodnearby.vercel.app" />
          <meta name="twitter:title" content="Food Nearby" />
          <meta
            name="twitter:description"
            content="Find nearby restaurant list"
          />
          <meta
            name="twitter:image"
            content="https://foodnearby.vercel.app/static/icons/apple-touch-icon.png"
          />
          <meta name="twitter:creator" content="@imondal007" />
          <meta property="og:type" content="website" />
          <meta property="og:title" content="Food Nearby" />
          <meta
            property="og:description"
            content="Find nearby restaurant list"
          />
          <meta property="og:site_name" content="Food Nearby" />
          <meta property="og:url" content="https://foodnearby.vercel.app" />
          <meta
            property="og:image"
            content="https://foodnearby.vercel.app/static/icons/apple-touch-icon.png"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default CustomDocument;
