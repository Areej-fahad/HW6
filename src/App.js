
import './App.css';
import Login from './component/Login';
import { BrowserRouter as Router} from 'react-router-dom'
import {useEffect,useState} from "react"
import axios from "axios" 
import Api from './component/Api';



function App() {
  const [state,setState]=useState([])
  useEffect(() => {

  axios.get("https://retoolapi.dev/VECOq4/data").then((res)=>{
    
    console.log(res.data)
     setState(res.data)})
  })
    return (
    <>
    {state.map((item)=>{
    {item.fname}
    <br></br>
    </>
    )
  })}
  
            
</Login>

    </>

export default App;
