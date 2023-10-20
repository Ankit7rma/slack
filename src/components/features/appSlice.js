import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
    name:"app",
    initialstate:{
        roomId:null,
    },
    reducers:{
        enterRoom:(state,action)=>(
            state.roomId = action.payload.roomId
        )
    }

})
export default appSlice.reducer;
export const {enterRoom}= appSlice.actions;