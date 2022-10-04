import s from './about.module.css'
import img from '../Assets/profile-pic.png'
import logo from '../Assets/logo.png'
import { loadFull } from "tsparticles";
import Tooltip from '@mui/material/Tooltip';

export default function About(){

    const particlesInit = async (main) => {
    
        // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
        // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
        // starting from v2 you can add only the features you need reducing the bundle size
        await loadFull(main);
      };
    
      const particlesLoaded = (container) => {
        console.log(container);
      };

    return(
        <div id='about' className={s.main}>
          <Mark section={'About Me'}/>
            <div className={s.containerPic}>
                <img src={img} className={s.profile} alt='Profile'/>
            <h3 className={s.p}>I`m a passionate full-stack developer, who enjoys learning new technologies, 
                creating beautiful projects, and making the user have a good experience.</h3>
            </div>
            <div className={s.submain}>
                <div className={s.containerIcons}>
                   <h4 className={s.title}>Basic</h4>
                   {
                    basic.map(p => {
                      return(
                        <Skills key={p.skill} tech={p.skill} porcentaje={p.porcentaje}/>
                      )
                    })
                   }
                </div>
                <div className={s.containerIcons}>
                <h4 className={s.title}>Intermidiate</h4>
                  {
                    intermidiate.map(p => {
                      return(
                        <Skills key={p.skill} tech={p.skill} porcentaje={p.porcentaje}/>
                      )
                    })
                   }
                </div>
                <div className={s.containerIcons}>
                <h4 className={s.title}>Advanced</h4>
                {
                    advanced.map(p => {
                      return(
                        <Skills key={p.skill} tech={p.skill} porcentaje={p.porcentaje}/>
                      )
                    })
                   }
                </div>
            </div>
        </div>
    )
}

 export function Mark ({section}){
  return(
    <h4 className={`${s.about} ${s.mainTitle}`}>{section}</h4>
  )
}

const advanced = [{skill: 'CSS & HTML5', porcentaje: '45%'}, 
{skill: 'React', porcentaje: '70%'},
{skill: 'Node', porcentaje: '65%'},
{skill: 'PostgreSQL', porcentaje: '60%'},
{skill: 'Express', porcentaje: '70%'}]
const intermidiate = [{skill: 'React Native', porcentaje: '30%'}, {skill: 'Git', porcentaje: '40%'}, {skill: 'Github', porcentaje: '40%'}  ]
const basic = [{skill: "GraphQL", porcentaje: '20%'}, {skill: 'Electron', porcentaje: '25%'} ]


function Skills({porcentaje, tech}){
  return(
    <div className={s.mainSkills}>
       <h3 className={s.subMainSkills}>{tech}</h3>
       <div className={s.progress}>
          <div className={s.progressBar} style={{width: porcentaje}}>
              <span className={s.progressBarText}></span>
          </div>
      </div>
    </div>
  )
}

const config = {
    number: {
        value: 161,
        density: {
          enable: true,
          value_area: 800
        }
      },
   fpsLimit: 80,
   interactivity: {
     events: {
       onClick: {
         enable: true,
         mode: "repulse",
       },
       onHover: {
         enable: true,
         mode: "repulse",
       },
       resize: true,
     },
     modes: {
       push: {
         quantity: 4,
       },
       repulse: {
         distance: 200,
         duration: 0.4,
       },
     },
   },
   particles: {
     color: {
       value: "#ffffff",
     },
     links: {
       color: "#ffffff",
       distance: 150,
       enable: true,
       opacity: 0.5,
       width: 1,
     },
     collisions: {
       enable: true,
     },
     move: {
       direction: "none",
       enable: true,
       outModes: {
         default: "bounce",
       },
       random: false,
       speed: 2,
       straight: false,
     },
     number: {
       density: {
         enable: true,
         area: 800,
       },
       value: 80,
     },
     opacity: {
       value: 0.5,
     },
     shape: {
       type: "circle",
     },
     size: {
       value: { min: 1, max: 5 },
     },
   },
   detectRetina: true,
 }



 export function Github(){
  return(
   <div className={s.containerLogo}>
     <Tooltip title="Github">
 <a href='https://github.com/daviddflix'><img className={s.logo} src={logo} alt='logo'/></a>
 </Tooltip>
   </div>
  )
}