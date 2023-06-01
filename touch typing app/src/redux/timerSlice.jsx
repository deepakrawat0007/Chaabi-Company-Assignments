import { createSlice } from "@reduxjs/toolkit";

export const timerSlice = createSlice({
  name: "timer",
  initialState: {
    minutes: null, // for storing real time mins
    seconds: null // for storing real time secons
  },
  reducers: {
    setMinutes: (state) => {
      state.minutes -= 1;
    },
    setSeconds: (state) => {
      state.seconds -= 1;
    },
    setMinutesPayload:(state, action) =>{
       state.minutes = action.payload;
    },
    setSecondsPayload: (state, action) => {
      state.seconds = action.payload;
    }
  }
});

export const { setMinutes, setSeconds, setSecondsPayload , setMinutesPayload} = timerSlice.actions;

export const timerReducer = timerSlice.reducer;
