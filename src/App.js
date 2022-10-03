import './App.css';
import About from './components/About/about';
import Nav from './components/Nav/nav';
import {Switch, Route} from 'react-router-dom'
import Contact from './components/Contact/contact';
import Projects from './components/Projects/projects';


function App() {


  return (
    <div className="App">
        <Nav/>
        <About/>
        <Projects/>
        <Contact/>
    </div>
  );
}

export default App;
