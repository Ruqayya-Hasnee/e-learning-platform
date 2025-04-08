"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useAuth } from "@/app/context/AuthContext";
import { RoleType } from "@/types/user";

function Navbar() {
  const { user, logout, loading } = useAuth();
  const [menuOpen, setMenuOpen] = useState(false);

  if (loading) {
    return (
      <nav className="bg-white shadow-md">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          {/* Loading Indicator */}
          <div className="font-bold text-blue-900 text-lg">
            <Link href="/">E-Learning</Link>
          </div>
        </div>
      </nav>
    );
  }

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        {/* Logo */}
        <div className="font-bold text-blue-900 text-lg">
          <Link href="/">E-Learning</Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden p-2 rounded-lg text-gray-500 hover:bg-gray-100 focus:ring-2 focus:ring-gray-200"
          aria-label="Toggle Menu"
        >
          <svg
            className={`w-6 h-6 transition-transform ${
              menuOpen ? "rotate-90" : "rotate-0"
            }`}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>

        {/* Navbar Links - Desktop & Mobile */}
        <div
          className={`absolute md:static top-16 left-0 w-full md:w-auto bg-white md:bg-transparent md:flex items-center space-x-8 md:space-x-12 p-4 md:p-0 transition-all duration-300 ${
            menuOpen ? "block" : "hidden md:block"
          }`}
        >
          <div className="flex flex-col md:flex-row gap-4 md:gap-6 font-bold">
            <Link href="/" className="text-blue-900 hover:text-blue-600">
              Home
            </Link>
            <Link href="/about" className="text-blue-900 hover:text-blue-600">
              About
            </Link>
            <Link href="/courses" className="text-blue-900 hover:text-blue-600">
              Courses
            </Link>
            <Link href="/contact" className="text-blue-900 hover:text-blue-600">
              Contact
            </Link>
          </div>

          {/* Authentication Links */}
          <div className="flex flex-col md:flex-row gap-4">
            {user ? (
              <>
                <Link
                  href={
                    user?.role === RoleType.STUDENT
                      ? "/studentprofile"
                      : "/instructorprofile"
                  }
                  className="hover:text-blue-600"
                >
                  Profile
                </Link>
                <button
                  className="secondary hover:bg-blue-600 transition"
                  onClick={logout}
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link href="/signup">
                  <button className="secondary hover:bg-blue-600 transition">
                    Sign Up
                  </button>
                </Link>
                <Link href="/login">
                  <button className="secondary hover:bg-blue-500 hover:text-white transition">
                    Login
                  </button>
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
