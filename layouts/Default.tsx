import React, { FC } from 'react'
import styled from 'styled-components'

import Header from 'layouts/components/Header'
import Footer from 'layouts/components/Footer'

const Home: FC<any> = ({ children }) => {
  return (
    <Container>
      <Header />
      <Main>{children}</Main>
      <Footer />
    </Container>
  )
}

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`

export const Main = styled.div`
  flex: 1;
`

export default Home
