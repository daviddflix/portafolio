import './App.css';
import { Landing } from './Componentes/landing/landing.jsx';
import  Home  from './Componentes/home/home.jsx';
import { Route } from 'react-router-dom';
import { Detalle } from './Componentes/detalle/detalle.jsx';
import { Form } from './Componentes/form/form';






function App() {
  return (
    <div className="App">
 
   
    <Route path='/home'>
    <Home/>
   </Route>

  


    <Route exact path='/'>
     <Landing/>
      </Route>

      <Route exact path='/detalle/:idPais' >
        <Detalle/>
      </Route>
      
      <Route exact path='/form'>
        <Form/>
      </Route>
     
    </div>
  );
}

export default App;
