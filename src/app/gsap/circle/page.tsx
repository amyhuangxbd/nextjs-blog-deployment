'use client'
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import './style.css'

const Nested = () => {
    const circle = useRef<HTMLDivElement | null>(null);
    const container = useRef<HTMLDivElement | null>(null)
    useGSAP(() => {
        gsap.to(circle.current, {
            rotation: "+=360",
            duration: 3,
            repeat: -1,
            ease: "none"
        })
    },{scope: container})

    return (
        <div className="nested" ref={container}>
            <div className="box gradient-green">Selector</div>
            <div ref={circle} className="circle gradient-blue">
                Ref
            </div>
        </div>
    )
}
const Page = () => {
    return ( 
        <div className="gsap-circle">
            <Nested />
            <div className="box gradient-green">Selector</div>
            <div className="circle gradient-blue">Ref - no leaking</div>
        </div>
     );
};

export default Page;