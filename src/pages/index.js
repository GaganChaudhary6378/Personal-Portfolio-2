import React from "react";
import Link from "next/link";
import Typewriter from "typewriter-effect";
export default function landing() {
  return (
    <div className="md:mt-[160px] mt-[600px] ">
      <h3 className="font-bold font-poppins md:mx-12 mx-[330px] w-[300px]">
        Welcome to my personal portfolio.
      </h3>
      <div className="mt-5 font-poppins font-bold text-[80px] leading-[100px] md:mx-12 ">
        <p className="text-[#245D27] mx-[190px] w-[600px] md:mx-0">
          Hi! I’m Gagan
        </p>
        {/* <p className="text-[#245D27]"> */}
        <div
          id="app"
          className="text-[#54AE58] md:mx-0 mx-[78px] md:leading-none leading-[10rem] w-[900px] text-[76px]"
        >
          <Typewriter
            options={{
              strings: ["Full Stack Developer."],
              autoStart: true,
              loop: true,
            }}
          />
        </div>
        {/* </p> */}
      </div>
      <div>
        <p className="font-revalia md:w-[800px] md:pt-6 md:mx-12 w-[800px] mx-[80px] text-[30px] md:text-base leading-[4rem] md:leading-6 mt-6 md:mt-0">
          Lorem ipsum dolor sit amet consectetur. Arcu est vitae ullamcorper in
          dolor ut turpis vitae iaculis. Egestas tempor dictum nam lorem
          vulputate etiam iaculis volutpat.
        </p>
      </div>
      <div className="btn">
        <button className="md:mx-12 bg-[#B0F2B2] md:w-[123px] md:h-[42px] font-revalia md:text-[17px] rounded-md h-[70px] w-[200px] text-[25px] mx-[370px] mt-5 md:mt-0 text-center">
          Resume!
        </button>
        <Link href="/projects">
          <button className="glow-on-hover md:ml-4 font-revalia font-normal md:text-[17px] bg-[#F5F5F5] md:w-[217px] md:h-[42px] mx-[320px] mt-16 w-[300px] h-[70px] md:mt-0 text-[25px] text-center">
            See my Projects
          </button>
        </Link>
      </div>
    </div>
  );
}
