import {VscProject} from 'react-icons/vsc'
import {FcAbout} from 'react-icons/fc'
import {BsCloudDownload} from 'react-icons/bs'
import {FcContacts} from 'react-icons/fc'
import {FcHome} from 'react-icons/fc'
import s from './nav.module.css'
import cv from '../Assets/DAVID PAJARO R. Agust 3.pdf'
import { useHistory } from 'react-router-dom'
import logo from '../Assets/logo.png'
import { useEffect } from 'react'

const Nav = () => {

  const history = useHistory();


  return (
   <nav id='Nav' className={s.main}>
    {/* <img className={s.logo} src={logo}/> */}
    <h4 className={s.logo}>David P.</h4>
      <ul className={s.subMain}>
        <li className={s.link}>About</li>
        <li className={s.link}>Projects</li>
        <li className={s.link}>Contact</li>
      </ul>
   </nav>
  );
};

export default Nav

