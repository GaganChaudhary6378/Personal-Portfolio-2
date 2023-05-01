import Link from "next/link";

export default function Navbar() {
  return (
    <div className="flex flex-row mx-6 sticky font-poppins w-full">
      <div className="logo mr-auto md:mx-5">
        <Link href={"/"}>
          <p className="w-80 text-3xl font-bold line-height-[39px] leading-6 font-poppins mt-6 text-[#245D27]">Gagan Chaudhary</p>
        </Link>
      </div>
      <div className="mx-[36%] nav w-full">
        <ul className="flex mt-0 font-bold font-poppins gap-10">
          <Link href={"/about"}>
            <li className="nav-line nav-line-ani w-[6rem] text-xl font-bold font-poppins text-[#245D27]">About Me</li>
          </Link>
          <Link href={"/projects"}>
            <li className="nav-line nav-line-ani w-[5rem] text-xl font-bold font-poppins text-[#245D27]">Projects</li>
          </Link>
          <Link href={"/skills"}>
            <li className="nav-line nav-line-ani w-[3.1rem] text-xl font-bold font-poppins text-[#245D27]">Skills</li>
          </Link>
          <Link href={"/contact"}>
            <li className="nav-line nav-line-ani w-[7.3rem] text-xl font-bold font-poppins text-[#245D27]">Contact Me</li>
          </Link>
        </ul>
      </div>
    </div>
  );
}
