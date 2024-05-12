'use client'
import { Canvas } from "@react-three/fiber";
import Experience from "@/app/_components/threejs/Experience";

const Scrolling = props => {
    return ( <div className=" w-100vw h-screen bg-red-200 bg-gradient-to-r from-red-200 to-red-300">
        <Canvas>
            <Experience />
        </Canvas>
    </div> );
};

export default Scrolling;