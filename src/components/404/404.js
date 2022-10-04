import s from './noMatch.module.css'
import {BsTools} from 'react-icons/bs'

export default function NoMatch(){

    return(
        <div className={s.main}>
            <BsTools className={s.toolsIcons}/>
            <h2 className={s.title}>We are down for maintenance</h2>
            <h2 className={s.subTitle}>Be right back</h2>   
        </div>
    )
}