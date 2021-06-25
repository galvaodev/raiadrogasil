import type { AppProps } from 'next/app'
import Head from 'next/head'
import { ThemeProvider } from 'styled-components'
import theme from 'styles/theme'
import { ThemeCustomProvider } from 'Hooks/context'

import GlobalStyles from 'styles/global'

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <ThemeCustomProvider>
        <ThemeProvider theme={theme}>
          <Head>
            <title>Raia Drogasil - Seja bem vindo</title>
            <link rel="shortcut icon" href="/img/icon-512.png" />
            <link rel="apple-touch-icon" href="/img/icon-512.png" />
            <link rel="minifest" href="manifest.json" />
            <meta
              name="description"
              content="Desenvolvimento de teste front-end Raia Drogasil."
            />

            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" />
            <link
              href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;700&display=swap"
              rel="stylesheet"
            />
          </Head>
          <GlobalStyles />

          <Component {...pageProps} />
        </ThemeProvider>
      </ThemeCustomProvider>
    </>
  )
}

export default App
