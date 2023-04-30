import Link from "next/link";

export default function Navbar() {
  return (
    <div className="flex flex-row pt-6 mx-6 sticky font-poppins">
      <div className="logo mr-auto md:mx-5">
        <Link href={"/"}>
          <p className="w-80 text-3xl font-bold line-height-[39px] leading-6 font-poppins text-[#245D27]">Gagan Chaudhary</p>
        </Link>
      </div>
      <div className="mx-[28%] nav w-full">
        <ul className="flex mt-0 font-bold font-poppins">
          <Link href={"/about"}>
            <li className="w-40 text-xl font-bold font-poppins text-[#245D27]">About Me</li>
          </Link>
          <Link href={"/projects"}>
            <li className="w-40 text-xl font-bold font-poppins text-[#245D27]">Projects</li>
          </Link>
          <Link href={"/skills"}>
            <li className="w-20 text-xl font-bold font-poppins text-[#245D27]">Skills</li>
          </Link>
          <Link href={"/contact"}>
            <li className="w-60 px-9 text-xl font-bold font-poppins text-[#245D27]">Contact Me</li>
          </Link>
        </ul>
      </div>
    </div>
  );
}
