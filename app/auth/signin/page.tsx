"use client";
import React, { useState } from "react";
import Image from "next/image";
import img from "@/public/Image/Saly-10.png";
import logo from "@/public/Image/image-4.png";
import Link from "next/link";
import { useRouter } from "next/navigation";
import axios from "axios";

type User = {
  email: string;
  password: string;
};

const page = () => {
  const router = useRouter();

  const [error, errorMessage] = useState<string>("");
  const [user, setUser] = useState<User>({
    email: "",
    password: "",
  });

  const handleSignin = async () => {
    try {
      const response= await axios.post("/api/signin", user);
      console.log("login success", response.data)
      router.push("/")
    } catch (error: any) {
      console.log("login failed", error.message);
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
        <div className="mb-10 mt-5 px-3 flex justify-between gap-32 md:hidden lg:hidden">
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

        <form
          onSubmit={handleSignin}
          className=" grid  space-y-10 px-10 md:px-0"
        >
          <div>
            <label>
              <span className="text-white sm:text-sm md:text-xl  font-semibold">
                Mail
              </span>
            </label>
            <input
              className="rounded-lg w-full mx-auto p-2 bg-[#716F6F]"
              id="email"
            type="email"
            value={user.email}
            onChange={(e) => setUser({...user, email: e.target.value})}
              placeholder="Enter your Gitam mail"
              required
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
            onChange={(e) => setUser({...user, password: e.target.value})}
              required
              type="password"
              placeholder="Enter your Password"
            />
          </div>

          <div className="flex gap-1 justify-center">
            <p className="text-white">Do not have account? </p>
            <Link href="/auth/signup">
              <p className=" text-[#3D74FF]">Sign up</p>
            </Link>
          </div>

          <div className="bg-[#8E01FD]  hover:bg-blue-700 w-32 mx-auto text-center rounded-lg">
            <button
              onClick={handleSignin}
              type="submit"
              className=" text-white cursor-pointer p-2"
            >
              Sign in
            </button>
          </div>
        </form>
      </div>
    </main>
  );
};

export default page;
