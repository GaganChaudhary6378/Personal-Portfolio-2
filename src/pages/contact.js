// import { useState } from "react";
import React from "react";
import { useRouter } from "next/router";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Link from "next/link";
// import { useEffect } from "react";
import { TfiLinkedin} from 'react-icons/tfi';
import {BsTwitter} from 'react-icons/bs';
import {BsGithub} from 'react-icons/bs';
import {AiFillMail} from 'react-icons/ai';


export default function about() {
  const router=useRouter();
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [message, setMessage] = React.useState("");
  const handleChange = (e) => {
    if (e.target.name == "name") {
      setName(e.target.value);
    }
     else if (e.target.name == "email") {
      setEmail(e.target.value);
    } else if (e.target.name == "message") {
      setMessage(e.target.value);
    }
  };

  async function handleSubmit(e) {
    e.preventDefault();
    const data = { name, email, message };
    let res = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/postdetails`, {
      method: "POST", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    let response = await res.json();
    setName("");
    setEmail("");
    setMessage("");
    toast.success("Thanks for contacting!", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
    
  }
  return (
    <div>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <div className="container md:my-14 md:px-6 my-24 px-[160px]">
        <section className="mb-32 text-gray-800 text-center">
          <div className="px-6 py-12 md:px-12">
            <div className="container mx-auto xl:px-32">
              <div className="grid lg:grid-cols-2 items-center">
                <div className="md:mt-12 lg:mt-0 mb-12 lg:mb-0">
                  <div className="block rounded-lg shadow-lg px-6 py-12 md:px-12 lg:-mr-14">
                    <div className="mb-7 flex flex-row gap-16 ml-[100px] text-3xl"> 
                    <Link href="https://www.linkedin.com/in/gagan-chaudhary-443174216/"><TfiLinkedin className=" hover:cursor-pointer hover:text-[#245D27]"/></Link>
                    <Link href="https://twitter.com/GaganCh88472243?t=zv6kxbke1RgMP8Z4ebXEwQ&s=08"><BsTwitter className="hover:cursor-pointer hover:text-[#245D27]"/></Link>
                    <Link href="https://github.com/GaganChaudhary6378"><BsGithub className=" hover:cursor-pointer hover:text-[#245D27]"/></Link>
                    <Link href="mailto:singhgaganbtp@gmail.com"><AiFillMail className="hover:cursor-pointer hover:text-[#245D27]"/></Link>
                    </div>
                    <h2 className="md:text-3xl font-bold mb-12 font-revalia text-[#245D27] text-4xl">
                      Contact Me
                    </h2>
                    <form className="md:w-auto w-[500px] h-[400px] md:h-auto mb-0" onSubmit={handleSubmit} action="#" method="POST">
                    <input type="hidden" name="remember" value="true" />
                      <div className="form-group mb-6 font-revalia">
                        <input
                          type="text"
                          id="exampleFormControlInput4"
                          onChange={handleChange}
                          value={name}
                          name="name"
                          className="form-control block md:w-full w-[600px] h-[90px] md:px-3 px-5 md:h-auto md:py-1.5 md:text-base text-[1.5rem] font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-[#245D27] focus:outline-none"
                          placeholder="Name"
                        />
                      </div>
                      <div className="form-group mb-6 font-revalia">
                        <input
                          type="email"
                          value={email}
                          name="email"
                          onChange={handleChange}
                          className="form-control block md:w-full w-[600px] h-[90px] md:px-3 px-5 py-1.5 md:h-auto md:text-base text-[1.5rem] font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-[#245D27] focus:outline-none"
                          id="email"
                          placeholder="Email address"
                        />
                      </div>
                      <div className="form-group mb-6 font-revalia">
                        <textarea
                          className="form-control block md:w-full w-[600px] md:px-3 px-5 md:py-1.5 py-5 md:h-auto h-[100px] md:text-base text-[1.5rem] font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-[#245D27] focus:outline-none"
                          id="message"
                          value={message}
                          onChange={handleChange}
                          rows="3"
                          name="message"
                          placeholder="Message"
                        ></textarea>
                      </div>

                      <button
                        type="submit"
                        className="md:w-full w-[600px] px-6 py-2.5 md:h-auto h-[40px] bg-[#B0F2B2] font-revalia font-bold md:text-xs text-[1rem] leading-tight uppercase rounded shadow-md hover:bg-[#245D27] hover:text-white hover:shadow-lg focus:bg-[#245D27] focus:shadow-lg focus:outline-none focus:ring-0 active:bg-[#245D27] active:shadow-lg transition duration-150 ease-in-out"
                      >
                        Send
                      </button>
                    </form>
                  </div>
                </div>
                <div className="md:mb-12 lg:mb-0">
                  <div className="map-container shadow-lg rounded-sm ml-14">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1246.777895021813!2d77.50903162176061!3d27.20617084838325!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3973a313f59c0519%3A0xbc0d3a7e5dd64a66!2sKothi%20Rose%20villa%20marriage%20home!5e0!3m2!1sen!2sin!4v1682960061944!5m2!1sen!2sin"
                      width="600"
                      height="550"
                      allowFullScreen=""
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    // </div>
  );
}
