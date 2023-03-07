import { atom, selector, selectorFamily } from 'recoil'
import axios from 'axios'
// import {} from 'Types'

export const marketListState = atom<any[]>({
  key: 'marketListState',
  default: [],
});

export const marketListSelector = selector({
  key: 'marketListSelector',
  get: ({get}) => get(marketListState),
  set: ({set}, newValue) =>
    set(
      marketListState,
      newValue,
    ),
});
