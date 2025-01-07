import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Otp } from "./Components/Otp";
import { Button } from "./Components/Button";
import computericons from "./Computericons";
function App() {
  return (
    <>
    <Otp/>


      <div className="flex ">
        <div></div>
        <Computericons/>

        <div className="bg-red-500 p-3 flex justify-center items- "  style={{ flex: 1 }}>
          hi
        </div>
        <div className="bg-green-500" style={{ flex: 1 }}>
          hi
        </div>
        <div className="sm-col-span-2 bg-blue-300" style={{ flex: 4 }}>
          hi
        </div>
        <button className="bg-violet-400" disabled={false}>Signup</button>
      </div>
    </>
  );
}

export default App;
