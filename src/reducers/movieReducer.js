import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
const BASE_URL = "http://localhost:8000/";


export const movieSlice = createSlice({
    name:'Movie',
    initialState:{
        value:"",
    },
    reducers:{
        changeMovie: (state,action) =>{
            state.value=action.payload;
        }
    }
})

export const movieData = createAsyncThunk(
    "auth/movie",
    async() =>{
        const data = await axios({
            url:`${BASE_URL}auth/movies`,
            method:"GET",
          })

         return data;          
    } 
)



export const {changeMovie} = movieSlice.actions;
export default movieSlice.reducer;