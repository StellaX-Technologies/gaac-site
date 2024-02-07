"use client";
import React, { useState } from "react";
import Image from "next/image";
import img from "@/public/Image/Saly-10.png";
import logo from "@/public/Image/image-4.png";
import Link from "next/link";
import { useRouter } from "next/navigation";
import axios from "axios";
// import input from "@/components/shared/Input/page";

type User = {
  name?: string;
  email?: string;
  password?: string;
  register?: string;
  year?: string;
};

const Signup = () => {
  const router = useRouter();
  const [errorMessage, setErrorMessage]=useState<string>('')
  const [user, setUser] =useState<User>({
    name: "",
    email: "",
    password: "",
    register: "",
    year: "",
  });

  const handleSignup = async() => {
    try{
    const response= await axios.post("/api/signup", user)
    console.log(response.data)
    router.push("/auth/signin")
    }catch(error:any){
      console.log(error)
      setErrorMessage(error.response.data.error)
      
    }

  };
  return (
    <main className="bg-black min-h-screen md:p-5 lg:p-10 flex">
      <div className="hidden md:flex flex-col w-1/2">
        <div className="hidden md:flex justify-between  p-5 md:p-0">
          <Link href="/">
            <button className="text-white bg-[#8E01FD]  rounded-lg py-2 px-5 ">
              Back
            </button>
          </Link>
          <Image src={logo} alt="Logo" />
        </div>

        <div className=" hidden md:flex relative  ">
          <div className="h-full w-full ">
            <Image src={img} className="h-[624px] w-[801px]" alt="gaac" />
          </div>
          <h2 className="absolute text-white mt-[266px] w-10/12 mx-auto text-center ">
            The Gitam Aero Astro Club was established in Nov 2020. We aim at
            upholding the cognitive aspect of education by ensuring academic
            excellence and intellectual growth of its students.{" "}
          </h2>
        </div>
      </div>

      <div className="  w-full md:w-1/2 flex justify-center items-center  md:mt-0 flex-col ">
        <div className="mb-10 mt-5 px-3 flex justify-between gap-32 md:hidden ">
          <Link href="/">
            <button className="text-white bg-[#8E01FD]  rounded-lg py-2 px-5 ">
              Back
            </button>
          </Link>
          <Image src={logo} alt="Logo" />
        </div>
        <div className="hidden md:flex">
          <Image src={logo} alt="Logo" />
        </div>

        <div
          
          className=" grid  space-y-10 px-10 md:px-0"
        >
          <div>
            <label>
              <span className="text-white sm:text-sm md:text-xl  font-semibold">
                Name
              </span>
            </label>
            <input
            className="rounded-lg w-full mx-auto p-2 bg-[#716F6F]"
              placeholder="Enter your Name"
              id="name"
              value={user.name}
              onChange={(e) => setUser({ ...user, name: e.target.value })}
              required
              type="text"
            />
          </div>
          <div>
            <label>
              <span className="text-white sm:text-sm md:text-xl  font-semibold">
                Mail
              </span>
            </label>
            <input
            className="rounded-lg w-full mx-auto p-2 bg-[#716F6F]"
              id="email"
              value={user.email}
              onChange={(e) => setUser({ ...user, email: e.target.value })}
              required
              type="email"
              placeholder="Enter your Gitam mail"
            />
          </div>
          <div>
            <label>
              <span className="text-white sm:text-sm md:text-xl  font-semibold">
                Password
              </span>
            </label>

            <input
            className="rounded-lg w-full mx-auto p-2 bg-[#716F6F]"
              id="password"
              value={user.password}
              onChange={(e) => setUser({ ...user, password: e.target.value })}
              required
              type="password"
              placeholder="Enter your Password"
            />
          </div>

          <div className="flex gap-4">
            <div className="w-3/5">
              <label>
                <span className="text-white sm:text-sm md:text-xl  font-semibold">
                  Registration No.
                </span>
              </label>

              <input
              className="rounded-lg w-full mx-auto p-2 bg-[#716F6F]"
                type="number"
                id="register"
                value={ user.register}
                onChange={(e) => setUser({ ...user, register:(e.target.value) })}
                required
                placeholder="Enter your registration number"
              />
            </div>
            <div className="w-2/5">
              <label>
                <span className="text-white sm:text-sm md:text-xl  font-semibold">
                  Year
                </span>
              </label>

              <input
              className="rounded-lg w-full mx-auto p-2 bg-[#716F6F]"
                type="number"
                id="year"
                value={ user.year}
                onChange={(e) => setUser({ ...user, year: (e.target.value) })}
                required
                placeholder="Enter year"
              />
            </div>
          </div>

          <div className="flex gap-1 justify-center">
            <p className="text-white">Already a member? </p>
            <Link href="/auth/signin">
              <p className=" text-[#3D74FF]">Sign in</p>
            </Link>

          </div>

          <div>
            <p className="text-xl text-red-600 text-center">{errorMessage} </p>
          </div>

          <div className="bg-[#8E01FD]  hover:bg-blue-700 w-32 mx-auto text-center rounded-lg">
            <button
            onClick={handleSignup}
              className=" text-white cursor-pointer p-2"
              
              type="submit">Sign up</button>
            
          </div>
        </div>
      </div>
    </main>
  );
};

export default Signup;
