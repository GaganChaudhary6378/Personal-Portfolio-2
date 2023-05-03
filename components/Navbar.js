import Link from "next/link";

export default function Navbar() {
  return (
    <div className="flex flex-row mx-6 sticky font-poppins w-full overflow-hidden">
      <div className="logo mr-auto md:mx-5">
        <Link href={"/"}>
          <p className="md:w-80 md:text-3xl font-bold line-height-[39px] leading-6 font-poppins mt-6 text-[#245D27] text-[30px] w-[290px]">Gagan Chaudhary</p>
        </Link>
      </div>
      <div className="mx-[36%] nav w-full">
        <ul className="flex mt-0 font-bold font-poppins gap-10">
          <Link href={"/experience"}>
            <li className="nav-line nav-line-ani md:w-[6.7rem] md:text-xl font-bold font-poppins text-[#245D27] text-2xl w-[8rem]">Experience</li>
          </Link>
          <Link href={"/projects"}>
            <li className="nav-line nav-line-ani w-[5rem] md:text-xl font-bold font-poppins text-[#245D27] text-2xl">Projects</li>
          </Link>
          <Link href={"/skills"}>
            <li className="nav-line nav-line-ani w-[3.1rem] md:text-xl font-bold font-poppins text-[#245D27] text-2xl">Skills</li>
          </Link>
          <Link href={"/contact"}>
            <li className="nav-line nav-line-ani md:w-[7.3rem] md:text-xl font-bold font-poppins text-[#245D27] text-2xl w-[10rem]">Contact Me</li>
          </Link>
        </ul>
      </div>
    </div>
  );
}
