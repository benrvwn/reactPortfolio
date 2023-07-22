import {BrowserRouter as Router,Routes,Route,Link} from 'react-router-dom';
import About from './components/About/About';
import Contacts from './components/Contacts/Contacts';
import Home from './components/Home/Home';
import Nav from './components/Nav/Nav'
import Projects from './components/Projects/Projects'
import 'animate.css/animate.min.css';
import './App.scss'

function App() {
  

  return (
    <>
      <Router>
        <Nav />
        <div className='pages'>
          <Routes>
            <Route exact path='/' element={<Home/>}></Route>
            <Route exact path='/about' element={<About/>}></Route>
            <Route exact path='/contacts' element={<Contacts/>}></Route>
            <Route exact path='/projects' element={<Projects/>}></Route>
          </Routes>
        </div>
       </Router>
      
       
    </>
  )
}

export default App
