import s from './footer.module.css'
import {BsLinkedin} from 'react-icons/bs'
import whatsapp from '../Assets/whatsapp.png'
import github from '../Assets/github.png'
import linkedIn from '../Assets/linkedin-download-png-5a22d420d16602.1978549215122319688577-removebg-preview.png'

export default function Footer(){

    const link =`https://wa.me/5491137858227?text=Hi%20`

    const linkedIn = 'https://www.linkedin.com/in/david-pajaro-rodriguez-0129109b/'

    return(
        <div className={s.main}>
            <div className={s.submain} >
                <a href='https://github.com/daviddflix'>
                <img className={s.icon} src={github} alt='Github'/>
                </a>
                <a href={link}>
                <img className={s.icon} src={whatsapp} alt='Whatsapp'/>
                </a>
                <a href={linkedIn}>
                <BsLinkedin  className={s.icon} />
                </a>
            </div>
            <div className={s.containerFirm}>
                <h3 className={s.done}>Done by</h3>
                <h3 className={s.name}>David</h3>
            </div>
        </div>
    )
}