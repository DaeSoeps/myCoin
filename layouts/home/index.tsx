import React from 'react'

import Header from 'components/layouts/Header'
import Footer from 'components/layouts/Footer'

import { Wrap } from './style'

const Home = (props: any) => {
  return (
    <>
      <Wrap.ContentWrap>
        <Header />
        <div style={{ zIndex: 9999 }}>{props.children}</div>
      </Wrap.ContentWrap>
      <Footer />
    </>
  )
}

export default Home
