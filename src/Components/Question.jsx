import { useState } from "react";

import Confetti from "react-dom-confetti";
import Option from "./Option";

const Question = ({
  question,
  choices,
  correctAnswer,
  score,
  setScore,
  currentQuestion,
  setCurrentQuestion,
}) => {
  const [correct, setCorrect] = useState(false);

  const answer = async (index) => {
    if (currentQuestion + 1 === 3) {
      console.log("Quiz over");
    } else {
      setTimeout(() => {
        setCurrentQuestion(Math.min(2, currentQuestion + 1));
      }, 1000);
    }

    setTimeout(() => setCorrect(false), 0);

    if (index === correctAnswer) {
      setCorrect(true);
      setScore(score + 1);
      return true;
    }

    return false;
  };

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
          />
        ))}
      </div>

      <Confetti active={correct} />
    </div>
  );
};

export default Question;
