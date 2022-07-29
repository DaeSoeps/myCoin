import React from 'react'
import logo from 'public/images/coin.png'
import Image from 'next/image'
import { HeaderBox, HeaderMenu, Container1, ImageContainer, ImageText } from './style'

const Header = () => {
  return (
    // <Sc.Header>

    //   <Sc.Title>MyCoin</Sc.Title>

    //     <Wrap.Nav>
    //         <Wrap.Ul>
    //           <Wrap.Li>
    //             <Wrap.A>거래소</Wrap.A>
    //           </Wrap.Li>
    //         </Wrap.Ul>
    //     </Wrap.Nav>

    // </Sc.Header>
    <HeaderBox>
      <div>
        <ImageContainer>
          <Image width="40px" height="40px" src={logo} />
          <ImageText>MyCoin</ImageText>
        </ImageContainer>
      </div>
      <Container1>
        <div>
          <HeaderMenu>
            <p>거래소</p>
          </HeaderMenu>
        </div>
        <div>
          <HeaderMenu>
            <p>차트</p>
          </HeaderMenu>
        </div>
        <div>
          <HeaderMenu>
            <p>코인동향</p>
          </HeaderMenu>
        </div>
      </Container1>
    </HeaderBox>
  )
}

export default Header
