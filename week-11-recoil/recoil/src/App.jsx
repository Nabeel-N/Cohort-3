import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { RecoilRoot, atom, useRecoilValue, useSetRecoilState } from "recoil";
import { counterAtom } from "./store/counter";

// Main Component to render everything
// used Recoil
function App() {
  return (
    <RecoilRoot>
      <Counter />
    </RecoilRoot>
  );
}

//All the subComponents
function Counter() {
  return (
    <div>
      <CurretCount />
      <Decrease />
      <Increase />
      <Multiply />
    </div>
  );
}
function makething(){
  let name = name
}

//CurrentValue Original Value
function CurretCount() {
  const count = useRecoilValue(counterAtom);
  return <div>{count}</div>;
}

function Multiply() {
  const setcount = useSetRecoilState(counterAtom);
  function multi() {
    setcount((c) => c * 3);
  }
  return (
    <div>
      <button onClick={multi}>Multiply</button>
    </div>
  );
}

//Decrease Button
function Decrease() {
  const setcount = useSetRecoilState(counterAtom);
  function decrease() {
    setcount((c) => c - 1);
  }
  return (
    <div>
      <button onClick={decrease}>Decrease</button>
    </div>
  );
}

//Increase Button
function Increase() {
  const setcount = useSetRecoilState(counterAtom);
  function increase() {
    setcount((c) => c + 1);
  }
  return (
    <div>
      <button onClick={increase}>Increase </button>
    </div>
  );
}

export default App;
