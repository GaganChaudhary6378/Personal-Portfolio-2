import Navbar from "../../components/Navbar";
import { ImHtmlFive } from "react-icons/im";
import { SiCss3 } from "react-icons/si";
import { SiJavascript } from "react-icons/si";
import { SiTailwindcss } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { TbBrandNextjs } from "react-icons/tb";
import { SiMongodb } from "react-icons/si";
import { IoLogoNodejs} from "react-icons/io";
import { TbBrandCpp} from "react-icons/tb";



export default function about() {
  return (
    <>
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
        <SiJavascript className="mt-6 text-6xl ml-[130px] text-yellow-300"/>
        <p className="mt-9 ml-4 font-revalia ">JavaScript</p>
        <SiTailwindcss className="mt-6 text-6xl ml-[120px] text-sky-400"/>
        <p className="mt-9 ml-4 font-revalia ">Tailwind CSS</p>
        <FaReact className="mt-6 text-6xl ml-[120px] text-sky-400"/>
        <p className="mt-9 ml-4 font-revalia ">ReactJS</p> 
        </div>
        <div className="flex flex-row">
        <TbBrandNextjs className="mt-14 text-6xl"/>
        <p className="mt-[70px] ml-4 font-revalia ">NextJS</p> 
        <SiMongodb className="mt-14 text-6xl ml-[110px] text-green-600"/>
        <p className="mt-[70px] ml-4 font-revalia ">MongoDB</p> 
        <IoLogoNodejs className="mt-14 text-6xl ml-[80px] text-green-600"/>
        <p className="mt-[70px] ml-4 font-revalia ">NodeJS</p> 
        </div>
        
      </div>
      {/* Data structures */}
      <div className="mt-[70px] ml-12">
        <p className=" text-xl text-[#3fa244] font-semibold font-revalia">
          Data Structures
        </p>
        <div className="flex flex-row">
        <TbBrandCpp className="mt-6 text-6xl "/>
        <p className="mt-10 ml-4 font-revalia">Cpp</p>
        </div>
      </div>
      {/* Others */}
      <div className="mt-[200px] ml-12">
        <p className=" text-xl text-[#3fa244] font-semibold font-revalia">
          Others
        </p>
      </div>
      {/* Learning*/}
      <div className="mt-[200px] ml-12">
        <p className=" text-xl text-[#3fa244] font-semibold font-revalia">
          Learning
        </p>
      </div>
    </>
  );
}
