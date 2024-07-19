import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Image from "next/image";

function Page() {
    return (
        <main>
            <div>
                <button id="prevButton" className="wave"><i className="fa-solid fa-chevron-left"></i></button>
                <button id="nextButton" className="wave"><i className="fa-solid fa-chevron-right"></i></button>
            </div>
            <div className="text">
            <h1 className="h1">Pear</h1>
            <div className="cane-image ">
                <Image src="https://www.yudiz.com/codepen/fruity/cane.svg" alt="" />
                <Image src="https://www.yudiz.com/codepen/fruity/Labels.jpg" alt="" className="cane-labels" />
            </div>
            </div>
            <div className="section-container-main">
            <div className="section-container">
                <section className="section" id="section1">
                <div className="fruit-images">
                    <div className="image-one fruit-image"><Image src="https://www.yudiz.com/codepen/fruity/pear-one.png" alt="pear-image" /></div>
                    <div className="image-two fruit-image"><Image src="https://www.yudiz.com/codepen/fruity/pear-two.png" alt="pear-image" /></div>
                    <div className="image-three fruit-image"><Image src="https://www.yudiz.com/codepen/fruity/pear-three.png" alt="pear-image" /></div>
                    <div className="image-four fruit-image"><Image src="https://www.yudiz.com/codepen/fruity/pear-four.png" alt="pear-image" /></div>
                </div>
                </section>
                <section className="section" id="section2">
                <div className="fruit-images">
                    <div className="image-one fruit-image"><Image src="https://www.yudiz.com/codepen/fruity/apple-one.png" alt="apple-image" /></div>
                    <div className="image-two fruit-image"><Image src="https://www.yudiz.com/codepen/fruity/apple-two.png" alt="apple-image" /></div>
                    <div className="image-three fruit-image"><Image src="https://www.yudiz.com/codepen/fruity/apple-three.png" alt="apple-image" /></div>
                    <div className="image-four fruit-image"><Image src="https://www.yudiz.com/codepen/fruity/apple-four.png" alt="apple-image" /></div>
                </div>
                </section>
                <section className="section" id="section3">
                <div className="fruit-images">
                    <div className="image-one fruit-image"><Image src="https://www.yudiz.com/codepen/fruity/exotic-one.png" alt="exotic-image" /></div>
                    <div className="image-two fruit-image"><Image src="https://www.yudiz.com/codepen/fruity/exotic-two.png" alt="exotic-image" /></div>
                    <div className="image-three fruit-image"><Image src="https://www.yudiz.com/codepen/fruity/exotic-three.png" alt="exotic-image" /></div>
                    <div className="image-four fruit-image"><Image src="https://www.yudiz.com/codepen/fruity/exotic-four.png" alt="exotic-image" /></div>
                </div>
                </section>
            </div>
            </div>
        </main>
    )
}

export default Page;