import React from "react";
import Image from "next/image";
import Link from "next/link";
export default function landing() {
  return (
    <div className="mt-[160px]">
      <h3 className="font-bold font-poppins mx-12">
        Welcome to my personal portfolio.
      </h3>
      <div className="mt-5 font-poppins font-bold text-[80px] leading-[100px] mx-12">
        <p className="text-[#245D27]">Hi! I’m Gagan</p>
        <p className="text-[#245D27]">
          Full Stack <span className="text-[#54AE58]">Developer</span>
        </p>
      </div>
      <div>
        <p className="font-revalia w-[800px] pt-6 mx-12">
          Lorem ipsum dolor sit amet consectetur. Arcu est vitae ullamcorper in
          dolor ut turpis vitae iaculis. Egestas tempor dictum nam lorem
          vulputate etiam iaculis volutpat.
        </p>
      </div>
      <div className="btn">
        <button className=" mx-12 bg-[#B0F2B2] w-[123px] h-[42px] font-revalia text-[17px] rounded-md">Resume!</button>
        <Link href="/projects"><button className="glow-on-hover ml-4 font-revalia font-normal text-[17px] bg-[#F5F5F5] w-[217px] h-[42px]">See my Projects</button></Link>
      </div>
    </div>
  );
}
