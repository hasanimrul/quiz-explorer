import React from "react";
import AnswerOption from "../AnswerOption/AnswerOption";
import './QuizeQuestion.css'

const QuizeQuestion = ({ questions }) => {
  const { question, options } = questions;
  console.log(questions);
  return (
    <div className="quize-question-container">
      <h2>Ques: {question.slice(3,-4)}</h2>
      {options.map((option) => (
        <AnswerOption question={questions} option={option}></AnswerOption>
      ))}
    </div>
  );
};

export default QuizeQuestion;
