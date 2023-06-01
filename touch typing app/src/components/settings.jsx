import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { sessionTime, sessionLevel , startSession} from '../redux/reduxSlices'

function Settings() {
    const {time , level} = useSelector((state)=> state.setting)
    const dispatch = useDispatch()
   const handleStart = ()=>{
     if(!time || !level){
        return alert("Please Select the Session types below first")
     } else{
        return dispatch(startSession(true))
     }
   }
    return (
        <>

            <div className="setting">
                <div className="sessionTiming">
                    <label htmlFor="timing">Session Duration</label>
                    <select id='timing' onChange={(e) => dispatch(sessionTime(e.target.value))}>
                        <option value={null}>Select Duration</option>
                        <option value={60}>1 Min</option>
                        <option value={120}>2 Min</option>
                        <option value={300}>5 Min</option>
                        <option value={600}>10 Min</option>
                    </select>
                </div>

                <div className="diff">
                    <label htmlFor='lvl'>
                        Select Difficulty Level
                    </label>
                    <select id='lvl' onChange={(e) => dispatch(sessionLevel(e.target.value))}>
                        <option value={null}>Select Level</option>
                        <option value={2}>Easy</option>
                        <option value={3}>Medium</option>
                        <option value={5}>Hard</option>
                    </select>
                </div>
            </div>
            <div className="btn"><button onClick={handleStart}>Start Session</button></div>
        </>
    )
}

export default Settings