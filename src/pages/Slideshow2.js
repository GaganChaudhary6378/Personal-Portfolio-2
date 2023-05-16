import React from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
import { AiOutlineArrowLeft } from "react-icons/ai";
import "react-image-gallery/styles/css/image-gallery.css";
import ImageGallery from 'react-image-gallery';
const Slideshow2 = () => {
  const images = [
    {
      original: 'quiz1.png',
      thumbnail: 'quiz1.png',
    },
    {
      original: 'quiz2.png',
      thumbnail: 'quiz2.png',
    },
    {
      original: 'quiz3.png/',
      thumbnail: 'quiz3.png/',
    },
    
  ];

  // const zoomInProperties = {
  //   indicators:true,
  //   scale: 1.2,
  //   duration: 5000,
  //   transitionDuration: 500,
  //   infinity: true,

  //   // here we are making our arrow buttons
  //   prevArrow: (
  //     <div className="ml-10 top-30 md:top-50">
  //       <AiOutlineArrowLeft className="h-8 w-8 text-black cursor-pointer"/>
  //     </div>
  //   ),
  //   nextArrow: (
  //     <div className="mr-10 top-30 md:top-50">
  //      <AiOutlineArrowRight className="h-8 w-8 text-black cursor-pointer"/>
  //     </div>
  //   ),
  // };
  return (
    <div className="w-[580px] h-[400px]">
      <ImageGallery items={images} infinite='true'/>
    </div>
  );
};

export default Slideshow2;
