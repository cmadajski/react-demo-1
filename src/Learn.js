import React, { useState, useEffect } from "react"
import { learning_data } from "./learnData"
import "./Learn.css"

const Learn = (props) => {

    const [learningData, setLearningData] = useState(learning_data)
    const [currQuestionId, setCurrQuestionId] = useState(0)
    

    const getNextQuestion = () => {
        for (let i = 0; i < learningData.length; i++) {
            if (!learningData[i].completed) {
                return learningData[i];
            }
        }
    }
    
    
    const handleNext = () => {
        setCurrQuestionId((prevQuestion) => prevQuestion + 1)
    }

    const handleSelected = (event) => {
        const allAnswers = document.getElementsByClassName("learn--answer selected");
        for (let i = 0; i < allAnswers.length; i++) {
            allAnswers[i].classList.remove("selected");
        }
        event.target.classList.add("selected");
    }

    const handleSubmit = (event) => {
        // find which element contains the selected class
        const answerSelected = document.getElementsByClassName("learn--answer selected")[0];
        if (answerSelected.id === currQuestionData.correct_answer_id.toString()) {
            console.log("Answer is correct!")
            setCurrQuestionId((prevQuestion) => prevQuestion + 1);
            // remove the selected class from the previous question
            answerSelected.classList.remove("selected")
        } else if (!answerSelected) {
            console.log("No answer selected. Must choose at least one answer to continue...")
        } else {
            console.log("WRONG ANSWER...")
            console.log(answerSelected);
        }
    }

    const currQuestionData = learningData[currQuestionId];
    const answerElements = currQuestionData.answers.map((answer, index) => <div className="learn--answer" key={index} id={index} onClick={handleSelected} tabIndex={0}>{answer.answer_text}</div>)

    return (
        <div className="learn--container">
            <div className="learn--question">{currQuestionData.question_text}</div>
            <div className="learn--answers">
                {answerElements}
            </div>
            <button className="submit" onClick={handleSubmit}>Submit</button>
            <button className="next" onClick={handleNext}>Next &rarr;</button>
        </div>
    )
}

export default Learn;