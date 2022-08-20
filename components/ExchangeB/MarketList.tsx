import React, { useState, useEffect } from 'react'
import styled from 'styled-components'

import FetchAllMarketCode from 'hooks/FetchMarketList'
import CoinItem from 'components/ExchangeB/MarketItem'

let marketList = []

const MarketList = () => {
  const [marketDefineList, marketCodeList, reload] = FetchAllMarketCode()

  // const [marketList, setMarketList] = useState([])

  useEffect(() => {
    const socket = new WebSocket('wss://api.upbit.com/websocket/v1')
    socket.binaryType = 'arraybuffer'

    socket.onopen = (e) => {
      socket.send(JSON.stringify([{ ticket: 'All' }, { type: 'ticker', codes: marketCodeList }]))
    }

    socket.onmessage = (e) => {
      try {
        const enc = new TextDecoder('utf-8')
        const arr = new Uint8Array(e.data)
        const parsedData = JSON.parse(enc.decode(arr))
        // console.log('parsedData: ', parsedData)
        // setData(parsedData.trade_price)
        createList(parsedData)
      } catch (error) {
        console.log(`error ----> `, error)
      }
    }

    socket.onerror = (error) => {
      console.log(`소켓에러-->`, error)
    }

    return () => {
      socket.close()
    }
  }, [marketCodeList])

  const createList = (data) => {
    const isMarket = marketList.map(({ code }) => code).includes(data.code)
    if (isMarket) {
      const result = marketList.filter(({ code }) => code !== data.code)
      marketList = [...result, data]
    } else {
      marketList = [...marketList, data]
    }
  }

  useEffect(() => {
    console.log('marketList: ', marketList)
  }, [marketList])
  const [aa, setaa] = useState(false)
  if (true) {
    setInterval(() => {
      setaa((prev) => !prev)
    }, 2000)
  }

  return (
    <>
      <Container.title>
        <span>한글명</span>
        <span>현재가</span>
        <span>전일대비</span>
        <span>거래대금</span>
      </Container.title>
      <div>
        {marketList.map((market, index) => {
          return <CoinItem key={index} market={market} />
        })}
      </div>
    </>
  )
}

const Container = {
  title: styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    span {
      font-size: 24px;
      color: blue;
      padding: 12px;
      border: 1px solid black;
    }
  `,

  list: styled.div``
}

export default MarketList
