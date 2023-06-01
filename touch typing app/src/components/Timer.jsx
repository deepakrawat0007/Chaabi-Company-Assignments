import React , {useEffect} from 'react';
import { useDispatch , useSelector } from 'react-redux';
import { setMinutes , setSeconds , setSecondsPayload , setMinutesPayload} from '../redux/timerSlice';


function Timer() {
    const dispatch = useDispatch()
    const time = useSelector((state)=> state.setting.time)
    const {minutes , seconds} = useSelector((state)=> state.timer)

    useEffect(()=>{ // calculating the def time value
    const min = Math.floor(time/60)
    const sec = time % 60

    dispatch(setMinutesPayload(min))
    dispatch(setSecondsPayload(sec))
    },[time])

    useEffect(()=>{   // cal real time timings 
        let interval = null

        interval = setInterval(()=>{
            if(seconds > 0){
                dispatch(setSeconds())
            }
            else{
                if(minutes === 0){
                    clearInterval(interval)
                }else{
                    dispatch(setMinutes())
                    dispatch(setSecondsPayload(59))
                }
            }
        },1000)

        return ()=> clearInterval(interval)

    },[minutes , seconds ])

  return (
    <>
  <div className="time">
  <p style={{color:"whitesmoke" , fontSize:"16px" , paddingLeft:"2%"}}>
        Session End In: {minutes < 10 ? "0" + minutes : minutes}:
        {seconds < 10 ? "0" + seconds : seconds}
      </p>
  </div>
    </>
  )
}

export default Timer