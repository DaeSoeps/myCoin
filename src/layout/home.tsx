import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import Header from 'components/Header';
import Footer from 'components/Footer';

const Home = () =>{
    return (
        <>
        
            <Wrap.ContentWrap>
                <Header/>
                
            </Wrap.ContentWrap>
            <Footer/>
        </>
    )
}

export default Home;

const Wrap = {
    ContentWrap: styled.div`
      background-color: #e9ecf1;
      display: flex;
      flex-direction: column;
      align-items: center;
    `,



}