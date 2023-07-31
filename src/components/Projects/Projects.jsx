import React from 'react';
import './projects.scss';
import Nikon from '../../assets/nikon.png';

function Project(props){
    const className = `image ${props.className}`;
    const divClass = `project ${props.divClass}`;
    return (
        <div className={divClass}>
            <div className={className}></div>
            <div className='proj-desc'>
                <h5>{props.title}</h5>
                <p>{props.desc}</p>
                <a href={props.demo} target='_blank'>Demo</a>
                <a href={props.github} target='_blank'>GitHub</a>
       
                <i>{props.tech}</i>
            </div>
        </div>
    )
}


function Projects() {
  return (
    <div className='projects'>
        <div className='project-container'>
            <h1>PROJECTS</h1>
            <Project 
                title='SWEAP Monitoring System' 
                desc='Built a system software application called Social Welfare Employees Association of the Philippines (SWEAP) monitoring system on Department of Social Welfare and Development (DSWD) '
                className= 'sweap'
                divClass='proj_sweap'
                demo='https://drive.google.com/file/d/11muFIXSyrHPuRQ-oUPlgnaCGCDlEnkP_/view?usp=sharing'
                tech='VB.net, MySQL, XAMPP'
                github='https://github.com/benrvwn/SWEAP'
            />
            <Project 
                title='Portfolio Landing Page' 
                desc='My personal website to showcase my skills, achievements and expertise.'
                className='portfolio'
                divClass='proj_portfolio'
                tech='HTML, CSS, SASS, JavaScript, ReactJS'
                github='https://github.com/benrvwn/reactPortfolio.git'

            />
            <Project 
                title='BBMS commercial website' 
                desc='Blood Bank Management System (BBMS) commercial website is part of our capstone project called Blood Bank Management system.' 
                className='bbms'
                divClass='proj_bbms'
                tech='HTML, CSS, Bootstrap, JQuery, Firebase'
                github='https://github.com/JHONZY/Blood_Bank_Management'
                demo='https://jhonzy.github.io/Blood_Bank_Management/'
            />
            <Project 
                title='JolliBola' 
                desc='a small POS (Point of Sales) project I made for our final programming assignment in my third year of college.' 
                tech='VB.net, MySQL, XAMPP'
                divClass='proj_jollibols'
                github='https://github.com/benrvwn/jollibols.git'
                
            />
        </div>
    </div>
  )
}

export default Projects;