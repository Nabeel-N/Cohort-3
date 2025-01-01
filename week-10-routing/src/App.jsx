import { useRef, useState } from "react";
//import reactLogo from "./assets/react.svg";
//import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [currentCount, setCurrentcount] = useState(1)
  const timer = useRef();

  function StartClock() {
    let value = setInterval(function() {
      setCurrentcount(c => c + 1)
    }, 1000);
    timer.current = value;
    console.log(timer.current)
  }

  function Stopclock() {
    clearInterval(timer.current)
    console.log(timer.current)
  }

  return (
    <div style={{ backgroundColor: "white" }}>{currentCount}
      <br />
      <button onClick={StartClock}>Start</button>
      <button onClick={Stopclock}>Stop</button>
      <button style={{ backgroundColor: "yellow" }}></button>
    </div>
  )
}

export default App;


