import { createSlice } from '@reduxjs/toolkit'
const initialvalue={
    data:[]
}
export const Socket = createSlice({
    name: 'Sockt',
    initialState:initialvalue,
    reducers:{
        logineduserFromsockit:(state,action)=>{
 
           state.data=[action.payload]
        },


      
    }
})

export const { logineduserFromsockit} = Socket.actions
export default Socket.reducer
