import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useWindowWidth } from "@react-hook/window-size";
import { FaReact } from "react-icons/fa";
import { BsGithub} from "react-icons/bs";
import { TbBrandNextjs } from "react-icons/tb";
import { FiChevronsDown } from "react-icons/fi";
import { SiMongodb, SiVercel } from "react-icons/si";
import { IoLogoNodejs } from "react-icons/io";
import { SiTailwindcss } from "react-icons/si";
import { IoLogoVercel } from "react-icons/io5";
import { AiOutlineTwitter, AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import { FaStripe } from "react-icons/fa";
import { SiCss3 } from "react-icons/si";
import { motion, useScroll } from "framer-motion";
import { Modal, ModalFooter } from "@chakra-ui/react";
import {
  useDisclosure,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
} from "@chakra-ui/react";
import { getLocalData } from "../../components/localData";
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

import Image from "next/image";
import { RxVercelLogo } from "react-icons/rx";

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


  const [clicked, isClicked] = useState(false);

  function toggle(){
    isClicked(!clicked);
  }
  useEffect(() => {
    setShow(true);
  }, []);

  const width = windowSize - 20;
  return (
    
    // opacity-${clicked ? 0 : 0}`}
    show && (
      
      <div className={`h-[1100px] opacity-${clicked ? 10 : 100}`}>
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
          <div className="bx1 ml-[45px] mt-[50px] md:w-[800px] w-[1328px] md:h-[280px] h-[550px] px-3 rounded-md shadow-neutral-500 shadow-lg  hover:shadow-gray-500 hover:shadow-2xl">
            <div>
              <p className="font-revalia flex flex-row justify-center md:text-xl text-4xl md:mt-0 mt-4 text-green-700">
                E-commerce Website
              </p>
              <p className="font-poppins md:leading-[60px] leading-[150px] md:text-base text-4xl font-semibold">
                Description 👇
              </p>
              <p className="font-poppins">
              Designed for seamless shopping, Loopcart showcases a captivating collection of trendy apparel, cozy hoodies, stylish mugs, and captivating stickers. Explore, select, and effortlessly place your order, all within our user-friendly platform.
              </p>
            </div>
            <h2 className="md:mt-5 font-poppins  md:text-base text-4xl mt-[100px] font-semibold">
              Stack Used:
            </h2>
            <div className="md:mt-3 flex flex-row md:text-4xl text-7xl mt-[40px]">
              <TbBrandNextjs className=" " />
              <FaReact className="ml-5 text-blue-400" />
              <IoLogoNodejs className="ml-5 text-green-500" />
              <SiMongodb className="ml-5 text-green-800" />
              <IoLogoVercel className="ml-5" />
              <FaStripe className="ml-5 text-blue-700" />
              <BsGithub className="ml-5"/>
              <SiTailwindcss className="ml-5 text-sky-600"/>
            </div>
            <button
              className="ml-[85%] font-bold font-poppins md:text-base text-3xl"
              onClick={() => {
                isClicked(!clicked);
                modal1.onOpen();
              }}
            >
              <span className="flex flex-row" id="1">
                {" "}
                See Details
                <FiChevronsDown className="mt-1 animate-bounce" />
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
                  onClick={toggle}
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

          <section className="bx1 ml-[45px] mt-[50px] md:w-[600px] w-[1328px]  md:h-[280px] h-[550px] px-3 rounded-md shadow-neutral-500 shadow-lg  hover:shadow-gray-500 hover:shadow-2xl">
            <div>
              <p className="font-revalia flex flex-row justify-center md:text-xl text-4xl md:mt-0 mt-4 text-green-700">
                Quizzee
              </p>
              <p className="font-poppins md:leading-[60px] leading-[150px] md:text-base text-4xl font-semibold">
                Description 👇
              </p>
              <p className="font-poppins">
              Prepare to be captivated by Quizzical, the immersive quiz app that ignites your intellect, challenges your mind, and propels you towards the pinnacle of knowledge.
              </p>
            </div>
            <h2 className="md:mt-5 font-poppins md:text-base text-4xl mt-[100px] font-semibold">
              Stack Used:
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
              className="md:ml-[80%] ml-[85%] font-bold font-poppins md:text-base text-3xl" onClick={() => {
                isClicked(!clicked);
                modal2.onOpen();
              }}
            >
              <span className="flex flex-row">
                {" "}
                See Details
                <FiChevronsDown className="mt-1 animate-bounce"/>
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
                  onClick={toggle}
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
          <section className="bx1 ml-[45px] mt-[50px] md:w-[400px] w-[1328px] md:h-[300px] h-[550px] px-3 rounded-md shadow-neutral-500 shadow-lg  hover:shadow-gray-500 hover:shadow-2xl">
            <div>
              <p className="font-revalia flex flex-row justify-center md:text-xl text-4xl md:mt-0 mt-4 text-green-700">
                Tenzies Game
              </p>
              <p className="font-poppins md:leading-[60px] leading-[150px] md:text-base text-4xl font-semibold">
                Description 👇
              </p>
              <p className="font-poppins">
              Get ready to roll the dice and test your skill in Tenzies, the fast-paced game where selecting identical dice is the ultimate challenge.
              </p>
            </div>
            <h2 className="md:mt-5 font-poppins md:text-base text-4xl mt-[100px] font-semibold">
              Stack Used:
            </h2>
            <div className="md:mt-3 mt-[40px] flex flex-row md:text-4xl text-7xl">
            <FaReact className="ml-5 text-blue-400" />
            <BsGithub className="ml-5"/>
            <SiCss3 className="ml-5 text-blue-700" />
            <SiVercel className="ml-5"/>
            </div>
            <button
              className="md:ml-[70%] ml-[85%] md:mt-5 font-bold font-poppins md:text-base text-3xl mt-8"
              onClick={() => {
                isClicked(!clicked);
                modal3.onOpen();
              }}
            >
              <span className="flex flex-row">
                {" "}
                See Details
                <FiChevronsDown className="mt-1 animate-bounce"/>
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

          <section className="bx1 ml-[45px] mt-[50px] md:w-[600px] w-[1328px] md:h-[300px] h-[550px] px-3 rounded-md shadow-neutral-500 shadow-lg  hover:shadow-gray-500 hover:shadow-2xl">
            <div>
              <p className="font-revalia flex flex-row justify-center md:text-xl text-4xl md:mt-0 mt-4 text-green-700">
                Meme Generator
              </p>
              <p className="font-poppins md:leading-[60px] leading-[150px] md:text-base text-4xl font-semibold">
                Description 👇
              </p>
              <p className="font-poppins">
              Embrace the chaos of Meme-o-Matic, where the collision of random images and your creative genius results in meme magic that will have the online world in hysterics.
              </p>
            </div>
            <h2 className="mt-5 font-poppins md:text-base text-4xl font-semibold">
              Stack Used:
            </h2>
            <div className="md:mt-3 mt-[40px] flex flex-row md:text-4xl text-7xl">
            <FaReact className="ml-5 text-blue-400" />
            <BsGithub className="ml-5"/>
            <SiCss3 className="ml-5 text-blue-700" />
            <SiVercel className="ml-5"/>
            </div>
            <button className="md:ml-[80%] md:mt-5 font-bold font-poppins md:text-base text-3xl ml-[85%]">
              <span className="flex flex-row" onClick={() => {
                isClicked(!clicked);
                modal4.onOpen();
              }}>
                {" "}
                See Details
                <FiChevronsDown className="mt-1 animate-bounce" />
              </span>
            </button>
            <Modal
              className="modal"
              onClose={modal4.onClose}
              isOpen={modal4.isOpen}
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
          </section>

          {/* 3rd card */}
          <section className="bx1 ml-[45px] mt-[50px] md:w-[350px] w-[1328px] md:h-[300px] h-[550px] px-3 rounded-md shadow-neutral-500 shadow-lg  hover:shadow-gray-500 hover:shadow-2xl">
            <div>
              <p className="font-revalia flex flex-row justify-center md:text-xl text-4xl md:mt-0 mt-4 text-green-700">
                Travel Journal
              </p>
              <p className="font-poppins md:leading-[60px] leading-[150px] md:text-base text-4xl font-semibold">
                Description 👇
              </p>
              <p className="font-poppins">
              Travel Chronicles: heartfelt journal, photos, Google Map locations of extraordinary adventures.
              </p>
            </div>
            <h2 className="md:mt-5 font-poppins md:text-base text-4xl mt-[100px] font-semibold">
              Stack Used:
            </h2>
            <div className="md:mt-3 mt-[40px] flex flex-row md:text-4xl text-7xl">
            <FaReact className="ml-5 text-blue-400" />
            <BsGithub className="ml-5"/>
            <SiCss3 className="ml-5 text-blue-700" />
            <SiVercel className="ml-5"/>
            </div>
            <button className="md:ml-[67%] ml-[85%] mt-5 font-bold font-poppins md:text-base text-3xl" onClick={() => {
                isClicked(!clicked);
                modal5.onOpen();
              }}>
              <span className="flex flex-row">
                {" "}
                See Details
                <FiChevronsDown className="mt-1 animate-bounce" />
              </span>
            </button>
            <Modal
              className="modal"
              onClose={modal5.onClose}
              isOpen={modal5.isOpen}
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
          </section>
        </div>

        <div className="flex md:flex-row flex-col w-[1400px] md:w-[1500px]">
          <section className="bx1 ml-[45px] mt-[50px] md:w-[700px] w-[1328px] md:h-[240px] h-[550px] px-3 rounded-md shadow-neutral-500 shadow-lg hover:shadow-gray-500 hover:shadow-2xl">
            <div>
              <p className="font-revalia flex flex-row justify-center md:text-xl text-4xl md:mt-0 mt-4 text-green-700 ">
                Chrome Dashboard
              </p>
              <p className="font-poppins md:leading-[60px] leading-[150px] md:text-base text-4xl font-semibold">
                Description 👇
              </p>
              <p className="font-poppins">
              Introducing the Chrome Dashboard: a user-friendly tool to track cryptocurrency values and personalize your browsing experience. Stay up to date with real-time prices, all in one place.
              </p>
            </div>
            <h2 className="md:mt-5 font-poppins md:text-base text-4xl mt-[100px] font-semibold">
              Stack Used:
            </h2>
            <div className="md:mt-3 mt-[40px] flex flex-row md:text-4xl text-7xl">
              <TbBrandNextjs />
            </div>
            <button className="md:ml-[60%] ml-[85%] mt-9 font-bold font-poppins md:text-base text-3xl">
              <span className="flex flex-row">
                {" "}
                See Details
                <FiChevronsDown className="mt-1 animate-bounce" />
              </span>
            </button>
          </section>

          {/* Second card */}

          <section className="bx1 ml-[45px] mt-[50px] md:w-[500px] w-[1328px] md:h-[240px] h-[550px] px-3 rounded-md shadow-neutral-500 shadow-lg hover:shadow-gray-500 hover:shadow-2xl">
            <div>
              <p className="font-revalia flex flex-row justify-center md:text-xl text-4xl md:mt-0 mt-4 text-green-700">
                Game of war
              </p>
              <p className="font-poppins md:leading-[60px] leading-[150px] md:text-base text-4xl font-semibold">
                Description 👇
              </p>
            </div>
            <h2 className="md:mt-11 font-poppins md:text-base text-4xl mt-[100px] font-semibold">
              Stack Used:
            </h2>
            <div className="md:mt-3 mt-[40px] flex flex-row md:text-4xl text-7xl">
              <TbBrandNextjs />
            </div>
            <button className="md:ml-[77%] ml-[85%] md:mt-3 mt-6 font-bold font-poppins md:text-base text-3xl">
              <span className="flex flex-row">
                {" "}
                See Details
                <FiChevronsDown className="mt-1 animate-bounce" />
              </span>
            </button>
          </section>

          <section className="bx1 ml-[45px] mt-[50px] md:w-[550px] w-[1328px] md:h-[240px] h-[550px] px-3 rounded-md shadow-neutral-500 shadow-lg hover:shadow-gray-500 hover:shadow-2xl">
            <div>
              <p className="font-revalia flex flex-row justify-center md:text-xl text-4xl md:mt-0 mt-4 text-green-700">
                Weather App
              </p>
              <p className="font-poppins md:leading-[60px] leading-[150px] md:text-base text-4xl font-semibold">
                Description 👇
              </p>
              <p className="font-poppins">
              Introducing WeatherApp: Your personal weather app delivering real-time updates on temperature, humidity, air pressure, and more, for any city you desire. Stay informed and stay prepared, with WeatherWise at your fingertips.
              </p>
            </div>
            <h2 className="md:mt-11 font-poppins mt-[100px] md:text-base text-4xl font-semibold">
              Stack Used:
            </h2>
            <div className="md:mt-3 mt-[40px] flex flex-row md:text-4xl text-7xl">
              <TbBrandNextjs />
            </div>
            <button className="md:ml-[80%] ml-[85%] md:mt-2 mt-6 font-bold font-poppins md:text-base text-3xl">
              <span className="flex flex-row">
                {" "}
                See Details
                <FiChevronsDown className="mt-1 animate-bounce" />
              </span>
            </button>
          </section>
        </div>
      </div>
    )
  );
}
