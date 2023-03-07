import React from 'react'
import logo from 'public/images/coin.png'
import Image from 'next/image'
import Link from 'next/link'
import styled from 'styled-components'

const Header = () => {
  return (
    <Container>
      <ImgMenu>
        <Link href="/">
          <a>
            <Image width="40px" height="40px" src={logo} />
            <span>MyCoin</span>
          </a>
        </Link>
      </ImgMenu>
      <HeadMenu>
        <Link href="/exchangeA">
          <a>
            <span>거래소A</span>
          </a>
        </Link>
      </HeadMenu>
      <HeadMenu>
        <Link href="/exchangeB">
          <a>
            <span>거래소B</span>
          </a>
        </Link>
      </HeadMenu>
      <HeadMenu>
        <Link href="/chart">
          <a>
            <span>차트</span>
          </a>
        </Link>
      </HeadMenu>

      <HeadMenu>
        <Link href="/trend">
          <a>
            <span>코인동향</span>
          </a>
        </Link>
      </HeadMenu>
    </Container>
  )
}

export const Container = styled.div`
  display: flex;
  background-color: #093687;
`

export const ImgMenu = styled.div`
  padding: 10px;
  margin: 0px 20px;
  cursor: pointer;
  & a {
    display: flex;
    flex-direction: column;
    color: #000;
    text-decoration: none;
    font-weight: 700;
    &:hover {
      text-decoration: underline;
    }
  }
`

export const HeadMenu = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: 10px;
  margin: 0px 20px;
  cursor: pointer;
  & a {
    color: #000;
    text-decoration: none;
    font-weight: 700;
    &:hover {
      text-decoration: underline;
    }
  }
`

export default Header
