import React from 'react'
import styled from 'styled-components'

import MarketList from 'components/ExchangeB/MarketList'

const ExchangeB = () => {
  return (
    <Container.root>
      <Container.left>
        <Container.left_top>그래프</Container.left_top>
        <Container.left_mid>
          <Container.left_mid_left>일반호가 누적호가</Container.left_mid_left>
          <Container.left_mid_right>
            <Container.left_mid_right_top>매수 매도</Container.left_mid_right_top>
            <Container.left_mid_right_but>미니 차트</Container.left_mid_right_but>
          </Container.left_mid_right>
        </Container.left_mid>
        <Container.left_But>채결</Container.left_But>
      </Container.left>

      <Container.right>
        <MarketList />
      </Container.right>
    </Container.root>
  )
}

const Container = {
  root: styled.div`
    display: flex;
    height: 100%;
    border: 1px solid black;
  `,

  right: styled.div`
    display: flex;
    flex-direction: column;
    width: 30%;
    height: 100vh;
    overflow-y: scroll;
    border: 1px solid black;
  `,

  left: styled.div`
    display: flex;
    flex-direction: column;
    width: 70%;
    border: 1px solid black;
  `,

  left_top: styled.div`
    display: flex;
    height: 35%;
    border: 1px solid black;
  `,
  left_mid: styled.div`
    display: flex;
    height: 35%;
    border: 1px solid black;
  `,
  left_mid_left: styled.div`
    display: flex;
    width: 50%;
    border: 1px solid black;
  `,
  left_mid_right: styled.div`
    display: flex;
    width: 50%;
    flex-direction: column;
    border: 1px solid black;
  `,

  left_mid_right_top: styled.div`
    height: 50%;
    border: 1px solid black;
  `,
  left_mid_right_but: styled.div`
    height: 50%;
    border: 1px solid black;
  `,

  left_But: styled.div`
    display: flex;
    height: 30%;
    border: 1px solid black;
  `
}

export default ExchangeB
