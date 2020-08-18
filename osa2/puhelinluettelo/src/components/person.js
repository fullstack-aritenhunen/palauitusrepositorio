import React from 'react'

const Persons = (props) => {

  const persons = props.persons

  return (
    <div>
        {persons.map((person) =>
        <p key={person.name}> {person.name} {person.number} <button onClick={ () => props.delete(person.id)}>Delete</button> </p>)}             
    </div>
  )
}

export default Persons