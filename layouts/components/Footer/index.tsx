import React from 'react'
import { Container, Title } from './style'
import Link from 'next/link'

const Footer = () => {
  return (
    <Container>
      <Title>Made By ZitNad & SongPod</Title>
      <div>
        <Link href="/test/daeSoep">
          <a style={{ marginRight: 20 }}>대섭 테스트 페이지</a>
        </Link>
        <Link href="/test/sihwan">
          <a>시환 테스트 페이지</a>
        </Link>
      </div>
    </Container>
  )
}

export default Footer
