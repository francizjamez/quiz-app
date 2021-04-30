import { useHistory } from "react-router-dom";

const Result = ({ questions }) => {
  const history = useHistory();

  let { chosenAnswers, score } = history.location.state;
  return (
    <div className="results">
      <h2>Total Score: {score}</h2>
      {questions.map(({ question, choices, correctAnswer }, i) => {
        return (
          <div className="row">
            <span>{question}</span>
            <span>{choices[correctAnswer]}</span>
            <span style={generateStyle(correctAnswer, chosenAnswers[i])}>
              {choices[chosenAnswers[i]]}
            </span>
          </div>
        );
      })}
    </div>
  );
};

function generateStyle(choice, correctChoice) {
  if (choice === correctChoice) {
    return { backgroundColor: "green" };
  } else {
    return { backgroundColor: "red" };
  }
}

export default Result;
