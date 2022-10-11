import { faEye } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";
import AnswerOption from "../AnswerOption/AnswerOption";
import './QuizeQuestion.css'

const QuizeQuestion = ({ questions }) => {
  const { question, options, correctAnswer } = questions;
//   console.log(correctAnswer);

  const handleCorrectAnswer = () =>{
    alert(correctAnswer);
  }
  return (
    <div className="quize-question-container">

      <div className="question-div">
            <h2>Ques: {question.slice(3,-4)}</h2>
            <Link onClick={handleCorrectAnswer}><FontAwesomeIcon icon={faEye}></FontAwesomeIcon></Link>
      </div>

      {
        options.map((option) => (
        <AnswerOption question={questions} option={option}></AnswerOption>
        ))
      }
    </div>
  );
};

export default QuizeQuestion;
