import React, {useState} from 'react';
import {Link} from 'react-router-dom'
import './nav.scss';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import 'bootstrap-icons/font/bootstrap-icons.css';

function Nav() {
    const [navActive, setNavActive] = useState(false);
    const [mode, setMode] = useState('light');

    const handleTheme = () => {
      if(mode == 'light'){
        setMode('light dark');
        document.documentElement.classList.add('dark');
      }else{
        setMode('light');
        document.documentElement.classList.remove('dark');
      }
    }

    const handleSwitch = () => {
      navActive ? 
        setNavActive(false)
        :
        setNavActive(true)
    }
    
    const switchClass = `nav-switch ${navActive ? 'change' : ''}`

    return (
      <>
        <div className={switchClass} onClick={handleSwitch}>
          <div className="line1"></div>
          <div className="line2"></div>
          <div className="line3"></div>
        </div>
        <nav className={navActive ? 'open' : ''}>
          <ul>
            <li>
              <Link to='/'>
                <i className='bi bi-house-fill'></i>
              </Link>
            </li>
            <li>
              <Link to='/about'>
                <i className='bi bi-person-circle'></i>
              </Link>
            </li>
            <li>
              <Link to='/projects'>
                <i className='bi bi-folder-fill'></i>
              </Link>
            </li>
            <li>
              <Link to='/Contacts'>
                <i className='bi bi-telephone-fill'></i>
              </Link>
            </li>
            <li className='mode-container'>
              <div className='mode-switch' onClick={handleTheme}>
                <div className={mode}></div>
              </div>
            </li>
          </ul>
          
        </nav>
      </>
    );
  }

export default Nav;