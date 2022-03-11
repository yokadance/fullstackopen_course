




const Course = ({ course }) => {
  const sum = course.parts.map(p => p.exercises).reduce((s,e) => s+e, 0)
    //console.log('valores s y e', s, p)

  return (
    <>
      <Header course={course.name} /> 
      <Content parts={course.parts} />
      <Total sum={sum} />
    </>
  )
}

const Header = ({ course }) => <h1>{course}</h1>
const Content = ({ parts }) => 
  <>
    {parts.map(part => 
      <Part
        key={part.id}
        part={part} 
      />)}   
  </>
 const Part = ({ part }) => 
  <p>
    {part.name} {part.exercises}
  </p>
  const Total = ({ sum }) => <p><strong>Number of exercises {sum}</strong></p>





const App = () => {
  const course = [
    
    {
    id: 1,
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        id: 1,
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id: 2,
      },
      {
        name: 'State of a component',
        exercises: 14,
        id: 3,
      },
      {
        name: 'Reduxs',
        exercises: 140,
        id: 4,
      },
    ],
  },
  {
    id: 2,
    name: 'JavaEE for dummies',
    parts: [
      {
      name: 'Using DAO Model ',
      exercises: 70,
      id: 1,
    },
    {
      name: 'Using SQL with JAVA ',
      exercises: 70,
      id: 1,
    },
  ]
  }]

  return <div>
    {course.map(course=>
    <Course 
    id={course.id}
    course={course}
    />)}
    </div>
}

export default App