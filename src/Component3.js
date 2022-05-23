import React from 'react'
import {useNavigate} from 'react-router-dom'
function Component3() {
const navigate=useNavigate()
    return (
    <div>Component 3 
        <h1>Below buttons Navigates to Home page / Previous pages</h1>
        <button onClick={()=>{navigate('-1')}}>Back </button>
        <button onClick={()=>{navigate('/')}}>Home </button>
    </div>

  )
}

export default Component3