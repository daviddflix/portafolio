import './App.css';
import About from './components/About/about';
import Nav from './components/Nav/nav';
import Contact from './components/Contact/contact';
import Projects from './components/Projects/projects';
import Home from './components/Home/home';
import NoMatch from './components/404/404';


function App() {


  return (
    <div className="App">
        {/* <Nav/>
        <Home/>
        <About/>
        <Projects/>
        <Contact/> */}
        <NoMatch/>
    </div>
  );
}

export default App;
