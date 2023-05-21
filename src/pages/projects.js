import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useWindowWidth } from "@react-hook/window-size";
import { FaReact } from "react-icons/fa";
import { TbBrandNextjs } from "react-icons/tb";
import { FiChevronsDown } from "react-icons/fi";
import { AiFillGithub } from "react-icons/ai";
import { SiMongodb } from "react-icons/si";
import { IoLogoNodejs } from "react-icons/io";
import { IoLogoVercel } from "react-icons/io5";
import { AiOutlineTwitter } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
import { FaStripe } from "react-icons/fa";
import { SiCss3 } from "react-icons/si";
import { Modal, ModalFooter } from "@chakra-ui/react";
import {
  useDisclosure,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
} from "@chakra-ui/react";
import { getLocalData } from "./localData";
import Slideshow from "./Slideshow";
import Slideshow2 from "./Slideshow2";
import Link from "next/link";
// import * as fs from "fs";

// import Navbar from "../../components/Navbar";
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
import { Container } from "postcss";

export async function getStaticProps() {
  const localData = await getLocalData();

  return {
    props: { localData },
  };
}

export default function about(props) {
  // const [isOpen, setisOpen] = React.useState(false);
  const windowSize = useWindowWidth();
  const [show, setShow] = useState(false);
  // To remove the hydration effect
  const modal1 = useDisclosure();
  const modal2 = useDisclosure();
  const modal3 = useDisclosure();
  const modal4 = useDisclosure();
  const modal5 = useDisclosure();
  const modal6 = useDisclosure();

  const [clicked, isClicked] = useState(false);
  useEffect(() => {
    setShow(true);
  }, []);

  function handleClick(){
    isClicked(!clicked);
    modal1.onOpen();
  }
  const width = windowSize - 20;
  return (
    // opacity-${clicked ? 0 : 0}`}
    show && (
      <div className={`h-[900px] opacity-${clicked ? 10: 100}`}>
         
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
              <p className="font-poppins md:leading-[60px] leading-[150px] md:text-base text-4xl">
                Description 👇
              </p>
            </div>
            <h2 className="md:mt-5 font-poppins  md:text-base text-4xl mt-[100px]">
              Languages Used:
            </h2>
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
              onClick={handleClick}
            >
              <span className="flex flex-row">
                {" "}
                See Details
                <FiChevronsDown className="mt-1" />
              </span>
            </button>
          </div>
          <div>
            <Modal
              className="modal"
              onClose={modal1.onClose}
              isOpen={modal1.isOpen}
              isCentered
              blockScrollOnMount={false}
            >
              <ModalOverlay />
              <ModalContent
                css={{
                  "&::-webkit-scrollbar": {
                    display: "none",
                  },
                }}
                w="40%"
                ml="30%"
                mt="6%"
                h="650px"
                backgroundImage="url('prb.jpg')"
                backgroundSize="1000px"
                backgroundRepeat="no-repeat"
                borderRadius="8px"
                overflowY="scroll"
              >
                <ModalCloseButton
                  ml="580px"
                  mt="1%"
                  position="fixed"
                  zIndex="6"
                  onClick={handleClick}
                />
                <ModalHeader
                  ml="14.3%"
                  mt="0.7%"
                  fontWeight="bold"
                  position="fixed"
                  zIndex="6"
                  fontFamily="revalia"
                >
                  {props.localData[0].title}
                </ModalHeader>
                <ModalBody ml="2%" mr="2%" mb="2%">
                  <div className="mt-[10%] flex justify-center flex-row">
                    <Slideshow />
                  </div>
                  <h2 className="font-bold font-revalia mb-3">Description</h2>
                  <p className="leading-7 font-poppins w-[98%]">
                    {props.localData[0].description}
                  </p>
                </ModalBody>
                <ModalFooter
                  backgroundColor="ivory"
                  paddingBottom="15px"
                  paddingTop="10px"
                >
                  <div className="mr-[38%] flex flex-row justify-center text-center text-3xl gap-9">
                    <Link href="https://github.com/GaganChaudhary6378/E-commerce-Website">
                      <AiFillGithub className="hover:text-yellow-900 hover:cursor-pointer" />
                    </Link>
                    <Link
                      href="https://twitter.com/GaganCh88472243?t=zv6kxbke1RgMP8Z4ebXEwQ&s=08"
                      target="_blank"
                    >
                      <AiOutlineTwitter className="hover:text-blue-900 hover:cursor-pointer" />
                    </Link>
                    <Link
                      href="https://www.linkedin.com/in/gagan-chaudhary-443174216/"
                      target="_blank"
                    >
                      <AiFillLinkedin className="hover:text-blue-900 hover:cursor-pointer" />
                    </Link>
                  </div>
                </ModalFooter>
              </ModalContent>
            </Modal>
          </div>

          {/* Second card */}

          <section className="bx1 ml-[45px] mt-[50px] md:w-[600px] w-[1328px]  md:h-[240px] h-[550px] px-3 rounded-md shadow-neutral-500 shadow-lg  hover:shadow-gray-500 hover:shadow-2xl">
            <div>
              <p className="font-revalia flex flex-row justify-center md:text-xl text-4xl md:mt-0 mt-4">
                Quizzee
              </p>
              <p className="font-poppins md:leading-[60px] leading-[150px] md:text-base text-4xl">
                Description 👇
              </p>
            </div>
            <h2 className="md:mt-5 font-poppins md:text-base text-4xl mt-[100px]">
              Languages Used:
            </h2>
            <div className="md:mt-3 flex flex-row md:text-4xl text-7xl mt-[40px]">
              <FaReact className="ml-0 text-blue-400" />
              <SiCss3 className="ml-5 text-blue-700" />
              <Image
                alt="logo"
                src="/vite.svg"
                width={40}
                height={30}
                className="ml-5 md:h-[33px] md:w-[40px] w-[100px] h-[75px]"
              />
              <IoLogoVercel className="ml-5" />
            </div>
            <button
              className="md:ml-[80%] ml-[85%] mt-7 font-bold font-poppins md:text-base text-3xl"
              onClick={modal2.onOpen}
            >
              <span className="flex flex-row">
                {" "}
                See Details
                <FiChevronsDown className="mt-1" />
              </span>
            </button>
          </section>
          <div>
            <Modal onClose={modal2.onClose} isOpen={modal2.isOpen} isCentered>
              <ModalOverlay />
              <ModalContent
                css={{
                  "&::-webkit-scrollbar": {
                    display: "none",
                  },
                }}
                w="40%"
                ml="30%"
                mt="6%"
                h="650px"
                bg="snow"
                borderRadius="8px"
                overflowY="scroll"
              >
                <ModalCloseButton
                  ml="580px"
                  mt="1%"
                  position="fixed"
                  zIndex="6"
                />
                <ModalHeader
                  display="flex"
                  justifyContent="center"
                  justifyItems="center"
                  alignItems="center"
                  textAlign="center"
                  mt="1%"
                  width="100px"
                  ml="260px"
                  fontWeight="bold"
                  zIndex="6"
                  fontFamily="revalia"
                >
                  {props.localData[1].title}
                </ModalHeader>
                <ModalBody ml="2%" mr="2%" mb="2%">
                  <div className="mt-[10%] flex justify-center flex-row">
                    <Slideshow2 />
                  </div>
                  <h2 className="font-bold font-revalia mb-3">Description</h2>
                  <p className="leading-7 font-poppins w-[98%]">
                    {props.localData[1].description}
                  </p>
                </ModalBody>
                <ModalFooter
                  backgroundColor="gray"
                  paddingBottom="15px"
                  paddingTop="10px"
                >
                  <div className="mr-[38%] flex flex-row justify-center text-center text-3xl gap-9">
                    <Link
                      href="https://github.com/GaganChaudhary6378/Quizzee"
                      target="_blank"
                    >
                      <AiFillGithub className="hover:text-yellow-900 hover:cursor-pointer" />
                    </Link>
                    <Link
                      href=" https://twitter.com/GaganCh88472243?t=zv6kxbke1RgMP8Z4ebXEwQ&s=08"
                      target="_blank"
                    >
                      <AiOutlineTwitter className="hover:text-blue-900 hover:cursor-pointer" />
                    </Link>
                    <Link
                      href="https://www.linkedin.com/in/gagan-chaudhary-443174216/"
                      target="_blank"
                    >
                      <AiFillLinkedin className="hover:text-blue-900 hover:cursor-pointer" />
                    </Link>
                  </div>
                </ModalFooter>
              </ModalContent>
            </Modal>
          </div>
        </div>

        {/* 2nd row */}

        <div className="flex md:flex-row flex-col">
          <section className="bx1 ml-[45px] mt-[50px] md:w-[400px] w-[1328px] md:h-[240px] h-[550px] px-3 rounded-md shadow-neutral-500 shadow-lg  hover:shadow-gray-500 hover:shadow-2xl">
            <div>
              <p className="font-revalia flex flex-row justify-center md:text-xl text-4xl md:mt-0 mt-4">
                Tenzies Game
              </p>
              <p className="font-poppins md:leading-[60px] leading-[150px] md:text-base text-4xl">
                Description 👇
              </p>
            </div>
            <h2 className="md:mt-5 font-poppins md:text-base text-4xl mt-[100px]">
              Languages Used:
            </h2>
            <div className="md:mt-3 mt-[40px] flex flex-row md:text-4xl text-7xl">
              <TbBrandNextjs />
            </div>
            <button
              className="md:ml-[70%] ml-[85%] md:mt-9 font-bold font-poppins md:text-base text-3xl mt-8"
              onClick={modal3.onOpen}
            >
              <span className="flex flex-row">
                {" "}
                See Details
                <FiChevronsDown className="mt-1" />
              </span>
            </button>
            <div>
            <Modal
              className="modal"
              onClose={modal3.onClose}
              isOpen={modal3.isOpen}
              isCentered
              blockScrollOnMount={false}
            >
              <ModalOverlay />
              <ModalContent
                css={{
                  "&::-webkit-scrollbar": {
                    display: "none",
                  },
                }}
                w="40%"
                ml="30%"
                mt="6%"
                h="650px"
                backgroundImage="url('prb.jpg')"
                backgroundSize="1000px"
                backgroundRepeat="no-repeat"
                borderRadius="8px"
                overflowY="scroll"
              >
                <ModalCloseButton
                  ml="580px"
                  mt="1%"
                  position="fixed"
                  zIndex="6"
                  onClick={handleClick}
                />
                <ModalHeader
                  ml="14.3%"
                  mt="0.7%"
                  fontWeight="bold"
                  position="fixed"
                  zIndex="6"
                  fontFamily="revalia"
                >
                  {props.localData[0].title}
                </ModalHeader>
                <ModalBody ml="2%" mr="2%" mb="2%">
                  <div className="mt-[10%] flex justify-center flex-row">
                    <Slideshow />
                  </div>
                  <h2 className="font-bold font-revalia mb-3">Description</h2>
                  <p className="leading-7 font-poppins w-[98%]">
                    {props.localData[0].description}
                  </p>
                </ModalBody>
                <ModalFooter
                  backgroundColor="ivory"
                  paddingBottom="15px"
                  paddingTop="10px"
                >
                  <div className="mr-[38%] flex flex-row justify-center text-center text-3xl gap-9">
                    <Link href="https://github.com/GaganChaudhary6378/E-commerce-Website">
                      <AiFillGithub className="hover:text-yellow-900 hover:cursor-pointer" />
                    </Link>
                    <Link
                      href="https://twitter.com/GaganCh88472243?t=zv6kxbke1RgMP8Z4ebXEwQ&s=08"
                      target="_blank"
                    >
                      <AiOutlineTwitter className="hover:text-blue-900 hover:cursor-pointer" />
                    </Link>
                    <Link
                      href="https://www.linkedin.com/in/gagan-chaudhary-443174216/"
                      target="_blank"
                    >
                      <AiFillLinkedin className="hover:text-blue-900 hover:cursor-pointer" />
                    </Link>
                  </div>
                </ModalFooter>
              </ModalContent>
            </Modal>
            </div>
          </section>

          {/* Second card */}

          <section className="bx1 ml-[45px] mt-[50px] md:w-[600px] w-[1328px] md:h-[240px] h-[550px] px-3 rounded-md shadow-neutral-500 shadow-lg  hover:shadow-gray-500 hover:shadow-2xl">
            <div>
              <p className="font-revalia flex flex-row justify-center md:text-xl text-4xl md:mt-0 mt-4">
                Meme Generator
              </p>
              <p className="font-poppins md:leading-[60px] leading-[150px] md:text-base text-4xl">
                Description 👇
              </p>
            </div>
            <h2 className="md:mt-11 font-poppins md:text-base text-4xl mt-[100px]">
              Languages Used:
            </h2>
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
              <p className="font-poppins md:leading-[60px] leading-[150px] md:text-base text-4xl">
                Description 👇
              </p>
            </div>
            <h2 className="md:mt-5 font-poppins md:text-base text-4xl mt-[100px]">
              Languages Used:
            </h2>
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
              <p className="font-poppins md:leading-[60px] leading-[150px] md:text-base text-4xl">
                Description 👇
              </p>
            </div>
            <h2 className="md:mt-5 font-poppins md:text-base text-4xl mt-[100px]">
              Languages Used:
            </h2>
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
              <p className="font-poppins md:leading-[60px] leading-[150px] md:text-base text-4xl">
                Description 👇
              </p>
            </div>
            <h2 className="md:mt-11 font-poppins md:text-base text-4xl mt-[100px]">
              Languages Used:
            </h2>
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
              <p className="font-poppins md:leading-[60px] leading-[150px] md:text-base text-4xl">
                Description 👇
              </p>
            </div>
            <h2 className="md:mt-11 font-poppins mt-[100px] md:text-base text-4xl">
              Languages Used:
            </h2>
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
