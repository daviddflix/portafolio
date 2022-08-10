import s from './about.module.css'
import img from '../Assets/profile-pic.png'
import logo from '../Assets/logo.png'
import redux from '../Assets/redux bgc.png'
import git from '../Assets/git1.png'
import sequelize from '../Assets/sequelize.svg'
import node from '../Assets/node bgc.png'
import express from '../Assets/express1.png'
import html from '../Assets/html.png'
import css from '../Assets/css1.png'
import postgres from '../Assets/post bgc.png'
import react from '../Assets/react.png'
import Particles from "react-tsparticles";
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
        <div className={s.main}>
            <Particles
             id="tsparticles"
             init={particlesInit}
             loaded={particlesLoaded}
             options={config}
            />
            <Github/>
            <img className={s.picture} src={img} alt='Profile'/>
            <div className={s.submain}>
            <h2 className={s.title}>David P. Rodriguez</h2>
            <h3 className={s.p}>I`m a passionate full-stack developer, who enjoys learning new technologies, 
                creating beautiful projects, and making the user have a good experience.</h3>
                <div className={s.containerIcons}>
                    <Tooltip title="React">
                    <img className={s.icon} src={react} alt='react'/>
                    </Tooltip>
                    <Tooltip title="Redux">
                    <img className={s.icon} src={redux} alt='redux'/>
                    </Tooltip>
                    <Tooltip title="Node Js">
                    <img className={s.icon} src={node} alt='node'/>
                    </Tooltip>
                    <Tooltip title="Express Js">
                    <img className={s.icon} src={express} alt='express'/>
                    </Tooltip>
                    <Tooltip title="Sequelize">
                    <img className={s.icon} src={sequelize} alt='sequelize'/>
                    </Tooltip>
                    <Tooltip title="PostgreSQL">
                    <img className={s.icon} src={postgres} alt='postgres'/>
                    </Tooltip>
                    <Tooltip title="HTML">
                    <img className={s.icon} src={html} alt='html'/>
                    </Tooltip>
                    <Tooltip title="CSS">
                    <img className={s.icon} src={css} alt='css'/>
                    </Tooltip>
                    <Tooltip title="GIT">
                    <img className={s.icon} src={git} alt='git'/>
                    </Tooltip>
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
