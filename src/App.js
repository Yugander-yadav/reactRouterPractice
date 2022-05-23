import React from 'react'
import {BrowserRouter,Routes,Route,Link,useNavigate} from 'react-router-dom'
import Component1 from './Component1'
import Component2 from './Component2'
import Component3 from './Component3'
function App() {
  
  return(
    <>
    <h1>This is the Home Page</h1>
    <BrowserRouter>
    <Link to="/component1/guvi_networks" >Link to component 1 ( Displays url parameters)</Link>
    <br />
    <br />
    <Link to="/component2?userName=guvi&sort=asec" >Link to component 2(Displays query Parameters)</Link>
    <br /><br />
    <Link to="/component3" >Link to Component 3</Link>
  
    <Routes>
      <Route path="/component1/:user_id" element={<Component1 />}></Route>
      <Route path="/component2"  element={<Component2 />}></Route>
      <Route path="/component3"  element={<Component3 />}></Route>
    </Routes>
    
    </BrowserRouter>
    </>

  )
    
  
}

function Google(){
  return(<>
  <h1>Google page</h1>
  </>)
}

export default App