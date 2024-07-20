'use client'
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import './style.css'

const Page = () => {
    const arr = [1, 2, 3, 4, 5, 6];
    const container = useRef<HTMLDivElement | null>(null)

    useGSAP(() => {
        gsap.from(
            '.circle',
            {
                scale: 0,
                duration: 1,
                repeat: -1,
                ease: "power2.inOut",
                yoyo: true,
                stagger: {
                    each: 0.2
                }
            }
        )
    }, {scope: container})
    return ( 
        <div className="gsap-circle" ref={container}>
            {
                arr.map((item, index) => (
                    <div key={index}  className="circle gradient-blue">{item}</div>
                ))
            }
        </div>
     );
};

export default Page;