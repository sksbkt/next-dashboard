import { useState, createContext } from 'react';
import type { AppProps } from 'next/app'
import { SessionProvider } from 'next-auth/react'

import { CssBaseline, ThemeProvider, createTheme } from '@mui/material'
import darkTheme from '@/theme/darkTheme';
import lightTheme from '@/theme/lightTheme';
import Header from '@/components/Header';
import React from 'react';
import Layout from '@/components/Layout';
import { Session } from 'next-auth';

const ColorModeContext = createContext({ toggleColorMode: () => { } });

interface customPageProps {
  session: Session
}

export default function App({
  Component,
  pageProps: { session, ...pageProps }
}: AppProps<customPageProps>) {

  const [mode, setMode] = useState<'light' | 'dark'>('dark');

  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
      },
    }),
    [],
  );

  const darkThemeChosen = React.useMemo(
    () =>
      createTheme({
        ...darkTheme
      }),
    [mode],
  );

  const lightThemeChosen = React.useMemo(
    () =>
      createTheme({
        ...lightTheme,
      }),
    [mode],
  );

  return (

    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={mode === 'dark' ? darkThemeChosen : lightThemeChosen}>
        <SessionProvider session={session}>
          <CssBaseline />
          <Header ColorModeContext={ColorModeContext} />
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </SessionProvider>
      </ThemeProvider>
    </ColorModeContext.Provider>
  )
}
