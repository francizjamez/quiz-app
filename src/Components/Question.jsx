import { useState, useEffect } from "react";

import Confetti from "react-dom-confetti";
import Option from "./Option";
import Bar from "./Bar";

const Question = ({
  question,
  choices,
  correctAnswer,
  score,
  setScore,
  currentQuestion,
  setCurrentQuestion,
  questionLength,
  chosenAnswers,
  setChosenAnswers,
  progress,
  setProgress,
  timer,
}) => {
  const [correct, setCorrect] = useState(false);
  const [answered, setAnswered] = useState(false);

  const answer = async (index) => {
    let newAnswers = [...chosenAnswers];
    newAnswers.push(index);
    setChosenAnswers(newAnswers);

    if (currentQuestion + 1 === questionLength) {
      console.log("Quiz over");
    } else {
      setTimeout(() => {
        setProgress(0);
        setCurrentQuestion(Math.min(questionLength, currentQuestion + 1));
      }, 1000);
    }

    if (index === correctAnswer) {
      setCorrect(true);
      setScore(score + 1);
      return true;
    }

    return false;
  };

  useEffect(() => {
    clearInterval(timer);
  }, [currentQuestion]);

  return (
    <div className="question">
      <h2>{question}</h2>

      <div className="choices">
        {choices.map((choice, i) => (
          <Option
            choose={answer}
            id={i}
            name={choice}
            key={i + currentQuestion * 100}
            answered={answered}
            setAnswered={setAnswered}
            currentQuestion={currentQuestion}
            questionLength={questionLength}
            chosenAnswers={chosenAnswers}
            score={score}
          />
        ))}
      </div>

      <Bar progress={progress} />
      <Confetti active={correct} />
    </div>
  );
};

export default Question;
