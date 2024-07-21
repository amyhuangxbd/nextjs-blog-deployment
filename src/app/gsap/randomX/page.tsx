'use client'
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef, useState } from "react";
import './style.css'

const randomX = gsap.utils.random(-200, 200, 1, true);

const Page = () => {
    const [endX, setEndX] = useState(0)

    const boxRef = useRef<HTMLDivElement | null>(null)
    const container = useRef<HTMLDivElement | null>(null)

    useGSAP(() => {
        gsap.to(
            boxRef.current,
            {
                x: endX,
                duration: 1
            }
        )
    }, {dependencies: [endX], revertOnUpdate: false})
    return ( 
        <div className="gsap-circle" ref={container}>
            <button onClick={() => setEndX(randomX())}>Pass in a randomized value</button>

            <div className="box gradient-blue" ref={boxRef}>{endX}</div>
        </div>
     );
};

export default Page;