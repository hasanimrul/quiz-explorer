import React from "react";
import { useLoaderData } from "react-router-dom";
import QuizeQuestion from "../QuizeQuestion/QuizeQuestion";
import './Quize.css';

const Quize = () => {
  const course = useLoaderData().data;
  const { questions } = course;
  return (
    <div className="quize-container">
      {questions.map((question) => (
        <QuizeQuestion key={question.id} questions={question}></QuizeQuestion>
      ))}
    </div>
  );
};

export default Quize;
