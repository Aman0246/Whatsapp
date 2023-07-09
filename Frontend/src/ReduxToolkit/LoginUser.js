import { createSlice } from '@reduxjs/toolkit'
const initialvalue={
    data:[]
}
export const LoginuserSlice = createSlice({
    name: 'LoginuserSlice',
    initialState:initialvalue,
    reducers:{
        LoginedUser:(state,action)=>{
            console.log(action.payload)
           state.data=[action.payload]
        }
    }
})

export const { LoginedUser } = LoginuserSlice.actions
export default LoginuserSlice.reducer

