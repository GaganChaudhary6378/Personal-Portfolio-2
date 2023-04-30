import Link from "next/link";

export default function Navbar() {
  return (
    <div className="flex flex-col md:flex-row md:justify-start justify-center items-center py-2 mb-1 shadow-md shadow-gray-300 sticky top-0 z-10 bg-white">
      <div className="logo mr-auto md:mx-5">
        <Link href={"/"}>
          <h1>Gagan Chaudhary</h1>
        </Link>
      </div>
      <div className="nav">
        <ul className="flex items-centre  md:-mt-2 gap-4 font-bold mt-4">
          <Link href={"/about"}>
            <li>About Me</li>
          </Link>
          <Link href={"/projects"}>
            <li>Projects</li>
          </Link>
          <Link href={"/skills"}>
            <li>Skills</li>
          </Link>
          <Link href={"/contact"}>
            <li>Contact Me</li>
          </Link>
        </ul>
      </div>
    </div>
  );
}
