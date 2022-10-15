import s from './home.module.css'
import {BsInstagram} from 'react-icons/bs'
import React, { Suspense, useEffect, useState } from 'react';
import { Component } from "react";
import ReactDOM from "react-dom";
import * as THREE from "three";
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import earth from '../Assets/earth.jpg'
import { Animator, ScrollContainer, ScrollPage, batch, Fade, FadeIn, FadeOut, Move, MoveIn, MoveOut, Sticky, StickyIn, StickyOut, Zoom, ZoomIn, ZoomOut } from "react-scroll-motion";

export default  function Home(){

//   const [model, setModel] = useState('')
// console.log('model', model)
//   useEffect(() => {
//     fetch('https://api.readyplayer.me/v1/avatars/633b0673573a467029196177.glb')
//     .then(data => data.json())
//     .then(data => setModel(data))
//   }, [])
const FadeUp = batch(Fade(), Move());
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
          <Model2/>
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

class Model extends Component {
  componentDidMount() {
    var scene = new THREE.Scene();
    var camera = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.1, 1000 );
    var renderer = new THREE.WebGLRenderer();
    renderer.setSize( window.innerWidth, window.innerHeight );
    // document.body.appendChild( renderer.domElement );
    // use ref as a mount point of the Three.js scene instead of the document.body
    this.mount.appendChild( renderer.domElement );
    const geometry = new THREE.SphereGeometry( 15, 32, 16 );
    const material = new THREE.MeshBasicMaterial( { color: 0xffff00 } );
    const sphere = new THREE.Mesh( geometry, material );
    scene.add( sphere );
    camera.position.z = 5;
    var animate = function () {
      requestAnimationFrame( animate );
      // sphere.rotation.x += 0.01;
      // sphere.rotation.y += 0.01;
      renderer.render( scene, camera );
    };
    animate();
  }
  render() {
    return (
      <div ref={ref => (this.mount = ref)} />
    )
  }
}

let scene, camera, renderer, cube;

class Model2 extends Component {
  constructor(props) {
    super(props);
    this.animate = this.animate.bind(this);
  }

  init() {
    //creating scene
    scene = new THREE.Scene();
    scene.background = new THREE.Color(0x282828);

    //add camera
    camera = new THREE.PerspectiveCamera(
      75,
     100/100
    );

    //renderer
    renderer = new THREE.WebGLRenderer();
    window.innerWidth > 1000 ?
    renderer.setSize( 300, 300):
    renderer.setSize( 100, 100)

    //document.body.appendChild(renderer.domElement);
    const moonTexture = new THREE.TextureLoader().load('https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/The_earth_at_night.jpg/2560px-The_earth_at_night.jpg');
    //add geometry
    const geometry = new THREE.SphereGeometry(3, 32, 32);
    var material = new THREE.MeshBasicMaterial({
      map: moonTexture,
      normalMap: moonTexture,
    });
    cube = new THREE.Mesh(geometry, material);

    scene.add(cube);



    camera.position.z = 5;
    

    return renderer.domElement;
  }

  //animation
  animate() {
    requestAnimationFrame(this.animate);

    cube.rotation.y += 0.005;

    renderer.render(scene, camera);
  }

  componentDidMount() {
    document.getElementById("Render").appendChild(this.init());
    this.animate();
  }

  render() {
    return <div id="Render"></div>;
  }
}
