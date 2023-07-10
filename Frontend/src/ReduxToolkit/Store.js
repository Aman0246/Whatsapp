import { configureStore } from '@reduxjs/toolkit'
import  LoginuserSlice  from './LoginUser'
import AllSlice from "./sliceses"

export const store = configureStore({
  reducer: {
    LoginuserSlice:LoginuserSlice,
    allSlices :AllSlice
  },
})

