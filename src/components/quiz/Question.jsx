import { useState } from "react";
import './Question.css';

export default function Question({ question }) {
 
    return (
        <div className="question_container">
            <h1>{question.question}</h1>
            <div className="options">
                <input type="radio" name="option" value='option1' />{question.option1}<br />
                <input type="radio" name="option" value='option2' />{question.option2}< br />
                <input type="radio" name="option" value='option3' />{question.option3}<br />
                <input type="radio" name="option" value='option4' />{question.option4}<br />
            </div>
            
        </div>
    )
}