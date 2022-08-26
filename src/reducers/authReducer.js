import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
const BASE_URL = "http://localhost:8000/";

export const authSlice = createSlice({
  name:'Auth',
  initialState:{
    username:'',
    email:'',
  },
  reducers:{
    setData(state,action){
        state.username = action.payload.username
        state.email = action.payload.email    
    }
  }
})

export const signupUser = createAsyncThunk(
    "auth/signup",
    async (payload) => {
      const data = await axios({
        url:`${BASE_URL}auth/signup`,
        method:"POST",
        data:payload,
      })
      return data;
    }
)

export const loginUser = createAsyncThunk(
  "auth/login",
  async(payload) =>{
    const data = await axios({
      url:`${BASE_URL}auth/login`,
        method:"POST",
        data:payload,
    })

    return data;
  }
)

export const {setData} = authSlice.actions;
export default authSlice.reducer;
