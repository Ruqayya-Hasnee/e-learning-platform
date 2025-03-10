import React from "react";
import Link from "next/link";

function Login() {
  return (
    <div className="w-96 h-auto my-40 p-12 mx-auto bg-purple-600">
      <div className="bg-white rounded-xl p-6 items-center">
        <h1 className="text-center font-bold">Login</h1>
        <div className="flex flex-col p-4">
          <input
            type="email"
            placeholder="Enter your email"
            className="border m-4 p-1 rounded"
          />
          <input
            type="password"
            placeholder="Enter password"
            className="border m-4 p-1 rounded"
          />
          <button className="flex justify-center p-1 m-4 bg-purple-600 text-white text-center rounded-3xl">
            Login
          </button>
        </div>

        {/* Link to Signup */}
        <div className="mt-4 text-center">
          <p>
            Don't have an account?{" "}
            <Link href="/signup" className="text-purple-600">Sign up here</Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
