import { configureStore } from '@reduxjs/toolkit'
import {
  useSelector,
  useDispatch,
  shallowEqual,
  TypedUseSelectorHook
} from 'react-redux'

import counterSlice from './modules/counter'
import recommendSlice from '@/views/discover/c-views/recommend/store/recommend'

const store = configureStore({
  reducer: {
    counter: counterSlice,
    recommend: recommendSlice
  }
})

type GetStateFnType = typeof store.getState
type IRootState = ReturnType<GetStateFnType>
type DispatchType = typeof store.dispatch

// useAppSelector 的 Hook
export const useAppSelector: TypedUseSelectorHook<IRootState> = useSelector
// useDispatch 的 Hook
export const useAppDispatch: () => DispatchType = useDispatch
// shallowEqual 的 Hook
export const shallowEqualApp = shallowEqual

export default store
