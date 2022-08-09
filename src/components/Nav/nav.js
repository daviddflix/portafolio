import {VscProject} from 'react-icons/vsc'
import {FcAbout} from 'react-icons/fc'
import {AiOutlineHome} from 'react-icons/ai'
import {FcContacts} from 'react-icons/fc'
import {FcHome} from 'react-icons/fc'
import s from './nav.module.css'

// Import the circular menu
import {
  CircleMenu,
  CircleMenuItem,
  TooltipPlacement,
} from "react-circular-menu";

const Nav = (props) => {
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
        onClick={() => alert("Clicked the item")}
        tooltip="Projects"
        style={{border: 'none',  boxShadow: 'rgba(0, 0, 0, 0.16) 0px 1px 4px'}}
      >
       <VscProject className={s.itemProject}/>
      </CircleMenuItem>
      <CircleMenuItem style={{border: 'none',  boxShadow: 'rgba(0, 0, 0, 0.16) 0px 1px 4px'}} tooltip="About">
        <FcAbout className={s.itemMenu}/>
      </CircleMenuItem>
      <CircleMenuItem   style={{border: 'none',  boxShadow: 'rgba(0, 0, 0, 0.16) 0px 1px 4px'}} tooltip="Contact">
        <FcContacts className={s.itemMenu} />
      </CircleMenuItem>
    
    </CircleMenu>
       </div>
   </div>
  );
};

export default Nav

