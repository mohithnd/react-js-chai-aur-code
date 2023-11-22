import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  let [counter, setCounter] = useState(0);
  // let counter = 0;
  function addValue() {
    counter++;
    if (counter > 20) {
      counter--;
      return;
    }
    setCounter(counter);
  }
  const removeValue = () => {
    if (counter - 1 < 0) {
      return;
    }
    setCounter(counter - 1);
  };
  return (
    <>
      <h1>Chai Aur React</h1>
      <h2>Counter Value : {counter}</h2>
      <button onClick={addValue}>Add Value {counter}</button>
      <br />
      <button onClick={removeValue}>Remove Value {counter}</button>
      <p>Footer : {counter}</p>
    </>
  );
}

export default App;
