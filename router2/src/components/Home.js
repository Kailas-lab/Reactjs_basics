import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div>
      <p>welvcome to home page</p>
      <Link to='login'>login</Link>
      <Link to='settings'>settings</Link>
    </div>
  )
}

export default Home
