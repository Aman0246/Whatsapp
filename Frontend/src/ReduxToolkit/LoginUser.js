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
        },

        LogoutUser:(state,action)=>{
           state.data=[]
        }
    }
})

export const { LoginedUser,LogoutUser } = LoginuserSlice.actions
export default LoginuserSlice.reducer

