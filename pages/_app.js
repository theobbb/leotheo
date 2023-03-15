import { useEffect, useState, createContext } from "react";
import { SessionProvider, useSession } from "next-auth/react"
import '@styles/global.css'

import { Provider as ReduxProvider } from 'react-redux';
import { theme } from "@styles/theme";

import { tempData } from "@utils/tempData";
import FormatData from "@utils/formatData";
import { DataContext } from "@utils/dataContext";

const { createTheme, ThemeProvider } = require('@mui/material/styles');

import Head from 'next/head';
import { Html, Main } from "next/document";


//export default function App({ Component, pageProps: { session, ...pageProps } }) {
  export default function App({ Component, pageProps: { session, ...pageProps } }) {

  const [data, setData] = useState(null);

  useEffect(() => {
    FormatData({data: tempData, setData});
  }, []);
  

  return data && (
    
    

    

    <ThemeProvider theme={theme}>
      <DataContext.Provider value={data}>
    
        <Component {...pageProps} />
      </DataContext.Provider>
      
    </ThemeProvider>
    
  )

  return (
    <SessionProvider session={session}>
    
      <Head>
      <title>Create Next Appf</title>
      <link rel="icon" href="/favicon.ico" />

      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      <link href="https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@400;500;600&display=swap" rel="stylesheet" />

      </Head>

      <ThemeProvider theme={theme}>
        <DataContext.Provider value={data}>
      
          {Component.auth ? (
            <Auth>
              <Component {...pageProps} />
            </Auth>
          ) : (
            <Component {...pageProps} />
          )}
        </DataContext.Provider>
        
      </ThemeProvider>
    </SessionProvider>
  );
}
  
  function Auth({ children }) {
    // if `{ required: true }` is supplied, `status` can only be "loading" or "authenticated"
    const { status } = useSession({ required: true })
  
    if (status === "loading") {
      return <div>Loading...</div>
    }
  
    return children
  }


  /*
export default function App({ Component, pageProps: { session, ...pageProps } }) {
    return (
        <ThemeProvider theme={theme}>
          <SessionProvider session={session}>
            {Component.auth ? (
            <Auth>
              <Component {...pageProps} />
            </Auth>
            ) : (
              <Component {...pageProps} />
            )}
          </SessionProvider>
        </ThemeProvider>
    )
}

function Auth({ children }) {
  // if `{ required: true }` is supplied, `status` can only be "loading" or "authenticated"
  const { status } = useSession({ required: true })

  if (status === "loading") {
    return <div>Loading...</div>
  }

  //router.push('/login');

  return children
}*/

