import {  useState } from "react";
import { useDispatch } from "react-redux";
import { getCountries } from "../../redux/actions";
import s from '../home/home.module.css'

export function SearchBar(){

 
  
    const [valor, setValor] = useState("")
    const dispatch = useDispatch()
   


    const handleSubmit = (e) =>  {
      e.preventDefault();
      dispatch(getCountries(valor))
      setValor("")
   }
    const handleKeyPressed = (e) =>  {
      if(e.key === 'Enter'){
        e.preventDefault();
        dispatch(getCountries(valor))
        setValor("")
      }
  
   }

   


 const handleChange = (e) =>  {
   e.preventDefault();
   setValor(e.target.value);
   
 }
 
     return(
        <div className={s.buscador} >
        <input className={s.input} id='valor' onKeyPress={handleKeyPressed} placeholder="Search for a country"  valor={valor} onChange={(e) => handleChange(e)} />
        <button className={s.boton} onClick={handleSubmit} >Search</button>
     </div>
     )
}