import React from 'react';
import './home.scss';
import Nikon from '../../assets/Nikon.png';

function Home() {
  return (
    <div className="home">
        <div className='home-content'>
            <h1>I'm Benhur Verwin</h1>
            <p>Web Developer</p>
            <div>
                <a href="#">LEARN MORE</a>
                <a href="#">CONTACT ME</a>
            </div>
            <img src={Nikon} alt="Image" className="animate__animated animate__pulse animate__infinite"/> 
        </div>
        
        
    </div>
  )
}

export default Home