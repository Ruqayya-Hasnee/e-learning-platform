"use client";

import React from "react";
import Link from "next/link";

function Navbar() {
  return (
    <div className="text-blue-900 flex justify-between items-center h-12 mx-35">
      <div className="font-bold">
        <Link href="/">E-Learning</Link>
      </div>
      <div className="flex gap-12 font-bold">
        <Link href="/">Home</Link>
        <Link href="/courses">Courses</Link>
        <Link href="/contact">Contact</Link>
      </div>
      <div className="flex gap-4">
        <Link href="/signup">
          <button className="border text-white bg-blue-900 rounded-3xl w-20">
            Sign Up
          </button>
        </Link>
        <Link href="/login">
          <button className="border text-white bg-blue-900 rounded-3xl w-20">
            Login
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
