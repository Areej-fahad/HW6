import React from 'react'
import axios from "axios" 
import {useEffect,useState} from "react"
import {Link} from "react-router-dom"

function Login() {
    const [name,setLName]= useState()
    const [Email,setEmail]= useState()
    const [Password,setPassword]= useState()
    const Login = () =>{
        axios.post(" https://api-generator.retool.com/VECOq4/data",{
            name,
            Email,
            Password
    }).then((res)=>{
console.log(res.data)
    })
}
  return (





< >
    <h1> Login page </h1>
    < >
        <input placeholder='name' onChange={(e)=>{
            setname(e.target.value)
        }}>
            </input><input placeholder='Email' onChange={(e)=>{
            setEmail(e.target.value)
        }}></input><input placeholder='Password' onChange={(e)=>{
            setPassword(e.target.value)
        }}></input>
                <button onClick={Login}>Login</button>

<Link to="/Api"> </Link>

</>

</>
    
  )
}

export default Login