import React from 'react'
import logo from 'public/images/coin.png'
import Image from 'next/image'
import Link from 'next/link'
import { Container, HeadMenu, ImgMenu } from './style'

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

export default Header
