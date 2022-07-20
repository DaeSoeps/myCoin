import React from 'react';
import styled from 'styled-components';

const Header = () => {
  return (
    <Sc.Header>
      <Sc.Title>MyCoin</Sc.Title>
    </Sc.Header>
  );
};

const Sc = {
  Header: styled.header`
    background-color: #093687;
    width: 100%;
    height: 60px;
    top: 0;
    position: fixed;
  `,
  Title: styled.h2`
    width: 77px;
    height: 17px;
    display: inline-block;
    float: left
    margin-top: 21px;
    color: #fff;
  `
}

// const St = {
//   Header: styled.header`
//     position: fixed;
//     display: flex;
//     align-items: center;
//     width: 100%;
//     top: 0;
//     left: 0;
//     z-index: 100;
//     background-color: #093687;
//     height: 60px;
//   `,
//   Title: styled.h2`
//     font-style: italic;
//     margin: 0.5rem 0 0.5rem 1rem;
//     color: #fff;
//   `,
// };

export default Header;