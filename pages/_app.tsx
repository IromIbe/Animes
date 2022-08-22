import "../styles/globals.css";
import { useState, useEffect } from "react";
import type { AppProps } from "next/app";
import { ThemeProvider } from "next-themes";
import { BeatLoader } from "react-spinners";
import Layout from "../pages/components/layout";
import WatchCartProvider from "../context/WatchCartContext";

function Loading() {
  return (
    <div className='spinner-wrapper h-screen w-screen flex justify-center items-center fixed top-0 left-0 bg-white z-10'>
      <div className='spinner absolute left-1/2 top-1/2 h-[100px] w-[100px] my-0 mx-auto animate-bounce'>
        <BeatLoader color='#008000' loading={true} />
      </div>
    </div>
  );
}

function MyApp({ Component, pageProps }: AppProps) {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
  }, []);
  return (
    <>
      {/* <Loading/> */}
      {loading ? (
        <ThemeProvider attribute='class'>
          <WatchCartProvider>
            <Layout>
              <Component {...pageProps} />
            </Layout>
          </WatchCartProvider>
        </ThemeProvider>
      ) : (
        <Loading />
      )}
    </>
  );
}

export default MyApp;
