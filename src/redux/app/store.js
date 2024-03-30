import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice"

const store = configureStore({
    reducer:{
        counter:counterReducer
        // in here we can store the another reducer
        // song:songReducer
    }
})

export default store;