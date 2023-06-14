import React from "react";
import StatisticLine from "./StatisticLine";

const Statistics = ({ stats }) => {
  const { good, neutral, bad } = stats;
  const total = () => good + bad + neutral;

  const calculateAverage = () => {
    // good: 1, neutral: 0, bad: -1
    return (good - bad) / total();
  };

  const calculatePositive = () => {
    return (good / total()) * 100;
  };

  const statistics = [
    { text: "good", value: good },
    { text: "neutral", value: neutral },
    { text: "bad", value: bad },
    { text: "all", value: total() },
    { text: "average", value: calculateAverage() },
    { text: "positive", value: calculatePositive() },
  ];

  return (
    <div>
      <h2>statistics</h2>
      {total() > 0 ? (
        <table>
          <tbody>
            {statistics.map((stat) => (
              <StatisticLine
                text={stat.text}
                value={stat.value}
                key={stat.text}
              />
            ))}
          </tbody>
        </table>
      ) : (
        <p>No feedback given</p>
      )}
    </div>
  );
};

export default Statistics;
