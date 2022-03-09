import React from 'react'
import ReactDOM from 'react-dom'




const Header = (props)=> {
  return (  
    <div>
    <h1>
      This is {props.course} course
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
  const course = 'Half Stack application development'
  
  const part1 = {
    name:  'Fundamentals of React',
    exercises : 10
  }

  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }

  const part3 ={ 
    name: 'State of a component',
    exercises : 14
  }


  return (
    <div>
    <Header course={course}/>
    <Content name={part1.name} />
     <Total exercises={part1.exercises} />
    <Separator/>
    <Content name={part2.name}/>
    <Total exercises={part2.exercises}/>
    <Separator/>
    <Content name={part3.name}/>
    <Total exercises={part3.exercises}/> 


  </div>
  );
}






ReactDOM.render(<App />, document.getElementById('root'))
