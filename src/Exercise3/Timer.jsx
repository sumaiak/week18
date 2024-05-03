import React, { useState, useEffect } from "react";

export default function Timer() {
  const [minutes, setMinutes] = useState();
  const [seconds, setSeconds] = useState();
  const [isRunning, setRunning] = useState(false);

  useEffect(() => {
    let interval;
    if (isRunning) {
      interval = setInterval(() => {
        if (seconds > 0) {
          setSeconds(seconds -1);
        } else if (minutes > 0) {
          setMinutes(minutes- 1);
          setSeconds(59);
        } else {
          setRunning(false); 
        }
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isRunning, seconds]);
  // this will hHAPPEN WHEN THE COMPONENT LOADSS
  //this will run each time there is a rereders,when the data changes //like fetchin api the finction 
  //inside tge user affect fires at each render/or each action change is performed
//dependecy is used to specify which change or render u want to target , like a litle condtion
//dpenedency by adding an element to di it prevents an infinite loop 

  const toggleTime = () => {
    setRunning(!isRunning);
  };

  const resetTime = () => {
    setRunning(false);
    setMinutes(0);
    setSeconds(0);
  };

  const handleMinuteChange = (event) => {
    const { value } = event.target;
    setMinutes(parseInt(value) ); 
  };

  const handleSecondChange = (event) => {
    const {value} = event.target;
    setSeconds(parseInt(value) ); // Ensure it's a number
  };

  const format = () => {
    const formattedMinutes = minutes < 10 ? "0" + minutes : minutes;
    const formattedSeconds = seconds < 10 ? "0" + seconds : seconds;
    return formattedMinutes + ":" + formattedSeconds;
  };

  return (
    <div className="stopWatch">
      <div>
        <label htmlFor="minutes">Minutes:</label>
        <input
          id="minutes"
          type="number"
          value={minutes}
          onChange={handleMinuteChange}
          min="0"
        />
      </div>
      <div>
        <label htmlFor="seconds">Seconds:</label>
        <input
          id="seconds"
          type="number"
          value={seconds}
          onChange={handleSecondChange}
          min="0"
          max="59"
        />
      </div>
      <p className="timer">{format()}</p>
      <div className="actions">
        <button onClick={toggleTime}>{isRunning ? "Pause" : "Start"}</button>
        <button onClick={resetTime}>Reset</button>
      </div>
    </div>
  );
}//Useref referes to user input we use when we want to controll user input
