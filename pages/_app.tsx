import React from 'react'
import type { AppProps } from 'next/app'
import HomeContainer from 'container/HomeContainer';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Component {...pageProps}>
        <HomeContainer/>
    </Component>
  )
}

export default MyApp
