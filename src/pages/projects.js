import { motion } from "framer-motion";
import React from "react";
import { TbBrandNextjs } from "react-icons/tb";
import { FiChevronsDown } from "react-icons/fi";

export default function about() {
  const [isOpen, setisOpen] = React.useState(false);
  return (
    <div>
      {/* <motion.div
        className="card1 bg-red-400"
        onClick={() => setisOpen(!isOpen)}
      >
        <motion.h2 className="heading1 bg-slate-400 w-[80px] ml-[200px] mt-[200px] pl-3">
          Project1
        </motion.h2>
        {isOpen && (
          <motion.div>
            <p>
              Contrary to popular belief, Lorem Ipsum is not simply random text.
              It has roots in a piece of classical Latin literature from 45 BC,
              making it over 2000 years old. Richard McClintock, a Latin
              professor at Hampden-Sydney College in Virginia, looked up one of
              the more obscure Latin words, consectetur, from a Lorem Ipsum
              passage,
            </p>
            <p>
              Contrary to popular belief, Lorem Ipsum is not simply random text.
              It has roots in a piece of classical Latin literature from 45 BC,
              making it over 2000 years old. Richard McClintock
            </p>
          </motion.div>
        )} */}
      {/* </motion.div> */}
      <div className="flex flex-row">
        <section className="ml-[45px] mt-[50px] w-[800px] bg-[#c6f9c9] h-[240px] px-3 rounded-md shadow-neutral-800 shadow-lg hover:shadow-lime-800 hover:shadow-2xl">
          <div>
            <p className="font-revalia flex flex-row justify-center text-xl">
              E-commerce Website(Loopcart)
            </p>
            <p className="font-poppins leading-[60px]">Description 👇</p>
          </div>
          <h2 className="mt-5 font-poppins">Languages Used:</h2>
          <div>
            <TbBrandNextjs />
          </div>
          <button className="ml-[83%] mt-9 font-bold font-poppins">
            <span className="flex flex-row">
              See Details
              <FiChevronsDown className="mt-1" />
            </span>
          </button>
        </section>

        {/* Second card */}

        <section className="ml-[45px] mt-[50px] w-[600px] bg-[#c6f9c9] h-[240px] px-3 rounded-md shadow-neutral-800 shadow-lg  hover:shadow-lime-800 hover:shadow-2xl">
          <div>
            <p className="font-revalia flex flex-row justify-center text-xl">
              Quizzical
            </p>
            <p className="font-poppins leading-[60px]">Description 👇</p>
          </div>
          <h2 className="mt-5 font-poppins">Languages Used:</h2>
          <div>
            <TbBrandNextjs />
          </div>
          <button className="ml-[80%] mt-9 font-bold font-poppins">
            <span className="flex flex-row">
              {" "}
              See Details
              <FiChevronsDown className="mt-1" />
            </span>
          </button>
        </section>
      </div>

      {/* 2nd row */}

      <div className="flex flex-row">
        <section className="ml-[45px] mt-[50px] w-[400px] bg-[#c6f9c9] h-[240px] px-3 rounded-md shadow-neutral-800 shadow-lg  hover:shadow-lime-800 hover:shadow-2xl">
          <div>
            <p className="font-revalia flex flex-row justify-center text-xl">
              E-commerce Website(Loopcart)
            </p>
            <p className="font-poppins leading-[60px]">Description 👇</p>
          </div>
          <h2 className="mt-5 font-poppins">Languages Used:</h2>
          <div>
            <TbBrandNextjs />
          </div>
          <button className="ml-[70%] mt-3 font-bold font-poppins">
            <span className="flex flex-row">
              {" "}
              See Details
              <FiChevronsDown className="mt-1" />
            </span>
          </button>
        </section>

        {/* Second card */}

        <section className="ml-[45px] mt-[50px] w-[600px] bg-[#c6f9c9] h-[240px] px-3 rounded-md shadow-neutral-800 shadow-lg  hover:shadow-lime-800 hover:shadow-2xl">
          <div>
            <p className="font-revalia flex flex-row justify-center text-xl">
              Personal Dashboard
            </p>
            <p className="font-poppins leading-[60px]">Description 👇</p>
          </div>
          <h2 className="mt-11 font-poppins">Languages Used:</h2>
          <div>
            <TbBrandNextjs />
          </div>
          <button className="ml-[80%] mt-3 font-bold font-poppins">
            <span className="flex flex-row">
              {" "}
              See Details
              <FiChevronsDown className="mt-1" />
            </span>
          </button>
        </section>

        <section className="ml-[45px] mt-[50px] w-[350px] bg-[#c6f9c9] h-[240px] px-3 rounded-md shadow-neutral-800 shadow-lg  hover:shadow-lime-800 hover:shadow-2xl">
          <div>
            <p className="font-revalia flex flex-row justify-center text-xl">
              E-commerce Website(Loopcart)
            </p>
            <p className="font-poppins leading-[60px]">Description 👇</p>
          </div>
          <h2 className="mt-5 font-poppins">Languages Used:</h2>
          <div>
            <TbBrandNextjs />
          </div>
          <button className="ml-[67%] mt-3 font-bold font-poppins">
            <span className="flex flex-row">
              {" "}
              See Details
              <FiChevronsDown className="mt-1" />
            </span>
          </button>
        </section>
      </div>

      <div className="flex flex-row">
        <section className="ml-[45px] mt-[50px] w-[300px] bg-[#c6f9c9] h-[240px] px-3 rounded-md shadow-neutral-800 shadow-lg hover:shadow-lime-800 hover:shadow-2xl">
          <div>
            <p className="font-revalia flex flex-row justify-center text-xl">
              E-commerce Website(Loopcart)
            </p>
            <p className="font-poppins leading-[60px]">Description 👇</p>
          </div>
          <h2 className="mt-5 font-poppins">Languages Used:</h2>
          <div>
            <TbBrandNextjs />
          </div>
          <button className="ml-[60%] mt-4 font-bold font-poppins">
            <span className="flex flex-row">
              {" "}
              See Details
              <FiChevronsDown className="mt-1" />
            </span>
          </button>
        </section>

        {/* Second card */}

        <section className="ml-[45px] mt-[50px] w-[500px] bg-[#c6f9c9] h-[240px] px-3 rounded-md shadow-neutral-800 shadow-lg hover:shadow-lime-800 hover:shadow-2xl">
          <div>
            <p className="font-revalia flex flex-row justify-center text-xl">
              Chrome Extension
            </p>
            <p className="font-poppins leading-[60px]">Description 👇</p>
          </div>
          <h2 className="mt-11 font-poppins">Languages Used:</h2>
          <div>
            <TbBrandNextjs />
          </div>
          <button className="ml-[77%] mt-5 font-bold font-poppins">
            <span className="flex flex-row">
              {" "}
              See Details
              <FiChevronsDown className="mt-1" />
            </span>
          </button>
        </section>

        <section className="ml-[45px] mt-[50px] w-[550px] bg-[#c6f9c9] h-[240px] px-3 rounded-md shadow-neutral-800 shadow-lg hover:shadow-lime-800 hover:shadow-2xl">
          <div>
            <p className="font-revalia flex flex-row justify-center text-xl">
              E-commerce Website(Loopcart)
            </p>
            <p className="font-poppins leading-[60px]">Description 👇</p>
          </div>
          <h2 className="mt-11 font-poppins">Languages Used:</h2>
          <div>
            <TbBrandNextjs />
          </div>
          <button className="ml-[80%] mt-5 font-bold font-poppins">
            <span className="flex flex-row">
              {" "}
              See Details
              <FiChevronsDown className="mt-1" />
            </span>
          </button>
        </section>
      </div>
    </div>
  );
}