import React from 'react'
import {useLocation,useNavigate} from 'react-router-dom'
function Component2() {
  const query=useLocation()
  const navigate=useNavigate()
  console.log(query)  
  return (

    <div>
    <h2>Below are the url  Paramerters of component 2 url as query parameters </h2>
   <h3>{JSON.stringify(query.search)}</h3>
   <button onClick={()=>{navigate(-1)}}>Back</button>
     {"            "}
   <button onClick={()=>{navigate(+1)}}>Forward</button>

    </div>
    

  )
}

export default Component2