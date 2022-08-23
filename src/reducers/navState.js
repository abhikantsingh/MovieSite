import { createSlice } from "@reduxjs/toolkit";


export const counterSlice = createSlice({
    name:'navbar',
    initialState:{
        value:true,
    },
    reducers:{
        changeBool: (state) =>{
            state.value=(!state.value)
        }
    }
})

export const {changeBool} = counterSlice.actions;
export default counterSlice.reducer;