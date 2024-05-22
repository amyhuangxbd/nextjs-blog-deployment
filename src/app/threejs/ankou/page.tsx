'use client'
import { Suspense, useEffect, useState } from "react";
import { Bloom, EffectComposer } from "@react-three/postprocessing";
import { LoadingScreen } from "./components/LoadingScreen.jsx";
import { Canvas } from "@react-three/fiber";
import Experience from './components/Experience.jsx'

const audio = new Audio(`${process.env.BASE_PATH}/models/ankou/audios/song.mp3`)

const Page = () => {
    const [start, setStart] = useState(false);
    useEffect(() => {
      if (start) {
        audio.play();
      }
    }, [start])
    
    return ( 
        <div  className="h-screen w-full bg-lime-200 ">
            <Canvas shadows camera={{ position: [-5, 1, 6], fov: 25 }}>
                <fog attach="fog" args={["#16a04b", 12, 30]} />
                <Suspense fallback={null}>{start && <Experience />}</Suspense>
                <EffectComposer>
                    <Bloom
                        mipmapBlur
                        luminanceThreshold={1}
                        intensity={1.42}
                        radius={0.72}
                    />
                </EffectComposer>
                <LoadingScreen started={start} onStarted={() => setStart(true)} />
            </Canvas>
        </div>
     );
};

export default Page;