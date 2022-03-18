import { useEffect, useState } from "react"
import {useDispatch, useSelector} from 'react-redux'
import { filterAz, getAll } from "../../redux/actions"
import {NavLink} from 'react-router-dom'
import s from './home.module.css'
import { Nav } from "../barra/barra"
import { Paginado } from "../paginado/paginado"
import { Filtros } from "../filtros/Filtros"
export default function Home(){
    const paises = useSelector(state => state.paises)
   
   const dispatch = useDispatch()

  
   
   const [order, setOrder] = useState('')
     let [currentPage, setcurrentPage] = useState(1);
     let [countriesPerPage] = useState(10);
    
    
     const indexOfLastCountry = currentPage * countriesPerPage; // i10
     const indexOfFirstCountry = indexOfLastCountry - countriesPerPage // 10 - 10 = 0 
     const currentCountries = paises.slice(indexOfFirstCountry, indexOfLastCountry)
                             
     const paginado = (pageNumber) => {
       setcurrentPage(pageNumber)
     }


const handleAz = (e)=> {
  e.preventDefault();
  dispatch(filterAz(e.target.value));
  setcurrentPage(1)
  setOrder(`${e.target.value}`)
}


useEffect(()=>{
  if(!paises.length){
    dispatch(getAll())
  }
})



     return(
      <div>
      <Nav/>
     <Filtros handleAz={handleAz}/>
      <Paginado paginado={paginado} countriesPerPage={countriesPerPage} countries={paises.length} />
      <form>

<div>

  {
    currentCountries.length?
    currentCountries.map(el => {
      return(
        <div key={el.cca3} className={s.container}>
       <NavLink className={s.title} to={`/detalle/${el.id}`}>
         <h1>{el.name}</h1>
        <img className={s.imagen} src={el.flags} alt="Not Found" />
        <h1>{el.continente}</h1>
        </NavLink> 
      </div>
      )
     
    }): <p className={s.loader}></p>
  }
</div>
</form>
      </div>
     )
}