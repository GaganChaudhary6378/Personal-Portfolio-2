import Navbar from "../../components/Navbar";
import { ImHtmlFive } from "react-icons/im";
import { SiCss3 } from "react-icons/si";
import { SiJavascript } from "react-icons/si";
import { SiTailwindcss } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { TbBrandNextjs } from "react-icons/tb";
import { SiMongodb } from "react-icons/si";
import { IoLogoNodejs} from "react-icons/io";
import { BsGit} from "react-icons/bs";
import { AiFillGithub} from "react-icons/ai";
import { IoLogoVercel} from "react-icons/io5";
import { SiTypescript} from "react-icons/si";

import Image from "next/image";


export default function about() {
  return (
    <div className="skills font-bold h-[980px]">
      {/* Web development */}
      <div className="mt-6 ml-12">
        <p className=" text-xl text-[#3fa244] font-semibold font-revalia">
          Web Development
        </p>
        <div className="flex flex-row mt-8">
        <ImHtmlFive className="mt-6 text-6xl text-red-500"/>
        <p className="mt-9 ml-4 font-revalia">HTML</p>
        <SiCss3 className="mt-6 text-6xl ml-[130px] text-blue-700"/>
        <p className="mt-9 ml-4 font-revalia ">CSS</p>
        <SiJavascript className="mt-6 text-6xl ml-[135px] text-yellow-300"/>
        <p className="mt-9 ml-6 font-revalia ">JavaScript</p>
        <SiTailwindcss className="mt-6 text-6xl ml-[110px] text-sky-400"/>
        <p className="mt-9 ml-4 font-revalia ">Tailwind CSS</p>
        <FaReact className="mt-6 text-6xl ml-[120px] text-sky-400"/>
        <p className="mt-9 ml-4 font-revalia ">ReactJS</p> 
        </div>
        <div className="flex flex-row">
        <TbBrandNextjs className="mt-14 text-6xl"/>
        <p className="mt-[70px] ml-4 font-revalia ">NextJS</p> 
        <SiMongodb className="mt-14 text-6xl ml-[110px] text-green-600"/>
        <p className="mt-[70px] ml-4 font-revalia ">MongoDB</p> 
        <IoLogoNodejs className="mt-14 text-6xl ml-[85px] text-green-600"/>
        <p className="mt-[70px] ml-6 font-revalia ">NodeJS</p> 
        </div>
        
      </div>    
      {/* Data structures */}
      <div className="mt-[70px] ml-12">
        <p className=" text-xl text-[#3fa244] font-semibold font-revalia">
          Data Structures
        </p>
        <div className="flex flex-row mt-8">
        <i className="programming lang-cpp mt-6 text-5xl"></i>
        <p className="mt-12 ml-4 font-revalia">Cpp</p>
        <i className="programming lang-c mt-8 ml-[125px] text-5xl"></i>
        <p className="mt-12 ml-6 font-revalia">C</p>
        <i className="programming lang-java mt-5 ml-[150px] text-5xl"></i>
        <p className="mt-12 ml-6 font-revalia">Java</p>
        
        </div>
      </div>
      {/* Others */}
      <div className="mt-[70px] ml-12">
        <p className=" text-xl text-[#3fa244] font-semibold font-revalia">
          Others
        </p>
        <div className="flex flex-row mt-6">
        <BsGit className="mt-8 text-6xl text-red-600"/>
        <p className="mt-[50px] ml-4 font-revalia ">Git</p> 
        <AiFillGithub className="mt-8 text-6xl ml-[155px]"/>
        <p className="mt-[50px] ml-8 font-revalia ">Github</p> 
        <IoLogoVercel className="mt-8 text-6xl ml-[120px]"/>
        <p className="mt-[50px] ml-6 font-revalia ">Vercel</p> 
        <Image src="figma-icon.svg" width={50} height={50} className="mt-8 ml-[155px]"></Image>
        <p className="mt-[50px] ml-6 font-revalia ">Figma</p> 
        </div>
      </div>
      {/* Learning*/}
      <div className="mt-[70px] ml-12">
        <p className=" text-xl text-[#3fa244] font-semibold font-revalia">
          Learning
        </p>
        <div className="flex flex-row mt-6">
        <SiTypescript className="mt-8 text-6xl text-blue-500"/>
        <p className="mt-[50px] ml-4 font-revalia ">TypeScript</p>
        <Image src="./framer.svg" width={50} height={50} className="mt-8 ml-[80px]"></Image>
        <p className="mt-[50px] ml-8 font-revalia ">Framer</p>
        </div>
      </div>
    </div>
  );
}
