import { AppProps } from "next/app";
import React from "react";
import { SEO } from "../components/SEO";
import { GlobalStyles } from "../styles/GlobalStyles";
import { TwinGlobalStyles } from "../styles/TwinGlobalStyles";
import { useFathom } from "../hooks/useFathom";

const MyApp = ({ Component, pageProps }: AppProps) => {
  useFathom();

  return (
    <>
      <GlobalStyles />
      <SEO />
      <TwinGlobalStyles />
      <Component {...pageProps} />
    </>
  );
};

export default MyApp;
