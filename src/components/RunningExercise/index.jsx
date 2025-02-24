// components/RunningExercise/index.js

import React, { useState, useEffect } from 'react';

const RunningExercise = ({ name, onBack }) => {
    const [time, setTime] = useState(0);
    const [isRunning, setIsRunning] = useState(false);
    const [laps, setLaps] = useState([]); // To store the recorded lap times

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

    // Handle recording a lap
    const handleRecordLap = () => {
        setLaps((prevLaps) => [...prevLaps, time]); // Add current time to laps
    };

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
            <h3>{name} - Running Exercise</h3>
            <p>Time: {formatTime(time)}</p>

            <button onClick={handleStartStop}>{isRunning ? 'Stop' : 'Start'}</button>
            <button onClick={handleReset}>Reset</button>
            <button onClick={handleRecordLap} disabled={!isRunning}>
                Record Lap
            </button>

            <h4>Laps</h4>
            <ul>
                {laps.map((lapTime, index) => (
                    <li key={index}>Lap {index + 1}: {formatTime(lapTime)}</li>
                ))}
            </ul>

            {/* Back button to go back to the main screen */}
            <button onClick={onBack}>Back to Exercises</button>
        </div>
    );
};

export default RunningExercise;
