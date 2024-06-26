import Navbar from "@/app/Navbar";
import React from "react";
import BugForm from "./BugForm";

const page = () => {
  return (
    <>
      <Navbar />
      <div className="max-w-screen-xl mx-auto px-4">
        <h1 className="text-center text-5xl">Add New Bug</h1>
        <BugForm />
      </div>
    </>
  );
};

export default page;
