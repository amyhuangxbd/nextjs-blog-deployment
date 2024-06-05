'use client'
import { Canvas } from "@react-three/fiber";
import Experience from './components/Experience'
import { Physics } from "@react-three/rapier";
import { Suspense } from "react";

const Page = () => {
    return (
        <div className="grid h-screen">
            <Canvas shadows camera={{ position: [10, 10, 10], fov: 30 }}>
                <color attach={'background'} args={['#ececec']} />
                <Suspense>
                    <Physics debug>
                        <Experience />
                    </Physics>
                </Suspense>
            </Canvas>
        </div>
    );
};

export default Page;