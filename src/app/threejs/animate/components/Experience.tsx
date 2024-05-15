import { GridHelper } from 'three'
import { extend } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import Woman from './Woman.jsx'
const Experience = () => {
  return (
    <>
      <OrbitControls />
      <ambientLight />
      <directionalLight
        position={[-5, 5, 5]}
        castShadow
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
      />
      <group position={[0, -1, 0]}>
        <Woman />
      </group>
      <mesh
        rotation={[-0.5 * Math.PI, 0, 0]}
        position={[0, -1, 0]}
        receiveShadow
      >
        <planeBufferGeometry args={[10, 10, 1, 1]} />
        <shadowMaterial transparent opacity={0.2} />
      </mesh>
    </>
  )
    // return ( 
    //   <>
    //     <OrbitControls />
    //     <ambientLight />
    //     <directionalLight position={[-5, 5, 5]} castShadow shadow-mapSize={1024} />
    //     <group position={[0, -1, 0]}>
    //       <Woman />
    //     </group>
    //     <mesh rotation={[-0.5 * Math.PI, 0, 0]} position={[0, -1, 0]} receiveShadow>
    //       <planeBufferGeometry args={[10, 10, 1, 1]} />
    //       <shadowMaterial transparent opacity={0.2} />
    //     </mesh>
    //   </>
    //  );
};

// Create our custom element
class BoxBufferGeometry extends GridHelper {}
class PlaneBufferGeometry extends GridHelper {}

// Extend so the reconciler will learn about it
extend({ BoxBufferGeometry, PlaneBufferGeometry })

declare module '@react-three/fiber' {
    interface ThreeElements {
      customElement: BoxBufferGeometry
    }
  }

export default Experience;