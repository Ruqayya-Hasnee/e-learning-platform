import React from "react";
import Link from "next/link";

function Login() {
  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100">
      <div className="p-4 w-96 bg-white rounded-xl items-center shadow-lg">
        <h1 className="text-center font-bold text-xl">Login</h1>
        <div className="flex flex-col">
          <input type="email" placeholder="Enter your email" />
          <input type="password" placeholder="Enter password" />
        </div>
        <button className="w-full mt-4 p-1.5 bg-purple-600 text-white text-center rounded-3xl">
          Login
        </button>

        {/* Link to Signup */}
        <div className="text-center mt-0.5">
          <p>
            Don't have an account?{" "}
            <Link href="/signup" className="text-purple-600">
              Sign up here
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
