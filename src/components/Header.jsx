import React from 'react';
import { Link } from 'react-router-dom';
import '../components/Header.css';

const Header = () => {
  return (
    <div className='container__header'>
      <div className='header'>
        <nav className='menu'>
          <ul>
            <li><Link to='/login'>Login</Link></li>
            <li><Link to=''>Nosotros</Link></li>
            <li><Link to=''>Login</Link></li>
          </ul>
        </nav>
      </div>
    </div>
  )
}

export default Header
