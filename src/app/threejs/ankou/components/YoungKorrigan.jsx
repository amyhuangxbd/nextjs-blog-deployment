'use client'
/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.16 public/models/ankou/models/young-korrigan/model.gltf 
*/

import React, { useRef, useEffect } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'

export default function YoungKorrigan(props) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('/nextjs-blog-deployment/models/ankou/models/young-korrigan/model.gltf')
  const { actions, mixer } = useAnimations(animations, group)
  useEffect(() => {
    actions["course_jeune"].play();
    mixer.timeScale = 1.8;
  }, []);
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group name="Armature_jeune" rotation={[0.004, 0.025, 0.002]} scale={0.151}>
          <primitive object={nodes.root} />
          <skinnedMesh name="Jeune" geometry={nodes.Jeune.geometry} material={materials['color_main.003']} skeleton={nodes.Jeune.skeleton} />
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/nextjs-blog-deployment/models/ankou/models/young-korrigan/model.gltf')