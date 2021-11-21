import React, { useEffect, useState } from "react";
import "./style.css";

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

function Timer() {
  const [timer, setTimer] = useState(7200);

  useEffect(() => {
    let interval = setInterval(() => setTimer(timer - 1), 1000);
    return () => clearInterval(interval);
  }); //Define atualizador do cronômetro para rodar a cada segundo.
  return <h2 id="timer">Tempo restante: {formatTime(timer)}</h2>;
}

export default Timer;
