import { configureStore } from "@reduxjs/toolkit";
import Changes from "./reducers/navState"

export default configureStore({
    reducer:{
          navBar:Changes,
    }
})


