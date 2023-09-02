/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.4 earth.gltf --transform
Author: Konstantin_Keller (https://sketchfab.com/Konstantin_Keller)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/low-poly-earth-c99483d5e2a94ca8b4f3579145584beb
Title: Low Poly Earth
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'


import * as THREE from 'three';
import { SphereGeometry } from 'three';



export default function Model(props) {
  const { nodes, materials } = useGLTF('./public/earth-transformed.glb')
  
  const earth=useRef();


  
  const states ={
    default:1,
    mouseDown:2,
    mouseUp:3,
    rotateWheel:4
  }

  let animationState=1;
  let direction = 1;//-1

  useFrame((state, delta) => {
    let pos = earth.current.position;
    let rot = earth.current.rotation;
    switch(animationState){
      case states.default:
        rot.y+=delta;
        rot.x+=delta/5;
        break;
      case states.mouseDown:
        rot.y+=delta*2;
        rot.x+=delta/5;
        if(pos.y>=0.3){
          direction=-1;
        }else if(pos.y<=-0.3){
          direction=1;
        }
        pos.y+=direction*delta*2;
        break;
    }
      
    
    
  })
  
  return (
    <group {...props}
    scale={1.5}
    ref={earth}
    onPointerEnter={()=>animationState=2}
    onPointerLeave={()=>(animationState=1)}
    pnPointerClick={()=>{

    }}
    dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <mesh geometry={nodes.Icosphere001_0.geometry} material={materials.material} />
        <mesh geometry={nodes.Icosphere001_1.geometry} material={materials.green} />
        <mesh geometry={nodes.Icosphere001_2.geometry} material={materials.white} />

    <mesh
      position={[1,1,0,]}>
      <sphereGeometry args={[0.1,12,12]} />
      <meshStandardMaterial  color={'white'} />
    </mesh>
      </group>
    </group>
  )
}

useGLTF.preload('./public/earth-transformed.glb')
