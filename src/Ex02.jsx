import { useState } from "react";

const Ex02 = () => {
  const [color, setColor] = useState("blue");

  const handleClick = () => {
    if (color === "blue") {
      setColor("red");
    } else {
      setColor("blue");
    }
  };

  return (
    <>
      <p className={color}>山田太郎</p>
      <button onClick={() => handleClick()}>change color</button>
    </>
  );
};

export default Ex02;
