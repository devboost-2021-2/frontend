import React from "react";
import "./style.css";

function Question({ question, callBack, selectedAnswer }) {
  return (
    <div id="containerEsquerda">
      <h1>Questão {question.number})</h1>
      <p id="exam">{question.exam}</p>
      <p id="statement">{question.statement}</p>
      {question.alternatives.map((alternative, index) => (
        <div className="alternatives" key={index}>
          <input
            type="radio"
            id={alternative.id}
            name="Question"
            onChange={() => {
              callBack(alternative.id);
            }}
            checked={alternative.id === selectedAnswer}
          />
          <label htmlFor={alternative.id}>{alternative.option}</label>
        </div>
      ))}
    </div>
  );
}

export default Question;
