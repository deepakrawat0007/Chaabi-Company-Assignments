import { useDispatch, useSelector } from "react-redux";
import { AddMistake, backColor, setTypeWords, setWords, setIsmistake, setWordTrack, setWordTyped, setPopUp } from "../redux/sessionSlice";
import { useEffect } from "react";
import { setMinutesPayload, setSecondsPayload } from "../redux/timerSlice";
import "../App.css"
import Timer from "./Timer";
import Modal from "./popUp";

const Session = () => {
  const dispatch = useDispatch();
  const level = useSelector((state) => state.setting.level);
  const { minutes, seconds } = useSelector((state) => state.timer);
  const { words, typeWords, color, isMistake, wordTrack, popUp } = useSelector((state) => state.session)

  const GenerateWords = () => {// logic for randomly generating words 
    const keys = "asdfjkl;";
    if (level) {
      const words = Array.from({ length: level * 10 }, () =>   // creating randomly generated words of array
        keys[Math.floor(Math.random() * keys.length)]
      );
      const sequenceWithSpaces = words.join("");
      if (level === "2") {
        const sequenceWithWordSpaces = sequenceWithSpaces.match(/.{1,2}/g).join(" ")
        return dispatch(setWords(sequenceWithWordSpaces));
      } else if (level === "3") {
        const sequenceWithWordSpaces = sequenceWithSpaces.match(/.{1,3}/g).join(" ")
        return dispatch(setWords(sequenceWithWordSpaces));
      } else {
        const sequenceWithWordSpaces = sequenceWithSpaces.match(/.{1,4}/g).join(" ")
        return dispatch(setWords(sequenceWithWordSpaces));
      }
    }
  };

  const handleEnd = () => {
    dispatch(setPopUp(true))
    dispatch(setMinutesPayload(0))
    dispatch(setSecondsPayload(0))
  }

  useEffect(() => {
    GenerateWords();
  }, [level]);

  useEffect(() => {  //if times up popping up the popUp menu
    if (minutes === 0 && seconds === 0) {
      dispatch(setWordTyped(wordTrack))
      dispatch(setPopUp(true))
    }
  }, [minutes, seconds])



  useEffect(() => {
    const wordTrack = typeWords.split(" ")
    dispatch(setWordTrack(wordTrack.length))

    for (let i = 0; i < typeWords.length; i++) { // checking if the typed word is correct or not
      if (typeWords[i] !== words[i]) {
        dispatch(AddMistake())
        dispatch(backColor("red"))
        dispatch(setIsmistake(true))
        return
      } else {
        dispatch(setIsmistake(false))
        dispatch(backColor("green"))
      }
    }

    if (typeWords.length === words.length && !isMistake) { // if all the words typed and still time remaining generating new words
      const words = typeWords.split(" ")
      dispatch(setWordTyped(words.length))
      GenerateWords()
      dispatch(setTypeWords(""))
    }

  }, [typeWords])

  return <>
    {popUp ? (<div className="popup"><Modal /></div>) : ""}
    <div className="subHead"><div className="time"><Timer /></div>
    <div className="level">Session Level: <p style={{margin:0 , padding:0}}>{level==="2" ? "Easy" : level === "3"? "Medium" :"Hard"}</p></div>
    <div className="cancel"><button onClick={handleEnd}>End Session</button></div>
    
    </div>
    <div className="words">{words}</div>
    <div className="inp"><input style={{ borderColor: color }} value={typeWords} disabled={popUp ? true : false} spellCheck={false} className={isMistake ? "shake-animation" : "normal"} placeholder="Type the text showing above" onChange={(e) => dispatch(setTypeWords(e.target.value))} /></div>
  </>;
};

export default Session;
