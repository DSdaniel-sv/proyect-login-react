import React from 'react'

export default function Login() {
  return (
    <div>
      <form action="">
        <h1>Login</h1>
        <input className='letras' type="text" placeholder="Username" />
        <input className='letras' type="password" placeholder="Password" />
        <button className='btnLogin' type="submit">Login</button>
      </form>
    </div>
  )
}
