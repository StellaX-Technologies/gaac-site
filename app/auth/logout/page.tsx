"use client";

import axios from "axios";
import { useRouter } from "next/navigation";

import React from "react";

const page = () => {
  const router = useRouter();
  const logout = async () => {
    try {
      await axios.get("/api/logout");
      console.log("Logout successful");
      router.push("/");
    } catch (error: any) {
      console.log(error.message);
    }
  };
  return (
    <div className="flex justify-center items-center mt-10 ">
      <button className="bg-red-700 p-2 text-white" onClick={logout}>
        Log Out
      </button>
    </div>
  );
};

export default page;
