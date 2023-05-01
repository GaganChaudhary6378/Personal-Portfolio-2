import React from "react";
import Image from "next/image";
export default function landing() {
  return (
    <div className="mt-[180px]">
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
        <button className="pt-[60px] mx-12">Hire Me!</button>
      </div>
    </div>
  );
}
