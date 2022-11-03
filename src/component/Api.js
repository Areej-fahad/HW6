import React from 'react'
import { Routes } from 'react-router-dom'
import Login from './Login'
function Api() {
  return (
    <Routes>
       <Route path = '/Login' element= {<Login/>}></Route> 
       


    </Routes>
  )
}

export default Api