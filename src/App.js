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
    choices: ["ol", "cl", "D", "d"],
    correctAnswer: 3,
  },
  {
    question:
      "Phobias and panic disorders are classified under what kind of disorder?",
    choices: ["Delusional", " Anxiety", "Obsessive-cumpolsive", "Autism"],
    correctAnswer: 1,
  },
  {
    question: `In literature, what is meant by the term "unreliable narrator"?`,
    choices: [
      "The narrator is not not considered a human",
      "The narrator has a vague past/background",
      "The narrator's point of view is compromised in some way",
      "The narrator is battling his nature",
    ],
    correctAnswer: 2,
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
      setProgress((p) => p + 2);

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
