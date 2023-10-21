import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
    name:"app",
    initialState :{
        roomId:null,
    },
    reducers:{
        enterRoom:(state,action)=>{
            state.roomId = action.payload
        }
    }

})
export default appSlice.reducer;
export const {enterRoom}= appSlice.actions;