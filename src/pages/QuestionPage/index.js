import "./style.css";
import React, {useState} from 'react';
function Timer() {
  //TODO
  const [timer, setTimer] = useState(7200);

  //Retorna horário no formato HH:MM:SS
  const formatTime = (time) =>{
    const seconds = time % 60;
    var minutes = Math.floor(time / 60);
    const hours = Math.floor(minutes / 60);
    minutes = minutes % 60;
    return hours + ":" + ("0" + minutes).slice(-2) + ":" + ("0"+seconds).slice(-2);
  }
  setTimeout(() => setTimer(timer-1), 1000) //Define atualizador do cronômetro para rodar a cada segundo.
  return <h2 id='timer'>Timer: {formatTime(timer)}</h2>
  
}
function Selector(props){
  return(
  <>
    <h1>Questões</h1>
      {
        props.questionLinks.map((questions) => (
          <div>{
            questions.map((question) => (
              <button className="circle" id={question}></button>
            ))
          }
          </div>
        ))
      }
  </>
  )

}
function Question(props){
  return (
  <div id="containerEsquerda">
    <h1>Questão X)</h1>
    <p>Vestibular</p>
    <p>Enunciado</p>
    {
      props.alternatives.map((alternative) => (
        <div>
          <input type="radio" id={alternative.id} name="Question" />
          <label htmlFor={alternative.id}>{alternative.name}</label>
        </div>
      ))
    }
  </div>
  )
}
function QuestionPage() {
  const alternatives = [{ id: "a", name: "alternativa A" }, { id: "b", name: "alternativa B" }, { id: "c", name: "alternativa C" }]
  const questionLinks = Array.from({ length: 4 }, () => Array.from({ length: 5 }, () => 0));
  
  return (
    <div id="containerPrincipal">
      <Question alternatives = {alternatives}/>  
      <div id="containerDireita">
        <Timer/>
        <Selector questionLinks = {questionLinks}/>
        <button>Finalizar</button>
      </div>
    </div>
  );
}

export default QuestionPage;
