import { useState } from "react"

export default function Question({ question }) {

    const [selectedOption, setSelectedOption] = useState(null);

    function handleRadioChange(value) {
        setSelectedOption(value);
    };

    return (
        <div className="Question_container">

            <h1 className="question">{question.question}</h1>

            <input type="radio" value="1" name="option1" onChange={() => handleRadioChange("option1")} checked={selectedOption === "option1"}/>
            <label htmlFor="option1">{question.option1}</label>

            <input type="radio" value="2" name="option2" onChange={() => handleRadioChange("option2")} checked={selectedOption === "option2"}/>
            <label htmlFor="option2">{question.option2}</label>

            <input type="radio" value="3" name="option3" onChange={() => handleRadioChange("option3")} checked={selectedOption === "option3"}/>
            <label htmlFor="option3">{question.option3}</label>

            <input type="radio" value="4" name="option4" onChange={() => handleRadioChange("option4")} checked={selectedOption === "option4"}/>
            <label htmlFor="option4">{question.option4}</label>

        </div>
    )
}