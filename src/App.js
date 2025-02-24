// App.js

import React, { useState } from 'react';
import './App.css';
import RepetitionExercise from './components/RepetitionExercise';
import DurationExercise from './components/DurationExercise';
import RunningExercise from './components/RunningExercise'; // Import the RunningExercise component

function App() {
  // State to track which screen is showing
  const [currentScreen, setCurrentScreen] = useState('exerciseSelection');
  const [selectedExercise, setSelectedExercise] = useState(null);
  const [selectedType, setSelectedType] = useState(null);

  // Function to go to the exercise type selection screen
  const handleExerciseSelect = (exercise) => {
    setSelectedExercise(exercise);
    setSelectedType(null); // Reset type when selecting a new exercise
    setCurrentScreen('exerciseTypeSelection');
  };

  // Function to go to the exercise screen (either Repetition, Duration, or Running)
  const handleTypeSelect = (type) => {
    setSelectedType(type);
    setCurrentScreen('exercise');
  };

  // Function to go back to the exercise selection screen
  const handleBackToSelection = () => {
    setCurrentScreen('exerciseSelection');
    setSelectedExercise(null);
    setSelectedType(null);
  };

  return (
    <div className="App">
      <h1>Exercise Tracker</h1>

      {currentScreen === 'exerciseSelection' && (
        <div>
          <button onClick={() => handleExerciseSelect('Running')}>Running</button><br></br>
          <button onClick={() => handleExerciseSelect('Planks')}>Planks</button><br></br>
          <button onClick={() => handleExerciseSelect('Push-ups')}>Push-ups</button><br></br>
        </div>
      )}

      {currentScreen === 'exerciseTypeSelection' && (
        <div>
          <h2>{selectedExercise}</h2>
          {selectedExercise === 'Running' ? (
            // Pass handleBackToSelection to the RunningExercise component
            <RunningExercise name={selectedExercise} onBack={handleBackToSelection} />
          ) : (
            <>
              <button onClick={() => handleTypeSelect('repetition')}>Repetitions</button>
              <button onClick={() => handleTypeSelect('duration')}>Duration</button>
            </>
          )}
        </div>
      )}

      {currentScreen === 'exercise' && selectedExercise !== 'Running' && (
        <div>
          <h2>{selectedExercise}</h2>
          {selectedType === 'repetition' && (
            <RepetitionExercise name={selectedExercise} />
          )}
          {selectedType === 'duration' && (
            <DurationExercise name={selectedExercise} />
          )}

          {/* "Back to Exercises" button */}
          <button onClick={handleBackToSelection}>Back to Exercises</button>
        </div>
      )}
    </div>
  );
}

export default App;
