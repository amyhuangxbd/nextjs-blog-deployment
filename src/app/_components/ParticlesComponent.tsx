import { useCallback, useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import type { Container, Engine } from "@tsparticles/engine";
// import { loadAll } from "@/tsparticles/all"; // if you are going to use `loadAll`, install the "@tsparticles/all" package too.
// import { loadFull } from "tsparticles"; // if you are going to use `loadFull`, install the "tsparticles" package too.
import { loadSlim } from "@tsparticles/slim"; // if you are going to use `loadSlim`, install the "@tsparticles/slim" package too.
// import { loadBasic } from "@tsparticles/basic"; // if you are going to use `loadBasic`, install the "@tsparticles/basic" package too.
import '@/app/styles/particles.css'

const ParticlesComponent = () => {
    const [init, setInit] = useState(false);

    // this should be run only once per application lifetime
    useEffect(() => {
        initParticlesEngine(async (engine) => {
            // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
            // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
            // starting from v2 you can add only the features you need reducing the bundle size
            //await loadAll(engine);
            //await loadFull(engine);
            await loadSlim(engine);
            //await loadBasic(engine);
        }).then(() => {
            setInit(true);
        });
    }, []);

    // const particlesLoaded = (container) => {
    //     console.log(container);
    // };

    return (
         init ? <Particles
            id="tsparticles"
            // particlesLoaded={particlesLoaded}
            options={{
                // color: ["#03dac6", "#ff0266", "#000000"],
                connectParticles: true,
                // responsive: [
                //     {
                //     breakpoint: 768,
                //     options: {
                //         color: ["#faebd7", "#03dac6", "#ff0266"],
                //         maxParticles: 43,
                //         connectParticles: false
                //     }
                //     }
                // ],
                background: {
                    color: {
                        value: '#060b20',
                    },
                    image: "linear-gradient(to right, #060b20, #050c23)",
                    position: "50% 50%",
                    repeat: "no-repeat",
                    size: "cover",
                },
                fpsLimit: 120,
                fullScreen: false,
                // interactivity: {
                //     events: {
                //         onClick: {
                //             enable: true,
                //             mode: "push",
                //         },
                //         onHover: {
                //             enable: true,
                //             mode: "repulse",
                //         },
                //         resize: true,
                //     },
                //     modes: {
                //         push: {
                //             quantity: 4,
                //         },
                //         repulse: {
                //             distance: 200,
                //             duration: 0.4,
                //         },
                //     },
                // },
                particles: {
                    // color: ["#03dac6", "#ff0266", "#000000"],
                    color: {
                        value: ["#03dac6", "#ff0266", "#000000"],
                    },
                    links: {
                        color: ["#faebd7", "#03dac6", "#ff0266"],
                        distance: 150,
                        enable: true,
                        opacity: 0.5,
                        width: 1,
                    },
                    move: {
                        direction: "none",
                        enable: true,
                        outModes: {
                            default: "bounce",
                        },
                        random: false,
                        speed: 6,
                        straight: false,
                        trail: {
                            fill: {
                                color: '#ffff00'
                            }
                        }
                    },
                    number: {
                        density: {
                            enable: true,
                            // area: 800,
                        },
                        value: 80,
                    },
                    opacity: {
                        value: 0.5,
                    },
                    // shape: {
                    //     type: "circle",
                    // },
                    // size: {
                    //     value: { min: 1, max: 5 },
                    // },
                },
                detectRetina: true,
            }}
        />
    : null
)};

export default ParticlesComponent;