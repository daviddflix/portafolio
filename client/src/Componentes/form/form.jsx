import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getAll, postAcitvity } from "../../redux/actions"
import { Nav } from "../barra/barra"
import s from './form.module.css'

export function Form(){
     const paises = useSelector(state => state.paises)
     const dispatch = useDispatch()

    const [input, setInput] = useState({
        nombre: '',
        dificultad:'',
        duracion: '',
        temporada: '',
        countries: []
    })
    console.log(input)
    
    let handleInputChange = (e) => {
        setInput(prev => ({...prev, [e.target.name] : e.target.value
        }))
    }

    let handlePais = (e) => {
        setInput({...input, countries: e.target.value})
    }

    let handleTemp = (e) => {
        setInput({...input, temporada: e.target.value})
    }

    let handleDificultad = (e) => {
        setInput({...input, dificultad: e.target.value})
    }
    
    let submit =(e) => {
        e.preventDefault() 
       dispatch(postAcitvity(input))
        alert('done')
    }

    useEffect(() => {
     dispatch(getAll())
    }, [dispatch])

            
 
    return(
        <div className={s.main_container}>
            <Nav/>

            <form onSubmit={submit}>
            <div className={s.form}>

            <label>Nombre:</label>
            <input 
            type="text"  
            value={input.nombre} 
            onChange={handleInputChange} 
            name='nombre' required/>

            <label>Dificultad:</label>
            <select onChange={handleDificultad}>
                <option value='1'>1</option>
                <option value='2'>2</option>
                <option value='3'>3</option>
                <option value='4'>4</option>
                <option value='5'>5</option>
            </select>

            <label>Duración:</label>
            <input 
            type='text'  
            value={input.duracion} 
            onChange={handleInputChange} 
            name='duracion' required/>

            {/* <label>Temporada:</label>
            <input list='data' onChange={handleTemp}  />
            <datalist id="data">
            <option value='Verano'>Verano</option>
                <option value='Invierno'>Invierno</option>
                <option value='Otoño'>Otoño</option>
                <option value='Primavera'>Primavera</option>
            </datalist> */}
            <label>Temporada</label>
            <select onChange={handleTemp}>
                <option value='Verano'>Verano</option>
                <option value='Invierno'>Invierno</option>
                <option value='Otoño'>Otoño</option>
                <option value='Primavera'>Primavera</option>
            </select>

            <label>Pais:</label>
            <input list="pais" onChange={handlePais} />
            <datalist id="pais">
               {
                   paises?.map(el => {
                       return(
                           <option value={el.id}>{el.name}</option>
                       )
                   })
               }
           </datalist>
        
        <button onSubmit={submit}>Submit</button>

            </div>
            </form>
        </div>
     )
}