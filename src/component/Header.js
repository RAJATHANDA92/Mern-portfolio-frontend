import React from 'react'

function Header({ name, titel }) {
  return (
    <div style={{ background:"yellow", padding: 20, margin: 30 }}>
      <h1 className='text-center'>WelCome To The Cource</h1>
       <h1> {name} </h1>
       <h1> {titel} </h1>
    </div>
  )
}

export default Header