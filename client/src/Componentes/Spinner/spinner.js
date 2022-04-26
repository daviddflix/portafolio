import { useSelector } from 'react-redux'
import s from './spinner.module.css'

export default function Spinner (){

    const notFound = useSelector(state => state.notFound)
    return(
     <h1>
         
              {
                notFound === false &&   <p className={s.loader}></p>
            }
         
     </h1>
    )
}