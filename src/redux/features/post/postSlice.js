import { createSlice } from "@reduxjs/toolkit";

const initialize = {
    loading: false,
    data:[],
    error:""
}

const postSlice = createSlice({
    name:"post",
    initialState,
    reducers:{
        
    }

})

export const {} = postSlice.actions;
export default postSlice.reducer;