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
  
  
    export default Course