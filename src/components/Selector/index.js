import React from "react";
import "./style.css";

function Selector(props) {
  return (
    <>
      <div id="selectorContainer">
        <h1 id="titleSelector">Questões</h1>
        <div>
          {props.allQuestions.map((question, index) => (
            <div className="inline" key={question.number}>
              {index % props.numberPerLine === 0 && <br />}
              <button
                className={`circle ${
                  props.currentQuestion === index ? "selectedCircle" : ""
                } ${
                  props.answers.includes(`${question.number}`) ? "answered" : ""
                }`}
                onClick={() => props.callBack(index)}
                id={question.number}
              >
                {question.number}
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
export default Selector;
