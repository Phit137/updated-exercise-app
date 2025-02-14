// components/DurationExercise/index.js

import React, { useState, useEffect } from 'react';

const DurationExercise = ({ name }) => {
    const [time, setTime] = useState(0);
    const [isRunning, setIsRunning] = useState(false);

    // Timer logic
    useEffect(() => {
        let timer;
        if (isRunning) {
            timer = setInterval(() => {
                setTime((prevTime) => prevTime + 1);
            }, 1000);
        } else {
            clearInterval(timer);
        }

        return () => clearInterval(timer); // Cleanup on unmount
    }, [isRunning]);

    const handleStartStop = () => setIsRunning(!isRunning);
    const handleReset = () => setTime(0);

    // Format time as HH:MM:SS
    const formatTime = (timeInSeconds) => {
        const hours = Math.floor(timeInSeconds / 3600);
        const minutes = Math.floor((timeInSeconds % 3600) / 60);
        const seconds = timeInSeconds % 60;
        return `${hours.toString().padStart(2, '0')}:${minutes
            .toString()
            .padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    };

    return (
        <div>
            <h3>{name} - Duration</h3>
            <p>Time: {formatTime(time)}</p>
            <button onClick={handleStartStop}>{isRunning ? 'Stop' : 'Start'}</button>
            <button onClick={handleReset}>Reset</button>
        </div>
    );
};

export default DurationExercise;
