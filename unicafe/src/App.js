import React, { useState } from "react";
import Button from "./components/Button";
import Statistics from "./components/Statistics";

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const buttons = ["good", "neutral", "bad"];

  const stats = { good, neutral, bad };

  const handleClick = (value) => {
    return () => {
      switch (value) {
        case "good":
          setGood((oldGood) => oldGood + 1);
          break;
        case "neutral":
          setNeutral((oldNeutral) => oldNeutral + 1);
          break;

        case "bad":
          setBad((oldBad) => oldBad + 1);
          break;
        default:
          break;
      }
    };
  };

  return (
    <>
      <h1>give feedback</h1>
      <div className="buttons">
        {buttons.map((button) => (
          <Button key={button} text={button} onClick={handleClick(button)} />
        ))}
      </div>
      <Statistics stats={stats} />
    </>
  );
};

export default App;
