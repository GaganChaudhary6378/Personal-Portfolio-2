import React from "react";
import Image from "next/image";
export default function landing() {
  return (
    <div className="mt-[180px] mx-12 font-bold font-poppins">
      <h3 >Welcome to my personal portfolio.</h3>
      <div className="mt-5 font-poppins font-bold text-[80px] leading-[100px]">
        <p className="text-[#245D27]">Hi! I’m Gagan</p>
        <p className="text-[#245D27]">Full Stack <span className="text-[#54AE58]">Developer</span></p>
      </div>
    </div>
  );
}
