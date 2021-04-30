import { useState } from "react";
import { useHistory } from "react-router-dom";

const Option = ({
  name,
  id,
  choose,
  answered,
  setAnswered,
  currentQuestion,
  questionLength,
  chosenAnswers,
  score,
}) => {
  const [color, setColor] = useState("none");
  const history = useHistory();

  const style = {
    backgroundColor: color,
  };

  const toggle = async () => {
    if (answered) {
      return;
    }
    setAnswered(true);
    let result = await choose(id);
    if (result) {
      setColor("green");
    } else {
      setColor("red");
    }

    if (currentQuestion === questionLength - 1) {
      setTimeout(
        () =>
          history.push({
            pathname: "/results",
            state: {
              chosenAnswers: [...chosenAnswers, id],
              score: score,
            },
          }),
        1500
      );
    }
  };

  return (
    <button style={style} onClick={toggle}>
      {name}
    </button>
  );
};

export default Option;
