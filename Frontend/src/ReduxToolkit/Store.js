import { configureStore } from '@reduxjs/toolkit'
import  LoginuserSlice  from './LoginUser'

export const store = configureStore({
  reducer: {
    LoginuserSlice:LoginuserSlice
  },
})

