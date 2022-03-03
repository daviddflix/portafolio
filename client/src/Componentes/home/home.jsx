import { useState } from "react"
import {useDispatch, useSelector} from 'react-redux'
import { getCountries } from "../../redux/actions"
import {NavLink} from 'react-router-dom'

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

     return(
      <div>
      <form>
<div >
   <input placeholder="Busqueda"  valor={valor} onChange={(e) => handleChange(e)} />
   <button   onClick={(e) => handleSubmit(e)} >Search</button>
</div>
<div>
  {
    paises?.map(el => {
      return(
        <div key={el.cca3}>
       <NavLink to={`/detalle/${el.id}`}><h1>{el.name}</h1></NavLink> 
        <img src={el.flags} alt="Not Found" />
        <h3>{el.contiente}</h3>
      </div>
      )
     
    })
  }
</div>
</form>
      </div>
     )
}