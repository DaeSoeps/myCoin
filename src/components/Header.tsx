import React from 'react';
import styled from 'styled-components';
import logo from '../../public/images/coin.png'

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
          <Image width="30px" height="40px" src={logo} />
        </div>
        <Container1>
          <div>
            <HeaderSerBtn >
          
              <p>검색</p>
            </HeaderSerBtn>
            </div>
            <div>
            <HeaderLogBtn >
            
              <p>검색</p>
            </HeaderLogBtn>
            </div>
            <div>
            <HeaderMyBtn >
          
              <p>검색</p>
            </HeaderMyBtn>
            </div>


        

        </Container1>

    </HeaderBox>
  );
};

const Sc = {
  Header: styled.header`
    position: sticky;
    height: 65px;
    width:100%;
    padding: 1rem;
    color: white;
    background: #093687;

    z-index: 100;
  `,
  HeaderImg: styled.h3`
    background-image: url(https://static.upbit.com/logos/BTC.png);
  `,
  Title: styled.h2`
    width: 10%;
   
    display: inline-block;
    float: left
    margin-top: 21px;
    color: #fff;
  `
}

const Wrap = {
  ContentWrap: styled.div`
    background-color: #e9ecf1;
    display: flex;
    flex-direction: column;
    align-items: center;
  `,
  Section: styled.section`
  width: 10%;
   
  display: inline-block;
  float: left
  margin-top: 21px;
  color: #fff;
  `,
  Nav: styled.nav`
  margin-left: 20px;
  `,
  Ul: styled.ul`

  `,
  Li: styled.li`
    float: left;
    height: 79px;
    line-height: 79px;
  `,
  A: styled.a`
    position: relative;
    font-size: 15px;  
    font-family: Roboto,Noto Sans KR,sans-serif,Arial,Helvetica;
    text-decoration: none;
  `,
  Title: styled.h2`
  width: 10%;
 
  float: left
  margin-top: 21px;
  color: #fff;
`


}

const HeaderBox = styled.div`
  height: 10.55vh;
  width: 100%;
  top: 0;
  padding: 0 16.67vw;
  position: fixed;
  z-index: 10;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #093687;
  border-bottom: 2px solid #eeeeee;

`;

const HeaderSerBtn = styled.button`
  width: 28px;
  height: 37px;
  margin-right: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  & > p {
    margin-top: 8px;
    font-size: 14px;
  }
`;
const HeaderLogBtn = styled.button`
  width: 56px;
  height: 37px;
  display: flex;
  flex-direction: column;
  align-items: center;
  & > p {
    margin-top: 8px;
    font-size: 14px;
  }
`;
const HeaderMyBtn = styled.button`
  width: 70px;
  height: 37px;
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

const Image = styled.img`
  width: ${(props) => (props.width ? props.width : "17.8em")};
  height: ${(props) => (props.height ? props.height : "14.81vh")};
  src:  ${(props) => (props.src ? props.src : "")};

`;

Image.defaultProps = {
  width: "",
  height: "",
  borderRadius: "",
  border: "",
  margin: "",
  marbleBorder: "",
  maxHeight: "",
  mobileMaxHeight: "",
  chatClose: "",
  post: "",
  mypage: "",
  no_cursor: "",
  onClick: () => {},
  alt: "",
  src: "",
};

export default Header;