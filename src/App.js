import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Card from "./Components/Card";
import { useState } from "react";
import Button from "./Components/Button";
import { ReactComponent as ClockIcon } from "./assets/icons/clock.svg";

let interval;

function App() {
  const [count, setCount] = useState(0);

  const startCounting = () => {
    if (!interval) {
      interval = setInterval(() => {
        setCount((prevCount) => prevCount + 1);
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
  }

  console.log("perro", count);
  const separeDigits = String(count).padStart(4, "0").split("");

  return (
    <div className="App">
      <div className="d-flex row col-12 justify-content-center bg-black">
        <Card digit={<ClockIcon fill="white" width={40} height={40} />} />
        {separeDigits.map((digit, index) => {
          return <Card key={index} digit={digit} />;
        })}
      </div>
      <Button onClick={startCounting} name="start" />
      <Button onClick={stopCounting} name="stop" />
      <Button onClick={clearCounter} name="clear" />
    </div>
  );
}

export default App;
