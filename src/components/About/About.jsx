import {useState} from 'react';
import './about.scss';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import 'bootstrap-icons/font/bootstrap-icons.css';


function Post(props){
    const [liked, setLiked] = useState('');
    const [comments, setComments] = useState([]);
    const [comment, setComment] = useState('');
    const [comStatus, setComStatus] = useState(false);

    const handleComment = (e) => {
        e.preventDefault();
        setComments([...comments, comment]);
        setComment('');
    }
    return (
        <div className='post-container'>
            <div className='header'>
                <div className='image'>
                </div>
                <div className='name'>
                    <h3>Benhur Verwin</h3>
                    <p>Web developer</p>
                </div>
            </div>
            <div className='post'>
                {props.post}
            </div>
            { liked === 'liked' ? 
            (<p>1 like
                {comments.length > 0 ? (<span style={{margin:'5px'}}>{comments.length} comments</span>) : null}
            </p>) 
            : null 
            }
            <div className='action'>
                <button onClick={()=>liked === 'liked' ? setLiked('') : setLiked('liked')} className={liked === 'liked' ? 'liked' : ''}><i className="bi bi-hand-thumbs-up"></i>Like</button>
                <span></span>
                <button onClick={()=>comStatus ? setComStatus(false) : setComStatus(true)}><i className="bi bi-chat"></i>Comment</button>
            </div>
            { comStatus ? 
                
                (
                    <>
                    {
                        comments.map((item) =>
                
                        <div className='comments'>
                            <h4>Visitor</h4>
                            <p>{item}</p>
                        </div>
                    )
                    }
                        <div className='comment'>
                            <form onSubmit={handleComment}>
                                <input type="text" value={comment} onChange={(e)=> setComment(e.target.value)} placeholder='Write a comment...' required/>
                                <button type='submit'><i className="bi bi-send-fill"></i></button>
                            </form>
                        </div>
                    </>
                )
                :
                null
            } 
        </div>
    )
}

function Tech(props){
    return (
        <>
            <span className='tech'>{props.tech1}</span>
            <span className='tech'>{props.tech2}</span>
        </>
    )
}

function About() {
  return (
    <div className='about'>
        <div className='about-container'>
            <h1>ABOUT ME</h1>
            <Post post={
                <>
                    <p>I am a fresh graduate of Information Technology
                     from Colegio de Montalban. I have a passion for web development
                      and aspire to become a front-end developer. I am based in Montalban, 
                      Rodriguez, Rizal. With a strong foundation in programming and a keen 
                      eye for design, I strive to create visually appealing and user-friendly
                       websites. I am constantly learning and exploring new technologies to 
                       enhance my skills and deliver exceptional web experiences. Welcome to 
                       my portfolio, where I showcase my projects and skills as I embark on 
                       this exciting journey in the world of front-end development.</p>
                </>
            }/>
            <Post post={
                <>
                    <p>Technologies:</p>
                    <Tech tech1='HTML' tech2='CSS'/>
                    <Tech tech1='JavaScript ES5/ES6' tech2='Bootstrap'/>
                    <Tech tech1='LESS' tech2='SASS'/>
                    <Tech tech1='Tailwind' tech2='jQuery'/>
                    <Tech tech1='AJAX' tech2='PHP'/>
                    <Tech tech1='VB.NET' tech2='Visual Studio'/>
                    <Tech tech1='MYSQL' tech2='CodeIgniter'/>
                    <Tech tech1='Express' tech2='NodeJS'/>
                    <Tech tech1='React' tech2='WAMP'/>
                    <Tech tech1='Git' tech2='GitHub'/>
                    <Tech tech1='Photoshop' tech2='Macromedia Flash 8'/>
                </>
            } />
            <Post post={
                <> 
                    <h5>Experience:</h5>
                    <h8><b>DSWD - Intern/OJT</b></h8>
                    <ul>
                        <li>Created a detailed flowchart to visually represent the various processes and workflows involved in the department's operations.</li>
                        <li>Produced a professional video tutorial demonstrating the functionalities of the system, providing an intuitive visual guide for users.</li>
                        <li>Contributed to improving operational efficiency and effectiveness within the Department of Social Welfare and Development through the successful implementation of the developed system.</li>
                    </ul>
                    <h8><b>Village88 coding bootcamp - Trainee</b></h8>
                    <ul>
                        <li>Attended a three months intense training and gained a lot of knowledge which also the reason how I created this portfolio website and most of my projects.</li>
                    </ul>
                </>
            } />
            <Post post={
                <>
                    <h5>Certificates:</h5>
                    <div>
                        <p><b>FreeCodeCamp </b> - <a href="https://rb.gy/d4o9l" target="_blank">Responsive Web Design</a></p>
                        <p><b>Village88 </b> - <a href="https://rb.gy/3djvk" target="_blank">Web Fundamentals</a></p>
                        <p><b>Village88 </b> - <a href="https://rb.gy/pbzkk" target="_blank">Advanced PHP Track</a></p>
                    </div>
                </>
            } />
        </div>
    </div>
  )
}

export default About