import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Card from "./Components/Card";
import { useState } from "react";
import Button from "./Components/Button";
import { ReactComponent as ClockIcon } from "./assets/icons/clock.svg";
import CountDown from "./Components/Input";

let interval;

function App() {
  const [count, setCount] = useState(0);
  const [inputValue, setInputValue] = useState("");

  const startCounting = () => {
    if (!interval) {
      interval = setInterval(() => {
        setCount((prevCount) => prevCount + 1);
      }, 1000);
    }
  };

  const startCountdown = () => {
    //si no hay intervalo y el valor del input es mas que 0
    if (!interval && Number(inputValue) > 0) {
      //el count comienza en el valor de input
      setCount(Number(inputValue));
      interval = setInterval(() => {
        setCount((prevCount) => {
          //si prevcount es mayor o iguall que 1
          if (prevCount <= 1) {
            clearInterval(interval);
            interval = null;
            alert(" Countdown Over");
            return 0; //limpia y detiene el intervalo a 0
          }
          return prevCount - 1; //reduce de uno en uno
        });
      }, 1000);
    }
  };

  function stopCounting() {
    clearInterval(interval);
    interval = null;
  }

  function clearCounter() {
    clearInterval(interval);
    interval = null;
    setCount(0);
    setInputValue("");
  }

  console.log("perro", count);
  const separeDigits = String(count).padStart(4, "0").split("");

  return (
    <div className="App p-5">
      <div className="d-flex row col-12 justify-content-center bg-black p-3">
        <Card digit={<ClockIcon fill="white" width={40} height={40} />} />
        {separeDigits.map((digit, index) => {
          return <Card key={index} digit={digit} />;
        })}
      </div>
      <Button onClick={startCounting} name="start" />
      <Button onClick={stopCounting} name="stop" />
      <Button onClick={clearCounter} name="clear" />
      <div>
        <CountDown
          onClick={startCountdown}
          onChange={setInputValue}
          value={inputValue}
        />
      </div>
    </div>
  );
}

export default App;
