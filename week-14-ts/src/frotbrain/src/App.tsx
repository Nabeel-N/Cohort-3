import { Signin } from "./Pages/Signin"
import { BrowserRouter , Routes, Route } from "react-router-dom"
import { Signup } from "./Pages/Signup"
import Dashboard from "./Pages/Dashboard"

function App (){
  return <BrowserRouter>
  <Routes>
    <Route path="signup" element={<Signup/>} ></Route>
    <Route path="signin" element={<Signin/>} ></Route>
    <Route path="dashboard" element={<Dashboard/>}></Route>
  </Routes>
  </BrowserRouter>
 
  
}
export default App

