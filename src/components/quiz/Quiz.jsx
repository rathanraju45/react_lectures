import { React, useEffect, useState } from 'react';
import './Quiz.css';
import Question from './Question';
import data from './data';

export default function Quiz() {

  const [currentQuestionObject, setCurrentQuestionObject] = useState(null);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    setCurrentQuestionObject(data[index]);
  }, []);

  useEffect(() => {
    setCurrentQuestionObject(data[index])
  }, [index])

  return (
    <div id='quiz_container'>
      <div id="question_section">
        {
          currentQuestionObject && <Question question={currentQuestionObject} />
        }
      </div>
      <div id="button_section">
        {
          index === 0 ? null : <div id="previous" onClick={() => setIndex(index - 1)}>Previous</div>
        }
        {
          index === data.length - 1 ? <div id="submit">submit</div> : <div id="next" onClick={() => setIndex(index + 1)}> next</div>
        }


      </div>
    </div>
  )
}