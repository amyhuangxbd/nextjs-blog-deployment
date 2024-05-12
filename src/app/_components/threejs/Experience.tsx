
import { OrbitControls } from '@react-three/drei'

const Experience = props => {
  return (
    <>
      <OrbitControls />
      <mesh>
        <boxGeometry />
        <meshNormalMaterial />
      </mesh>
    </>
  )
}

export default Experience
