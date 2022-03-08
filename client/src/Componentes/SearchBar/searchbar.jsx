import { useState } from "react";
import { useDispatch } from "react-redux";
import { getCountries } from "../../redux/actions";
import s from '../home/home.module.css'

export function SearchBar(){

 

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
 
     return(
        <div className={s.buscador} >
        <input className={s.input} placeholder="Search For a country"  valor={valor} onChange={(e) => handleChange(e)} />
        <button className={s.boton}  onClick={(e) => handleSubmit(e)} >Search</button>
     </div>
     )
}