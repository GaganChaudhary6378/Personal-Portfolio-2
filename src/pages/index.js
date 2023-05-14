import React from "react";
import Link from "next/link";
import Typewriter from "typewriter-effect";
export default function landing() {
  return (
    <div>
      <div className="md:mt-[160px] mt-[1000px] md:ml-0 ml-[240px]">
        <h3 className="font-bold font-poppins md:mx-12 mx-[250px] w-[600px] md:text-sm text-2xl">
          Welcome to my personal portfolio.
        </h3>
        <div className="mt-5 font-poppins font-bold md:text-[75px] text-[120px] leading-[100px] md:mx-12 ">
          <p className="text-[#245D27] mx-[50px] w-[850px] md:mx-0">
            Hi! I’m Gagan
          </p>
          {/* <p className="text-[#245D27]"> */}
          <div
            id="app"
            className="text-[#54AE58] md:mx-0 md:leading-none leading-[14rem] mx-[-110px] w-[1200px] md:text-[75px] text-[110px]"
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
          <p className="font-revalia md:w-[800px] md:pt-6 md:mx-12 w-[1100px] ml-[-110px] text-[40px] md:text-base leading-[5rem] md:leading-6 mt-6 md:mt-0">
            Lorem ipsum dolor sit amet consectetur. Arcu est vitae ullamcorper
            in dolor ut turpis vitae iaculis. Egestas tempor dictum nam lorem
            vulputate etiam iaculis volutpat.
          </p>
        </div>
        <div className="btn">
          <a href="resume.pdf" download="resume.pdf">
            <button className="md:mx-12 bg-[#B0F2B2] md:w-[123px] md:h-[42px] font-revalia md:text-[17px] rounded-md h-[90px] w-[300px] text-[30px] mx-[300px] mt-[150px] md:mt-0 text-center">
              Resume!
            </button>
          </a>
          <a href="/projects">
            <button className="glow-on-hover md:ml-4 font-revalia font-normal md:text-[17px] bg-[#F5F5F5] md:w-[217px] md:h-[42px] mx-[247px] mt-[100px] w-[400px] h-[100px] md:mt-0 text-[30px] text-center">
              See my Projects
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}
