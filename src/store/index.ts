import { configureStore } from '@reduxjs/toolkit'
import {
  useSelector,
  useDispatch,
  shallowEqual,
  TypedUseSelectorHook
} from 'react-redux'

import counterSlice from './modules/counter'
import recommendSlice from '@/views/discover/c-views/recommend/store/recommend'
import playerSlice from '@/views/player/store/player'

const store = configureStore({
  reducer: {
    counter: counterSlice,
    recommend: recommendSlice,
    player: playerSlice
  }
})

export type GetStateFnType = typeof store.getState
export type IRootState = ReturnType<GetStateFnType>
export type DispatchType = typeof store.dispatch

// useAppSelector 的 Hook
export const useAppSelector: TypedUseSelectorHook<IRootState> = useSelector
// useDispatch 的 Hook
export const useAppDispatch: () => DispatchType = useDispatch
// shallowEqual 的 Hook
export const shallowEqualApp = shallowEqual

export default store
