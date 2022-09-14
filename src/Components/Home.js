import React from 'react'
import Icon from '../Images/icon.png'


function Home() {
  return (
    <div>
      <h1>Home</h1>
      <p>One stop solution for all your task management</p>
      <img src={Icon} width="250" height="150" className="logo"></img>
    </div>
  )
}

export default Home
