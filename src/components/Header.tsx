import React from 'react';
import styled from 'styled-components';

const Header = () => {
  return (
    <Sc.Header>
      
      <Sc.Title>MyCoin</Sc.Title>
      <Wrap.Section>
        <Wrap.Nav>
            <Wrap.Oder>거래소</Wrap.Oder>
        </Wrap.Nav>
        </Wrap.Section>
    </Sc.Header>
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
  position: relative;
  width: 100%;
  height: 60px;
  `,
  Nav: styled.nav`
  width: 100%;
   
  float: left
  color: #fff;
  `,
  Oder: styled.a`
      position: relative
    
  `,
  Title: styled.h2`
  width: 10%;
 
  float: left
  margin-top: 21px;
  color: #fff;
`


}

// Header: styled.header`
// position: sticky;
// height: 65px;
// width:100%;
// padding: 1rem;
// color: white;
// background: #093687;
// font-weight: bold;
// display: flex;
// justify-content: space-between;
// align-items: center;
// z-index: 100;
// `,
export default Header;