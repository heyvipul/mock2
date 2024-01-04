import React, { useContext, useState } from 'react'
import "../App.css"
import { useNavigate } from 'react-router-dom';
import axios from "axios"
import { AuthContext } from '../Components/AuthContext';

const Signup = () => {
    const[email,setEmail] = useState("")
    const[password,setPassword] = useState("");
    const {setIsAuth,setToken,setUser} = useContext(AuthContext)
    const navigate = useNavigate()
    // console.log(isAuth);
  
    async function loginFun(e){
      e.preventDefault()
      // console.log(email,password);
      try {
        const response = await axios.post("/login",{
          email,
          password
        })
        const data = await response.data
        // console.log(data);
        if(data.msg === "Login successfull!"){
          alert("Login Successfull!")
          setIsAuth(true)
          setToken(data.token)
          setUser(email)
          navigate("/profile")
        }
        else if(data.msg === "User not exist!"){
          alert("User not exist!")
          return navigate("/signup")
        }
        else if(data.msg === "password not match"){
          alert("Password not match!")
        }
         
      } catch (error) {
        console.log(error);
      }
    }


  return (
    <div>
        <h2>Login</h2>
        <form action="" id='form' onSubmit={loginFun}>
        
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

             <button id='login'>Login</button>
        </form>

    </div>
  )
}

export default Signup