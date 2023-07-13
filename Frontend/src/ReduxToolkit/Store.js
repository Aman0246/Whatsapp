import { configureStore } from '@reduxjs/toolkit'
import  LoginuserSlice  from './LoginUser'
import AllSlice from "./sliceses"
import Socket from "./sockitslice"

export const store = configureStore({
  reducer: {
    LoginuserSlice:LoginuserSlice,
    allSlices :AllSlice,
    SocketSlice:Socket
  },
})

