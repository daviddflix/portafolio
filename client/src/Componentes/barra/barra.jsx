import { NavLink } from "react-router-dom";
import s from './barra.module.css'
import img from '../img/_114936566_coronavirus_index_wolrd_976.png'
import { SearchBar } from "../SearchBar/searchbar";

export function Nav(){
     return(
<div>
<div className={s.container}>

<div  >

<NavLink className={s.ruta_form}  to='/form' exact>
   Create activity
</NavLink>

<NavLink className={s.ruta_home}   to='/home'>
    Home
</NavLink>

</div>

<SearchBar/>

<img className={s.img} src={img} alt="not found" />
 </div>

</div>
     )
}