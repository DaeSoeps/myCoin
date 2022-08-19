import { useState, useEffect } from 'react'
import * as api from 'api'

const FetchMarketList = () => {
  const [marketDefineList, setMarketDefineList] = useState([])
  const [marketCodeList, setMarketCodeList] = useState([])

  const load = async () => {
    const result = await api.FetchAllMarketCode()
    if (result) {
      const dataList = result.filter(({ market }) => market.includes('KRW-'))
      const codeList = dataList.map(({ market }) => market)
      setMarketDefineList(dataList)
      setMarketCodeList(codeList)
    }
  }

  useEffect(() => {
    load()
  }, [])

  return [marketDefineList, marketCodeList, load]
}

export default FetchMarketList
