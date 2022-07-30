import React, { FC } from 'react'

import Header from 'layouts/components/Header'
import Footer from 'layouts/components/Footer'
import { Container, Main } from './style'

const Home: FC<any> = ({ children }) => {
  return (
    <Container>
      <Header />
      <Main>{children}</Main>
      <Footer />
    </Container>
  )
}

export default Home
