import React from 'react';
import styled from 'styled-components';
import logo from '../../public/images/coin.png';
import Image from 'next/image'

console.log("logo", logo)
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
            <HeaderMenu >
              <p>거래소</p>
            </HeaderMenu>
            </div>
            <div>
            <HeaderMenu >
              <p>차트</p>
            </HeaderMenu>
            </div>
            <div>
            <HeaderMenu >
              <p>코인동향</p>
            </HeaderMenu>
            </div>


        

        </Container1>

    </HeaderBox>
  );
};


const HeaderBox = styled.div`
  height: 7.55vh;
  width: 95%;
  top: 0;
  padding: 0 5.67vw;
  position: fixed;
  z-index: 10;
  display: flex;

  align-items: center;
  background: #093687;
  border-bottom: 2px solid #eeeeee;

`;

const HeaderMenu = styled.button`
  width: 100%;
  height: 37px;
  border: 0;
  outline: 0;
  background-color: transparent;
  color: white;
  cursor:pointer;
  font-weight : bold ;
  margin-right: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  & > p {
    margin-top: 8px;
    font-size: 14px;
  }
`;

const Container1 = styled.div`
  width: 350px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;
const ImageContainer = styled.div`
  flex-direction: column;
  display: flex;
`
const ImageText = styled.a`
  color : white;
  flex-direction: column;
  display: flex;
`



export default Header;