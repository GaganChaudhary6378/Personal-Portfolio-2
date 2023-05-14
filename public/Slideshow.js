import React from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
import { AiOutlineArrowLeft } from "react-icons/ai";
import "react-image-gallery/styles/css/image-gallery.css";
import ImageGallery from 'react-image-gallery';
const Slideshow = () => {
  const images = [
    {
      original: 'ecom1.png',
      thumbnail: 'ecom1.png',
    },
    {
      original: 'ecom2.png',
      thumbnail: 'ecom2.png',
    },
    {
      original: 'ecom3.png/',
      thumbnail: 'ecom3.png/',
    },
    {
      original: 'ecom4.png/',
      thumbnail: 'ecom4.png/',
    },
    {
      original: 'ecom5.png/',
      thumbnail: 'ecom5.png/',
    },
    {
      original: 'ecom6.png/',
      thumbnail: 'ecom6.png/',
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
    <div className="w-[550px] h-[600px]">
      <ImageGallery items={images} infinite='true'/>
    </div>
  );
};

export default Slideshow;
