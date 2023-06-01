import { createSlice } from "@reduxjs/toolkit"

export const sessionSlice = createSlice({
    name:"session",
    initialState:{
        color:"green",   //border color change when wrong type
        words:"",    // randomly generated word
        typeWords:"", // typed words
        mistakes:0,  //number of mistakes
        isMistake:false, // for animated box and other logics mistake related
        accuracy:null,   // for storing accuracy 
        WPM :null,     // for storing WPM
        wordsTyped:0,    // for cal accuracy / wpm
        wordTrack : 0,   // for cal. words typed
        popUp:false,    // for popUp Modal
    },
    reducers:{
        backColor:(state , action)=>{
            state.color = action.payload
        },
        setWords:(state, action)=>{
            state.words = action.payload
        },
        setTypeWords:(state, action)=>{
            state.typeWords = action.payload
        },
        AddMistake:(state)=>{
            state.mistakes += 1
        },
        setIsmistake:(state , action) =>{
            state.isMistake = action.payload
        },
        setAccuracy:(state , action)=>{
            state.accuracy = action.payload
        }, 
        setWordTyped:(state, action ) =>{
            state.wordsTyped += action.payload
        },
        setWordTrack:(state , action)=>{
            state.wordTrack = action.payload
        },
        setWPM :(state , action)=>{
            state.WPM = action.payload
        },
        setPopUp:(state , action)=>{
            state.popUp = action.payload
        },

    }
})
export const {setWordTrack, backColor , setWords , setTypeWords , AddMistake  , setIsmistake  , setAccuracy , setWordTyped , setWPM , setPopUp } = sessionSlice.actions
export const sessionReducer = sessionSlice.reducer