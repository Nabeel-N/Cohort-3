import { useEffect, useRef, useState } from "react";
import "./App.css";

function App() {
  const [messages, setMessages] = useState(["Hi there" , "hello there"]);
  const wsRef = useRef();
  const inputRef = useRef();

  useEffect(() => {
    const ws = new WebSocket("http://localhost:3000");
    ws.onmessage = (event) => {
      setMessages((m) => [...m, event.data]);
    };
    wsRef.current = ws;

    ws.onopen = ()=>{
      ws.send(JSON.stringify({
        type:"join",
        payload:{
          roomId:"red"
        }
      }))
    }

    return ()=>{
      ws.close()
    }

  }, []);

  return (
    <div className="h-screen bg-black">
      <br /> <br />
      <div className="h-[85vh]  ">
        {messages.map((message) =>
           <div className="flex warp">
          <span className="bg-white text-black rounded p-4 m-8 ">
            {message}
            </span>
        </div>            
        )}
      </div>
      <div className="w-full bg-white flex">
        <input ref={inputRef} className="flex-1 p-4"></input>
        <button onClick={()=>{
         const message = inputRef.current?.value;
         wsRef.current.send(JSON.stringify({
          type:"chat",
          payload:{
            message:message,
          },
         }))
        }} className="bg-purple-600 text-white p-4">Send Message</button>
      </div>
    </div>
  );
}

export default App;
