import Question from "./Components/Question";
import { useState } from "react";

import "./Styles/styles.css";
const questions = [
  {
    question: "Biggest Island in the world",
    choices: ["Greenland", "Iceland", "Finland", "Land Bank"],
    correctAnswer: 0,
  },
  {
    question: "Brightest star in the sky",
    choices: ["Star city", "Morning star", "Sirius", "Hermione"],
    correctAnswer: 2,
  },
  {
    question: "Pick letter d",
    choices: ["a", "b", "c", "d"],
    correctAnswer: 3,
  },
];

function App() {
  const [score, setScore] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(0);

  const { question, choices, correctAnswer } = questions[currentQuestion];
  return (
    <div className="App">
      <h2>Score: {score}</h2>
      <Question
        question={question}
        choices={choices}
        correctAnswer={correctAnswer}
        setScore={setScore}
        score={score}
        currentQuestion={currentQuestion}
        setCurrentQuestion={setCurrentQuestion}
      />
    </div>
  );
}

export default App;
