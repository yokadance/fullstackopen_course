import React, { useState } from 'react'




const App = () => {
  const [ persons, setPersons ] = useState([
    { name: 'Mike Rodriguez' }
  ]) 
  const [ newName, setNewName ] = useState('')
  
  const handleNames= (event)=>{
    setNewName(event.target.value)
  }

  const addPerson = (event)=> {
    event.preventDefault();
    setPersons(event.target.value)
  }


const PersonForm= ({
  addName, name, handleNameChange, 
}) => <>
<form onSubmit={addPerson}>
  <div>
    name: <input 
    value = {name}
    onChange {...handleNameChange} 
    />
  </div>
  <div>
    <button type='submit'> add</button>
  </div>
</form>
</>

  return (
    <div>
     <PersonForm
      name={newName}
      handleNameChange= {({target} ) => setNewName(target.value)}
     />
      
      <h2>Numbers</h2>
      

    </div>


  )
}

export default App