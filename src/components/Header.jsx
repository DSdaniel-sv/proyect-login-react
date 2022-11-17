import React from 'react';
import { NavLink } from 'react-router-dom';
import '../components/Header.css';

const Header = () => {
  return (
    <div className='container__header'>
      <header className='header'>
        <figure className='box__img'>
          <img src="./src/assets/img/computer.png" alt="" />
        </figure>
        <nav className='menu'>
          <ul>
            <li><NavLink className='a' to='/'>INICIO</NavLink></li>
            <li><NavLink className='a' to='/login'>LOGIN</NavLink></li>
            <li><NavLink className='a' to='/nosotros'>NOSOTROS</NavLink></li>
            <li><NavLink className='a' to='/contacto'>CONTACTO</NavLink></li>
          </ul>
        </nav>
      </header>
    </div>
  )
}

export default Header
