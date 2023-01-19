import Head from "next/head";
import React, { Fragment } from "react";

const Page = ({ children, title = "RephraseAI", className }) => {
  return (
    <Fragment>
      <Head>
        <title>{title}</title>
      </Head>
      <div className={className}>{children}</div>
    </Fragment>
  );
};

export default Page;
