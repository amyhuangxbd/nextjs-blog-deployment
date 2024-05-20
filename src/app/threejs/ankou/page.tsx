'use client'
import { Suspense, useEffect, useState } from "react";
import { Bloom, EffectComposer } from "@react-three/postprocessing";
import { LoadingScreen } from "./components/LoadingScreen.jsx";
import { Canvas } from "@react-three/fiber";
import Experience from './components/Experience.jsx'

const Page = () => {
    const [start, setStart] = useState(false);
    return ( 
        <div  className="h-screen w-full bg-lime-200 ">
            <Canvas shadows camera={{ position: [-5, 1, 6], fov: 25 }}>
                <fog attach="fog" args={["#16a04b", 12, 30]} />
                <Suspense fallback={null}>{start && <Experience />}</Suspense>
                <LoadingScreen started={start} onStarted={() => setStart(true)} />
            </Canvas>
        </div>
     );
};

export default Page;