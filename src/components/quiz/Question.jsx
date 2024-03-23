import { useEffect, useState } from "react";
import './Question.css';

export default function Question({ question, updateAnswers, currentOption, setCurrentOption }) {

    useEffect(() => {
        setCurrentOption(null);
    }, []);

    function handleOptionChange(temp) {
        updateAnswers({
            [question.id]: temp.target.value
        })
    };

    return (
        <div className="question_container">
            <h1>{question.question}</h1>
            <div className="options">
                <input
                    checked={currentOption === "1"}
                    type="radio"
                    name="option"
                    value="option1"
                    onChange={(e) => { handleOptionChange(e); setCurrentOption("1") }} />{question.option1}<br />

                <input
                    checked={currentOption === "2"}
                    type="radio"
                    name="option"
                    value="option2"
                    onChange={(e) => { handleOptionChange(e); setCurrentOption("2") }} />{question.option2}< br />

                <input
                    checked={currentOption === "3"}
                    type="radio"
                    name="option"
                    value="option3"
                    onChange={(e) => { handleOptionChange(e); setCurrentOption("3") }} />{question.option3}<br />

                <input
                    checked={currentOption === "4"}
                    type="radio"
                    name="option"
                    value="option4"
                    onChange={(e) => { handleOptionChange(e); setCurrentOption("4") }} />{question.option4}<br />
            </div>

        </div>
    )
}