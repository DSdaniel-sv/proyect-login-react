import React from 'react'
import './Login.css'

export default function Login() {
  return (
    <div className='container'>
      <form className='container__Form' action="">
        <div className='container__Img'>
        <img src='https://user-images.githubusercontent.com/11250/39013954-f5091c3a-43e6-11e8-9cac-37cf8e8c8e4e.jpg' className='imgIcon' alt=''/>
        </div>
        <h1 className='titulo'>Login</h1>
        <i className="fa-solid fa-user"><input className='letras' type="text" placeholder="Username" /></i>
        <i className="fa-solid fa-lock"><input className='letras' type="password" placeholder="Password" /></i>
        <button className='btnLogin' type="submit">Login</button>
      </form>
    </div>
  )
}
