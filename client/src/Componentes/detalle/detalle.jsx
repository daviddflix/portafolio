import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import { getDetail } from "../../redux/actions"
import { Nav } from "../barra/barra"
import  './detalle.module.css'
export function Detalle(){
    const {idPais} = useParams()
    const dispatch = useDispatch()
    const detalle = useSelector(state => state.detalle)

    useEffect(()=> {
dispatch(getDetail(idPais))
    }, [dispatch, idPais])
 
    return(
        <div>
          <Nav/>
     <div className='container'>
         
      <h2>Country: <h3>{detalle.name}</h3></h2>
      <img src={detalle.flags} alt="" />
      <h2>Capital: <h3>{detalle.capital}</h3></h2>
      <h2>Continent: <h3>{detalle.continente}</h3></h2>
      <h2>Population: <h3>{detalle.population}</h3></h2>
      <h2>Area: <h3>{detalle.area}</h3></h2>
      <h2>Subregion: <h3>{detalle.subregion}</h3></h2>
      {/* {detalle.activities? <h2>Activities: {detalle.activities}</h2>: } */}
      
     </div>

      </div>
     )
}