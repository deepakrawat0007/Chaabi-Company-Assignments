import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setPopUp } from '../redux/sessionSlice';
import { startSession } from '../redux/reduxSlices';
import { setAccuracy, setWPM } from '../redux/sessionSlice';

function Modal() {
  const dispatch = useDispatch();
  const { wordsTyped, mistakes } = useSelector((state) => state.session);
  const time = useSelector((state) => state.setting.time)
  const { accuracy, WPM } = useSelector((state) => state.session)

  useEffect(() => {  // calculating accuracy on based of typing keys
    const acc = (((parseInt(wordsTyped) - parseInt(mistakes)) / parseInt(wordsTyped)) * 100).toFixed(2);
    dispatch(setAccuracy(isNaN(acc) ? 0 : acc));
  }, [wordsTyped, mistakes]);

  useEffect(() => {      // calculating WPM on based of typing 
    const min = parseInt(time) / 60;
    const wpm = Math.ceil(wordsTyped / min);
    dispatch(setWPM(isNaN(wpm) ? 0 : wpm));
  }, [wordsTyped]);

  const handleStart = () => {
    dispatch(setPopUp(false));
    dispatch(startSession(false));
    window.location.reload()
  };

  return (
    <div>
      <div className="head">Session Ends</div>
      <div className="details">
        <div className="detail">
          <p>Accuracy: {accuracy}%</p>
        </div>
        <div className="detail">
          <p>WPM: {WPM}</p>
        </div>
        <div className="detail">
          <p>Total Mistakes: {mistakes}</p>
        </div>
      </div>
      <div className="btn" style={{ marginTop: '20px' }}>
        <button onClick={handleStart}>Start Again</button>
      </div>
    </div>
  );
}

export default Modal;
