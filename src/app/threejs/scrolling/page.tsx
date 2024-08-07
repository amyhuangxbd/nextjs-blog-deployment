'use client'
import { Canvas } from "@react-three/fiber";
import Experience from "@/app/_components/threejs/Experience";

const Scrolling = () => {
    return ( <div className=" w-100vw h-screen bg-red-200 bg-gradient-to-r from-red-200 to-red-300">
        <Canvas camera={{
            fov: 64,
            position: [2.3, 1.5, 2.3],
        }}>
            <Experience />
        </Canvas>
    </div> );
};

export default Scrolling;