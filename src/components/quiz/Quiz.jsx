import { React, useEffect, useState } from 'react';
import './Quiz.css';
import Question from './Question';
import data from './data';
import Correction from './Correction';
import correctAnswers from './answers';

export default function Quiz() {

  const [currentQuestionObject, setCurrentQuestionObject] = useState(null);
  const [index, setIndex] = useState(0);
  const [answers, setAnswers] = useState([]);

  const [currentOption, setCurrentOption] = useState(null);

  const [isCorrecting, setIscorrecting] = useState(false);

  const [score, setScore] = useState(0);

  useEffect(() => {
    setCurrentQuestionObject(data[index]);
  }, []);

  useEffect(() => {
    setCurrentQuestionObject(data[index]);
  }, [index]);

  function updateAnswers(temp) {
    setAnswers([...answers, temp]);
  };

  return (
    <div id='quiz_container'>
      
      {
        isCorrecting
          ? <Correction answers={answers} />
          :
          <>
            <div id="question_section">
              {
                currentQuestionObject && <Question
                  question={currentQuestionObject}
                  updateAnswers={updateAnswers}
                  currentOption={currentOption}
                  setCurrentOption={setCurrentOption} />
              }
            </div>
            <div id="button_section">

              {
                index === 0 ? null : <div id="previous" onClick={() => setIndex(index - 1)}>Previous</div>
              }

              {
                index === data.length - 1 ? <div id="submit" onClick={() => { setIscorrecting(true) }}>submit</div> : <div id="next" onClick={() => { setIndex(index + 1); setCurrentOption(null) }}>next</div>
              }


            </div>
          </>
      }
    </div>
  )
}