"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import HeroButton from "./hero-button";
import Genetic from "@/public/assets/home/genetic.svg";

const AvatarIntro = (props) => {
  const [visible, setvisible] = useState(true);
  function onScroll(e) {
    console.log("e: ", e);
    const scrollTop = document.documentElement.scrollTop;
    if (scrollTop > 50) {
      setvisible(false);
    } else {
      setvisible(true);
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <div
      className={`flex fixed min-h-screen top-0 left-0 w-100vw pointer-events-none overflow-hidden transition-opacity ease-in-out duration-500 transition-opacity-cubic-bezier ${visible ? "" : "opacity-0"}`}
    >
      <div className="flex flex-wrap items-end">
        <div className=" pt-0 pr-0 pb-14 pl-14">
          <div className=" w-14 pt-0 pr-0 pb-14 pl-0">
            <Image src={Genetic} alt="" style={{ height: 50 }} />
          </div>
          <h2 className="font-normal text-5xl line-height-52px overflow-hidden">
            <span>
              <span className="block ">Web Developer</span>
            </span>
            <span>
              <span>Web Developer</span>
            </span>
          </h2>
          <p className=" mt-3 mr-0 mb-18 ml-0 overflow-hidden font-bold max-w-xs">
            <span className="block transition-opacity-cubic-bezier transform-translate3d">
              A BARRIER-FREE EXPERIENCE FOR MILLIONS OF USERS.
            </span>
          </p>
          <p className="max-w-xs w-full">
            A Metaverse should be open to everyone. Sougen has been conceived
            with web technologies, to be accessible from any device through the
            browser in just 1 click.
          </p>
          <HeroButton />
        </div>
      </div>
    </div>
  );
};

export default AvatarIntro;
