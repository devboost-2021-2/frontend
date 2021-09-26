import "./style.css";

function Links() {

    let rows = []
    rows.push()
    for (let i = 1; i <= 20; i++) {

      rows.push(<a></a>)
    }
    rows.push()
    return (
      <div>
        <h1>Loop 1:</h1>
        <ul>{rows}</ul>
      </div>
    )

}

function QuestionPage() {
  const alternatives = [{id:"a",name: "alternativa A"},{id:"b",name: "alternativa B"},{id:"c",name: "alternativa C"}]
  const questionLinks = Array.from({length: 4}, () => Array.from({length: 5}, () => 0));
  

  return (
    <div id="containerPrincipal">
      <div id="containerEsquerda">
        <h1>Questão X)</h1>
        <p>Vestibular</p>
        <p>Enunciado</p>
        {
          alternatives.map((alternative) =>(
            <div>
              <input type = "radio" id = {alternative.id} name = "Question"/>
              <label htmlFor = {alternative.id}>{alternative.name}</label>
            </div>
          ))
        }
      </div>
      <div id="containerDireita">
        <h1>Questões</h1>
          {
          questionLinks.map((questions) => (
              {
                questions.map((question) => (
                  <button className="circle" id={question}></button>
                ))
              }
            </div>
          ))
          }
        <button>Finalizar</button>
      </div>
    </div>
  );
}

export default QuestionPage;
