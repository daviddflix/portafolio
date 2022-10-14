import './App.css';
import About from './components/About/about';
import Nav from './components/Nav/nav';
import Contact from './components/Contact/contact';
import Projects from './components/Projects/projects';
import Home from './components/Home/home';
import NoMatch from './components/404/404';
import Footer from './components/Footer/footer';
import {BsArrowUp} from 'react-icons/bs'

function App() {


  const top = () => {
    window.scrollTo(0,0)
  }

  return (
    <div className="App">
        {/* <BsArrowUp onClick={top} className='arrow'/>
        <Nav/>
        <Home/>
        <About/>
        <Projects/>
        <Contact/>
        <Footer/> */}
        <NoMatch/>
    </div>
  );
}

export default App;
