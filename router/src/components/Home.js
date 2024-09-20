import React from 'react'
import {Link, useNavigate} from 'react-router-dom'

function Home() {
    const navigate = useNavigate();
  return (
    <div>
        home
        <Link to='/user/profile/1'>User</Link>
        <button onClick={() => navigate('/user/settings')}>Goto</button>
    </div>
  )
    
}

export default Home;