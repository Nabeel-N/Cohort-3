import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Otp } from "./Components/Otp";
import { Button } from "./Components/Button";
function App() {
  return (
    <>
      <div className="flex">
        <div className="bg-red-500 text-8xl rounded 2xl " style={{ flex: 1 }}>
          hi
        </div>
        <div className="bg-green-500 " style={{ flex: 1 }}>
          hi
        </div>
        <div className="sm-col-span-2 bg-blue-300 " style={{ flex: 4 }}>
          hi
        </div>
        <button disabled={false}>Signup</button>
      </div>
    </>
  );
}

export default App;
