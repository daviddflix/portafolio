import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import { getDetail } from "../../redux/actions"

export function Detalle(){
    const {idPais} = useParams()
    const dispatch = useDispatch()
    const detalle = useSelector(state => state.detalle)

    useEffect(()=> {
dispatch(getDetail(idPais))
    }, [dispatch, idPais])

//     activities: []
// area: 1141748
// capital: "{Bogotá}"
// cca3: "COL"
// contiente: "South America"
// flags: "https://flagcdn.com/w320/co.png"
// id: 49
// name: "Colombia"
// population: 50882884

    
     return(
      <div>
      <h1>{detalle.name}</h1>
      <img src={detalle.flags} alt="" />
      <h2>{detalle.capital}</h2>
      <h2>{detalle.contiente}</h2>
      <h3>{detalle.population}</h3>
      <h3>{detalle.area}</h3>
      <h1>{detalle.activities}</h1>
      

      </div>
     )
}