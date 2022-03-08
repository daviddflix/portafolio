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
   console.log('detalle:' ,detalle)
    useEffect(()=> {
dispatch(getDetail(idPais))
    }, [dispatch, idPais])
 
    return(
        <div>
          <Nav/>
     <div className='container'>
         
      <h2>Country: <p>{detalle.name}</p></h2>
      <img src={detalle.flags} alt="" />
      <h2>Capital: <p>{detalle.capital}</p></h2>
      <h2>Continent: <p>{detalle.continente}</p></h2>
      <h2>Population: <p>{nFormatter(detalle.population)}</p></h2>
      <h2>Area: <p>{nFormatterArea(detalle.area)}</p></h2>
      <h2>Subregion: <p>{detalle.subregion}</p></h2>
      {detalle.activities? <h2>Activities: {detalle.activities}</h2>: null }
      
     </div>

      </div>
     )
}


function nFormatter(num) {
    if (num >= 1000000000) {
       return (num / 1000000000).toFixed(1).replace(/\.0$/, '') + ' ' + 'G';
    }
    if (num >= 1000000) {
       return (num / 1000000).toFixed(1).replace(/\.0$/, '') + ' ' + 'Millons hab';
    }
    if (num >= 1000) {
       return (num / 1000) + ' ' + 'hab';
    }
    return num;
  }

  
function nFormatterArea(num) {
    if (num<=999) {
       return (num).toFixed(1).replace(/\.0$/, '') + ' ' + 'Km2';
    }
    if (num >= 1000 && num <= 1000000) {
        return (num/1000) + ' ' + 'Km2';
     }
     if (num >= 1000000) {
        return (num/1000000).toFixed(4)+ ' ' + 'Km2';
     }
   
    
  
    return num;
  }