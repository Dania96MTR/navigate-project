import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function About() {
    const navigate = useNavigate()
    function goToHome(){
        navigate("/")
    }
  return (
    <div>
    <h1>Hi , i am dania</h1>
    <button onClick={goToHome}>go to Home page</button>
  </div>
  )

}
