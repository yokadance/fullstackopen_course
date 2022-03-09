import React from 'react'
import ReactDOM from 'react-dom'




const Header = (props)=> {
  return (  
    <div>
    <h1>
      This is {props.name} course
    </h1>
  </div>  
  )
}

const Content = (props) => {
  console.log(props)
  return(
    <div>
    <p>
      This is {props.name} chapter
      
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
  const course = {
   name:'Half Stack application development',
   parts : [
     {
    name:  'Fundamentals of React',
    exercises : 10
  },

  {
    name: 'Using props to pass data',
    exercises: 7
  },

  { 
    name: 'State of a component',
    exercises : 14
  }]}


  return (
    <div>
    <Header name={course.name}/>
    <Content name={course.parts[0].name} />
    <Total exercises={course.parts[0].exercises} />
    <Content name={course.parts[1].name} />
    <Total exercises={course.parts[1].exercises} />
   <Content name={course.parts[2].name} />
    <Total exercises={course.parts[2].exercises} />
   


  </div>
  );
}






ReactDOM.render(<App />, document.getElementById('root'))
