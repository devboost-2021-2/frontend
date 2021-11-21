import "./style.css";
import React, { useEffect, useState } from "react";
import Timer from "../../components/Timer";
import Selector from "../../components/Selector";
import Question from "../../components/Question";

function QuestionPage() {
  const [allQuestions, setAllQuestions] = useState([]);
  const [currentQuestion, setQuestion] = useState(0);
  const [answersDict, setAnswers] = useState({});
  const [status, setStatus] = useState("CARREGANDO...");

  useEffect(() => {
    const url = process.env.REACT_APP_BACKEND_URL || "http://localhost:3333";
    fetch(url + "/questions")
      .then(async (resp) => {
        setAllQuestions((await resp.json()).allQuestions);
      })
      .catch((message) => {
        setStatus("Não foi possível obter as questões.");
        console.log(message);
      });
  }, []);

  if (allQuestions.length === 0) return <p>{status}</p>;

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
