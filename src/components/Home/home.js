import s from './home.module.css'
import {BsInstagram} from 'react-icons/bs'
import profile from '../Assets/profile-pic.png'


export default  function Home(){
    return(
        <div className={s.main}>
            <div className={s.subMain}>
                <h3 className={s.title}>HELLO</h3>
                <h3 className={s.subtitle}>I'm</h3>
                  <div className={s.containerName}>
                    <h3 className={s.name}>David P.</h3>
                    <h3 className={s.lastname}>Rodriguez</h3>
                  </div>
                <span className={s.role}>Full Stack Developer</span>
            </div>
            {/* <img className={s.profile} src={profile} alt='Profile'/> */}
            <div className={s.containerFollow}>
                <h3 className={s.follow}>Follow Me</h3>
                <span className={s.line}></span>
                <div className={s.instaBox}>
                <BsInstagram className={s.instagram}/>
                </div>
            </div>
        </div>
    )
}