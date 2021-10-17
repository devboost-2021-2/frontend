import React from "react";

function Question({ question, callBack, selectedAnswer }) {
  return (
    <div id="containerEsquerda">
      <h1>Questão {question.number})</h1>
      <p>{question.exam}</p>
      <p>{question.statement}</p>
      {question.alternatives.map((alternative) => (
        <div>
          <input
            type="radio"
            id={alternative.id}
            name="Question"
            onClick={() => {
              callBack(alternative.id);
            }}
            checked={alternative.id == selectedAnswer}
          />
          <label htmlFor={alternative.id}>{alternative.option}</label>
        </div>
      ))}
    </div>
  );
}

export default Question;
