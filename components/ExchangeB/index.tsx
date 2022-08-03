import React, { useState, useEffect, useRef } from 'react'

const ExchangeB = () => {
  const [data, setData] = useState(null)

  useEffect(() => {
    const socket = new WebSocket('wss://api.upbit.com/websocket/v1')
    socket.binaryType = 'arraybuffer'
    console.log('socket: ', socket)

    const open = (e: any) => {
      socket.send(JSON.stringify([{ ticket: 'test' }, { type: 'ticker', codes: ['KRW-BTC'] }]))
    }
    const message = (e: any) => {
      try {
        const enc = new TextDecoder('utf-8')
        const arr = new Uint8Array(e.data)
        const parsedData = JSON.parse(enc.decode(arr))
        console.log('parsedData: ', parsedData)
        setData(parsedData.change_price)
      } catch (error) {}
    }

    socket.addEventListener('open', open)
    socket.addEventListener('message', message)
    return () => {
      socket.close()
      // socket.removeEventListener('message', message)
    }
  }, [])

  return (
    <>
      <div>짓나드의 거래소</div>
      <div>{data}</div>
    </>
  )
}

export default ExchangeB
