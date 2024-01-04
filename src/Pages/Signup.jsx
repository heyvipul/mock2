import React, { useState } from 'react'
import "../App.css"
import { useNavigate } from 'react-router-dom';
import axios from "axios"

const Signup = () => {
    const[name,setName] = useState("")
    const[email,setEmail] = useState("")
    const[password,setPassword] = useState("");
    const navigate = useNavigate()

    async function signUp(e){
      e.preventDefault()
      console.log(name,email,password);

      try {
        const response = await axios.post("/register",{
          name,
          email,
          password
        })
        const data = await response.data
        console.log(data);
        if(data.msg === "signup successfull!"){
          alert("Signup successfull! Please Login")
          return navigate("/login")
        }
        else if(data.msg === "user exist"){
          alert("User exist! Please Login")
          return navigate("/login")
        }
      } catch (error) {
        console.log(error);
      }
    }

  return (
    <div>
        <h2>Signup</h2>
        <form action="" id='form' onSubmit={signUp}>
            <label htmlFor="">Name: </label>
            <input type="name"
             value={name} 
             onChange={(e)=>setName(e.target.value)} 
             placeholder='enter name' />

            <label htmlFor="">Email : </label>
            <input type="email"
             value={email} 
             onChange={(e)=>setEmail(e.target.value)} 
             placeholder='enter email' />

            <label htmlFor="">Password : </label>
            <input type="password"
             value={password}
             onChange={(e) => setPassword(e.target.value)}
             placeholder='enter password' /> <br />

             <button id='signup'>Signup</button>
        </form>

    </div>
  )
}

export default Signup