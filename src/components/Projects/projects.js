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
                {
                    data && data.map(p => {
                        return(
                            <Card
                            url={p.url}
                            picture={p.picture}
                            alt={p.alt}
                            title={p.title}
                            description={p.description}
                            />
                        )
                    })
                }
                    
            </div>
        </div>
    )
}

function Card({url, picture, alt, title, description}){
    return(
        <a href={url} className={s.subcontainer}>
        <div  className={s.flipcardinner}>
             <div className={s.flipcardfront}>
                 <img src={picture} className={s.image} alt={alt} />
             </div>
             <div className={s.flipcardback}>
             <span className={s.description}>{description}</span>
             </div>
        </div>
        <span className={s.imageTitle}>{title}</span>
     </a> 
    )
}


const data = [
    {
        title: 'Administration Dashboard',
        url: 'https://altonono-panel.vercel.app/',
        picture: panel,
        alt: 'panel',
        description: 'Admin dashboard, where P.O can recieve orders, see the status of the store and products.'
    },
    {
        title: 'deviaje.com',
        url: 'https://deviaje-com.vercel.app/',
        picture: deviaje,
        alt: 'deviaje.com',
        description: 'Web Application, where users can search for cheap flights, see the most atractive destination and buy the ticket.'
    },
    {
        title: 'Country App',
        url: 'https://countyapp.vercel.app/home',
        picture: country,
        alt: 'country',
        description: 'Website where users can search for a country of the world and see the population, area and capital.'
    },
    {
        title: 'Altonono App',
        url: 'https://altonono.vercel.app/',
        picture: altonono,
        alt: 'Altonono',
        description: 'Web Application, where users can order'
    }
]
