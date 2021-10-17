import "./style.css";
import React, { useState } from "react";
import Timer from "../../components/Timer";
import Selector from "../../components/Selector";
import Question from "../../components/Question";

function QuestionPage() {
  const alternatives = [
    { id: "a", option: "Texto da alternativa ATexto da alternativa ATexto da alternativa A" },
    { id: "b", option: "Texto da alternativa BTexto da alternativa ATexto da alternativa A" },
    { id: "c", option: "Texto da alternativa CTexto da alternativa ATexto da alternativa A" },
    { id: "d", option: "Texto da alternativa DTexto da alternativa ATexto da alternativa A" },
  ];

  const question = {
    alternatives: alternatives,
    number: -1,
    statement: "Lorem ipsum \n dolor sit amet, consectetur adipiscing elit. Proin sit amet sem ut lacus auctor iaculis ut eget sapien. Praesent fermentum efficitur mauris. Morbi ultrices eros id neque consequat maximus. Donec vulputate magna quis lacus lobortis, at porttitor justo elementum. Aliquam erat volutpat. Vestibulum neque lorem, condimentum eget viverra in, iaculis vel justo. Proin id rutrum quam. Suspendisse enim purus, pellentesque et nibh ullamcorper, lacinia lacinia sapien. Vestibulum rhoncus, purus nec consequat blandit, ante nisi consequat nisl, quis iaculis nunc est eu dui. Integer pretium diam sit amet pellentesque ultrices. Nullam eget malesuada sem, venenatis auctor tellus. Vivamus luctus lorem ut dolor pellentesque, eget lobortis magna pharetra. Donec euismod nec est non ultricies. Proin odio ligula, efficitur sed commodo et, porta mattis eros. Fusce velit massa, finibus sit amet nisl nec, vestibulum fringilla libero.",
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
