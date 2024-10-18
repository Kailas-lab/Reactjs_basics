import React, { createContext, useContext } from 'react'

const dog=createContext()

function Theme() {

  return (
    <dog.Provider value="kailas">
      <DisplayUser/>
    </dog.Provider>
  )
}

export default Theme


function DisplayUser(){
    const user=useContext(dog)

    return <p>log in as {user}</p>
}