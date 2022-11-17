import React from 'react';
import { Link } from 'react-router-dom';
import '../components/Header.css';

const Header = () => {
  return (
    <div className='container__header'>
      <header className='header'>
        <nav className='menu'>
          <ul>
            <li><Link to='/'>INICIO</Link></li>
            <li><Link to='/login'>Login</Link></li>
            <li><Link to='/nosotros'>Nosotros</Link></li>
            <li><Link to='/contacto'>Contacto</Link></li>
          </ul>
        </nav>
      </header>
    </div>
  )
}

export default Header
