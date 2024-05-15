'use client'
import { MantineProvider } from '@mantine/core';
import { Canvas } from "@react-three/fiber";
import Experience from "./components/Experience";
import React from 'react';
import Interface from './components/Interface';
import { CharacterAnimationsProvider } from './contexts/CharacterAnimations';

const Animate = () => {
    return ( <React.StrictMode>
        <MantineProvider withGlobalStyles withNormalizeCSS theme={{
            globalStyles: (_theme) => ({
                body: {
                    width: '100vw',
                    height: '100vh'
                },
                '#animate-wrap': {
                    width: '100%',
                    height: '100vh'
                }
            })
        }}>
            <CharacterAnimationsProvider>
                <div id='animate-wrap'>
                    <Canvas shadows camera={{ position: [1, 1.5, 2.5], fov: 50 }}>
                        <Experience />
                    </Canvas>
                    <Interface />
                </div>
            </CharacterAnimationsProvider>
            
        </MantineProvider>
    </React.StrictMode> );
};

export default Animate;