import { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim"; // if you are going to use `loadSlim`, install the "@tsparticles/slim" package too.
import '@/app/styles/particles.css'

const ParticlesComponent = () => {
    const [init, setInit] = useState(false);

    // this should be run only once per application lifetime
    useEffect(() => {
        initParticlesEngine(async (engine) => {
            // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
            // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
            // starting from v2 you can add only the features you need reducing the bundle size
            await loadSlim(engine);
        }).then(() => {
            setInit(true);
        });
    }, []);

    return (
         init ? <Particles
            id="tsparticles"
            options={{
                connectParticles: true,
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
                particles: {
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
                },
                detectRetina: true,
            }}
        />
    : null
)};

export default ParticlesComponent;