import { useEffect, useState } from "react"
import {useDispatch, useSelector} from 'react-redux'
import { getAll, getCountries } from "../../redux/actions"
import {NavLink} from 'react-router-dom'
import s from './home.module.css'
import { Nav } from "../barra/barra"

export default function Home(){
   const paises = useSelector(state => state.paises)
   const [valor, setValor] = useState('')
   const dispatch = useDispatch()

   const handleSubmit = (e) =>  {
    e.preventDefault();
   dispatch(getCountries(valor))
  
  }
  
const handleChange = (e) =>  {
  e.preventDefault();
  setValor(e.target.value);
}

useEffect(()=>{
  dispatch(getAll())
},[dispatch])

     return(
      <div>
      <Nav/>
      <form>
<div >
   <input className={s.input} placeholder="Looking For"  valor={valor} onChange={(e) => handleChange(e)} />
   <button className={s.boton}  onClick={(e) => handleSubmit(e)} >Search</button>
</div>
<div>
  {
    paises?.map(el => {
      return(
        <div key={el.cca3} className={s.container}>
       <NavLink className={s.title} to={`/detalle/${el.id}`}>
         <h1>{el.name}</h1>
        <img className={s.imagen} src={el.flags} alt="Not Found" />
        <h2>{el.continente}</h2>
        </NavLink> 
      </div>
      )
     
    })
  }
</div>
</form>
      </div>
     )
}