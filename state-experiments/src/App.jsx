import { createContext, useState, useContext } from 'react'
import './App.css'

const ContestApi = createContext()

function BulbProvider({ children }) {

  const [bulbon, setBulbon] = useState(true)
  return (
    <ContestApi.Provider value={{ bulbon, setBulbon }}>
      {children}
    </ContestApi.Provider>
  )

}

function App() {
  return (
    <div>
      <BulbProvider>
        <Lightbulb />
      </BulbProvider>



    </div>
  )

}

console.log(ContestApi.Provider)


function Lightbulb() {

  return (
    <div>
      <BulbState />
      <ToggleBulbState />
    </div>
  )
}

function BulbState() {
  const { bulbon } = useContext(ContestApi)
  return <div>{bulbon ? "bulbon" : "bulboff"}</div>
}

function ToggleBulbState() {
  const { bulbon, setBulbon } = useContext(ContestApi)

  function toggle() {
    // setBulbon(currentState => !currentState)
    setBulbon(!bulbon)
  }
  return (
    <div>
      <button onClick={toggle}>Toggle bulb</button>
    </div>
  )
}

export default App

