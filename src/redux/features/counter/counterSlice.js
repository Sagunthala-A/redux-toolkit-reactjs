import { createSlice } from "@reduxjs/toolkit";


const initialState = 0;

const counterSlice = createSlice({
    name:'counter',
    initialState,
    reducers:{
        increase : (state,action) => state +( action.payload || 1),
        decrease : (state,action) => state -( action.payload || 1),
        reset : (state)=> initialState
        // in here every property that is every function should return callback functions ()=>{}
    }
})

export const {increase,decrease,reset} = counterSlice.actions;
export default counterSlice.reducer;
