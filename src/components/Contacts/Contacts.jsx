import './contacts.scss';
import Fb from '../../assets/fb.png';
import Li from '../../assets/linkedin.png';
import Gh from '../../assets/github.png';
import Gm from '../../assets/gmail.png';

function Box(props) {
    const className = `item ${props.className}`
    return (
        <a href={props.link} target='_blank'>
            <div className={className}>
                <img src={props.image} alt="contact" />
            </div>
        </a>
    )
}


function Contacts() {
    return (
        <div className='contacts'>
            <div className='container'>
                <h1>CONTACTS</h1>
                <div className='contacts-container'>
                    <Box
                        className='facebook'
                        image={Fb}
                        link='https://www.facebook.com/Benhaarr32/'
                    />
                    <Box
                        className='linkedin'
                        image={Li}
                        link='https://www.linkedin.com/in/benhur-verwin-4a1119263/'
                    />
                    <Box
                        className='github'
                        image={Gh}
                        link='https://github.com/benrvwn'
                    />
                    <Box
                        className='gmail'
                        image={Gm}
                        link='mailto:binverwin16@gmail.com'
                    />
                </div>
                <div className='form-container'>
                    <h2>Send me a message!</h2>
                    <p>Got a question or proposal, or just want to say hello? Go ahead.</p>
                    <form action="https://formsubmit.co/a79103dce2b782c11133ee0ee25d82f3" method="POST">
                        <label>
                            Name:
                            <input type="text" name='Name' placeholder='Enter your name' required/>
                        </label>
                        <label>
                            Email address:
                            <input type="email" name='Email' placeholder='Enter your email address' required/>
                        </label>
                        <label>
                            Message:
                            <textarea name="Message" placeholder='Hi, I think we need a developer for our Company X. How soon can you hop on to discuss this?' required/>
                        </label>
                        <input type="submit" value='SUBMIT'/>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contacts