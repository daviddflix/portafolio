import s from './home.module.css'
import {BsInstagram} from 'react-icons/bs'
import React, { Suspense } from 'react';
import { Component } from "react";
import ReactDOM from "react-dom";
import * as THREE from "three";


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
           <Model/>
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
    var geometry = new THREE.BoxGeometry( 1, 1, 1 );
    var material = new THREE.MeshBasicMaterial( {  color: '#fff' } );
    var cube = new THREE.Mesh( geometry, material );
    scene.add( cube );
    camera.position.z = 5;
    var animate = function () {
      requestAnimationFrame( animate );
      cube.rotation.x += 0.01;
      cube.rotation.y += 0.01;
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