import React from 'react'
import "../App.css"
import { Link } from 'react-router-dom'

const Navbar = () => {
  const links = [
    {path:"/", title: "Home"},
    {path:"/signup", title: "Signup"},
    {path:"/login", title: "Login"},
    {path:"/profile", title: "Profile"},
    {path:"/calculator", title: "Calculator"},
  ]

  return (
    <div id='navbar'>
      {links.map(function(ele){
        return <Link key={ele.path} to={ele.path}>{ele.title}</Link>
      })}
    </div>
  )
}

export default Navbar