import { useState, useEffect } from "react";

const Option = ({ name, id, choose }) => {
  const [color, setColor] = useState("none");

  const style = {
    backgroundColor: color,
  };

  const toggle = async () => {
    let result = await choose(id);
    if (result) {
      setColor("green");
    } else {
      setColor("red");
    }
  };
  return (
    <button style={style} onClick={toggle}>
      {name}
    </button>
  );
};

export default Option;
