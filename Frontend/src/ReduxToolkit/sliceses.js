import { createSlice } from '@reduxjs/toolkit'
const initialvalue={
    data:[],
    chatId:[]
}
export const AllSlices = createSlice({
    name: 'AllSlices',
    initialState:initialvalue,
    reducers:{
        SelectedUser:(state,action)=>{
            // console.log(action.payload)
           state.data=[action.payload]
        },

        IdoffullChat:(state,action)=>{
      
            state.chatId=[action.payload]
        }

      
    }
})

export const { SelectedUser,IdoffullChat } = AllSlices.actions
export default AllSlices.reducer

