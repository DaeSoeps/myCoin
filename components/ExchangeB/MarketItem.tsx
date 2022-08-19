import React, { useState, useEffect, memo } from 'react'
import styled from 'styled-components'

const MarketItem = ({ market }) => {
  return (
    <Container.root>
      <span>{market.korean_name}</span>
      {/* <span>{data?.trade_price}</span> */}
    </Container.root>
  )
}

const Container = {
  root: styled.div`
    display: flex;
    border: 1px solid black;

    span {
      width: 20%;
    }
  `
}

export default MarketItem
