import Link from "next/link";
import { useEffect } from "react";
import { useState } from "react";
import { useRef } from "react";
import { FiMenu } from "react-icons/fi";
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
          <div className="md:w-80 md:text-3xl font-bold line-height-[39px] leading-6 font-poppins mt-6 text-[#245D27] text-6xl w-[563px] ">
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
        <div className="font-bold line-height-[39px] leading-6 font-poppins mt-6 text-[#245D27] text-6xl w-[563px]">
          Gagan Chaudhary
        </div>
      </Link>
      <div className="mt-6 ml-[880px] text-4xl absolute">
        <p><FiMenu onClick={openMenu} /></p>
      </div>
      </div>

      <div
        ref={ref}
        className="w-60 h-[56vh] mr-[86px] fixed mt-[70px] top-0 right-0 bg-[#eaffeb] px-6 py-10 z-10 hidden rounded-xl"
      >
        <ul>
          <Link href={"/experience"}>
            <li className="nav-line nav-line-ani font-poppins font-bold text-center text-2xl pb-5 pl-5 w-[130px]">
              Experience
            </li>
          </Link>
          <Link href={"/projects"}>
            <li className="nav-line nav-line-ani font-poppins font-bold text-center text-2xl pl-5 pb-5 w-[95px]">
              Projects
            </li>
          </Link>
          <br></br>
          <Link href={"/skills"}>
            <li className="nav-line nav-line-ani font-poppins font-bold text-center text-2xl pl-5 pb-5 w-[60px]">
              Skills
            </li>
          </Link>
          <Link href={"/contact"}>
            <li className="nav-line nav-line-ani font-poppins font-bold text-center pl-5 text-2xl">
              Contact me
            </li>
          </Link>
        </ul>
      </div>
    </div>
  ));
}
