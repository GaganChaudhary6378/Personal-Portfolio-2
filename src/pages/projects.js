import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useWindowWidth } from "@react-hook/window-size";
import { FaReact } from "react-icons/fa";
import { TbBrandNextjs } from "react-icons/tb";
import { FiChevronsDown } from "react-icons/fi";
import { SiMongodb } from "react-icons/si";
import { IoLogoNodejs } from "react-icons/io";
import { IoLogoVercel } from "react-icons/io5";
import { FaStripe } from "react-icons/fa";
import { SiCss3 } from "react-icons/si";
import { Modal } from "@chakra-ui/react";
import {
  useDisclosure,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
} from "@chakra-ui/react";

// import {
//   Modal,
//   useDisclosure,
//   ModalOverlay,
//   ModalContent,
//   ModalHeader,
//   ModalCloseButton,
//   ModalBody,
//   Lorem,
//   ModalFooter,
// } from "@chakra-ui/react";
import { Button } from "@chakra-ui/react";
import Image from "next/image";

export default function about() {
  // const [isOpen, setisOpen] = React.useState(false);
  const [isModal, setisModal] = React.useState(false);
  const windowSize = useWindowWidth();
  const [show, setShow] = useState(false);
  // To remove the hydration effect
  const { isOpen, onOpen, onClose } = useDisclosure();

  useEffect(() => {
    setShow(true);
  }, []);
  const width = windowSize - 20;
  return (
    show && (
      <div className="h-[900px]">
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
        <div className="flex md:flex-row flex-col flex-wrap">
          <div className="bx1 ml-[45px] mt-[50px] md:w-[800px] w-[1328px] md:h-[240px] h-[550px] px-3 rounded-md shadow-neutral-500 shadow-lg  hover:shadow-gray-500 hover:shadow-2xl">
            <div>
              <p className="font-revalia flex flex-row justify-center md:text-xl text-4xl md:mt-0 mt-4">
                E-commerce Website
              </p>
              <p className="font-poppins md:leading-[60px] leading-[150px] md:text-base text-4xl">Description 👇</p>
            </div>
            <h2 className="md:mt-5 font-poppins  md:text-base text-4xl mt-[100px]">Languages Used:</h2>
            <div className="md:mt-3 flex flex-row md:text-4xl text-7xl mt-[40px]">
              <TbBrandNextjs className=" " />
              <FaReact className="ml-5 text-blue-400" />
              <IoLogoNodejs className="ml-5 text-green-500" />
              <SiMongodb className="ml-5 text-green-800" />
              <IoLogoVercel className="ml-5" />
              <FaStripe className="ml-5 text-blue-700" />
            </div>
            <button
              className="ml-[85%] mt-7 font-bold font-poppins md:text-base text-3xl"
              onClick={onOpen}
            >
              <span className="flex flex-row">
                {" "}
                See Details
                <FiChevronsDown className="mt-1" />
              </span>
            </button>
          </div>

          <Modal onClose={onClose} isOpen={isOpen} isCentered>
            <ModalOverlay />
            <ModalContent
              w="40%"
              ml="25%"
              mt="10%"
              h="550px"
              bg="gray"
              borderRadius="8px"
            >
              <ModalCloseButton ml="570px" mt="2%" />
              <ModalHeader>Modal Title</ModalHeader>

              <ModalBody>
                <h3>E-Commerce Website</h3>
                <p>Here there will be a image startup.</p>
                <h2>Description</h2>
                <p>Here there should be brief description about project.</p>
              </ModalBody>
            </ModalContent>
          </Modal>

          {/* Second card */}

          <section className="bx1 ml-[45px] mt-[50px] md:w-[600px] w-[1328px]  md:h-[240px] h-[550px] px-3 rounded-md shadow-neutral-500 shadow-lg  hover:shadow-gray-500 hover:shadow-2xl">
            <div>
              <p className="font-revalia flex flex-row justify-center md:text-xl text-4xl md:mt-0 mt-4">
                Quizzee
              </p>
              <p className="font-poppins md:leading-[60px] leading-[150px] md:text-base text-4xl">Description 👇</p>
            </div>
            <h2 className="md:mt-5 font-poppins md:text-base text-4xl mt-[100px]">Languages Used:</h2>
            <div className="md:mt-3 flex flex-row md:text-4xl text-7xl mt-[40px]">
              <FaReact className="ml-0 text-blue-400" />
              <SiCss3 className="ml-5 text-blue-700" />
              <Image
                src="/vite.svg"
                width={40}
                height={30}
                className="ml-5 md:h-[33px] md:w-[40px] w-[100px] h-[75px]"
              />
              <IoLogoVercel className="ml-5" />
            </div>
            <button
              className="md:ml-[80%] ml-[85%] mt-7 font-bold font-poppins md:text-base text-3xl"
              onClick={onOpen}
            >
              <span className="flex flex-row">
                {" "}
                See Details
                <FiChevronsDown className="mt-1" />
              </span>
            </button>
          </section>
          <Modal onClose={onClose} isOpen={isOpen} isCentered>
            <ModalOverlay />
            <ModalContent
              w="40%"
              ml="25%"
              mt="10%"
              h="550px"
              bg="gray"
              borderRadius="8px"
            >
              <ModalCloseButton ml="570px" mt="2%" />
              <ModalHeader>Modal Title</ModalHeader>

              <ModalBody>
                <h3>E-Commerce Website</h3>
                <p>Here there will be a image startup.</p>
                <h2>Description</h2>
                <p>Here there should be brief description about project.</p>
              </ModalBody>
            </ModalContent>
          </Modal>
        </div>

        {/* 2nd row */}

        <div className="flex md:flex-row flex-col">
          <section className="bx1 ml-[45px] mt-[50px] md:w-[400px] w-[1328px] md:h-[240px] h-[550px] px-3 rounded-md shadow-neutral-500 shadow-lg  hover:shadow-gray-500 hover:shadow-2xl">
            <div>
              <p className="font-revalia flex flex-row justify-center md:text-xl text-4xl md:mt-0 mt-4">
                Tenzies Game
              </p>
              <p className="font-poppins md:leading-[60px] leading-[150px] md:text-base text-4xl">Description 👇</p>
            </div>
            <h2 className="md:mt-5 font-poppins md:text-base text-4xl mt-[100px]">Languages Used:</h2>
            <div className="md:mt-3 mt-[40px] flex flex-row md:text-4xl text-7xl">
              <TbBrandNextjs />
            </div>
            <button className="md:ml-[70%] ml-[85%] md:mt-9 font-bold font-poppins md:text-base text-3xl mt-8">
              <span className="flex flex-row">
                {" "}
                See Details
                <FiChevronsDown className="mt-1" />
              </span>
            </button>
          </section>

          {/* Second card */}

          <section className="bx1 ml-[45px] mt-[50px] md:w-[600px] w-[1328px] md:h-[240px] h-[550px] px-3 rounded-md shadow-neutral-500 shadow-lg  hover:shadow-gray-500 hover:shadow-2xl">
            <div>
              <p className="font-revalia flex flex-row justify-center md:text-xl text-4xl md:mt-0 mt-4">
                Meme Generator
              </p>
              <p className="font-poppins md:leading-[60px] leading-[150px] md:text-base text-4xl">Description 👇</p>
            </div>
            <h2 className="md:mt-11 font-poppins md:text-base text-4xl mt-[100px]">Languages Used:</h2>
            <div className="md:mt-3 mt-[40px] flex flex-row md:text-4xl text-7xl">
              <TbBrandNextjs />
            </div>
            <button className="md:ml-[80%] md:mt-2 mt-6 font-bold font-poppins md:text-base text-3xl ml-[85%]">
              <span className="flex flex-row">
                {" "}
                See Details
                <FiChevronsDown className="mt-1" />
              </span>
            </button>
          </section>

          {/* 3rd card */}
          <section className="bx1 ml-[45px] mt-[50px] md:w-[350px] w-[1328px] md:h-[240px] h-[550px] px-3 rounded-md shadow-neutral-500 shadow-lg  hover:shadow-gray-500 hover:shadow-2xl">
            <div>
              <p className="font-revalia flex flex-row justify-center md:text-xl text-4xl md:mt-0 mt-4">
                Travel Journal
              </p>
              <p className="font-poppins md:leading-[60px] leading-[150px] md:text-base text-4xl">Description 👇</p>
            </div>
            <h2 className="md:mt-5 font-poppins md:text-base text-4xl mt-[100px]">Languages Used:</h2>
            <div className="md:mt-3 mt-[40px] flex flex-row md:text-4xl text-7xl">
              <TbBrandNextjs />
            </div>
            <button className="md:ml-[67%] ml-[85%] mt-7 font-bold font-poppins md:text-base text-3xl">
              <span className="flex flex-row">
                {" "}
                See Details
                <FiChevronsDown className="mt-1" />
              </span>
            </button>
          </section>
        </div>

        <div className="flex md:flex-row flex-col w-[1400px] md:w-[1500px]">
          <section className="bx1 ml-[45px] mt-[50px] md:w-[300px] w-[1328px] md:h-[240px] h-[550px] px-3 rounded-md shadow-neutral-500 shadow-lg hover:shadow-gray-500 hover:shadow-2xl">
            <div>
              <p className="font-revalia flex flex-row justify-center md:text-xl text-4xl md:mt-0 mt-4">
                Chrome Dashboard
              </p>
              <p className="font-poppins md:leading-[60px] leading-[150px] md:text-base text-4xl">Description 👇</p>
            </div>
            <h2 className="md:mt-5 font-poppins md:text-base text-4xl mt-[100px]">Languages Used:</h2>
            <div className="md:mt-3 mt-[40px] flex flex-row md:text-4xl text-7xl">
              <TbBrandNextjs />
            </div>
            <button className="md:ml-[60%] ml-[85%] mt-9 font-bold font-poppins md:text-base text-3xl">
              <span className="flex flex-row">
                {" "}
                See Details
                <FiChevronsDown className="mt-1" />
              </span>
            </button>
          </section>

          {/* Second card */}

          <section className="bx1 ml-[45px] mt-[50px] md:w-[500px] w-[1328px] md:h-[240px] h-[550px] px-3 rounded-md shadow-neutral-500 shadow-lg hover:shadow-gray-500 hover:shadow-2xl">
            <div>
              <p className="font-revalia flex flex-row justify-center md:text-xl text-4xl md:mt-0 mt-4">
                Game of war
              </p>
              <p className="font-poppins md:leading-[60px] leading-[150px] md:text-base text-4xl">Description 👇</p>
            </div>
            <h2 className="md:mt-11 font-poppins md:text-base text-4xl mt-[100px]">Languages Used:</h2>
            <div className="md:mt-3 mt-[40px] flex flex-row md:text-4xl text-7xl">
              <TbBrandNextjs />
            </div>
            <button className="md:ml-[77%] ml-[85%] md:mt-3 mt-6 font-bold font-poppins md:text-base text-3xl">
              <span className="flex flex-row">
                {" "}
                See Details
                <FiChevronsDown className="mt-1" />
              </span>
            </button>
          </section>

          <section className="bx1 ml-[45px] mt-[50px] md:w-[550px] w-[1328px] md:h-[240px] h-[550px] px-3 rounded-md shadow-neutral-500 shadow-lg hover:shadow-gray-500 hover:shadow-2xl">
            <div>
              <p className="font-revalia flex flex-row justify-center md:text-xl text-4xl md:mt-0 mt-4">
                Weather App
              </p>
              <p className="font-poppins md:leading-[60px] leading-[150px] md:text-base text-4xl">Description 👇</p>
            </div>
            <h2 className="md:mt-11 font-poppins mt-[100px] md:text-base text-4xl">Languages Used:</h2>
            <div className="md:mt-3 mt-[40px] flex flex-row md:text-4xl text-7xl">
              <TbBrandNextjs />
            </div>
            <button className="md:ml-[80%] ml-[85%] md:mt-2 mt-6 font-bold font-poppins md:text-base text-3xl">
              <span className="flex flex-row">
                {" "}
                See Details
                <FiChevronsDown className="mt-1" />
              </span>
            </button>
          </section>
        </div>
      </div>
    )
  );
}
