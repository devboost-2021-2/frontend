import "./style.css";
import React, { useState } from "react";
import Timer from "../../components/Timer";
import Selector from "../../components/Selector";
import Question from "../../components/Question";

function QuestionPage() {
  const alternatives = [
    { id: "a", option: "Texto da alternativa A" },
    { id: "b", option: "Texto da alternativa B" },
    { id: "c", option: "Texto da alternativa C" },
    { id: "d", option: "Texto da alternativa D" },
  ];

  const question = {
    alternatives: alternatives,
    number: -1,
    statement: "Qual alternativa está certa?? Me diz:",
    exam: "FUVEST 2030",
  };

  const allQuestions = [];

  for (let i = 0; i < 90; i++) {
    allQuestions.push({ ...question, number: i + 1 });
  }

  const [currentQuestion, setQuestion] = useState(0);
  const [answersDict, setAnswers] = useState({});
  console.log(answersDict);
  const questionObj = allQuestions[currentQuestion];
  const questionNumber = questionObj.number;
  return (
    <div id="containerPrincipal">
      <Question
        question={questionObj}
        selectedAnswer={answersDict[questionNumber]}
        callBack={(answer) => {
          setAnswers({ ...answersDict, [questionNumber]: answer });
        }}
      />
      <div id="containerDireita">
        <Timer />
        <Selector
          answers={Object.keys(answersDict)}
          allQuestions={allQuestions}
          callBack={setQuestion}
          currentQuestion={currentQuestion}
          numberPerLine={10}
        />
        <br />
        <button id="btnFinish">Finalizar</button>
      </div>
    </div>
  );
}

export default QuestionPage;
