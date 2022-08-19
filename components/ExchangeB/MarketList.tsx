import React, { useState, useEffect } from 'react'
import styled from 'styled-components'

import FetchAllMarketCode from 'hooks/FetchMarketList'
import CoinItem from 'components/ExchangeB/MarketItem'

const MarketList = () => {
  const [marketDefineList, marketCodeList, reload] = FetchAllMarketCode()

  const [marketList, setMarketList] = useState([])

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
    //변경 시키는 부분있어야함 새로온 데이터 vs 기존 데이터
    const market = marketList.find((market) => {
      // console.log('market.code: ', market.code)
      // console.log('data.code: ', data.code)
      return market.code === data.code
    })

    console.log('market: ', market)
    if (market) {
      return
    }
    // setMarketList((prev) => [...prev, data])
  }

  useEffect(() => {
    console.log('marketList: ', marketList)
  }, [marketList])

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
