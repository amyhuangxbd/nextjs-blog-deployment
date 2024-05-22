/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.16 public/models/cybertruck/cybertruck.gltf 
*/

import React, { useEffect, useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { basePath } from '@/lib/constants';
import * as THREE from "three";

export function Cybertruck(props) {
  const { nodes, materials } = useGLTF(`${basePath}/models/cybertruck/cybertruck.gltf`)
  
  const ref = useRef();
  useEffect(() => {
    materials.lights.toneMapped = false;
    materials.warninglights.toneMapped = false;
    materials.warninglights.color = new THREE.Color(82, 0, 0);
  });
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.steer.geometry} material={materials.gray} />
      <mesh geometry={nodes.interior001.geometry} material={materials.lights} />
      <mesh geometry={nodes.interior001_1.geometry} material={materials.body} />
      <mesh geometry={nodes.interior001_2.geometry} material={materials.glass} />
      <mesh geometry={nodes.interior001_3.geometry} material={materials.glassframes} />
      <mesh geometry={nodes.interior001_4.geometry} material={materials.warninglights} />
      <mesh geometry={nodes.interior001_5.geometry} material={materials.black} />
      <mesh geometry={nodes.interior001_6.geometry} material={materials.shader} />
      <mesh geometry={nodes.tires001.geometry} material={materials.tires} />
      <mesh geometry={nodes.tires001_1.geometry} material={materials.rims} />
    </group>
  )
}

useGLTF.preload(`${basePath}/models/cybertruck/cybertruck.gltf`)
