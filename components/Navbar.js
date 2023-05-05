import Link from "next/link";
import { useRef } from "react";
import { FiMenu } from "react-icons/fi";
import { useWindowWidth } from "@react-hook/window-size";
export default function Navbar() {
  const windowWidth = useWindowWidth();
  const ref = useRef();

  function openMenu(){
    if(ref.current.classList.contains("block")){
      ref.current.classList.remove("block");
      ref.current.classList.add("hidden");
    }else if(
      !ref.current.classList.contains("block")){
        ref.current.classList.remove("hidden");
        ref.current.classList.add("block");
      }
  }

  return windowWidth > 440 ? (
    <div className="flex flex-row mx-6 sticky font-poppins w-[1495px]">
      <div className="logo mr-auto md:mx-5">
        <Link href={"/"}>
          <p className="md:w-80 md:text-3xl font-bold line-height-[39px] leading-6 font-poppins mt-6 text-[#245D27] text-6xl w-[563px]">
            Gagan Chaudhary
          </p>
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
    </div>
  ) : (
    <div>
      <div className="flex flex-row">
      <Link href={"/"}>
        <p className="font-bold line-height-[39px] leading-6 font-poppins ml-[260px] mt-6 text-[#245D27] text-5xl w-[563px]">
          Gagan Chaudhary
        </p>
      </Link>
      <span><FiMenu className=" mt-4 ml-[100px] text-4xl" onClick={openMenu}/></span>
      </div>
      <div ref={ref} className="w-60 h-[52vh] mr-[40px] fixed mt-[70px] sideCart overflow-y-scroll top-0 right-0 bg-[#eaffeb] px-6 py-10 z-10 hidden rounded-xl">
        <ul>
        <Link href={"/experience"}><li className="nav-line nav-line-ani font-poppins font-bold text-center text-2xl pb-5 pl-5 w-[130px]">Experience</li></Link>
        <Link href={"/projects"}><li className="nav-line nav-line-ani font-poppins font-bold text-center text-2xl pl-5 pb-5 w-[95px]">Projects</li></Link>
          <br></br>
        <Link href={"/skills"}><li className="nav-line nav-line-ani font-poppins font-bold text-center text-2xl pl-5 pb-5 w-[60px]">Skills</li></Link>
        <Link href={"/contact"}><li className="nav-line nav-line-ani font-poppins font-bold text-center pl-5 text-2xl">Contact me</li></Link>
        </ul>
      </div>
    </div>
  );
  
}
