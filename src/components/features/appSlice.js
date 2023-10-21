import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
    name:"app",
    initialState :{
        roomId:null,
    },
    reducers:{
        enterRoom:(state,action)=>{
            state.roomId = action.payload.roomId
        }
    }

})
export default appSlice.reducer;
export const {enterRoom}= appSlice.actions;
export const selectRoomId = state=> state.app.roomId