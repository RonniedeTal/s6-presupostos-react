import React from 'react'
import { Link } from 'react-router-dom'
import './welcomePage.css'

function WelcomePage() {
  return (
    <div className='introducing'>
        
        <h1>Welcome to budgets</h1>

    <Link to={'/home'}><button type="button" className="btn-welcome m-5">go to budgets!!!</button> </Link>
    </div>
  )
}

export default WelcomePage