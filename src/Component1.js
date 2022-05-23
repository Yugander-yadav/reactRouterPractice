import React from 'react'
import {useParams,useNavigate,BrowserRouter,Router,Route} from "react-router-dom"
function Component1() {
  const navigate=useNavigate()
    const urlParams=useParams()
  console.log(urlParams)  
  return (
      <>
      
   <h1>Component 1 </h1>
   <h2>Below are the url  Paramerters of component 1 url </h2>
   <h3>user_id:{urlParams.user_id}</h3>
   <button onClick={()=>{navigate(-1)}}>Back</button>
     {"            "}
   <button onClick={()=>{navigate(+1)}}>Forward</button>
   
   </>
  )
}

export default Component1