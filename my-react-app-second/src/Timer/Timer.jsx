import React, { useState, useRef } from 'react';

function Timer() {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const intervalRef = useRef(null);

  const startTimer = () => {
    if (!isRunning) {
      setIsRunning(true);
      intervalRef.current = setInterval(() => {
        setTime(prevTime => prevTime + 0.01);
      }, 10);
    }
  };

  const pauseTimer = () => {
    if (isRunning) {
      clearInterval(intervalRef.current);
      setIsRunning(false);
    } else {
      startTimer();
    }
  };

  const stopTimer = () => {
    clearInterval(intervalRef.current);
    setIsRunning(false);
    setTime(0);
  };

  return (
    <div>
      <h1>Timer</h1>
      <div>Time: {Math.round(time * 100) / 100} s</div>
      <button onClick={startTimer}>Start</button>
      <button onClick={pauseTimer}>{isRunning ? 'Pause' : 'Continue'}</button>
      <button onClick={stopTimer}>Stop</button>
    </div>
  );
}

export default Timer;