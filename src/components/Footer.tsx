import React from 'react';
import styled from 'styled-components';

const Footer = () => {
  return (
    <St.Footer>
      <St.Title>Made By ZitNad & SongPod</St.Title>
    </St.Footer>
  );
};

const St = {
  Footer: styled.footer`
    height: 60px;
    width: 100%;
    font-size: 13px;
    background-color: #e9ecf1;
    position: absolute;
    bottom: 2px;
    display: flex;
    flex-direction: column;
    align-items: center;

  `,
  Title: styled.h2`
    color: #999999;
    margin: 0;
  `,
};

export default Footer;