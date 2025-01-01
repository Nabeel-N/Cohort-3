import { Input } from "../Components/Input"
import { Button } from "../Components/Button"
import { useRef } from "react";
import { BACKEND_URL } from "../config";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export function Signup(){
  const usernameRef = useRef <HTMLInputElement>();
  const passwordRef = useRef<HTMLInputElement>();
  const navigate = useNavigate();

  function signup(){
    const username = usernameRef.current?.value;
    const password = passwordRef.current?.value;
    axios.post(`${BACKEND_URL}api/v1/signup` ,{
      username:username,
      password:password
    })
    navigate("/signin")
   alert("you are signed UP");
   
  }


  return <div className="h-screen w-screen bg-gray-200 flex justify-center items-center ">
    <div className="bg-white rounded-border min-w-48 p-8 " >
      <Input reference={usernameRef} placeholder= "username"/>
      <Input reference={passwordRef} placeholder= "password"/>
      <div className="flex justify-center items-center">
      <Button onClick={signup} variant = "primary" text = "Signup" fullwidth loading={false}/>
      </div>
    </div>
  </div>
}

