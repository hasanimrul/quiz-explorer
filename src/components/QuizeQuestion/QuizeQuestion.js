import { faEye } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";
import AnswerOption from "../AnswerOption/AnswerOption";
import './QuizeQuestion.css'
  import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

const QuizeQuestion = ({ questions }) => {
  const { question, options, correctAnswer } = questions;

 
  const notify = () => toast(correctAnswer);
  
  return (
    <div className="quize-question-container">
        
      <div className="question-div">
            <h2>Ques: {question.slice(3,-4)}</h2>
            <Link onClick={notify}><FontAwesomeIcon icon={faEye}></FontAwesomeIcon>
            <ToastContainer />
            </Link>
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
