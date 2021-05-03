import { useState, useEffect, useRef } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import Question from "./Components/Question";
import Result from "./Components/Result";

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
  const questionLength = questions.length;
  const [chosenAnswers, setChosenAnswers] = useState([]);
  const [progress, setProgress] = useState(0);
  const timer = useRef(null);

  const { question, choices, correctAnswer } = questions[currentQuestion];

  useEffect(() => {
    timer.current = setInterval(() => {
      setProgress((p) => p + 5);

      return () => {
        clearInterval(timer.current);
      };
    }, 100);
  }, [currentQuestion]);

  return (
    <Router>
      <Switch>
        <Route exact path="/">
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
              key={currentQuestion}
              questionLength={questionLength}
              chosenAnswers={chosenAnswers}
              setChosenAnswers={setChosenAnswers}
              progress={progress}
              setProgress={setProgress}
              timer={timer.current}
            />
          </div>
        </Route>

        <Route exact path="/results">
          <Result questions={questions} />
        </Route>

        <Route exact path="/404">
          <h1>Wrong URL</h1>
        </Route>

        <Redirect to="/404" />
      </Switch>
    </Router>
  );
}

export default App;
