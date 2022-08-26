import { configureStore } from "@reduxjs/toolkit";
import Changes from "./reducers/navState"
import authReducer from "./reducers/authReducer";
import movieReducer from "./reducers/movieReducer";

export default configureStore({
    reducer:{
          navBar:Changes,
          authReducer : authReducer,
          movieReducer : movieReducer
    }
})


