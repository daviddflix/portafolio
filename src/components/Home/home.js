import s from './home.module.css'
import {BsInstagram} from 'react-icons/bs'
import React, { Suspense, useEffect, useState } from 'react';
import { Component } from "react";
import ReactDOM from "react-dom";
import * as THREE from "three";
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import Model from './model';

export default  function Home(){

//   const [model, setModel] = useState('')
// console.log('model', model)
//   useEffect(() => {
//     fetch('https://api.readyplayer.me/v1/avatars/633b0673573a467029196177.glb')
//     .then(data => data.json())
//     .then(data => setModel(data))
//   }, [])

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
          <div className={s.containerModel}>
          {/* <BoxModel/> */}
          </div>
            <div className={s.containerFollow}>
                <h3 className={s.follow}>Follow Me</h3>
                <span className={s.line}></span>
                <a href='https://www.instagram.com/daviddflix/' className={s.instaBox}>
                <BsInstagram className={s.instagram}/>
                </a>
            </div>
        </div>
    )
}


export function BoxModel() {
   return (
      <Canvas
         camera={{ position: [2, 0, 12.25], fov: 15 }}
         style={{
            backgroundColor: '#111a21',
            width: '100vw',
            height: '100vh',
         }}
      >
         <ambientLight intensity={1.25} />
         <ambientLight intensity={0.1} />
         <directionalLight intensity={0.4} />
         <Suspense fallback={null}>
         <Model position={[0.025, -0.9, 0]} /> 
         </Suspense>
         <OrbitControls />
      </Canvas>
   );
}

