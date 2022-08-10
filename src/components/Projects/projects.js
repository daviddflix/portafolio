import panel from '../Assets/projects/panel.png';
import deviaje from '../Assets/projects/deviaje.png'
import country from '../Assets/projects/country.png'
import altonono from '../Assets/projects/altonono.png'
import s from './projects.module.css'

export default function Projects(){

    return(
        <div className={s.main}>
            <h3 className={s.mainTitle}>Projects</h3>
            <div className={s.container}>
                <div className={s.subcontainer}>
                 <img src={panel} className={s.image} alt='panel' />
                 <span className={s.imageTitle}>Administration Dashboard</span>
                </div>
                <div className={s.subcontainer}>
                 <img src={deviaje} className={s.image} alt='deviaje' />
                 <span className={s.imageTitle}>Administration Dashboard</span>
                </div>
                <div className={s.subcontainer}>
                 <img src={country} className={s.image} alt='countries' />
                 <span className={s.imageTitle}>Administration Dashboard</span>
                </div>
                <div className={s.subcontainer}>
                 <img src={altonono} className={s.image} alt='altonono' />
                 <span className={s.imageTitle}>Administration Dashboard</span>
                </div>
            </div>
        </div>
    )
}

//https://altonono-panel.vercel.app/
//https://deviaje-com.vercel.app/
//https://countyapp.vercel.app/home
//https://altonono.vercel.app/
//https://hitpastas.com/