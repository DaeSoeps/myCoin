import React from 'react'
import type { AppProps } from 'next/app'
import { RecoilRoot } from 'recoil'
import { ThemeProvider } from 'styled-components'
import { theme } from '../styles/theme'
import 'styles/global.css'
import DefaultLayout from 'layouts/Default'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <ThemeProvider theme={theme}>
        <RecoilRoot>
          <DefaultLayout>
            <Component {...pageProps} />
          </DefaultLayout>
        </RecoilRoot>
      </ThemeProvider>
    </>
  )
}

export default MyApp
