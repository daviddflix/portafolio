import s from './about.module.css'
import img from '../Assets/profile-pic.png'
import logo from '../Assets/logo.png'
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

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
            <img className={s.logo} src={logo} alt='logo'/>
            <img className={s.picture} src={img} alt='Profile'/>
            <div className={s.submain}>
            <h2 className={s.title}>David P. Rodriguez</h2>
            <h3 className={s.p}>I`m a passionate full-stack developer, who enjoys learning new technologies, 
                creating beautiful projects, and making the user have a good experience.</h3>
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
   fpsLimit: 100,
   interactivity: {
     events: {
       onClick: {
         enable: true,
         mode: "push",
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