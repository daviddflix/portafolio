import { NavLink } from "react-router-dom";
import s from './barra.module.css'
import img from '../img/_114936566_coronavirus_index_wolrd_976.png'
import { SearchBar } from "../SearchBar/searchbar";
import { FaList} from 'react-icons/fa'
import { useState } from "react";


export function Nav(){ 

  const [show, setShow] = useState(true)
  
  

  const showRoutes = () => {
       setShow(!show)
       console.log(show)
  }



     return(
<div>
<div className={s.container}>
<FaList className={s.icon} onClick={showRoutes}/>

<div  className={s.nav} >

<NavLink   className={!show? s.ruta_form: s.ruta_form_see}  to='/form' exact>
   Create Activity
</NavLink>

<NavLink className={!show? s.ruta_home: s.ruta_home_see}   to='/home'>
    Home
</NavLink>

</div>

<SearchBar/>


<img className={s.img} src={img} alt="not found" />
 </div>

</div>
     )
}