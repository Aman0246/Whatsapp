import { createSlice } from '@reduxjs/toolkit'
const initialvalue={
    data:[]
}
export const AllSlices = createSlice({
    name: 'AllSlices',
    initialState:initialvalue,
    reducers:{
        SelectedUser:(state,action)=>{
            // console.log(action.payload)
           state.data=[action.payload]
        },

      
    }
})

export const { SelectedUser } = AllSlices.actions
export default AllSlices.reducer

