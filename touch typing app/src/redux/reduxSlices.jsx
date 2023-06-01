import { createSlice } from "@reduxjs/toolkit";

export const settingSlice = createSlice({
    name: "setting",
    initialState: {
        time: null,  //default value of session 2min
        level: null, // def value of levl of diff
        start:false, // for starting session
    },
    reducers: {
        sessionTime: (state, action) => {
            state.time = action.payload;
        },

        sessionLevel: (state, action) => {
            state.level = action.payload;
        },

        startSession:(state , action)=>{
            state.start = action.payload
        }

    },
});


export const { sessionTime, sessionLevel , startSession} = settingSlice.actions;


export const settingReducer = settingSlice.reducer;
