// components/RepetitionExercise/index.js

import React, { useState } from 'react';

const RepetitionExercise = ({ name }) => {
    const [repetitions, setRepetitions] = useState(0);

    const handleIncrement = () => setRepetitions(repetitions + 1);
    const handleReset = () => setRepetitions(0);

    return (
        <div>
            <h3>{name} - Repetitions</h3>
            <p>Repetitions: {repetitions}</p>
            <button onClick={handleIncrement}>Increment</button>
            <button onClick={handleReset}>Reset</button>
        </div>
    );
};

export default RepetitionExercise;
