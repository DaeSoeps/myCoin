import axios from 'axios'

export const FetchAllMarketCode = async () => {
  const res = await axios.get('https://api.upbit.com/v1/market/all?isDetails=false')
  return res.data
}
