import './App.css';
import About from './components/About/about';
import Nav from './components/Nav/nav';
import {Switch, Route} from 'react-router-dom'
import Contact from './components/Contact/contact';
import Projects from './components/Projects/projects';


function App() {


  return (
    <div className="App">
       
       <Switch>
          <Route exact path={'/'}>
            <About/>
          </Route>
          <Route exact path={'/contact'}>
            <Contact/>
          </Route>
          <Route exact path={'/projects'}>
            <Projects/>
          </Route>
       </Switch>
      <div className='navcomponenet'>
        <Nav/>
      </div>
    </div>
  );
}

export default App;
