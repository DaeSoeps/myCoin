import { atom, selector, selectorFamily } from 'recoil'
import axios from 'axios'
// import {} from 'Types'

export const chattingVisibileState = atom<boolean>({
  key: 'chattingVisibileState',
  default: true
})
