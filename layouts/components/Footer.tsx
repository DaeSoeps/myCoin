import React from 'react'
import styled from 'styled-components'

const Footer = () => {
  return (
    <Container>
      <Title>Made By ZitNad & SongPod</Title>
    </Container>
  )
}

export const Container = styled.footer`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #e9ecf1;
  padding: 30px;
`

export const Title = styled.h2`
  font-size: 13px;
  color: #999999;
`

export default Footer
