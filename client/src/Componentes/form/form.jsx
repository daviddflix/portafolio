import { useState } from "react"
import { useSelector } from "react-redux"
import { postAcitvity } from "../../redux/actions"
import { Nav } from "../barra/barra"
import s from './form.module.css'

export function Form(){
     const paises = useSelector(state => state.paises.name)
     console.log(paises)

    const [input, setInput] = useState({
        nombre: '',
        dificultad:'',
        duracion: '',
        temporada: '',
        countries: []
    })
    
    let handleInputChange = (e) => {
        setInput(prev => ({...prev, [e.target.name] : e.target.value
        }))
    }
    
    let submit =(e) => {
        e.preventDefault() 
        // postAcitvity(input.nombre, input.duracion) 
    }

            
 
    return(
        <div>
            <Nav/>
            <form>

            <div className={s.form}>
            <label>Nombre:</label>
            <input type="text"  value={input.nombre} onChange={handleInputChange} name='nombre' required/>
            <label>Dificultad:</label>
            <select required>
                <option value={input.dificultad}>1</option>
                <option value={input.dificultad}>2</option>
                <option value={input.dificultad}>3</option>
                <option value={input.dificultad}>4</option>
                <option value={input.dificultad}>5</option>
            </select>
            <label>Duración:</label>
            <input type='number'  value={input.duracion} onChange={handleInputChange} name='duracion' required/>
            <label>Temporada:</label>
            <select required>
                <option value={input.temporada}>Verano</option>
                <option value={input.temporada}>Invierno</option>
                <option value={input.temporada}>Otoño</option>
                <option value={input.temporada}>Primavera</option>
            </select>
            <label>Pais:</label>
            <input type="text"   value={input.countries} onChange={handleInputChange} name='pais' required/>
            <input type="submit" onSubmit={submit}/>
            </div>

            </form>
        </div>
     )
}