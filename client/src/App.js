import './App.css';
import { Landing } from './Componentes/landing/landing.jsx';
import  Home  from './Componentes/home/home.jsx';
import { Route } from 'react-router-dom';
import { Detalle } from './Componentes/detalle/detalle.jsx';

function App() {
  return (
    <div className="App">
      <Route exact path='/'>
     <Landing/>
      </Route>

     <Route exact path='/home' >
        <Home/>
      </Route>

      <Route exact path='/detalle/:idPais' >
        <Detalle/>
      </Route>
     
    </div>
  );
}

export default App;
