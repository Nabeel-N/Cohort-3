import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Usercard from './components/Usercard'
import appleemoji from './assets/applemoji.jpg'
import reactpic from './assets/myreactpic.jpeg'
import Blackhat from './assets/h1.jpg'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='container'>
      <Usercard name="Nabeel" description="description1" image={appleemoji}  style={{"border-radius" :"10px"}}/>
      <Usercard name="Najeeb" description="description2" image={reactpic}  style={{"border-radius" :"10px"}}/>
      <Usercard name="Nazeer" description="description3" image= {Blackhat} style={{"border-radius" :"10px"}}/>

    </div>
  )
}

export default App
