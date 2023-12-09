import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Home() {
    const navigate = useNavigate()
    function goToAbout(){
        navigate("/about")
    }
  return (
    <div>
    <h1>Home page</h1>
    <button onClick={goToAbout}>go to About page</button>
  </div>
  )
}
