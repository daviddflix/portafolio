import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getAll, postAcitvity } from "../../redux/actions"
import { Nav } from "../barra/barra"
import s from './form.module.css'

export function Form(){
     const paises = useSelector(state => state.paises)
     const dispatch = useDispatch()

     const [checked, setCheckBoxChecked] = useState('');
    const [input, setInput] = useState({
        nombre: '',
        dificultad:'',
        duracion: '',
        temporada: '',
        name: []
    })
    console.log(input)
    
    let handleInputChange = (e) => {
        setInput(prev => ({...prev, [e.target.name] : e.target.value
        }))
    }

    const onChangeAttribute = (value) => {
          setCheckBoxChecked(value);
    };

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
        alert('done')
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
            <label>Nombre:</label>
            <input 
            type="text"  
            value={input.nombre} 
            onChange={(e) => handleInputChange(e)} 
            name='nombre' required/>
            </div>

         <div className={s.div2}>
         <label>Dificultad:</label>
            <select onChange={(e) => handleDificultad(e)}>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
            </select>           
            </div>

            <div className={s.div3}>
            <label>Duración:</label>
            <input 
            type='text'  
            value={input.duracion} 
            onChange={(e) => handleInputChange(e)} 
            name='duracion' required/>
                </div>

           <div className={s.div4}>
           <label>Temporada</label>
            <select onChange={(e) => handleTemp(e)}>
                <option value="Verano">Verano</option>
                <option value="Invierno">Invierno</option>
                <option value="Otoño">Otoño</option>
                <option value="Primavera">Primavera</option>
            </select>
               </div>

            <div className={s.div5}>
            <label>Pais:</label>
           
           <select onChange={(e) => handlePais(e)}>
              {
                  paises?.map(el => {
                      return(
                          <option value={el.name}>{el.name}</option>
                      )
                  })
              }
          </select>
            </div>
            {input.name? <p>{input.name.map(el => `${el} `)}</p>: '' }
        
       <div className={s.div6}>
       <button type="submit">Submit</button>
       </div>
            </div>
            </form>
           </div>
        </div>
     )
}