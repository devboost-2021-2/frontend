import "./style.css";

function QuestionPage() {
  const alternatives = [{id:"a",name: "alternativa A"},{id:"b",name: "alternativa B"},{id:"c",name: "alternativa C"}]
  return (
    <div>
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
  );
}

export default QuestionPage;
