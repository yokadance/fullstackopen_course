import ReactDOM from 'react-dom'
import React, { useState } from 'react'



const Text = (props)=> {
  return (  
    <div>
    <h1>
      {props.value}
    </h1>
  </div>  
  )
}

const Good = (props) => {
  console.log(props)
  return(
    <div>
      <button onClick={props.handleClick}> {props.text}</button>
  </div>  
  )

}

const Neutral = (props) => {
  console.log(props)
  return(
    <div>
      <button onClick={props.handleClick}> {props.text}</button>
  </div>  
  )

}


const Bad = (props) => {
  console.log(props)
  return(
    <div>
      <button onClick={props.handleClick}> {props.text} </button>
     
  </div>  
  )

}
const Display = props => <div>{props.text} {props.value}</div>




const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)



  return (
    <div>
    <Text value='give feedback'/>
    <Good handleClick = {()=> setGood(good +1)} text='good' />
    <Neutral handleClick = {()=> setNeutral(neutral +1)} text='neutral'/>
    <Bad handleClick = {()=> setBad(bad +1)} text='bad'/>
    <Text value = 'statistics'/>
    <Display text= 'good' value={good}/>
    <Display  text= 'neutral'value={neutral}/>
    <Display  text= 'bad' value={bad}/>
    </div>
  )
}




ReactDOM.render(<App />, document.getElementById('root'))
