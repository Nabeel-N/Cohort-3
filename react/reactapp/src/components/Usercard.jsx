import React from 'react'
import myreactpic from '../assets/myreactpic.jpeg'
import "./Usercard.css"

const Usercard = (props) => {
  return (
    <div className='user-container' style={props.stylef}>
      <p id='username'>{props.name}</p>
      <img id='user-img' src={props.image} alt="nb" />
      <p id='user-desc'>{props.description}</p>
    </div>
  )
}
export default Usercard
