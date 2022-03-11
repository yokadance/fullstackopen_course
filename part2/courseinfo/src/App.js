


import Course from'./Components/Course'




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