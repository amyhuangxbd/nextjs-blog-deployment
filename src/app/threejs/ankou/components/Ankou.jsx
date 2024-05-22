'use client'
/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.16 public/models/ankou/models/ankou-with-cart/model.gltf 
*/

import React, { useRef, useEffect } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'

export default function Ankou(props) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('/nextjs-blog-deployment/models/ankou/models/ankou-with-cart/model.gltf')
  const { actions } = useAnimations(animations, group)
  console.log('actions: ', actions)
  useEffect(() => {
    actions["course_cheval"].play();
    actions["course_charette"].play();
    actions["course_ankou"].play();
  }, []);
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group name="Armature_ankou">
          <primitive object={nodes.rootankou} />
          <group name="ankou">
            <group name="Armature_horse">
              <primitive object={nodes.spine004} />
              <skinnedMesh name="horse" geometry={nodes.horse.geometry} material={materials['color_main.002']} skeleton={nodes.horse.skeleton} />
            </group>
            <mesh name="horse_coth" geometry={nodes.horse_coth.geometry} material={materials['color_main.002']} rotation={[0, 0.007, 0]} />
            <mesh name="horse_strap" geometry={nodes.horse_strap.geometry} material={materials['color_main.002']} rotation={[0, 0.007, 0]} />
            <mesh name="horse_strap001" geometry={nodes.horse_strap001.geometry} material={materials['color_main.002']} rotation={[0, 0.007, 0]} />
            <mesh name="strap_hook" geometry={nodes.strap_hook.geometry} material={materials['color_main.002']} rotation={[Math.PI / 2, 0, -0.007]} />
            <mesh name="strap_hook001" geometry={nodes.strap_hook001.geometry} material={materials['color_main.002']} position={[1.279, 0, -0.009]} rotation={[Math.PI / 2, 0, -0.007]} />
            <mesh name="strap_hook002" geometry={nodes.strap_hook002.geometry} material={materials['color_main.002']} position={[0.003, 0.013, 0.362]} rotation={[Math.PI / 2, 0, -0.007]} />
            <mesh name="strap_hook003" geometry={nodes.strap_hook003.geometry} material={materials['color_main.002']} position={[1.282, 0.01, 0.353]} rotation={[Math.PI / 2, 0, -0.007]} />
          </group>
          <skinnedMesh name="ankou_sickle" geometry={nodes.ankou_sickle.geometry} material={materials['color_main.002']} skeleton={nodes.ankou_sickle.skeleton} />
          <skinnedMesh name="ankou002" geometry={nodes.ankou002.geometry} material={materials['color_main.002']} skeleton={nodes.ankou002.skeleton} />
        </group>
        <group name="Armature_rwheel" position={[-0.075, 0.808, -0.785]}>
          <primitive object={nodes.cart} />
          <mesh name="cart_shaft" geometry={nodes.cart_shaft.geometry} material={materials['color_main.002']} position={[0.1, -0.803, 0.778]} rotation={[Math.PI / 2, 0, -1.564]} />
          <skinnedMesh name="accroche_crane" geometry={nodes.accroche_crane.geometry} material={nodes.accroche_crane.material} skeleton={nodes.accroche_crane.skeleton} />
          <skinnedMesh name="bloc_wheel_D" geometry={nodes.bloc_wheel_D.geometry} material={materials['color_main.002']} skeleton={nodes.bloc_wheel_D.skeleton} />
          <skinnedMesh name="bloc_wheel_G" geometry={nodes.bloc_wheel_G.geometry} material={materials['color_main.002']} skeleton={nodes.bloc_wheel_G.skeleton} />
          <skinnedMesh name="cart_base" geometry={nodes.cart_base.geometry} material={materials['color_main.002']} skeleton={nodes.cart_base.skeleton} />
          <skinnedMesh name="cart_boad_AB" geometry={nodes.cart_boad_AB.geometry} material={materials['color_main.002']} skeleton={nodes.cart_boad_AB.skeleton} />
          <skinnedMesh name="cart_boad_AH" geometry={nodes.cart_boad_AH.geometry} material={materials['color_main.002']} skeleton={nodes.cart_boad_AH.skeleton} />
          <skinnedMesh name="cart_boad_DB" geometry={nodes.cart_boad_DB.geometry} material={materials['color_main.002']} skeleton={nodes.cart_boad_DB.skeleton} />
          <skinnedMesh name="cart_boad_DH" geometry={nodes.cart_boad_DH.geometry} material={materials['color_main.002']} skeleton={nodes.cart_boad_DH.skeleton} />
          <skinnedMesh name="cart_boad_GB" geometry={nodes.cart_boad_GB.geometry} material={materials['color_main.002']} skeleton={nodes.cart_boad_GB.skeleton} />
          <skinnedMesh name="cart_boad_GH" geometry={nodes.cart_boad_GH.geometry} material={materials['color_main.002']} skeleton={nodes.cart_boad_GH.skeleton} />
          <skinnedMesh name="cart_post_AD" geometry={nodes.cart_post_AD.geometry} material={materials['color_main.002']} skeleton={nodes.cart_post_AD.skeleton} />
          <skinnedMesh name="cart_post_AG" geometry={nodes.cart_post_AG.geometry} material={materials['color_main.002']} skeleton={nodes.cart_post_AG.skeleton} />
          <skinnedMesh name="cart_post_AM" geometry={nodes.cart_post_AM.geometry} material={materials['color_main.002']} skeleton={nodes.cart_post_AM.skeleton} />
          <skinnedMesh name="cart_post_Ar" geometry={nodes.cart_post_Ar.geometry} material={materials['color_main.002']} skeleton={nodes.cart_post_Ar.skeleton} />
          <skinnedMesh name="cart_post_ArD" geometry={nodes.cart_post_ArD.geometry} material={materials['color_main.002']} skeleton={nodes.cart_post_ArD.skeleton} />
          <skinnedMesh name="cart_post_ArG" geometry={nodes.cart_post_ArG.geometry} material={materials['color_main.002']} skeleton={nodes.cart_post_ArG.skeleton} />
          <skinnedMesh name="cart_post_crane" geometry={nodes.cart_post_crane.geometry} material={materials['color_main.002']} skeleton={nodes.cart_post_crane.skeleton} />
          <skinnedMesh name="cart_post_DMA" geometry={nodes.cart_post_DMA.geometry} material={materials['color_main.002']} skeleton={nodes.cart_post_DMA.skeleton} />
          <skinnedMesh name="cart_post_DMAr" geometry={nodes.cart_post_DMAr.geometry} material={materials['color_main.002']} skeleton={nodes.cart_post_DMAr.skeleton} />
          <skinnedMesh name="cart_post_GMA" geometry={nodes.cart_post_GMA.geometry} material={materials['color_main.002']} skeleton={nodes.cart_post_GMA.skeleton} />
          <skinnedMesh name="cart_post_GMAr" geometry={nodes.cart_post_GMAr.geometry} material={materials['color_main.002']} skeleton={nodes.cart_post_GMAr.skeleton} />
          <skinnedMesh name="cart_rope" geometry={nodes.cart_rope.geometry} material={materials['color_main.002']} skeleton={nodes.cart_rope.skeleton} />
          <skinnedMesh name="hub_wheel_D" geometry={nodes.hub_wheel_D.geometry} material={materials['color_main.002']} skeleton={nodes.hub_wheel_D.skeleton} />
          <skinnedMesh name="hub_wheel_G" geometry={nodes.hub_wheel_G.geometry} material={materials['color_main.002']} skeleton={nodes.hub_wheel_G.skeleton} />
          <skinnedMesh name="skull_1" geometry={nodes.skull_1.geometry} material={materials['color_main.002']} skeleton={nodes.skull_1.skeleton} />
          <skinnedMesh name="spokes_wheel_D" geometry={nodes.spokes_wheel_D.geometry} material={materials['color_main.002']} skeleton={nodes.spokes_wheel_D.skeleton} />
          <skinnedMesh name="spokes_wheel_G" geometry={nodes.spokes_wheel_G.geometry} material={materials['color_main.002']} skeleton={nodes.spokes_wheel_G.skeleton} />
          <skinnedMesh name="steel_wheel_D" geometry={nodes.steel_wheel_D.geometry} material={materials['color_main.002']} skeleton={nodes.steel_wheel_D.skeleton} />
          <skinnedMesh name="steel_wheel_G" geometry={nodes.steel_wheel_G.geometry} material={materials['color_main.002']} skeleton={nodes.steel_wheel_G.skeleton} />
          <skinnedMesh name="wood_wheel_D" geometry={nodes.wood_wheel_D.geometry} material={materials['color_main.002']} skeleton={nodes.wood_wheel_D.skeleton} />
          <skinnedMesh name="wood_wheel_G" geometry={nodes.wood_wheel_G.geometry} material={materials['color_main.002']} skeleton={nodes.wood_wheel_G.skeleton} />
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/nextjs-blog-deployment/models/ankou/models/ankou-with-cart/model.gltf')