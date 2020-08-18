import React, { useState, useEffect } from 'react'
import Persons from './components/person'
import Filter from './components/filter'
import PersonForm from './components/personform'
import numberService from './services/persons'
import Ilmolitusviesti from './components/notification'

const App = (props) => {
  const [ persons, setPersons] = useState([]) 
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [ filter, setFilter ] = useState('') 
  const [ ilmolitusviesti, setIlmolitusviesti ] = useState(null)
 
  useEffect(() => {
    numberService
    .getAll()
    .then(initialPersons => {
      setPersons(initialPersons)
    })
  }, [])

  const addPerson = (event) => {
    event.preventDefault()
    const personsObject = {
      name: newName,
      number: newNumber

    }

    if (persons.some(person => person.name === newName)) {

      if (window.confirm(`${newName} is already added to phonebook, replace the old numer with a new one?`)){
        const arvo = persons.find(person => person.name === newName).id 
    
        setNewName('')
        setNewNumber('')
        paivita(arvo)
       
    }
      
    } else {

      numberService
      .create(personsObject)
      .then(returnedPerson => {
        setPersons(persons.concat(returnedPerson))
        setNewName('')
        setNewNumber('')
      })

 
      setIlmolitusviesti({ msg: `Added ${personsObject.name}`, error: false })
      setTimeout(() => {
        setIlmolitusviesti(null)
      }, 3000)
    }
  
   
  }

  const paivita = (id) => {
   
    const person = persons.find(p => p.id === id)
    const changedNumber = {...person, number: newNumber}

    numberService
    .update(id, changedNumber)
    .then(returnedPerson => {
      setPersons(persons.map(person => person.id !== id ? person : returnedPerson))

      setIlmolitusviesti({ msg: `Updated ${changedNumber.name}`, error: false })
      setTimeout(() => {
        setIlmolitusviesti(null)
      }, 3000)

    })

  }


  const poistayhteystieto = id => {

    const poista = persons.find(person => person.id === id)

    if (window.confirm("Delete " + poista.name + " ?")){
 
      numberService
        .deleteNumber(poista.id)
        .then(response => {
          setPersons(persons.filter(poistettu => poistettu.id !== id))

          setIlmolitusviesti({ msg: `Removed ${poista.name}`, error: false })
          setTimeout(() => {
            setIlmolitusviesti(null)
          }, 3000)
 
        }).catch(error => {

          setIlmolitusviesti({ msg: `The Information of ${poista.name} has already been removed from server.`, error: true })
          setTimeout(() => {
            setIlmolitusviesti(null)
          }, 3000)
   
        })
      }
    }


  const handlePersonChange = (event) => {
  
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
 
    setNewNumber(event.target.value)
  }

  const handlefilter = (event) => {
    setFilter(event.target.value)
  }

const namesToShow = (filter.length === 0)
    ? persons
    : persons.filter(person => person.name.toUpperCase().includes(filter.toUpperCase()))

  return (
       <div>
       <h2>Phonebook</h2>
       <Ilmolitusviesti viesti={ilmolitusviesti} />
       <Filter value={filter} onChange={handlefilter} />
       <h2>add a new</h2>
       <PersonForm newName={newName} newNumber={newNumber} onSubmit={addPerson} handleNewName={handlePersonChange} handleNewNumber={handleNumberChange} />
       <h2>Numbers</h2>
       <Persons persons={namesToShow} delete={poistayhteystieto}  />
     </div>
  )
}

export default App 