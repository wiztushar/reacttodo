import React from 'react'
import Person from './Person'

function NameList() {
    const persons=[
        {
            id:1,
            name:'tushar',
            skill:'React'
        },

        {     id:2,
            name:'tusharr',
            skill:'Reactt'
        },

          {  id:3,
            name:'tusharrr',
            skill:'Reacttt'
        }
    ]
    const NameList=persons.map(persons => <Person  person={persons}/>)
    //use of map for displaying mulltiple items and passing them as props to other component
  return (
    <div><h1>{NameList}</h1></div>
  )
}

export default NameList