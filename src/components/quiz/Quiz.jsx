import { React, useEffect, useState } from 'react';
import './Quiz.css';
import Question from './Question';
import data from './data';

export default function Quiz() {

  const [questions, setQuestions] = useState(null);
  const [nofQuestions, setNofQuestions] = useState(0);
  const [index, setIndex] = useState(null);
  const [currentQuestion, setCurrentQuestion] = useState(null);

  useEffect(() => {
    setQuestions(data);
    setNofQuestions(data.length);
    setIndex(0);
    setCurrentQuestion(<Question question={data[0]} />);
  }, []);

  function updateQuestion() {
    setIndex(index + 1);
    setCurrentQuestion(<Question question={data[index]} />);
  }

  return (
    <div className='quiz_container'>
      <div id="current_question">
        {
          currentQuestion
        }
        <div id="next" onClick={() => updateQuestion()}>{
          index === nofQuestions ? "Submit" : "Next"
        }</div>
      </div>
    </div>
  )
}