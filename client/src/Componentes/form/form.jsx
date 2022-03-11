import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getAll, postAcitvity } from "../../redux/actions"
import { Nav } from "../barra/barra"
import s from './form.module.css'



export function Form(){
     const paises = useSelector(state => state.paises)
     const dispatch = useDispatch()
    const [errors, setErrors] = useState({})
   
   
    const [input, setInput] = useState({
        nombre: '',
        dificultad:'',
        duracion: '',
        temporada: '',
        name: []
    })
     
    
    
    
    let handleInputChange = (e) => {
        setInput(prev => ({...prev, [e.target.name] : e.target.value
        }));
        setErrors(handleError({
            ...input,
            [e.target.name]: e.target.value
          }))
    }

    let handlePais = (e) => {
        setInput({...input, name: [...input.name, e.target.value]})
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
        setInput({
            nombre: '',
            dificultad:'',
            duracion: '',
            temporada: '',
            name: []
        })
        alert('Activity created')
    }

    useEffect(() => {
     dispatch(getAll())
    }, [dispatch])

            
 
    return(
        <div>
            <Nav/>

           <div className={s.main_container}>
           <form onSubmit={(e) => submit(e)}>
            <div className={s.form}>

    
            <div className={s.div1}>
            <label>Activity:</label>
            <input onChange={(e) => handleInputChange(e)} value={input.nombre} name='nombre' />      
            </div>
           
    {!errors.dificultad? null : <p>{errors.dificultad}</p> }
         <div className={s.div2}>
         <label>Difficulty:</label>
            <select onChange={(e) => handleDificultad(e)}>
                <option value=''></option>
                <option value='1'>1</option>
                <option value='2'>2</option>
                <option value='3'>3</option>
                <option value='4'>4</option>
                <option value='5'>5</option>
            </select>           
            </div>
    {!errors.duracion? null: <p>{errors.duracion}</p> }
            <div className={s.div3}>
            <label>Duration:</label>
            <input 
            type='text'  
            value={input.duracion} 
            onChange={(e) => handleInputChange(e)} 
            placeholder={'Hours of the Activity'}
            name='duracion' required/>
                </div>
    {!errors.temporada? null : <p>{errors.temporada}</p> }
           <div className={s.div4}>
           <label>Season</label>
            <select onChange={(e) => handleTemp(e)}>
                <option value=""></option>
                <option value="Verano">Summer</option>
                <option value="Invierno">Winter</option>
                <option value="Otoño">Autumn</option>
                <option value="Primavera">Spring</option>
            </select>
               </div>
   
            <div className={s.div5}>
            <label>Country:</label>
           <input list="list" placeholder="Choose one or more" onChange={(e) => handlePais(e)} />
           <datalist id="list">
              {
                  paises?.map(el => {
                      return(
                          <option key={el.id} value={el.name}>{el.name}</option>
                      )
                  })
              }
          </datalist>
            </div>
           
           
        
       <div className={s.div6}>
       <button type="submit">Submit</button>
       </div>
            </div>
            </form>
           </div>
        </div>
     )
}


let handleError = (input) => {
    let errors = {}
     if(input.nombre.length < 3){
         errors.nombre = 'Name of activity must be longer'
     }
     if(!input.dificultad){
         errors.dificultad = 'one option has to be selected'
     }
     if(typeof input.duracion != 'number' ){
         errors.duracion = 'field has to a number'
     }
     if(!input.temporada){
         errors.temporada = 'one option has to be selected'
     } 
     if(!input.name){
         errors.name = 'one option has to be selected'
     }
     return errors
  }