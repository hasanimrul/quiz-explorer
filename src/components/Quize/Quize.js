import React from "react";
import { useLoaderData } from "react-router-dom";
import QuizeQuestion from "../QuizeQuestion/QuizeQuestion";
import './Quize.css';

const Quize = () => {
  const course = useLoaderData().data;

  const { questions, name } = course;
  return (
    <div className="quize-container">
      <h2>Quiz of {name}</h2>
      {
      questions.map((question) => (
        <QuizeQuestion key={question.id} questions={question}></QuizeQuestion>
      ))
      }
    </div>
  );
};

export default Quize;
