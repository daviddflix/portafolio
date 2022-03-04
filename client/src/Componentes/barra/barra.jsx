import { NavLink } from "react-router-dom";
import s from './barra.module.css'
import img from '../img/_114936566_coronavirus_index_wolrd_976.png'

export function Nav(){
     return(
      <div className={s.container}>

{/* <h3 className={s.title}>Countries of the World</h3> */}


<div  >

<NavLink className={s.ruta_form}  to='/form' exact>
   Create activity
</NavLink>

<NavLink className={s.ruta_home}   to='/home'>
    Home
</NavLink>

</div>

<img className={s.img} src={img} alt="" />


      </div>
     )
}