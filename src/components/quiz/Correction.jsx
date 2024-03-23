import React, { useState } from 'react';
import correctAnswers from './answers';
import './Correction.css';

export default function Correction({ answers }) {

  const [score, setScore] = useState(null);

  function getScore() {
    let correct = 0;
    for (let i = 0; i < answers.length; i++) {
      if (correctAnswers[i][i] === answers[i][i]) {
        correct = correct + 1;
      }
    }
    setScore(correct);
  }

  return (
    <div id="score_container">
      <div onClick={() => getScore()} id="score_btn">Get Score</div>
      <p>{ score === null ? "Click the button to get Score" : score }</p>
    </div>
  )
}