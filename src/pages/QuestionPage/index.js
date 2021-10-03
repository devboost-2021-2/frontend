import "./style.css";
import React, { useState } from "react";
function Timer() {
  //TODO
  const [timer, setTimer] = useState(7200);

  //Retorna horário no formato HH:MM:SS
  const formatTime = (time) => {
    const seconds = time % 60;
    var minutes = Math.floor(time / 60);
    const hours = Math.floor(minutes / 60);
    minutes = minutes % 60;
    return (
      hours + ":" + ("0" + minutes).slice(-2) + ":" + ("0" + seconds).slice(-2)
    );
  };
  setTimeout(() => setTimer(timer - 1), 1000); //Define atualizador do cronômetro para rodar a cada segundo.
  return <h2 id="timer">Timer: {formatTime(timer)}</h2>;
}
function Selector(props) {
  return (
    <>
      <h1>Questões</h1>
      {props.allQuestions.map((question, index) => (
        <div class="inline" key={question.number}>
          {index % props.numberPerLine === 0 && <br />}
          <button className="circle" id={question.number}></button>
        </div>
      ))}
    </>
  );
}
function Question({ question }) {
  return (
    <div id="containerEsquerda">
      <h1>Questão {question.number})</h1>
      <p>{question.exam}</p>
      <p>{question.statement}</p>
      {question.alternatives.map((alternative) => (
        <div>
          <input type="radio" id={alternative.id} name="Question" />
          <label htmlFor={alternative.id}>{alternative.option}</label>
        </div>
      ))}
    </div>
  );
}
function QuestionPage() {
  const alternatives = [
    { id: "a", option: "Texto da alternativa A" },
    { id: "b", option: "Texto da alternativa B" },
    { id: "c", option: "Texto da alternativa C" },
    { id: "d", option: "Texto da alternativa D" },
  ];

  const question = {
    alternatives: alternatives,
    number: 1,
    correctAnswer: "d",
    statement: "Qual alternativa está certa?? Me diz:",
    exam: "FUVEST 2030",
  };

  const allQuestions = [];

  for (let i = 0; i < 90; i++) {
    allQuestions.push(question);
  }
  return (
    <div id="containerPrincipal">
      <Question question={question} />
      <div id="containerDireita">
        <Timer />
        <Selector allQuestions={allQuestions} numberPerLine={10} />
        <br />
        <button>Finalizar</button>
      </div>
    </div>
  );
}

export default QuestionPage;
