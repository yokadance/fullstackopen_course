import React from 'react'
import ReactDOM from 'react-dom'




const Header = (props)=> {
  return (  
    <div>
    <p>
      This is {props.course} course
    </p>
  </div>  
  )
}

const Content = (props) => {
  return(
    <div>
    <p>
      This is {props.part} chapter
    </p>
  </div>  
  )

}

const Total = (props) => {
  return(
    <div>
    <p>
      This get {props.exercises} points
    </p>
  </div>  
  )
  
}

const Separator =() =>{
  return(
    <div>
    <p>
      -------------------------------------
    </p>
  </div>  
  )
}



const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
    <Header course={course} />
    <Content part={part1}/>
    <Total exercises={exercises1} />
    <Separator/>
    <Content part={part2}/>
    <Total exercises={exercises2}/>
    <Separator/>
    <Content part={part3}/>
    <Total exercises={exercises3}/>


  </div>
  );
}






ReactDOM.render(<App />, document.getElementById('root'))
