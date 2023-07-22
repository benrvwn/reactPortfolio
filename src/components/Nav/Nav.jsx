import React, {useState} from 'react';
import {Link} from 'react-router-dom'
import './nav.scss';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import 'bootstrap-icons/font/bootstrap-icons.css';

function Nav() {
    const [activeLink, setActiveLink] = useState('/');
  
    const handleLinkClick = (to) => {
        setActiveLink(to);
    };
  
    return (
      <nav>
        <ul>
          <li className={activeLink === '/' ? 'active' : ''}>
            <Link to='/' onClick={() => handleLinkClick('/')}>
              <i className='bi bi-house-fill'></i>
            </Link>
          </li>
          <li className={activeLink === '/about' ? 'active' : ''}>
            <Link to='/about' onClick={() => handleLinkClick('/about')}>
              <i className='bi bi-person-circle'></i>
            </Link>
          </li>
          <li className={activeLink === '/projects' ? 'active' : ''}>
            <Link to='/projects' onClick={() => handleLinkClick('/projects')}>
              <i className='bi bi-folder-fill'></i>
            </Link>
          </li>
          <li className={activeLink === '/Contacts' ? 'active' : ''}>
            <Link to='/Contacts' onClick={() => handleLinkClick('/Contacts')}>
              <i className='bi bi-telephone-fill'></i>
            </Link>
          </li>
        </ul>
      </nav>
    );
  }

export default Nav;