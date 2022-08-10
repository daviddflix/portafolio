import {VscProject} from 'react-icons/vsc'
import {FcAbout} from 'react-icons/fc'
import {BsCloudDownload} from 'react-icons/bs'
import {FcContacts} from 'react-icons/fc'
import {FcHome} from 'react-icons/fc'
import s from './nav.module.css'
import cv from '../Assets/DAVID PAJARO R. Agust 3.pdf'

// Import the circular menu
import {
  CircleMenu,
  CircleMenuItem,
} from "react-circular-menu";
import { useHistory } from 'react-router-dom'

const Nav = (props) => {

  const history = useHistory();
  return (
   <div className={s.main}>
       <div className={s.submain}>
       <CircleMenu
      startAngle={-150}
      rotationAngle={180}
      itemSize={3}
      radius={7}
      menuToggleElement={<FcHome className={s.home}/>}
      /**
       * rotationAngleInclusive (default true)
       * Whether to include the ending angle in rotation because an
       * item at 360deg is the same as an item at 0deg if inclusive.
       * Leave this prop for angles other than 360deg unless otherwise desired.
       */
      rotationAngleInclusive={false}
    >
      <CircleMenuItem
        onClick={() => history.push('/projects')}
        tooltip="Projects"
        style={{border: 'none',  boxShadow: 'rgba(0, 0, 0, 0.16) 0px 1px 4px'}}
      >
       <VscProject className={s.itemProject}/>
      </CircleMenuItem>
      <CircleMenuItem 
       onClick={() => history.push('/')}
      style={{border: 'none',  boxShadow: 'rgba(0, 0, 0, 0.16) 0px 1px 4px'}} tooltip="About">
        <FcAbout className={s.itemMenu}/>
      </CircleMenuItem>
      <CircleMenuItem 
       onClick={() => history.push('/contact')}
       style={{border: 'none',  boxShadow: 'rgba(0, 0, 0, 0.16) 0px 1px 4px'}} tooltip="Contact">
        <FcContacts className={s.itemMenu} />
      </CircleMenuItem>
      <CircleMenuItem 
       onClick={() => history.push('/contact')}
       style={{border: 'none',  boxShadow: 'rgba(0, 0, 0, 0.16) 0px 1px 4px'}} tooltip="Resume">
        <a href={cv} download={cv} className={s.a}><BsCloudDownload className={s.itemDownload} /></a>
        
      </CircleMenuItem>
    
    </CircleMenu>
       </div>
   </div>
  );
};

export default Nav

