import Link from "next/link";
import { useEffect } from "react";
import { useState } from "react";
import { useRef } from "react";
import { FiMenu } from "react-icons/fi";
import { RxCross2 } from "react-icons/rx";

import { useWindowWidth } from "@react-hook/window-size";
export default function Navbar() {
  
  const [show, setShow] = useState(false);
  // To remove the hydration effect
  useEffect(() => {
    setShow(true);
  }, []);
  const windowWidth = useWindowWidth();
  const ref = useRef();

  function openMenu() {
    if (ref.current.classList.contains("block")) {
      ref.current.classList.remove("block");
      ref.current.classList.add("hidden");
    } else if (!ref.current.classList.contains("block")) {
      ref.current.classList.remove("hidden");
      ref.current.classList.add("block");
    }
  }
  
  return (
    windowWidth > 440 ? (
    (show && <div className="flex flex-row mx-6 font-poppins w-[1496px]">
      <div className="logo mr-auto md:mx-5">
        <Link href={"/"}>
          <div className="md:w-80 md:text-3xl font-bold line-height-[39px] leading-6 font-zeyada mt-6 text-[#245D27] text-6xl w-[563px] ">
            Gagan Chaudhary
          </div>
        </Link>
      </div>
      <div className="mx-[38%] nav w-full">
        <ul className="flex mt-0 font-bold font-poppins gap-10">
          <Link href={"/experience"}>
            <li className="nav-line nav-line-ani md:w-[6.7rem] md:text-xl font-bold font-poppins text-[#245D27] text-2xl w-[8rem]">
              Experience
            </li>
          </Link>
          <Link href={"/projects"}>
            <li className="nav-line nav-line-ani w-[5rem] md:text-xl font-bold font-poppins text-[#245D27] text-2xl">
              Projects
            </li>
          </Link>
          <Link href={"/skills"}>
            <li className="nav-line nav-line-ani w-[3.1rem] md:text-xl font-bold font-poppins text-[#245D27] text-2xl">
              Skills
            </li>
          </Link>
          <Link href={"/contact"}>
            <li className="nav-line nav-line-ani md:w-[7.3rem] md:text-xl font-bold font-poppins text-[#245D27] text-2xl w-[10rem]">
              Contact Me
            </li>
          </Link>
        </ul>
      </div>
    </div>)
  ) : ( show &&
    <div className="font-poppins ml-[430px] w-[1000px]">
      <div className="flex flex-row ">
      <Link href={"/"}>
        <div className="font-bold line-height-[39px] leading-6 font-zeyada ml-[20px] mt-11 text-[#245D27] text-8xl w-[600px]">
          Gagan Chaudhary
        </div>
      </Link>
      <div className="mt-9 ml-[880px] text-4xl absolute">
        <p><FiMenu onClick={openMenu} /></p>
      </div>
      </div>

      <div
        ref={ref}
        className="w-full h-full fixed mt-[-68px] right-0 drop z-10 hidden animate-fade-in-down"
      >
        {show && <div>
          <RxCross2 className="text-8xl flex text-right w-full ml-[44%] mt-6" onClick={openMenu}/>
        </div>}
        <ul className="flex flex-col justify-center text-center mt-[30%] gap-[150px] font-revalia font-semibold text-white">
        <Link href={"/"}>
         
            <li className="nav-line nav-line-ani text-center text-7xl" onClick={openMenu}>
              About Me
            </li>
          </Link>
          <Link href={"/experience"}>
            <li className="nav-line nav-line-ani text-center text-7xl" onClick={openMenu}>
              Experience
            </li>
          </Link>
          <Link href={"/projects"}>
            <li className="nav-line nav-line-ani text-center text-7xl" onClick={openMenu}>
              Projects
            </li>
          </Link>
          <Link href={"/skills"}>
            <li className="nav-line nav-line-ani text-center text-7xl" onClick={openMenu}>
              Skills
            </li>
          </Link>
          <Link href={"/contact"}>
            <li className="nav-line nav-line-ani text-center text-7xl" onClick={openMenu}>
              Contact me
            </li>
          </Link>
        </ul>
      </div>
    </div>
  ));
}
