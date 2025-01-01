import { Input } from "../Components/Input";
import { Button } from "../Components/Button";
import axios from "axios";
import { useRef } from "react";
import { BACKEND_URL } from "../config";
import { useNavigate } from "react-router-dom";

export function Signin() {
  const usernameRef = useRef<HTMLInputElement>();
  const passwordRef = useRef<HTMLInputElement>();
  const navigate = useNavigate();

  async function signin() {
    const username = usernameRef.current?.value;
    const password = passwordRef.current?.value;

    const response = await axios.post(`${BACKEND_URL}api/v1/signin`, {
      username: username,
      password: password,
    });
    alert("you are signed IN");

    const jwt = await response.data.token;
    localStorage.setItem("token", jwt);
    navigate("/dashboard");
    // redirect the user to  the dashboard
  }

  return (
    <div className="h-screen w-screen bg-gray-200 flex justify-center items-center ">
      <div className="bg-white rounded-border min-w-48 p-8 ">
        <Input reference={usernameRef} placeholder="username" />
        <Input reference={passwordRef} placeholder="password" />
        <div className="flex justify-center items-center">
          <Button
            onClick={signin}
            variant="primary"
            text="Signin"
            fullwidth
            loading={false}
          />
        </div>
      </div>
    </div>
  );
}
