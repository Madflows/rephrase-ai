import Head from "next/head";
import React, { Fragment } from "react";
import Footer from "../Footer";
import Navbar from "../Navbar";

const Layout = ({ children }) => {
  return (
    <Fragment>
      <Head>
        {/* <!-- Primary Meta Tags --> */}
        <title>Rephrase.ai - Rephrase your Twitter Bio in Seconds</title>
        <meta
          name="title"
          content="Rephrase.ai - Rephrase your Twitter Bio in Seconds"
        />
        <meta
          name="description"
          content="Rephrase your Twitter Bio in Seconds utilizing the power of GPT-3 and Vercel Cloud Functions "
        />

        {/* <!-- Open Graph / Facebook --> */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://rephrase.vercel.app/" />
        <meta
          property="og:title"
          content="Rephrase.ai - Rephrase your Twitter Bio in Seconds"
        />
        <meta
          property="og:description"
          content="Rephrase your Twitter Bio in Seconds utilizing the power of GPT-3 and Vercel Cloud Functions "
        />
        <meta property="og:image" content="/og-image.png" />

        {/* <!-- Twitter --> */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://rephrase.vercel.app/" />
        <meta
          property="twitter:title"
          content="Rephrase.ai - Rephrase your Twitter Bio in Seconds"
        />
        <meta
          property="twitter:description"
          content="Rephrase your Twitter Bio in Seconds utilizing the power of GPT-3 and Vercel Cloud Functions "
        />
        <meta property="twitter:image" content="/og-image.png" />
      </Head>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </Fragment>
  );
};

export default Layout;
